

const listadoImg = [
  { "Category": "Ropa", "Sub Category": "Remeras", "Product": "https://i.postimg.cc/XYM3F293/Remera1.jpg", "Description":"Remera Roja", "Price":100 },
  { "Category": "Ropa", "Sub Category": "Remeras", "Product": "https://i.postimg.cc/g2vpKvKh/Remera2.jpg", "Description":"Remera Naranja","Price":100 },
  { "Category": "Ropa", "Sub Category": "Remeras", "Product": "https://i.postimg.cc/JhMLYGT2/Remera3.jpg", "Description":"Remera Rosada", "Price":100  },
  { "Category": "Ropa", "Sub Category": "Remeras", "Product": "https://i.postimg.cc/yNjzMstY/Remera4.jpg", "Description":"Remera Verde", "Price":100  },

  { "Category": "Ropa", "Sub Category": "Pantalones", "Product": "https://i.postimg.cc/Y92t0hYW/Pantalon1.jpg","Description":"Pantalon Jean", "Price":200  },
  { "Category": "Ropa", "Sub Category": "Pantalones", "Product": "https://i.postimg.cc/XvkVnwGW/Pantalon2.jpg","Description":"Pantalon Rojo", "Price":200  },
  { "Category": "Ropa", "Sub Category": "Pantalones", "Product": "https://i.postimg.cc/0QtPwP0H/Pantalon3.jpg","Description":"Pantalon Rojo", "Price":150  },

  { "Category": "Ropa", "Sub Category": "Ropa Interior", "Product": "https://i.postimg.cc/hjGqgNR8/Ropa-Interior1.jpg","Description":"Boxer", "Price":50  },
  { "Category": "Ropa", "Sub Category": "Ropa Interior", "Product": "https://i.postimg.cc/G2SnpzbW/Ropa-Interior2.jpg","Description":"Bikini", "Price":50  },
  { "Category": "Ropa", "Sub Category": "Ropa Interior", "Product": "https://i.postimg.cc/tJZQnPTY/Ropa-Interior3.jpg","Description":"Bikini", "Price":50  },

  { "Category": "bijouterie", "Sub Category": "Cadenas", "Product": "https://i.postimg.cc/m2KZjZfv/Cadena1.jpg","Description":"Cadena", "Price":550  },
  { "Category": "bijouterie", "Sub Category": "Cadenas", "Product": "https://i.postimg.cc/7Y5YSGc1/Cadena2.jpg","Description":"Cadena", "Price":650  },

  { "Category": "bijouterie", "Sub Category": "Anillos", "Product": "https://i.postimg.cc/2jcSqFH8/Anillo1.jpg","Description":"Anillo", "Price":750 },
  { "Category": "bijouterie", "Sub Category": "Anillos", "Product": "https://i.postimg.cc/NFzsWByr/Anillo2.jpg","Description":"Anillo", "Price":850 },

  { "Category": "bijouterie", "Sub Category": "Pulseras", "Product": "https://i.postimg.cc/d3LvRpWQ/Pulsera1.jpg","Description":"Pulsera", "Price":750 },
  { "Category": "bijouterie", "Sub Category": "Pulseras", "Product": "https://i.postimg.cc/d3pF56X2/Pulsera2.jpg","Description":"Pulsera", "Price":850 },
  { "Category": "bijouterie", "Sub Category": "Pulseras", "Product": "https://i.postimg.cc/QNyjNNtF/Pulsera3.jpg","Description":"Pulsera", "Price":750 },
  { "Category": "bijouterie", "Sub Category": "Pulseras", "Product": "https://i.postimg.cc/ZKv4WkBV/Pulsera4.jpg","Description":"Pulsera", "Price":850 },




];

let cart = [];

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

function toggleMenuQuit() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.remove('active');
}

    
    function añadirAlCarrito(producto,description,price){
      let articulo = {}
      articulo.Product = producto
      articulo.Description = description
      articulo.Price = price
    
      if (localStorage.getItem("cart")!=null){
        cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(articulo);
        localStorage.setItem("cart",JSON.stringify(cart));
        
      }else{
        cart.push(articulo);
        localStorage.setItem("cart",JSON.stringify(cart));
    
    }}

function CargarProductos(lista) {
  let textoenHTML = "";

  for (let item of lista) {
    textoenHTML +=
      `<div class="item"><img src="`+ item.Product + `" alt="` + item.Product + `">
        <div>
          <h4 class="tituloItem">` + item.Description+ `</h4>
        </div>
        <div>
        <p class="precioItem"> $`  + item.Price + `</p>
        </div>
        <div>
        <button onclick="añadirAlCarrito('${item.Product}', '${item.Description}', ${item.Price})">-
        <i class="fa-solid fa-cart-plus"></i>
       - </button>
        </div>
      </div>`;
  }
  document.getElementById("productos").innerHTML = textoenHTML;
}


document.addEventListener("DOMContentLoaded", function () {
  CargarProductos(listadoImg);
})
