const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrapper');

btn.addEventListener('click', ()=>{
    wrap.classList.toggle('display');
});