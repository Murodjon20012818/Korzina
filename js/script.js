// window.addEventListener('DOMContentLoaded', function () {

//   // birinchi ish shu uchalasini ushlab olish 

//   let products = document.querySelectorAll('.product'),// kartoshka
//   buttons = document.querySelectorAll('button'),// uni icidagi buttons
//   openBtn = document.querySelector('.open'); // otkirit btn 

//   function createcard() {
//     let cart = document.createElement('div'), // yangi tag
//     field = document.createElement('div'), // o'rtadagi fayl qora fayl
//     heading = document.createElement('h2'), // 
//     closeBtn = document.createElement('button')


//     // bularga class beramiz


//     cart.classList.add.add('cart') // still berilgan
//     field.classList.add.add('cart-field'), // still berilgan
//     closeBtn.classList.add.add('close') // still berilgan



//     heading.textContent = 'v nashey korzinu' // nomini berdik
//     closeBtn.textContent = 'Zakrit' //  bunga ham


//     // ota blogka qo'shamiz

//     document.body.appendChild(cart) ;// bodyga qo'shdik
//     cart.appendChild(heading) ;// cartga qo'shdk
//     cart.appendChild(field);
//     cart.appendChild(closeBtn);
//   }

//   createcard();

//   // class qo'shgan yangi kartalarimizni ushlab olamiz

//   let cart = document.querySelector('.cart'),
//   closeBtn = document.querySelector('.close'),
//   field = document.querySelector('.cart-field');


//   openBtn.addEventListener('click', () => {
//     cart.style.display = 'block';
//   })

//   closeBtn.addEventListener('click', () => {
//     cart.style.display = 'none';
//   })

// // forech bilan ishlaymiz


//   buttons.forEach(function (item, i) {
//     item.addEventListener('click', function () {

//       let clofbuebfuebfbhebfiherubum = products[i].cloneNode(true),
//       btn = clofbuebfuebfbhebfiherubum.querySelector('button')

//       btn.remove();
//       field.appendChild(clofbuebfuebfbhebfiherubum);
//       products[i].remove()
//       // alert()

//     })
//   })

// })



window.addEventListener("DOMContentLoaded", () => {



  let products = document.querySelectorAll('.product'),
  buttons = document.querySelectorAll('button'),
  openBtn = document.querySelector('.open');


  function createcard() {
    let cart = document.createElement('div'),
    field = document.createElement('div'),
    heading = document.createElement('h2'),
    closebtn = document.createElement('button');


    cart.classList.add('cart');
    field.classList.add('cart-field');
    heading.classList.add('heading');
    closebtn.classList.add('close');

    heading.textContent = 'V OTKRIT korzinu';
    closebtn.textContent = 'Close cart';

    cart.appendChild(heading);
    document.body.appendChild(cart);
    cart.appendChild(field);
    cart.appendChild(closebtn);
  } 
  createcard();

  let cart = document.querySelector('.cart'),
  field = document.querySelector('.cart-field'),
  closeBtn = document.querySelector('.close');

  openBtn.addEventListener('click', function () {
    cart.style.display = 'block';
  })

  closeBtn.addEventListener('click', function () {
    cart.style.display = 'none';
  })

  buttons.forEach(function(item, i){
    item.addEventListener('click', function (){
      let cloneItem = products[i].cloneNode(true),
      btn = cloneItem.querySelector('button');

      btn.remove();
      field.appendChild(cloneItem);
      products[i].remove();
    })
  })




































})