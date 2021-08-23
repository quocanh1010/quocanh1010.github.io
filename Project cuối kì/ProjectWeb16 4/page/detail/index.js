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
<div class="row">
<div class="col-12 col-lg-6 col-sm-12">
    <div class="left-detail">
        <img src="./img/image 31.png" alt="">
        <div>Click Để Phóng To Ảnh</div>
    </div>
</div>
    <div class="col-12 col-lg-6 col-sm-12">
        <div class="right-detail">
            <div class="name-product">${data_detail.name}</div>
                <div class="stars">
                <div><i class="far fa-star"></i></div>
                <div><i class="far fa-star"></i></div>
                <div><i class="far fa-star"></i></div>
                <div><i class="far fa-star"></i></div>
                <div><i class="far fa-star"></i></div>
                <div>(0 đánh giá)</div>
                  </div>
            <div class="price">${data_detail.price}</div>
        <div class="size">
            <div class="size-items" >Size M</div>
            <div  class="size-items" >Size L</div>
            <div  class="size-items" >Size XL</div>
        </div>
        <div class="clickbuy">Mua ngay</div>
        <div style="margin-top: 30px;">Tư Vấn Mua Hàng:<i class="fas fa-phone-alt"></i> 098xxxxxx</div>
            
        </div>
    </div>      

</div>
</div> 
`)
