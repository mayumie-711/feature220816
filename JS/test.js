'use strict';


//ヘッダー内の各タイトルをクリックしたらページ遷移
var category=$('.category');
var newitem=$('.new-item');
var coordinate=$('.coordinate');
var ranking=$('.ranking');
var sale=$('.sale');

category.on('click',function(){
    location.href='';
});

newitem.on('click',function(){
    location.href='';
});

coordinate.on('click',function(){
    location.href='';
});

ranking.on('click',function(){
    location.href='';
});

sale.on('click',function(){
    location.href='';
});



//スライダー機能の実装
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    infinite: true,
    prevArrow: '<img src="images/arrow-left.png" class="slick-arrow prev-arrow">',
    nextArrow: '<img src="images/arrow-right.png" class="slick-arrow next-arrow">',
    centerMode: true,
    centerPadding: '20%',
    variableWidth: true,
    responsive: [{
        breakpoint: 750,
        settings:{
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrow: false,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            swipe: true,
            centerMode: true,
        }
    }],
});

//VIEW MOREボタンを押したときのページ遷移 
var viewbtn=$('.view-more-btn');
viewbtn.on('click',function(){
    location.href='#';
});




//コンテンツタイトルの表示
var ctitle1=$('.content-title1');
var c1=$('.c1');
var c2=$('.c2');
var c3=$('.c3');
var c4=$('.c4');
var c5=$('.c5');
var c6=$('.c6');
var c7=$('.c7');
var c8=$('.c8');
var c9=$('.c9');
var c10=$('.c10');

ctitle1.on('inview',function(event,Isinview){
  if(Isinview){
    setTimeout(function(){
        c1.addClass('c-view');
    },50);
    setTimeout(function(){
        c2.addClass('c-view');
    },100);
    setTimeout(function(){
        c3.addClass('c-view');
    },150);
    setTimeout(function(){
        c4.addClass('c-view');
    },200);
    setTimeout(function(){
        c5.addClass('c-view');
    },250);
    setTimeout(function(){
        c6.addClass('c-view');
    },300);
    setTimeout(function(){
        c7.addClass('c-view');
    },350);
    setTimeout(function(){
        c8.addClass('c-view');
    },400);
    setTimeout(function(){
        c9.addClass('c-view');
    },450);
    setTimeout(function(){
        c10.addClass('c-view');
    },500);
  }else{
    c1.removeClass('c-view');
    c2.removeClass('c-view');
    c3.removeClass('c-view');
    c4.removeClass('c-view');
    c5.removeClass('c-view');
    c6.removeClass('c-view');
    c7.removeClass('c-view');
    c8.removeClass('c-view');
    c9.removeClass('c-view');
    c10.removeClass('c-view');
  }
});

var ctitle2=$('.content-title2');
var n1=$('.n1');
var n2=$('.n2');
var n3=$('.n3');

ctitle2.on('inview',function(event,Isinview){
  if(Isinview){
    setTimeout(function(){
        n1.addClass('n-view');
    },50);
    setTimeout(function(){
        n2.addClass('n-view');
    },100);
    setTimeout(function(){
        n3.addClass('n-view');
    },150);
  }else{
    n1.removeClass('n-view');
    n2.removeClass('n-view');
    n3.removeClass('n-view');
  }

});


var ctitle3=$('.content-title3');
var con1=$('.con1');
var con2=$('.con2');
var con3=$('.con3');
var con4=$('.con4');
var con5=$('.con5');
var con6=$('.con6');
var con7=$('.con7');

ctitle3.on('inview',function(event,Isinview){
  if(Isinview){
    setTimeout(function(){
        con1.addClass('con-view');
    },50);
    setTimeout(function(){
        con2.addClass('con-view');
    },100);
    setTimeout(function(){
        con3.addClass('con-view');
    },150);
    setTimeout(function(){
        con4.addClass('con-view');
    },200);
    setTimeout(function(){
        con5.addClass('con-view');
    },250);
    setTimeout(function(){
        con6.addClass('con-view');
    },300);
    setTimeout(function(){
        con7.addClass('con-view');
    },350);
  }else{
    con1.removeClass('con-view');
    con2.removeClass('con-view');
    con3.removeClass('con-view');
    con4.removeClass('con-view');
    con5.removeClass('con-view');
    con6.removeClass('con-view');
    con7.removeClass('con-view');
  }

});

var ctitle4=$('.content-title4');
var r1=$('.r1');
var r2=$('.r2');
var r3=$('.r3');
var r4=$('.r4');
var r5=$('.r5');
var r6=$('.r6');
var r7=$('.r7');
var r8=$('.r8');
var r9=$('.r9');
var r10=$('.r10');
var r11=$('.r11');
var r12=$('.r12');
var r13=$('.r13');
var r14=$('.r14');

ctitle4.on('inview',function(event,Isinview){
  if(Isinview){
    setTimeout(function(){
        r1.addClass('r-view');
    },50);
    setTimeout(function(){
        r2.addClass('r-view');
    },100);
    setTimeout(function(){
        r3.addClass('r-view');
    },150);
    setTimeout(function(){
        r4.addClass('r-view');
    },200);
    setTimeout(function(){
        r5.addClass('r-view');
    },250);
    setTimeout(function(){
        r6.addClass('r-view');
    },300);
    setTimeout(function(){
        r7.addClass('r-view');
    },350);
    setTimeout(function(){
        r8.addClass('r-view');
    },400);
    setTimeout(function(){
        r9.addClass('r-view');
    },450);
    setTimeout(function(){
        r10.addClass('r-view');
    },500);
    setTimeout(function(){
        r11.addClass('r-view');
    },550);
    setTimeout(function(){
        r12.addClass('r-view');
    },600);
    setTimeout(function(){
        r13.addClass('r-view');
    },650);
    setTimeout(function(){
        r14.addClass('r-view');
    },700);
  }else{
    r1.removeClass('r-view');
    r2.removeClass('r-view');
    r3.removeClass('r-view');
    r4.removeClass('r-view');
    r5.removeClass('r-view');
    r6.removeClass('r-view');
    r7.removeClass('r-view');
    r8.removeClass('r-view');
    r9.removeClass('r-view');
    r10.removeClass('r-view');
    r11.removeClass('r-view');
    r12.removeClass('r-view');
    r13.removeClass('r-view');
    r14.removeClass('r-view');
  }

});

//RECENTRY VIEWEDの各要素がクリックされた時のページ遷移
var ritem1=$('.r-item1');
var ritem2=$('.r-item2');
var ritem3=$('.r-item3');
var ritem4=$('.r-item4');
var ritem5=$('.r-item5');
var ritem6=$('.r-item6');

ritem1.on('click',function(){
    location.href='';
});

ritem2.on('click',function(){
    location.href='';
});

ritem3.on('click',function(){
    location.href='';
});

ritem4.on('click',function(){
    location.href='';
});

ritem5.on('click',function(){
    location.href='';
});

ritem6.on('click',function(){
    location.href='';
});



//各SNSのアイコンを表示
var snscontent=$('.sns-content');
var twitter=$('.sns-item1');
var facebook=$('.sns-item2');
var youtube=$('.sns-item3');
var instagram=$('.sns-item4');
var line=$('.sns-item5');

snscontent.on('inview',function(event,Isinview){
  if(Isinview){
    setTimeout(function(){
        twitter.addClass('sns-view');
    },100);
    setTimeout(function(){
        facebook.addClass('sns-view');
    },200);
    setTimeout(function(){
        youtube.addClass('sns-view');
    },300);
    setTimeout(function(){
        instagram.addClass('sns-view');
    },400);
    setTimeout(function(){
        line.addClass('sns-view');
    },500);
  }else{
    twitter.removeClass('sns-view');
    facebook.removeClass('sns-view');
    youtube.removeClass('sns-view');
    instagram.removeClass('sns-view');
    line.removeClass('sns-view');
  }


});




//ページトップへ戻るボタン
var pagetop=$('.page-top');

$(window).on('load scroll',function(){
	if($(this).scrollTop()>100){
		pagetop.addClass('pagetop-view');
	}else{
		pagetop.removeClass('pagetop-view');
	}
});

pagetop.on('click',function(){
	$('body,html').animate({scrollTop:0},500);
});

//フッター内の各要素がクリックされた時のページ遷移（PC版）
var fnitem1=$('.fn-item1');
var fnitem2=$('.fn-item2');
var fnitem3=$('.fn-item3');
var fnitem4=$('.fn-item4');
var fnitem5=$('.fn-item5');
var fnitem6=$('.fn-item6');
var fnitem7=$('.fn-item7');
var fnitem8=$('.fn-item8');

fnitem1.on('click',function(){
    lcoation.href='';
});

fnitem2.on('click',function(){
    location.href='';
});

fnitem3.on('click',function(){
    location.href='';
});

fnitem4.on('click',function(){
    location.href='';
});

fnitem5.on('click',function(){
    location.href='';
});

fnitem6.on('click',function(){
    location.href='';
});

fnitem7.on('click',function(){
    location.href='';
});

fnitem8.on('click',function(){
    location.href='';
});


//フッター内の各要素がクリックされた時のページ遷移（スマホ版）
var fotitem1=$('.fot-item1');
var fotitem2=$('.fot-item2');
var fotitem3=$('.fot-item3');
var fotitem4=$('.fot-item4');
var fotitem5=$('.fot-item5');
var fotitem6=$('.fot-item6');
var fotitem7=$('.fot-item7');
var fotitem8=$('.fot-item8');

fotitem1.on('click',function(){
    lcoation.href='';
});

fotitem2.on('click',function(){
    location.href='';
});

fotitem3.on('click',function(){
    location.href='';
});

fotitem4.on('click',function(){
    location.href='';
});

fotitem5.on('click',function(){
    location.href='';
});

fotitem6.on('click',function(){
    location.href='';
});

fotitem7.on('click',function(){
    location.href='';
});

fotitem8.on('click',function(){
    location.href='';
});

//ドロワーナビの動作実装
var hamburger=$('.hamburger');
var nav=$('#nav');
var closebtn=$('.close-btn');
var pagefilter=$('#page-filter');

hamburger.on('click',function(){
    nav.addClass('nav-move');
    pagefilter.addClass('filter-on');
});

closebtn.on('click',function(){
    nav.removeClass('nav-move');
    pagefilter.removeClass('filter-on');
});

//ナビ内の各リンクが押された時のページ遷移
var link1=$('.link1');
var link2=$('.link2');
var link3=$('.link3');
var link4=$('.link4');
var link5=$('.link5');

link1.on('click',function(){
    location.href='';
});

link2.on('click',function(){
    location.href='';
});

link3.on('click',function(){
    location.href='';
});

link4.on('click',function(){
    location.href='';
});

link5.on('click',function(){
    location.href='';
});





