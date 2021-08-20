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
