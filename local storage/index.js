let arr=[
  {id:new Date().time(), label: 'yyy'},
]
let domUl= $('#my-list')

let myTest = () => {
arr.forEach((item,index) =>{
domul.append(`
<li>
          <div class = 'clock'>clock</div>
          <div class = 'label'>
              label</div>
          <div class = 'bin'>Xoa</div>
          </li>
`);
})}


let searchTimer
const myFunction = () => {
   if(searchTimer){
       clearTimeout(searchTimer);
   }
   searchTimer = setTimeout(() => {
       console.log('text :>> ');
   }, 2000);
}
const checkBlur = () => {
  domUl.hide()
}
const checkFocus = () => {
   myTest()
   domUl.show()
   domUl.html('')
}