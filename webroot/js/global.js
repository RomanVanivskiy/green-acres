/**
 * Created by RVanivskiy on 24.12.2015.
 */

$(document).ready(function(){
    var select = $(".component-list"),
        options_area = $(".options-list"),
        option = $(".option"),
        option_sort_list = $(".sorting-by .option"),
        add_to_favourite = $(".icon-favourite"),
        details = $(".item-details ul li");

    select.on("click",function(){
        select.parent().find(".show-list").removeClass("show-list");
        $(this).find(options_area).addClass("show-list");
    });

    option.on("click", function () {
        $(this).parent().parent().find(".component-selected").text($(this).text());
        $(this).parent().find(".show-list").removeClass("show-list");

        setTimeout(function () {
            $("body").trigger("click");
        }, 0);
    });

    option_sort_list.on("click",function(){
        console.log("I`m here");
        $(this).find("span").clone().appendTo(".component-selected")
    });

    add_to_favourite.on("click",function(){
       $(this).toggleClass("icon-favourite-active");
    });

    details.on("mouseover",function(){
       $(this).find(".details-tip").show();
    });

    details.on("mouseleave",function(){
        $(this).find(".details-tip").hide();
    });

    $(window).on("click touchend", function (e) {

        var target = $(e.target);

        if ($(e.target).closest(options_area).length || $(e.target).closest(option).length || $(e.target).closest(select).length ) {
            e.stopPropagation();
        } else {
            options_area.removeClass("show-list");
        }

    });

    var prop_tab = $(".prop-tab");

    prop_tab.on("click",function(){
       $(this).parent().find(".active-tab").removeClass("active-tab");
       $(this).addClass("active-tab");
    });

    /************************************************************/
    /* Se more photos */
    /************************************************************/

    var show_all = $(".more-photos"),
        checker = true;

    show_all.on("click",function(){

        if (checker == true) {
            $(this).parent().parent().find(".slide").removeClass("slide").addClass("slide_off");
            $(this).parent().parent().find(".carousel-inner").removeClass("carousel-inner").addClass("carousel-inner_off");
            $(this).parent().parent().find(".carousel-control").hide();
            checker = false;
            $(this).html("Hide all photos");
        } else {
            $(this).parent().parent().find(".slide_off").removeClass("slide_off").addClass("slide");
            $(this).parent().parent().find(".carousel-inner_off").removeClass("carousel-inner_off").addClass("carousel-inner");
            $(this).parent().parent().find(".carousel-control").show();
            checker = true;
            $(this).html("See all photos");
        }

    });

});