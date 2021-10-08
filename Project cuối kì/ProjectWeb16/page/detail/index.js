let default_data = {
  id: 1,
  img: '../img/image 31.png',
  name: 'Áo Bóng Đá Argentina',
  price: '80.000đ',
  more:'Xem chi tiết >',
}
let data_detail_name = localStorage.getItem('name') || default_data
let data_detail_des = localStorage.getItem('des') || default_data
let data_detail_price = localStorage.getItem('price') || default_data
let data_detail_image = localStorage.getItem('img') || default_data
let wrap_detail = $('#wrap-detail')


wrap_detail.append(`
<div class="container">
<div class="gg"></div>
<div class="row">
<div class="col-md-6">
        <div class="left-detail">
        <div class="container">
        <input type="checkbox" id="zoomCheck">
        <label for="zoomCheck">
        <img class="product-img"src="${data_detail_image}" alt="" >
        </label>
      </div>
            <div style="margin-left:20px;">
            <i class="fas fa-search-plus"></i>Click Vào Ảnh Để Phóng To</div>
        </div>
</div>
<div class="col-md-6">
  <div class="product-dtl">
    <div class="product-info">
      <div class="product-name">${data_detail_name}</div>
      <div class="reviews-counter">
    <div class="rate">
        <input type="radio" id="star5" name="rate" value="5" checked />
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name="rate" value="4" checked />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name="rate" value="3" checked />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="text">1 star</label>
      </div>
    <span>3 Reviews</span>
  </div>
      <div class="product-price-discount"><span>${data_detail_price}</span><span class="line-through"></span></div>
    </div>
    <p class="product-des">${data_detail_des}</p>
    <div class="row">
      <div class="col-md-6">
        <label for="size">Size</label>
    <select id="size" name="size" class="form-control">
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
    </select>
      </div>
    </div>
    <div class="product-count">
      <label for="size">Số Lượng</label>
      <form action="#" class="display-flex">
      <div class="qtyminus">-</div>
      <input type="text" name="quantity" value="1" class="qty">
      <div class="qtyplus">+</div>
  </form>
  <a href="#" class="round-black-btn">Mua Ngay</a>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
`)
$('.round-black-btn').click(function() {    

  let productName = document.getElementsByClassName("product-name")[0].textContent;
  localStorage.setItem('product-name', productName)

  let productPriceDiscount = document.getElementsByClassName("product-price-discount")[0].textContent;
  localStorage.setItem('product-price-discount', productPriceDiscount)

  let productDes = document.getElementsByClassName("product-des")[0].textContent;
  localStorage.setItem('product-des', productDes)

  let productImg = document.getElementsByClassName("product-img")[0].src;
  localStorage.setItem('product-img', productImg)

  location.replace('https://quocanh1010.github.io/Project%20cu%E1%BB%91i%20k%C3%AC/ProjectWeb16/page/cart/index.html')
})