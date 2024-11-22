
function eliminarDelCarrito(producto) {
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    
    cart = cart.filter(item => item.Product !== producto);
  
   
    localStorage.setItem("cart", JSON.stringify(cart));
  
    mostrarCarrito(); 
  }


function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("cart"));
    let costoTotal = 0
    let textoenHTML = "";
  
    for (let item of carrito) {
      textoenHTML +=
        `<div class="item"><img class="imgcart" src="` + item.Product + `" alt="` + item.Product + `">
          <div>
            <h4 class="tituloItem">` + item.Description+ `</h4>
          </div>
          <div>
          <p class="precioItem"> $`  + item.Price + `</p>
          </div>
          <button onclick="eliminarDelCarrito('${item.Product}')">-<i class="fa-solid fa-cart-arrow-down"></i>-</button>
        </div>`;
        costoTotal += item.Price
    }
    document.getElementById("cart").innerHTML = textoenHTML;
    document.getElementById("cost").innerHTML = "Costo total: $" + costoTotal;
  }




  document.addEventListener("DOMContentLoaded", function () {
    mostrarCarrito();
  })
