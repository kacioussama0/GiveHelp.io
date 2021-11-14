// Thumbnails Gallery
$('.thumbnails img').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.master-image img').hide().attr('src', $(this).attr('src')).fadeIn(500);
})

$('div.gallery  .fa-chevron-right').on('click', function() {
    if($('.thumbnails .active').is(':last-child')){
        $('.thumbnails img').eq(0).click();
    }
    else {
    $('.thumbnails .active').next().click();
}
})

$('div.gallery  .fa-chevron-left').on('click', function() {
    if($('.thumbnails .active').is(':first-child')){
        $('.thumbnails img:last-child').click(); 
    }
    else {
        $('.thumbnails .active').prev().click();
    }
   
})


// Burger Menu
let bar = document.querySelector('span.burger-menu');
bar.addEventListener('click' , function () {
   if(document.querySelector('header div.container nav ul').style.display == 'flex'){
    document.querySelector('header div.container nav ul').style.display = 'none';
   }
   else {
    document.querySelector('header div.container nav ul').style.display = 'flex';
   }
})


// For Starting Event
let m =  setInterval(()=> {
    let diff = new Date('Dec 31,2021 23:59:59').getTime() - new Date().getTime();
      let days = Math.floor(diff / 1000 / 60 / 60 / 24 );
 let hours = Math.floor(  diff % (1000 * 60 * 60 * 24) / (1000 * 60*60) )  ;
 let minutes = Math.floor( diff % (1000 * 60 * 60 ) / (1000*60))  ;
 let seconds = Math.floor( diff % (1000*60) / 1000)  ;
  document.querySelector('.days').innerHTML = (days < 10) ? `0${days}` : days;
 document.querySelector('.hours').innerHTML 
 = (hours  < 10) ? `0${hours}` : hours;
 
 document.querySelector('.minutes').innerHTML = (minutes < 10) ? `0${minutes}` : minutes;
 document.querySelector('.seconds').innerHTML 
 = (seconds < 10) ? `0${seconds}` : seconds;
 
 
 if(diff < 0){
     clearInterval(m)
 }
 
    },1000)     


// Counter Increase For Statistique
let section = document.querySelector('section.statistique div.container');
let Statistique = document.querySelectorAll('.statis div h4');
let started = false;
function IncreaseCount(element){
    let goal = element.dataset.goal;
    let time = setInterval(()=> {
        if(element.textContent++ == goal){
            clearInterval(time);
        }
    },200 /goal)
}
window.onscroll = ()=> {
    if(window.scrollY >= section.offsetTop){
        if(!started){
        Statistique.forEach((num)=> {
            IncreaseCount(num);
        })
            
    }
        started = true;
    }
}


