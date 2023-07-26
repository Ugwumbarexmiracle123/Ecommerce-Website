const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

function updateItemToDelete (productId) {
    document.getElementById('deleteId').value = productId;
}
  
async function deleteItem() {
    const productId = document.getElementById('deleteId').value;
  
    const resp = await fetch(`http://localhost:7000/product/${productId}`, {
      method: "DELETE"
    });
  
    const data = await resp.json();
  
    if (resp.status === 200) {
      location.reload();
    } else {
      alert(data.message);
    }
}
  
async function addProduct() {
    const name = document.querySelector("input[name='name']").value;
    const price = document.querySelector("input[name='price']").value;
    const rating = document.querySelector("input[name='rating']").value;
    const image = document.querySelector("input[name='image']").value;
  
    const resp = await fetch('http://localhost:7000/product', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ 
        name,
        price: Number(price),
        rating: String(rating),
        image
      })
    })
  
    const data = await resp.json()
    if (resp.status == 200) {
      location.reload()
    } else {
      alert(data.message);
    }
  }

  async function addToCart (productId) {
  const resp = await fetch(`${location.origin}/cart`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ productId })
  })

  const data = await resp.json();

  if (resp.status === 200) {
    let cartCount = document.getElementById('cart-count');

    // increase by 1
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
  } else {
    alert(data.message);
  }

  function delElement(productId){
    
  }

}
