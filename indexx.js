let thumbnails = document.getElementsByClassName("thumb");
let activeImages = document.getElementsByClassName("active");
let btnRight = document.getElementById("slideRight");
let btnLeft = document.getElementById("slideLeft");
let addBtn = document.getElementById("plus");
let subBtn = document.getElementById("min");
let area = document.getElementById("num");
let r = 0;
let cartBtn = document.getElementById("cartBTn");
let crtPrice = document.getElementById("crtPrice");
let crtQuantity = document.getElementById("crtQuantity");
let crtTotal = document.getElementById("crtTotal");
let rmvBTn = document.getElementById("rmvBtn");
let itemList = document.getElementById("itemsList");
let chartBtn = document.getElementById("chartBtn");
let cartDiv = document.getElementById("cartDiv");
let itemsNum = document.getElementById("items-num");
let valuePrice = document.getElementById("price");
let discription = document.getElementById("discription");
let oldprice = document.getElementById("oldprice");
let discount = document.getElementById("discount");
let value = document
        .getElementById("price")
        .innerHTML.slice(1, document.getElementById("price").innerHTML.length);

let prBtn = document.getElementById("prBtn");
function scrollLeft() {
  document.getElementById("slider").scrollLeft -= 180;
}
function scrollRight() {
  document.getElementById("slider").scrollLeft += 180;
}
let k = 0;
function imageActive() {
  if (activeImages.length > 0) {
    activeImages[0].classList.remove("active");
  }
  this.classList.add("active");
  let l = this.src.slice(73,74) - 1;
  document.getElementById("featured").src = this.src;
  k = k + 1;
  
  switchcase(l);
  /// pour modifier le contenu
}

//// pour ajouter la photo du produit sur le featured et sur le panier ( en progress)
for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", imageActive);
}
//// pour le scroll droit et gauche
function scrollLeft() {
  document.getElementById("slider").scrollLeft -= 180;
}
function scrollRight() {
  document.getElementById("slider").scrollLeft += 180;
}
btnLeft.onclick = scrollLeft;
btnRight.onclick = scrollRight;
/// pour caclculer le prix de l'item ;
r = 0;
function addition() {
  area.innerText = r + 1;
  r = r + 1;
}
function substract() {
  if (r > 0) {
    area.innerText = r - 1;
    r = r - 1;
  }
}
addBtn.onclick = addition;
subBtn.onclick = substract;
// adding to cart
var content = "";
/// create a new li element
total = 0;
function addList() {
  if (k < 1) {
    alert("please choose a product");
  } else if ((k) => 1) {
    if (r < 1) {
      alert("please choose a quantity");
    } else if ((r) => 1) {
      for (var i = 0; i < thumbnails.length; i++) {
        if (thumbnails[i].className != "thumb") {
          pic = thumbnails[i].src;
        }
      }

      let price = value * r;
      var li = document.createElement("li");
      li.className = "cart-row";
      content = `<div class="cart-colmun">
  <img
    class="cart-item-image"
    id="cart-featur"
    src="${pic}"
    
  />
  <span id="cartItem" class="cart-item-title"></span>
</div>
<span id="crtPrice" class="cart-colmun">$${value}</span>
<div class="cart-colmun">
  <span id="crtQuantity"class="cart-qunatity">${r}</span>
  <button class="rmvBtn" type="button">Remove</button>
</div>`;
      li.innerHTML = content;
      itemList.appendChild(li);
      r = 0;
      area.innerText = r;
      total = total + price;
      crtTotal.innerText = `$${total}.00`;
      itemsNum.innerText =
        document.getElementsByClassName("cart-row").length - 1;
      k = 0;
      if (activeImages.length > 0) {
        activeImages[0].classList.remove("active");
      }
    }
  }
}
chartBtn.onclick = random;
cartBtn.onclick = addList;
//aafichage de nombre d'item sur la cart:
itemsNum.innerText = document.getElementsByClassName("cart-row").length - 1;
///to delete
let tdlprice;
function removeITem(e) {
  if (e.target.classList.contains("rmvBtn")) {
    if (confirm("Are you sure ?")) {
      var delta = e.target.parentElement.parentElement;
      itemList.removeChild(delta);
      var dlprice = e.target.parentElement.parentElement.innerText.slice(9, 12);
      var dltdQ = e.target.parentElement.innerText.slice(3, 5);
      tdlprice = dlprice * dltdQ;
      total = total - tdlprice;
      crtTotal.innerText = `$${total}.00`;
      itemsNum.innerText =
        document.getElementsByClassName("cart-row").length - 1;
    }
  }
}
function reset() {
  if (total < 1) {
    alert("please add items to your cart");
  } else if (total > 0) {
    alert("thank you for you purchase");
    r = 0;
    total = 0;
    itemList.innerHTML = "";
    crtTotal.innerText = "";
    itemsNum.innerText = document.getElementsByClassName("cart-row").length - 1;
    crtTotal.innerText = `$${total}`;
    hidecart();
  }
}
itemList.onclick = removeITem;
prBtn.onclick = reset;
/// navigation bar
var btn = document.getElementById("navbtn");
var navbar = document.getElementById("navbarlinks");
function random() {
  navbar.classList.toggle("random");
  chang();
}
function chang() {
  btn.classList.toggle("url");
}
function outside() {
  navbar.classList.remove("random");
  btn.classList.remove("url");
}
btn.onclick = random;
for (var i = 0; i < 4; i++) {
  var fouzi = document.querySelectorAll(".a")[i];
  fouzi.addEventListener("click", random);
}
document.onclick = function (e) {
  if (e.target.id !== "navbtn" && e.target.id !== "navbarlinks") {
    outside();
  }
};
function hidecart() {
  cartDiv.classList.toggle("hid");
}
chartBtn.onclick = hidecart;
cartBtn.onclick = addList;
crtTotal.innerText = `$${total}.00`;
/// switch case function

let columnDiv = document.getElementById("columnDiv");
let productContent = "";
function switchcase(l) {
  switch (l) {
    case 0:
      valuePrice.innerHTML = `$125.00`;
      value = document
        .getElementById("price")
        .innerHTML.slice(1, document.getElementById("price").innerHTML.length);
      discount.innerHTML = `50%`;
      oldprice.innerHTML = `$250.00`;
      discription.innerHTML = `These low-profile sneakers are your perfect casual wear
      companion. Featuring a durable rubber outer sale, they'll
      withstand everything the weather can offer.
      
      `;
      break;
    case 1:
      valuePrice.innerHTML = `$240.00`;
      value = document
        .getElementById("price")
        .innerHTML.slice(1, document.getElementById("price").innerHTML.length);
      discount.innerHTML = `20%`;
      oldprice.innerHTML = `$300.00`;
      discription.innerHTML = `for today's sneaker comfort is a fitness shoe that allows the sportsperson to listen to music or talk radio and more with these verstaile athletic shoes perfect for activities such as running, walking, and other sports`;
      break;
    case 2:
      valuePrice.innerHTML = `$80.00`;
      value = document
        .getElementById("price")
        .innerHTML.slice(1, document.getElementById("price").innerHTML.length);
      discount.innerHTML = `20%`;
      oldprice.innerHTML = `$100.00`;
      discription.innerHTML = `for today's sneaker comfort is a fitness shoe that allows the sportsperson to listen to music or talk radio and more with these verstaile athletic shoes perfect for activities such as running, walking, and other sports`;
      break;
    case 3:
      valuePrice.innerHTML = `$150.00`;
      value = document
        .getElementById("price")
        .innerHTML.slice(1, document.getElementById("price").innerHTML.length);
      discount.innerHTML = `25%`;
      oldprice.innerHTML = `$200.00`;
      discription.innerHTML = `for today's sneaker comfort is a fitness shoe that allows the sportsperson to listen to music or talk radio and more with these verstaile athletic shoes perfect for activities such as running, walking, and other sports`;
      break;

    case 4:
      valuePrice.innerHTML = `$170.00`;
      value = document
        .getElementById("price")
        .innerHTML.slice(1, document.getElementById("price").innerHTML.length);
      discount.innerHTML = `300%`;
      oldprice.innerHTML = `$200.00`;
      discription.innerHTML = `Lace fastening Plain colored Round cap Leather Suede Item no Size & fit Heel height: Flat heel (0-3 cm) Material & care instructions Upper material: Textile Cove.`;
      break;
    case 5:
      valuePrice.innerHTML = `$120.00`;
      value = document
        .getElementById("price")
        .innerHTML.slice(1, document.getElementById("price").innerHTML.length);
      discount.innerHTML = `0%`;
      oldprice.innerHTML = `$120.00`;
      discription.innerHTML = `With a brand history stretching back over 20 years, Sneaker originals draw inspiration from street culture and retro styles to provide fresh vintage inspired menswear. the Sneaker originals range incorporates everything from the brands most iconic trainers to new vintage inspired clothes.
      `;
      break;
    case 6:
      valuePrice.innerHTML = `$240.00`;
      value = document
        .getElementById("price")
        .innerHTML.slice(1, document.getElementById("price").innerHTML.length);
      discount.innerHTML = `40%`;
      oldprice.innerHTML = `$400.00`;
      discription.innerHTML = `With a brand history stretching back over 20 years, Sneaker originals draw inspiration from street culture and retro styles to provide fresh vintage inspired menswear. the Sneaker originals range incorporates everything from the brands most iconic trainers to new vintage inspired clothes.
      `;
      break;
  }
}
