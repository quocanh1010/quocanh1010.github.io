
let products_popular = [
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '24,390,000₫',
        newPrice: '23,990,000₫'
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '24,390,000₫',
        newPrice: '23,990,000₫'
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '24,390,000₫',
        newPrice: '23,990,000₫'
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '24,390,000₫',
        newPrice: '23,990,000₫'
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '24,390,000₫',
        newPrice: '23,990,000₫'
    },
]
let business_product = [
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '54,390,000₫',
        newPrice: '53,990,000₫'
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '54,390,000₫',
        newPrice: '53,990,000₫'
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '54,390,000₫',
        newPrice: '53,990,000₫'
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '54,390,000₫',
        newPrice: '53,990,000₫'
    },
    {
        id: 1,
        img: './img/img-cate.png',
        name: 'Laptop ASUS TUF Gaming F15 FX506HC HN002T',
        des: 'this is des',
        oldPrice: '54,390,000₫',
        newPrice: '53,990,000₫'
    },
]


let category = $('#category')

const showTitle = (title, idShow) => {
    category.append(`
 
    <div id="all-product">
    <div class="name-category">
        ${title}
    </div>
    <div class="go-to-all">
        <span>Browse all products</span>
        <span><i class="fal fa-angle-right"></i></span>
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
showTitle('Most popular', 'show-item-1')




const showProduct = (product, idShow) => {
    let showItem = $(`#${idShow}`)
    product.forEach(item => {
        showItem.append(`
                <div class="col-xl-3 col-sm-6 col-md-3 width-col-cate">
                <div class="item-card">
                    <div class="image">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="description">${item.des}</div>
                    <div class="name">${item.name}</div>
                    <div class="new-price">${item.oldPrice}</div>
                    <div class="old-price">${item.newPrice}</div>
                </div>
            </div>
        `)
    })
}

showProduct(products_popular, 'show-item-1')

showTitle('Business laptop', 'show-item-2')
showProduct(business_product, 'show-item-2')



