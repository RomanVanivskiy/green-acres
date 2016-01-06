/**
 * Created by RVanivskiy on 29.12.2015.
 */
$(document).ready(function(){

    /***************************************************************
     Slider
     ***************************************************************/

        $(".min").numeric();
        $(".max").numeric();

    var filter_1 = $("#filter-1"),
        f1_max = 1000000,
        f1_w1 = 0,
        f1_w2 = 450000,
        f1_step = 10000,
        filter_2 = $("#filter-2"),
        f2_max = 1000,
        f2_w1 = 10,
        f2_w2 = 600,
        f2_step = 50,
        filter_3 = $("#filter-3"),
        f3_max = 10,
        f3_w1 = 2,
        f3_w2 = 6,
        f3_step = 1;

        filter_1.find(".min").val(f1_w1);
        filter_1.find(".max").val(f1_w2);

        filter_2.find(".min").val(f2_w1);
        filter_2.find(".max").val(f2_w2);

        filter_3.find(".min").val(f3_w1);
        filter_3.find(".max").val(f3_w2);

    var w1,
        w2;

    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var w1 = 40;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var w2 = 40;
        var r2 = x2 + w2;

        if (r1 < x2 || x1 > r2) return false;
        return true;
    }

    $(".min").on("keyup",function(){
        var filter_id = $(this).parent().parent().attr("id");

        var w1 = parseInt($(this).val());
        var w2 = parseInt($(this).parent().find(".max").val());

        if (w1 < 0) {
            w1 = parseInt(0);
            $(this).val(w1);
        }

        if (w1 >= w2) {
            switch (filter_id) {
                case 'filter-1':
                    if (w1 >= f1_max) {
                        w1 = f1_max - f1_step;
                        $(this).parent().find(".min").val(w1);
                        w2 = parseInt(w1) + parseInt(f1_step);
                    } else {
                        w2 = parseInt(w1) + parseInt(f1_step);
                    }
                    break;
                case 'filter-2':
                    if (w1 >= f2_max) {
                        w1 = f2_max - f2_step;
                        $(this).parent().find(".min").val(w1);
                        w2 = parseInt(w1) + parseInt(f2_step);
                    } else {
                        w2 = parseInt(w1) + parseInt(f2_step);
                    }
                    break;
                case 'filter-3':
                    if (w1 >= f3_max) {
                        w1 = f3_max - f3_step;
                        $(this).parent().find(".min").val(w1);
                        w2 = parseInt(w1) + parseInt(f3_step);
                    } else {
                        w2 = parseInt(w1) + parseInt(f3_step);
                    }
                    break;
            }
        }

        $(this).parent().find(".max").val(w2);

        switch (filter_id) {
            case 'filter-1':
                range_slider('#slider-1',0,f1_max,w1,w2);
                break;
            case 'filter-2':
                range_slider('#slider-2',0,f2_max,w1,w2);
                break;
            case 'filter-3':
                range_slider('#slider-3',0,f3_max,w1,w2);
                break;
        }
    });

    $(".max").on("keyup",function(){
        var filter_id = $(this).parent().parent().attr("id");

        w2 = parseInt($(this).val());
        w1 = parseInt($(this).parent().find(".min").val());

        if (w2 <= w1) {
            switch (filter_id) {
                case 'filter-1':
                    if (w2 <= f1_step) {
                        w2 = f1_step;
                        $(this).parent().find(".min").val(0);
                        $(this).parent().find(".max").val(f1_step);
                        w1 = 0;
                    } else {
                        w1 = parseInt(w2) - parseInt(f1_step);
                        $(this).parent().find(".min").val(w1);
                    }
                    break;
                case 'filter-2':
                    if (w2 <= f2_step) {
                        w2 = f2_step;
                        $(this).parent().find(".min").val(0);
                        $(this).parent().find(".max").val(f2_step);
                        w1 = 0;
                    } else {
                        w1 = parseInt(w2) - parseInt(f2_step);
                        $(this).parent().find(".min").val(w1);
                    }
                    break;
                case 'filter-3':
                    if (w2 <= f3_step) {
                        w2 = f3_step;
                        $(this).parent().find(".min").val(0);
                        $(this).parent().find(".max").val(f3_step);
                        w1 = 0;
                    } else {
                        w1 = parseInt(w2) - parseInt(f3_step);
                        $(this).parent().find(".min").val(w1);
                    }
                    break;
            }
        }

        switch (filter_id) {
            case 'filter-1':
                if (w2 > f1_max) {
                    w2 = f1_max;
                    $(this).val(w2);
                }
                range_slider('#slider-1',0,f1_max,w1,w2);
                break;
            case 'filter-2':
                if (w2 > f2_max) {
                    w2 = f2_max;
                    $(this).val(w2);
                }
                range_slider('#slider-2',0,f2_max,w1,w2);
                break;
            case 'filter-3':
                if (w2 > f3_max) {
                    w2 = f3_max;
                    $(this).val(w2);
                }
                range_slider('#slider-3',0,f3_max,w1,w2);
                break;
        }
    });




// // slider call

    function range_slider(sliderID, min, max,w1,w2) {
        $(sliderID).slider({

            range: true,
            min: min,
            max: max,
            values: [ w1, w2 ],

            slide: function(event, ui) {

                //$('.ui-slider-handle:eq(0) .price-range-min').html( ui.values[ 0 ]);
                //$('.ui-slider-handle:eq(1) .price-range-max').html( ui.values[ 1 ]);
                $(this).parent().find(".min").val( ui.values[ 0 ]);
                $(this).parent().find(".max").val( ui.values[ 1 ]);
                //$('.price-range-both').html('<i>' + ui.values[ 0 ] + ' - </i>$' + ui.values[ 1 ] );

                //

                if ( ui.values[0] == ui.values[1] ) {
                    //$('.price-range-both i').css('display', 'none');
                } else {
                    //$('.price-range-both i').css('display', 'inline');
                }

                //

                if (collision($('.price-range-min'), $('.price-range-max')) == true) {
                    //$('.price-range-min, .price-range-max').css('opacity', '0');
                    //$('.price-range-both').css('display', 'block');
                } else {
                    //$('.price-range-min, .price-range-max').css('opacity', '1');
                    //$('.price-range-both').css('display', 'none');
                }

                //

            }

        });

    }

    range_slider('#slider-1',0,f1_max,f1_w1,f1_w2);
    range_slider('#slider-2',0,f2_max,f2_w1,f2_w2);
    range_slider('#slider-3',0,f3_max,f3_w1,f3_w2);

    $('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider-1').slider('values', 0 ) + ' - </i>' + $('#slider-1').slider('values', 1 ) + '</span>');
    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider-1').slider('values', 0 ) + '</span>');
    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider-1').slider('values', 1 ) + '</span>');

    $('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider-2').slider('values', 0 ) + ' - </i>' + $('#slider-2').slider('values', 1 ) + '</span>');
    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider-2').slider('values', 0 ) + '</span>');
    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider-2').slider('values', 1 ) + '</span>');

    $('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider-3').slider('values', 0 ) + ' - </i>' + $('#slider-3').slider('values', 1 ) + '</span>');
    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider-3').slider('values', 0 ) + '</span>');
    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider-3').slider('values', 1 ) + '</span>');

});




