
let products_popular = [
    {
        id: 1,
        img: '../img/image 31.png',
        name: 'Áo Bóng Đá Argentina',
        price: '80.000đ',
        more:'Xem chi tiết >',
        des:'Đội tuyển bóng đá quốc gia Argentina là đội tuyển bóng đá thuộc bảo hộ của Hiệp hội bóng đá Argentina và đại diện cho Argentina trên bình diện quốc tế. Argentina đã 2 lần vô địch thế giới vào các năm 1978 và 1986 cùng 15 lần vô địch Nam Mỹ',
    },
    {
        id: 2,
        img: '../img/image 30.png',
        name: 'Áo Bóng Đá Ý',
        price: '80.000đ',
        more:'Xem chi tiết >',
        des:'Đội tuyển bóng đá quốc gia Ý là đội tuyển của Liên đoàn bóng đá Ý và đại diện Ý trên bình diện quốc tế. Ý là đội bóng giàu thành tích thứ 3 trong lịch sử World Cup sau Brazil và Đức với 4 chức vô địch, 2 lần về nhì và 1 lần về thứ 3'
    },
    {
        id: 3,
        img: '../img/image 29.png',
        name: 'Áo Bóng Đá Ý',
        price: '80.000đ',
        more:'Xem chi tiết >',
        des:'Đội tuyển bóng đá quốc gia Ý là đội tuyển của Liên đoàn bóng đá Ý và đại diện Ý trên bình diện quốc tế. Ý là đội bóng giàu thành tích thứ 3 trong lịch sử World Cup sau Brazil và Đức với 4 chức vô địch, 2 lần về nhì và 1 lần về thứ 3'
    },
    {
        id: 4,
        img: '../img/image 28.png',
        name: 'Áo Bóng Đá Argentina',
        price: '80.000đ',
        more:'Xem chi tiết >',
        des:'Đội tuyển bóng đá quốc gia Argentina là đội tuyển bóng đá thuộc bảo hộ của Hiệp hội bóng đá Argentina và đại diện cho Argentina trên bình diện quốc tế. Argentina đã 2 lần vô địch thế giới vào các năm 1978 và 1986 cùng 15 lần vô địch Nam Mỹ',
    },
    {
        id: 5,
        img: '../img/image 31.png',
        name: 'Áo Bóng Đá Pháp',
        price: '80.000đ',
        more:'Xem chi tiết >',
        des:'Đội tuyển bóng đá quốc gia Pháp là đội bóng đá đại diện Pháp tham dự các giải đấu quốc tế và nằm trong số những đội tuyển đã vô địch thế giới, với 2 lần vào các năm 1998 và 2018 bên cạnh hai lần vô địch châu Âu vào các năm 1984 và 2000'
    },
]
let business_product = [
    {
        id: 6,
        img: '../img/image 33.png',
        name: 'Áo Bóng Đá Tottenham',
        price: '80.000đ',
        more:'Xem chi tiết >',
        des:'Câu lạc bộ bóng đá Tottenham Hotspur là một câu lạc bộ bóng đá chuyên nghiệp của Anh có trụ sở tại Luân Đôn, thủ đô Vương quốc Liên hiệp Anh và Bắc Ireland. Sân nhà của họ kể từ tháng 4 năm 2019 là Sân vận động Tottenham Hotspur thay thế cho White Hart Lane đã bị phá dỡ trước đó'
    },
    {
        id: 7,
        img: '../img/image 35.png',
        name: 'Áo Bóng Đá MU',
        price: '80.000đ',
        more:'Xem chi tiết >',
        des:'Câu lạc bộ bóng đá Manchester United là một câu lạc bộ bóng đá chuyên nghiệp có trụ sở tại Old Trafford, Đại Manchester, Anh. Câu lạc bộ đang chơi tại Giải bóng đá Ngoại hạng Anh, giải đấu hàng đầu trong hệ thống bóng đá Anh'
    },
    {
        id: 8,
        img: '../img/image 37.png',
        name: 'Áo Bóng Đá B.V.B',
        price: '80.000đ',
        more:'Xem chi tiết >',
        des:'BV Borussia Dortmund là một câu lạc bộ thể thao đóng ở Dortmund, phía bắc sông Rhine và được biết đến như một trong những đội bóng nổi tiếng và thành công nhất nước Đức cùng với Bayern Munich, Hamburg SV và Borussia Mönchengladbach'
    },
    {
        id: 9,
        img: '../img/image 33.png',
        name: 'Áo Bóng Đá Tot',
        price: '80.000đ',
        more:'Xem chi tiết >',
        des:'Câu lạc bộ bóng đá Tottenham Hotspur là một câu lạc bộ bóng đá chuyên nghiệp của Anh có trụ sở tại Luân Đôn, thủ đô Vương quốc Liên hiệp Anh và Bắc Ireland. Sân nhà của họ kể từ tháng 4 năm 2019 là Sân vận động Tottenham Hotspur thay thế cho White Hart Lane đã bị phá dỡ trước đó'
    },
    {
        id: 10,
        img: '../img/image 39.png',
        name: 'Áo Bóng Đá B.V.B',
        price: '80.000đ',
        more:'Xem chi tiết >',
        des:'BV Borussia Dortmund là một câu lạc bộ thể thao đóng ở Dortmund, phía bắc sông Rhine và được biết đến như một trong những đội bóng nổi tiếng và thành công nhất nước Đức cùng với Bayern Munich, Hamburg SV và Borussia Mönchengladbach'
    },
]


let category = $('#category')

const showTitle = (title, idShow) => {
    category.append(`
    <div class="gg"></div>
    
    <div id="all-product">
    <div class="name-category">
        ${title}
    </div>
    </div>
    
    <div class="show-item">
    <div class="container">
        <div class="row" id="${idShow}">
        </div>
    </div>

    </div>
`)
}
showTitle('Áo Đội Tuyển', 'show-item-1')

const showProduct = (product, idShow, name) => {
    let showItem = $(`#${idShow}`)
    product.forEach((item, index) => {
        showItem.append(
            `
                <div class="col-xl-3 col-sm-6 col-md-4 col-lg-4 width-col-cate">
               
                    <div class="item-card">
                    <div class="image">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="name">${item.name}</div>
                    <div class="price">${item.price}</div>
                    <div class="more">${item.more}</div>
                    <div class="des">${item.des}</div>
                </div>
                

            </div>
        `
        )
    })
}

showProduct(products_popular, 'show-item-1', 'products_popular')

showTitle('Áo CLB', 'show-item-2')
showProduct(business_product, 'show-item-2', 'business_product')


$('.more').click(function() {    

    let name = this.parentElement.getElementsByClassName("name")[0].textContent;
    localStorage.setItem('name', name)

    let price = this.parentElement.getElementsByClassName("price")[0].textContent;
    localStorage.setItem('price', price)

    let des = this.parentElement.getElementsByClassName("des")[0].textContent;
    localStorage.setItem('des', des)

    let image = this.parentElement.getElementsByClassName("image")[0].children[0].src;
    localStorage.setItem('img', image)

    location.replace('https://quocanh1010.github.io/Project%20cu%E1%BB%91i%20k%C3%AC/ProjectWeb16/page/detail/index.html')
})