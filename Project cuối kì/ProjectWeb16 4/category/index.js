
let products_popular = [
    {
        id: 1,
        img: '../img/image 31.png',
        name: 'Áo Bóng Đá Argentina',
        price: '80.000đ',
        more:'Xem chi tiết >',
    },
    {
        id: 2,
        img: '../img/image 30.png',
        name: 'Áo Bóng Đá Ý',
        price: '80.000đ',
        more:'Xem chi tiết >',
    },
    {
        id: 3,
        img: '../img/image 29.png',
        name: 'Áo Bóng Đá Ý',
        price: '80.000đ',
        more:'Xem chi tiết >',
    },
    {
        id: 4,
        img: '../img/image 28.png',
        name: 'Áo Bóng Đá Argentina',
        price: '80.000đ',
        more:'Xem chi tiết >',
    },
    {
        id: 5,
        img: '../img/image 31.png',
        name: 'Áo Bóng Đá Pháp',
        price: '80.000đ',
        more:'Xem chi tiết >',
    },
]
let business_product = [
    {
        id: 6,
        img: '../img/image 33.png',
        name: 'Áo Bóng Đá Tottenham',
        price: '80.000đ',
        more:'Xem chi tiết >',
    },
    {
        id: 7,
        img: '../img/image 35.png',
        name: 'Áo Bóng Đá MU',
        price: '80.000đ',
        more:'Xem chi tiết >',
    },
    {
        id: 8,
        img: '../img/image 37.png',
        name: 'Áo Bóng Đá B.V.B',
        price: '80.000đ',
        more:'Xem chi tiết >',
    },
    {
        id: 9,
        img: '../img/image 33.png',
        name: 'Áo Bóng Đá Tot',
        price: '80.000đ',
        more:'Xem chi tiết >',
    },
    {
        id: 10,
        img: '../img/image 39.png',
        name: 'Áo Bóng Đá B.V.B',
        price: '80.000đ',
        more:'Xem chi tiết >',
    },
]


let category = $('#category')

const showTitle = (title, idShow) => {
    category.append(`
    
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

const setLocal = (index, product) => {
    
    debugger
    let item = product[index]
    localStorage.setItem('detail-data', JSON.stringify(item))
    location.replace('file:///Users/buiquocanh/Documents/GitHub/quocanh1010.github.io/Project%20cuo%CC%82%CC%81i%20ki%CC%80/ProjectWeb16%204/page/detail/index.html')

}

const showProduct = (product, idShow, name) => {
    let showItem = $(`#${idShow}`)
    product.forEach((item, index) => {
        showItem.append(
            `
                <div class="col-xl-3 col-sm-6 col-md-3 width-col-cate">
               
                    <div class="item-card">
                    <div class="image">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="name">${item.name}</div>
                    <div class="price">${item.price}</div>
                    <div  onclick="setLocal('${index}', '${name}')" class="more">${item.more}</div>
                </div>
                

            </div>
        `
        )
    })
}

showProduct(products_popular, 'show-item-1', 'products_popular')

showTitle('Áo CLB', 'show-item-2')
showProduct(business_product, 'show-item-2', 'business_product')

