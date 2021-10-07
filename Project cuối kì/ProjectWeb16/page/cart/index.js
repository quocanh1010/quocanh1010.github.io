let default_data = {
  id: 1,
  img: '../img/image 31.png',
  name: 'Áo Bóng Đá Argentina',
  price: '80.000đ',
  more:'Xem chi tiết >',
}
let data_cart_name = localStorage.getItem('product-name')
let data_cart_des = localStorage.getItem('product-des')
let data_cart_price = localStorage.getItem('product-price-discount')
let data_cart_image = localStorage.getItem('product-img')
let wrap_cart = $('#wrap-cart')
wrap_cart.append(`
<div class="product-image">
          <img src="${data_cart_image}">
        </div>
        <div class="product-details">
          <div class="product-title">${data_cart_name}</div>
          <p class="product-description">${data_cart_des}</p>
        </div>
        <div class="product-price">${data_cart_price}</div>
        <div class="product-quantity">
          <input type="number" value="1" min="1">
        </div>
        <div class="product-removal">
          <button class="remove-product">
            Xoá
          </button>
        </div>
        <div class="product-line-price">80.000</div>`)



/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
document.getElementsByClassName('checkout')[0].addEventListener('click',purchaseClicked)
  
function purchaseClicked() {
  alert('Cam on vi da mua hang')
}
    var options = {
      /*
          HTML Selector. You can pass value of name, id or class. 
          It will automatically detect exist elements for you.
          Example: 'myIdOrClass','#myId', '.myClass', 'myName'
          */
          province: 'ls_province',	
          district: 'ls_district',	
          ward: 'ls_ward',			
                    
          /*
          Define value for option tag. Valid option: id|name           
          */
          getValueBy: 'id',           
          
          //Placeholder text
          provinceText: 'Chọn tỉnh / thành phố',
          districtText: 'Chọn quận / huyện',
          districtNoText: 'Địa phương này không có quận / huyện',
          wardText: 'Chọn phường / xã',
          wardNoText: 'Địa phương này không có phường / xã',
          
          // Default value if no location exist
          emptyValue: " ",
          
          // Hide option where no local exist
          hideEmptyValueOption: true,
          
          // Hide place-holder option (first option)
          hidePlaceHolderOption: true,
          
          /*
          Include local level on option text as prefix
          Example: true = Quận Bình Thạnh | false = Bình Thạnh
          */
          provincePrefix: false,
          districtPrefix: true,
          wardPrefix: true,
          
          /*
          Include local level in option tag's attribute
          */
          levelAsAttribute: true,
          levelAttributeName: "data-level",
};


