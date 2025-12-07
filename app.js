
// Mock inventory and essential list
const mockInventory = [
  { id:1, name:'Milk', qty:1, expiry:'2025-12-10' },
  { id:2, name:'Eggs', qty:12, expiry:'2025-12-14' },
  { id:3, name:'Tomato', qty:2, expiry:'2025-12-08' },
  { id:4, name:'Cheese', qty:0, expiry:'2025-11-30' },
  { id:5, name:'Butter', qty:1, expiry:'2025-12-20' }
];

const essentialList = ['Milk','Eggs','Cheese','Bread','Butter','Yogurt'];

let shoppingList = [];

function renderInventory(){
  const el = document.getElementById('inventory');
  el.innerHTML = '';
  mockInventory.forEach(item=>{
    const div = document.createElement('div');
    div.className = 'inventory-item';
    div.innerHTML = `<h3>${item.name}</h3>
      <div>Quantity: <strong>${item.qty}</strong></div>
      <div>Expiry: <small>${item.expiry}</small></div>
      ${item.qty===0 ? '<div class="badge">Out of stock</div>':''}
      <div style="margin-top:8px;"><button onclick="addToShopping('${item.name}')">Add to shopping</button></div>
    `;
    el.appendChild(div);
  });
}

function detectShortages(){
  const shortages = [];
  essentialList.forEach(name=>{
    const found = mockInventory.find(i=>i.name.toLowerCase()===name.toLowerCase());
    if(!found || found.qty===0) shortages.push(name);
  });
  return shortages;
}

function renderShortages(){
  const el = document.getElementById('shortagesList');
  const list = detectShortages();
  el.innerHTML = '';
  if(list.length===0){ el.innerHTML = '<div class="card"><p>No shortages detected ✅</p></div>'; return;}
  list.forEach(name=>{
    const d = document.createElement('div');
    d.className = 'card';
    d.style.marginBottom='8px';
    d.innerHTML = `<strong>${name}</strong> — Missing from fridge
      <div style="margin-top:8px;"><button onclick="addToShopping('${name}')">Add to shopping</button></div>`;
    el.appendChild(d);
  });
}

function renderShopping(){
  const el = document.getElementById('shoppingList');
  el.innerHTML = '';
  if(shoppingList.length===0){ el.innerHTML = '<div class="card"><p>Shopping list is empty.</p></div>'; return;}
  shoppingList.forEach((it,idx)=>{
    const d = document.createElement('div');
    d.className='card';
    d.style.marginBottom='8px';
    d.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center">
      <div>${it}</div>
      <div><button onclick="removeFromShopping(${idx})">Remove</button></div>
    </div>`;
    el.appendChild(d);
  });
}

function addToShopping(name){
  if(!shoppingList.includes(name)){
    shoppingList.push(name);
    renderShopping();
    alert(name + ' added to shopping list (mock).');
  } else {
    alert(name + ' already in list.');
  }
}

function removeFromShopping(idx){
  shoppingList.splice(idx,1);
  renderShopping();
}

function switchPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.add('hidden'));
  document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
  if(name==='home') document.getElementById('page-home').classList.remove('hidden');
  if(name==='shortages') document.getElementById('page-shortages').classList.remove('hidden');
  if(name==='shopping') document.getElementById('page-shopping').classList.remove('hidden');
  document.querySelector(`nav button[data-page="${name}"]`).classList.add('active');
}

document.getElementById('loginBtn').addEventListener('click', ()=>{
  // mock login: show home
  switchPage('home');
  renderInventory();
  renderShortages();
  renderShopping();
});

document.getElementById('nav').addEventListener('click', (e)=>{
  if(e.target.dataset && e.target.dataset.page){
    switchPage(e.target.dataset.page);
    if(e.target.dataset.page==='home') renderInventory();
    if(e.target.dataset.page==='shortages') renderShortages();
    if(e.target.dataset.page==='shopping') renderShopping();
  }
});

document.getElementById('clearShopping').addEventListener('click', ()=>{
  shoppingList = [];
  renderShopping();
});

// initialize on load: show login
switchPage('login');
