$(function(){

    $(".b_head_total > li").click(function(){
        $(".b_head_total_sub").show();
        $(".btn_total_close").show();
    })

    $(".btn_total_close").click(function(){
        $(".b_head_total_sub").hide();
        $(".btn_total_close").hide();
    })

    $(".b_head_menu_sub_list").hide();

    $(".b_head_memu > ul > li").hover(function(){
        $(this).find(".b_head_menu_sub_list").stop().slideDown();
    },function(){
        $(".b_head_menu_sub_list").stop().slideUp();
    })

    $(".slide_img").slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows:true,
        dots:true,
        fade:true,
        responsive:{  
            breakpoint: 768, //화면 사이즈 768px
            settings: {
            dots:false
        } 
        },
    })
    
    $(".week_box").hover(function(){
        $(this).find(".week_img_hover").show();
    },function(){
        $(".week_img_hover").hide();
    })

    // $(".sub_pro_list").hide();

    $(".pro_list > li").click(function(e){
        e.preventDefault();
        $(".pro_list > li").removeClass("on");
        $(this).addClass("on");


        $(this).find(".sub_pro_list").removeClass("on");
        $(this).addClass("on");

    })

    $(".pro_list").slick({
        autoplay:true,
        autoplaySpeed:4000,
        dots:true,
        arrows:false,
        customPaging: function(slider, i) {
            return '<button class="tab">' + $(slider.$slides[i]).find('.pro_list_tit').attr('data-title') + '</button>';
        }
    })

    // $(window).scroll(function(){

    //     $('.weekly').each(function(i){
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
            
    //         if( bottom_of_window > bottom_of_object/2 ){
    //             $(this).animate({'opacity':'1'},500);
    //         }
    //     }); 
    // });

    $(window).on("scroll", function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 100)  {
            $(".weekly").addClass("scrolldown");
        }
    });

    $(window).on("scroll", function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 100)  {
            $(".right_menu").addClass("scrolldown");
        }
    });

    $(window).on("scroll", function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 500)  {
            $(".md").addClass("scrolldown");
        }
    });

    $(window).on("scroll", function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 1500)  {
            $(".story").addClass("scrolldown");
        }
    });

    $(window).on("scroll", function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 3000)  {
            $(".b_banner").addClass("scrolldown");
        }
    });
        $(".mo_weekly > ul").slick({
            autoplay:true,
            autoplaySpeed:3000,
            mobileFirst: true,
            dots:false,
            arrows:false,
            // fade:true,
        });

    

        $(".ham_close_btn").hide();

        $(".m_ham").click(function(){
            $(".ham_menu").addClass("on");
            $(".bg-shadow").css("display", "block");
            $(".ham_close_btn").show();
        });

        $(".ham_close_btn").click(function(){
            $(".ham_menu").removeClass("on");
            $(".bg-shadow").css("display", "none");
            $(".ham_close_btn").hide();
        })

        $(".ham_main_menu > ul > li").click(function(){
            $(".ham_main_menu > ul > li").removeClass("on")
            $(this).addClass("on");

            $(".ham_sub").hide();
            $(this).find(".ham_sub").show();
        })

        $(".ham_cate > li > a").click(function(){
            $(".ham_cate > li > a").removeClass("on");
            $(this).addClass("on");
        })

        $(".ham_cate > li").click(function(){
            $(".cate_sub").stop().slideUp();
            $(this).find(".cate_sub").stop().slideDown();
        })

        $(".ham_star").click(function(){
            $(this).toggleClass("on")
        })
})