const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const hello = document.querySelector('.hello');


btn1.addEventListener('click',(ev)=> {
  btn2.classList.toggle('hidden');
  hello.classList.add('hidden');
});
btn2.addEventListener('click',(ev) => {
  hello.classList.toggle('hidden');
})