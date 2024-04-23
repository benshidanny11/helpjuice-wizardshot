
const menu = document.querySelector('.mobile-menu');

const btnOpen=document.getElementById('btnopen')
const btnClose=document.getElementById('btnclose')
btnOpen.addEventListener('click',function(){
  menu.classList.toggle('hidden');
  btnClose.classList.remove('hidden');
  btnOpen.classList.add('hidden');
});
document.getElementById('btnclose').addEventListener('click',function(){
  menu.classList.toggle('hidden');
  btnClose.classList.add('hidden');
  btnOpen.classList.remove('hidden');
});