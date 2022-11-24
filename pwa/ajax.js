$(function(){
    $.ajax({
        type: "GET",
        url : "/lhkdatabd/data/navi.json",
        dataType :"json",
        success : function(naviData){
       
         var naviTag = ''; 
         $.each(naviData, (index, item)=>{
            if( item.isNav ){
                naviTag +=`<li class="nav-item ${item.navClass}">
                                <a class="nav-link" href="${item.navLink}">${item.navTitle}
                                </a>
                            </li>`;
            }            
         })
         $('#gnb').html(naviTag);

         $('body').scrollspy({ target: '#navbarTogglerDemo02' })
         $('[data-spy="scroll"]').each(function () {
            var $spy = $(this).scrollspy('refresh')
          })

         $('#gnb').on('click','.scrollPage a', function(e){
            e.preventDefault();           
            $('body, html').animate({scrollTop : $($(this).attr('href')).offset().top})
         })  
        },
        error: function (xhr, status, e) { // 여기는 그냥 복붙
            console.log("error", e); // 에러메세지가 세번째인자
            console.log("status", status); // 상태가 2번째인자
        }
    })
 
})