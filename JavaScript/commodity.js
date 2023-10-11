
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

//  點小圖換大圖
    $('.simg').click(function(){
      $('.simg.selected').removeClass('selected')
      $(this).addClass('selected')

  
      let imgSrc = $(this).attr('src')
      // alert(imgSrc)
      $('.bigImg').attr('src', imgSrc)
  })

  //購物車數量按鈕

  $('.decrease').click(function(){
    let currentValue = parseInt($('.quan').val(), 10)
    if(currentValue > 1){
      $('.quan').val(currentValue - 1)
    }
  })

  $('.increase').click(function(){
    let currentValue = parseInt($('.quan').val(), 10)
    $('.quan').val(currentValue + 1)
  })
  