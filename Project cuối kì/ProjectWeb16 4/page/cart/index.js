let default_data_cart = [
  {
    id: 1,
    img: '../img/image 31.png',
    name: 'Áo Bóng Đá Argentina',
    price: 80.000,
    more:'Xem chi tiết >',
},
{
  id: 2,
  img: '../img/image 30.png',
  name: 'Áo Bóng Đá Ý',
  price: 80.000,
  more:'Xem chi tiết >',
},
  {
    id: 1,
    img: '../img/image 31.png',
    name: 'Áo Bóng Đá Argentina',
    price: 80.000,
    more:'Xem chi tiết >',
},
{
  id: 3,
  img: '../img/image 29.png',
  name: 'Áo Bóng Đá Ý',
  price: 80.000,
  more:'Xem chi tiết >',
},
  {
    id: 1,
    img: '../img/image 31.png',
    name: 'Áo Bóng Đá Argentina',
    price: 80.000,
    more:'Xem chi tiết >',
},
{
  id: 3,
  img: '../img/image 29.png',
  name: 'Áo Bóng Đá Ý',
  price: 80.000,
  more:'Xem chi tiết >',
},
{
  id: 3,
  img: '../img/image 29.png',
  name: 'Áo Bóng Đá Ý',
  price: 80.000,
  more:'Xem chi tiết >',
},
];
let infomatin_checkout = $("#infomatin_checkout");
let list_cart = $("#list-cart");
let data_cart = () => {
  return JSON.parse(localStorage.getItem("data-cart")) || default_data_cart;
};

// check cac id trung nhau, va loai bo no
let list_data_duplicate = [];
let list_no_duplicate = [];
let list_duplicate_render = [];

const sortData = () => {
  list_data_duplicate = [];
  list_no_duplicate = [];
  list_duplicate_render = [];
  for (let i = 0; i < data_cart().length; i++) {
    for (let j = i + 1; j < data_cart().length; j++) {
      if (data_cart()[i].id === data_cart()[j].id) {
        //   console.log(`(data_cart())[j]`, (data_cart())[j]);
        list_data_duplicate.push(data_cart()[i]);
      }
    }
  }

  for (let i = 0; i < data_cart().length; i++) {
    let index = list_data_duplicate.findIndex(
      (item) => item.id === data_cart()[i].id
    );
    if (index === -1) {
      list_no_duplicate.push(data_cart()[i]);
    }
  }
  for (let i = 0; i < list_data_duplicate.length; i++) {
    let index = list_duplicate_render.findIndex(
      (item) => item.id === list_data_duplicate[i].id
    );
    if (index === -1) {
      list_duplicate_render.push(list_data_duplicate[i]);
    }
  }
};

const renderCount = (item) => {
  let count = 0;
  //   console.log(`list_data_duplicate`, list_data_duplicate);
  list_data_duplicate.forEach((it) => {
    if (it.id === item.id) {
      count += 1;
    }
  });
  return count;
};

const addProduct = (id) => {
  // tao ra arr moi va update lai local stogreate

  let index = data_cart().findIndex((item) => item.id === id);
  let item = data_cart()[index];
  let newData = [...data_cart()];
  newData.push(item);
  localStorage.setItem("data-cart", JSON.stringify(newData));
  updateList();
};

const updateList = () => {
  sortData();
  list_cart.html("");
  list_duplicate_render.forEach((item, index) => {
    list_cart.append(`
          <li>
          <div class="left-li">
            <img src="${item.img}" alt="" />
          </div>
      
          <div class="right-li">
            <div>${item.id}</div>
            <div>${item.name}</div>
            <div>${item.price}</div>
            <div>
              Quantity <button>-</button> ${renderCount(
                item
              )} <button onclick="addProduct(${item.id})">+</button>
            </div>
            <div>delete</div>
          </div>
        </li>
      `);
  });
  list_no_duplicate.forEach((item) => {
    list_cart.append(`
          <li>
          <div class="left-li">
            <img src="${item.img}" alt="" />
          </div>
      
          <div class="right-li">
            <div>${item.id}</div>
            <div>${item.name}</div>
            <div>${item.price}</div>
            <div>
              Quantity <button>-</button> 1 <button>+</button>
            </div>
            <div>delete</div>
          </div>
        </li>
      `);
  });
};
updateList();

const totalPrice = () => {
  let price = 0;
  data_cart().forEach((item) => {
    price += item.price;
  });
  return price;
};

const updataCheckout = () => {
  infomatin_checkout.html("");
  infomatin_checkout.append(`
    <div>Basket detail</div>
    <div>Total quantity: ${data_cart().length}</div>
    <div>Total price : ${totalPrice()}</div>
    <div>Proceed to checkout</div>
`);
};

updataCheckout();
