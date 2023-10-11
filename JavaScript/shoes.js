// 滑過去照片 切換 另外一張照片

$(document).ready(function(){

  // ------ 第一張圖 -----------
  $('.change,.img_hover').mouseover(function(){
    $('.change,.img_hover').attr('src','./images/shoes pic/1.jpg')
  })
  $('.change,.img_hover').mouseout(function(){
    $('.change,.img_hover').attr('src','./images/shoes pic/ADIDAS 女 AlphaBounce + TF 變形金剛聯名 慢跑鞋 - IG3074.svg')
  })
  

  // ------ 第二張圖 -----------
  $('.changetwo,.img_hovertwo').mouseover(function(){
    $('.changetwo,.img_hovertwo').attr('src','./images/shoes pic/2.jpg')
  })
  $('.changetwo,.img_hovertwo').mouseout(function(){
    $('.changetwo,.img_hovertwo').attr('src','./images/shoes pic/ADIDAS 女 GALAXY 6 OM 慢跑鞋 - ID7372.svg')
  })

  // ------ 第三張圖 -----------
  $('.changethree,.img_hoverthree').mouseover(function(){
    $('.changethree,.img_hoverthree').attr('src','./images/shoes pic/3.jpg')
  })
  $('.changethree,.img_hoverthree').mouseout(function(){
    $('.changethree,.img_hoverthree').attr('src','./images/shoes pic/NIKE 女 AIR ZOOM PEGASUS 40 慢跑鞋 - DV3854101.svg')
  })

  // ------ 第四張圖 -----------
  $('.changefour,.img_hoverfour').mouseover(function(){
    $('.changefour,.img_hoverfour').attr('src','./images/shoes pic/4.jpg')
  })
  $('.changefour,.img_hoverfour').mouseout(function(){
    $('.changefour,.img_hoverfour').attr('src','./images/shoes pic/ADIDAS 女 ULTRABOOST 1.svg')
  })

  // ------ 第五張圖 -----------
  $('.changefive,.img_hoverfive').mouseover(function(){
    $('.changefive,.img_hoverfive').attr('src','./images/shoes pic/5.jpg')
  })
  $('.changefive,.img_hoverfive').mouseout(function(){
    $('.changefive,.img_hoverfive').attr('src','./images/shoes pic/SKECHERS 女 SWITCH BACK 慢跑鞋 - 180162NVY.svg')
  })

  // ------ 第六張圖 -----------
  $('.changesix,.img_hoversix').mouseover(function(){
    $('.changesix,.img_hoversix').attr('src','./images/shoes pic/6.jpg')
  })
  $('.changesix,.img_hoversix').mouseout(function(){
    $('.changesix,.img_hoversix').attr('src','./images/shoes pic/NIKE 女 AIR MAX EXCEE (GS) 休閒鞋 - CD6894118.svg')
  })

  // ------ 第七張圖 -----------
  $('.changeseven,.img_hoverseven').mouseover(function(){
    $('.changeseven,.img_hoverseven').attr('src','./images/shoes pic/7.jpg')
  })
  $('.changeseven,.img_hoverseven').mouseout(function(){
    $('.changeseven,.img_hoverseven').attr('src','./images/shoes pic/ADIDAS 女 X_PLRPHASE 慢跑鞋 - IG4780 1.svg')
  })


// ------ 第八張圖 -----------
$('.changeeight,.img_hovereight').mouseover(function(){
  $('.changeeight,.img_hovereight').attr('src','./images/shoes pic/8.jpg')
})
$('.changeeight,.img_hovereight').mouseout(function(){
  $('.changeeight,.img_hovereight').attr('src','./images/shoes pic/SKECHERS 女 ARCH FIT 慢跑鞋 - 149565BKMT 1.png')
})

// ------ 第九張圖 -----------
$('.changenine,.img_hovernine').mouseover(function(){
  $('.changenine,.img_hovernine').attr('src','./images/shoes pic/9.jpg')
})
$('.changenine,.img_hovernine').mouseout(function(){
  $('.changenine,.img_hovernine').attr('src','./images/shoes pic/NIKE 女 AF1 LO PLT.AF.svg')
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

$('.add_cart').click(function(e){
  e.preventDefault()
})


// 購物車 
