// 漢堡按鈕
let ham_btn = document.querySelector('.ham_btn')

ham_btn.addEventListener('click',function(){
  // alert('test')
let list = document.querySelector('.flex_box')
list.classList.toggle('-on')

})

//  選單滑動切換
$(document).ready(function(){
  $('.dropdown').click(function(e){
    e.preventDefault()
    $(this).parent().find('.down').slideToggle()
    $(this).parent().siblings().find('.down').slideUp();
  })
})

