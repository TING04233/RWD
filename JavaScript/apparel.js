// 滑過去照片 切換 另外一張照片

$(document).ready(function(){

  // ------ 第一張圖 -----------
  $('.change,.img_hover').mouseover(function(){
    $('.change,.img_hover').attr('src','./images/apparel pic/1.jpg')
  })
  $('.change,.img_hover').mouseout(function(){
    $('.change,.img_hover').attr('src','./images/apparel pic/Rectangle 16.svg')
  })
  

  // ------ 第二張圖 -----------
  $('.changetwo,.img_hovertwo').mouseover(function(){
    $('.changetwo,.img_hovertwo').attr('src','./images/apparel pic/2.jpg')
  })
  $('.changetwo,.img_hovertwo').mouseout(function(){
    $('.changetwo,.img_hovertwo').attr('src','./images/apparel pic/Rectangle 17.svg')
  })

  // ------ 第三張圖 -----------
  $('.changethree,.img_hoverthree').mouseover(function(){
    $('.changethree,.img_hoverthree').attr('src','./images/apparel pic/3.jpg')
  })
  $('.changethree,.img_hoverthree').mouseout(function(){
    $('.changethree,.img_hoverthree').attr('src','./images/apparel pic/Rectangle 18.svg')
  })

  // ------ 第四張圖 -----------
  $('.changefour,.img_hoverfour').mouseover(function(){
    $('.changefour,.img_hoverfour').attr('src','./images/apparel pic/4.jpg')
  })
  $('.changefour,.img_hoverfour').mouseout(function(){
    $('.changefour,.img_hoverfour').attr('src','./images/apparel pic/Rectangle 19.svg')
  })

  // ------ 第五張圖 -----------
  $('.changefive,.img_hoverfive').mouseover(function(){
    $('.changefive,.img_hoverfive').attr('src','./images/apparel pic/5.jpg')
  })
  $('.changefive,.img_hoverfive').mouseout(function(){
    $('.changefive,.img_hoverfive').attr('src','./images/apparel pic/Rectangle 20.svg')
  })

  // ------ 第六張圖 -----------
  $('.changesix,.img_hoversix').mouseover(function(){
    $('.changesix,.img_hoversix').attr('src','./images/apparel pic/6.jpg')
  })
  $('.changesix,.img_hoversix').mouseout(function(){
    $('.changesix,.img_hoversix').attr('src','./images/apparel pic/Rectangle 21.svg')
  })

  // ------ 第七張圖 -----------
  $('.changeseven,.img_hoverseven').mouseover(function(){
    $('.changeseven,.img_hoverseven').attr('src','./images/apparel pic/7.jpg')
  })
  $('.changeseven,.img_hoverseven').mouseout(function(){
    $('.changeseven,.img_hoverseven').attr('src','./images/apparel pic/Rectangle 22.svg')
  })


// ------ 第八張圖 -----------
$('.changeeight,.img_hovereight').mouseover(function(){
  $('.changeeight,.img_hovereight').attr('src','./images/apparel pic/8.jpg')
})
$('.changeeight,.img_hovereight').mouseout(function(){
  $('.changeeight,.img_hovereight').attr('src','./images/apparel pic/Rectangle 23.svg')
})

// ------ 第九張圖 -----------
$('.changenine,.img_hovernine').mouseover(function(){
  $('.changenine,.img_hovernine').attr('src','./images/apparel pic/9.jpg')
})
$('.changenine,.img_hovernine').mouseout(function(){
  $('.changenine,.img_hovernine').attr('src','./images/apparel pic/Rectangle 24.svg')
})

})








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

// $(document).ready(function() {
  
//   $('.change,.hover_button').mouseover(function(){
//     $('.change,.hover_button').attr('src','./images/apparel pic/1.jpg')
//   })
  
//   $('.change').mouseout(function() {
//       $('.change').attr('src', './images/apparel pic/Rectangle 16.svg');
//   });

//   $('.img_hover').mouseenter(function(){
//     $('.change').trigger('mouseover')
//     $(this).addClass('hover_black')
//      $('.cart_button').mouseover(function(event){
// event.stopPropagation();
// })
//     $(this).siblings('.cart_button').find('.hover_button').show()
      
    
//   })

//   $('.img_hover').mouseout(function(){
//    $('.change').trigger('mouseout')
//    $(this).removeClass('hover_black')
  
//    $(this).siblings('.cart_button').find('.hover_button').hide()

//   })


//   $('.hover_button').mouseover(function(){
//     $('.img_hover').addClass('hover_black')
//   })

  
// });

