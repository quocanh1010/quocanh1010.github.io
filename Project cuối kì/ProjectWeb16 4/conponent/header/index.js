let header = $('#header')

header.append(`
<div id="info-user">

<div class="left">
    <i id="toogle-menu-ipad" class="fal fa-bars toogle-menu-ipad"></i>
    <div class="logo">
        <img src="./img/image 46.png" alt="">
        
    </div>

    
    <div id="main-menu">
        <ul class="wrap-ul">
            <li class="item-menu"><i class="fas fa-home"></i></li>
            <li class="item-menu">Mới Nhất</li>
            <li class="item-menu">Chuyển Nhượng</li>
            <li class="item-menu">Anh</li>
            <li class="item-menu">TBN</li>
            <li class="item-menu">Ý</li>
            <li class="item-menu">Đức</li>
            <li class="item-menu">Hậu Trường</li>
            <li class="item-menu">Photo</li>
            <li class="item-menu"><div onclick="myFunction()">Sản Phẩm</div></li>
        </ul>
    </div>
    
</div>

<div class="right">


    <div class="search-input">
        
        <input type="text" placeholder="Tìm kiếm....">
        <button type="button" class="btn btn-danger"><i class="far fa-search"></i></button>
    </div>
</div>
`)

let isOpen = false
let mainMenu = $('#main-menu')
let togleMenuIpad = $('#toogle-menu-ipad')

togleMenuIpad.click((event)=>{
    // show menu
    if(!isOpen) {
        // show menu
        mainMenu.animate({
            left: 0,
        },'slow');
        // change icon
        togleMenuIpad.removeClass( "fa-bars" ).addClass( "fa-times" )
        isOpen = true
    } else {
        mainMenu.animate({
            left: '-100%',
        },'slow');
        togleMenuIpad.removeClass( "fa-times" ).addClass( "fa-bars" )
        isOpen = false
    }

})

$(document).click((event)=> {
    let elementClick = event.target
    if(elementClick.id !== 'main-menu' && elementClick.id !== 'toogle-menu-ipad') {
        mainMenu.animate({
            left: '-100%',
        },'slow');
        togleMenuIpad.removeClass( "fa-times" ).addClass( "fa-bars" )
        isOpen = false
    } 
})
function myFunction() {
    debugger
    location.replace("file:///Users/buiquocanh/Documents/GitHub/quocanh1010.github.io/Project%20cuo%CC%82%CC%81i%20ki%CC%80/ProjectWeb16%204/conponent/category/category/index.html")
  }
