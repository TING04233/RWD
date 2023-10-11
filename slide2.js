$(document).ready(function(){
  let divWidth = $('.outer').width()
  // alert(divWidth)
  let imgCount = $('.inner a').length
  // alert(imgCount)
 
  for(let i = 0; i < imgCount; i++){
    $('.contentButton').append('<li></li>')
  }

  $(':first').addClass('clicked')

  $('.inner a').width(divWidth)
  $('.inner').width(divWidth * imgCount)

  let index= 0
  let timer = setInterval(moveToNext, 4000) // 3秒
  $('.contentButton li').click(function(){
    clearInterval(timer)
    index=$(this).index()
    // alert(index)
    $('.inner').animate({
      left: divWidth * index * -1
    })

    $(this).addClass('clicked')
    $('.contentButton li').not(this).removeClass('clicked')

    timer = setInterval(moveToNext, 4000)
  })

  function moveToNext(){
    if(index < imgCount - 1){
      index += 1
    }else{
      index = 0
    }

    $('.inner').animate({
      left: divWidth * index * -1
    })

    $(`.contentButton li:eq(${index})`).addClass('clicked')
    $('.contentButton li').not(`:eq(${index})`).removeClass('clicked')
  }
})
