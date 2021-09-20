let default_data = {
    id: 1,
    img: '../img/image 31.png',
    name: 'Áo Bóng Đá Argentina',
    price: '80.000đ',
    more:'Xem chi tiết >',
}

let data_detail = JSON.parse(localStorage.getItem('detail-data')) || default_data
let wrap_detail = $('#wrap-detail')

wrap_detail.append(`
<div class="container">
<div class="heading-section">
</div>
<div class="row">
  <div class="col-md-6">
          <div class="left-detail">
          <div class="container">
          <input type="checkbox" id="zoomCheck">
          <label for="zoomCheck">
          <img src="./img/image 31.png" alt="">
          </label>
        </div>
              <div style="margin-left:20px;">
              <i class="fas fa-search-plus"></i>Click Vào Ảnh Để Phóng To</div>
          </div>
  </div>
  <div class="col-md-6">
    <div class="product-dtl">
      <div class="product-info">
        <div class="product-name">${data_detail.name}</div>
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
        <div class="product-price-discount"><span>${data_detail.price}</span><span class="line-through">120.000đ</span></div>
      </div>
      <p>Đội tuyển bóng đá quốc gia Argentina là đội tuyển bóng đá thuộc bảo hộ của Hiệp hội bóng đá Argentina và đại diện cho Argentina trên bình diện quốc tế. Argentina đã 2 lần vô địch thế giới vào các năm 1978 và 1986 cùng 15 lần vô địch Nam Mỹ</p>
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
        <label for="size">Quantity</label>
        <form action="#" class="display-flex">
        <div class="qtyminus">-</div>
        <input type="text" name="quantity" value="1" class="qty">
        <div class="qtyplus">+</div>
    </form>
    <a href="#"  onclick="myFunction()" class="round-black-btn">Add to Cart</a>
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
function myFunction() {
  location.replace("https://quocanh1010.github.io/Project%20cu%E1%BB%91i%20k%C3%AC/ProjectWeb16%204/page/cart/index.html")
}


