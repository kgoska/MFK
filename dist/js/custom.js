function ibg(){$.each($(".ibg"),(function(e,s){$(this).find("img").length>0&&($(this).find("img").first().css("width",0),$(this).find("img").first().css("height",0),$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")'))}))}function RatioW(){$.each($(".ratio-w"),(function(e,s){var i=parseFloat($(this).data("ratio-multiplier"));"undefined"==i&&(i=1),console.log(i),$(this).css("height",(parseFloat($(this).css("width"))*i).toString()+"px")}))}function RatioH(){$.each($(".ratio-h"),(function(e,s){var i=parseFloat($(this).data("ratio-multiplier"));"undefined"==i&&(i=1),console.log(i),$(this).css("width",(parseFloat($(this).css("height"))*i).toString()+"px")}))}$(window).resize((function(){RatioW(),RatioH()})),$(document).ready((function(){current_menu_id=$("#info").data("current-id"),$("#"+current_menu_id).addClass("current__page"),$(".credit-slider").slick({arrows:!1,dots:!0,infinite:!1,slidesToShow:3,slidesToScroll:1,adaptiveHeight:!0,responsive:[{breakpoint:1440,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".ved-block-slider").slick({arrows:!1,dots:!0,infinite:!1,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:1440,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}}]}),ibg(),RatioW(),RatioH()})),$("#tarifs").click((function(e){e.preventDefault(),$("#tarifs").addClass("current-link"),$("#docs").removeClass("current-link"),$("#tarifs-item").addClass("active"),$("#docs-item").removeClass("active")})),$("#docs").click((function(e){e.preventDefault(),$("#docs").addClass("current-link"),$("#tarifs").removeClass("current-link"),$("#docs-item").addClass("active"),$("#tarifs-item").removeClass("active")})),$("body").on("click","#showmore.more",(function(e){e.preventDefault(),$(".operations__documentation-kind.active>.operations__documentation-file.hide").each((function(){$(this).removeClass("hide")})),$("#showmore.more").addClass("less").removeClass("more").html('Скрыть<svg class="more-picture"><use href="./img/svg/sprite/symbol-defs.svg#icon-less" /></svg>')})),$("body").on("click","#showmore.less",(function(e){e.preventDefault(),$(".operations__documentation-kind.active>.operations__documentation-file").filter('[data-show="no"]').each((function(){$(this).addClass("hide")})),$("#showmore.less").removeClass("less").addClass("more").html('Смотреть все<svg class="more-picture"><use href="./img/svg/sprite/symbol-defs.svg#icon-more" /></svg>')})),$("#resident").click((function(e){e.preventDefault(),$("#resident").addClass("current-link"),$("#noresident").removeClass("current-link"),$("#up").removeClass("current-link"),$("#custom").removeClass("current-link"),$("#resident-item").addClass("active"),$("#noresident-item").removeClass("active"),$("#up-item").removeClass("active"),$("#custom-item").removeClass("active")})),$("#noresident").click((function(e){e.preventDefault(),$("#noresident").addClass("current-link"),$("#resident").removeClass("current-link"),$("#up").removeClass("current-link"),$("#custom").removeClass("current-link"),$("#noresident-item").addClass("active"),$("#resident-item").removeClass("active"),$("#up-item").removeClass("active"),$("#custom-item").removeClass("active")})),$("#up").click((function(e){e.preventDefault(),$("#up").addClass("current-link"),$("#resident").removeClass("current-link"),$("#noresident").removeClass("current-link"),$("#custom").removeClass("current-link"),$("#up-item").addClass("active"),$("#resident-item").removeClass("active"),$("#noresident-item").removeClass("active"),$("#custom-item").removeClass("active")})),$("#custom").click((function(e){e.preventDefault(),$("#custom").addClass("current-link"),$("#resident").removeClass("current-link"),$("#noresident").removeClass("current-link"),$("#up").removeClass("current-link"),$("#custom-item").addClass("active"),$("#resident-item").removeClass("active"),$("#noresident-item").removeClass("active"),$("#up-item").removeClass("active")})),$("body").on("click","#showmore.more",(function(e){e.preventDefault(),$(".operations__documentation-kind.active>.operations__documentation-file.hide").each((function(){$(this).removeClass("hide")})),$("#showmore.more").addClass("less").removeClass("more").html('Скрыть<svg class="more-picture"><use href="./img/svg/sprite/symbol-defs.svg#icon-less" /></svg>')})),$("body").on("click","#showmore.less",(function(e){e.preventDefault(),$(".operations__documentation-kind.active>.operations__documentation-file").filter('[data-show="no"]').each((function(){$(this).addClass("hide")})),$("#showmore.less").removeClass("less").addClass("more").html('Смотреть все<svg class="more-picture"><use href="./img/svg/sprite/symbol-defs.svg#icon-more" /></svg>')})),$("body").on("click","#showmore.more",(function(e){e.preventDefault(),$(".documentation__list>.documentation__item.hide").each((function(){$(this).removeClass("hide")})),$("#showmore.more").addClass("less").removeClass("more").html('Скрыть<svg class="more-picture"><use href="./img/svg/sprite/symbol-defs.svg#icon-less" /></svg>')})),$("body").on("click","#showmore.less",(function(e){e.preventDefault(),$(".documentation__list>.documentation__item").filter('[data-show="no"]').each((function(){$(this).addClass("hide")})),$("#showmore.less").removeClass("less").addClass("more").html('Смотреть все<svg class="more-picture"><use href="./img/svg/sprite/symbol-defs.svg#icon-more" /></svg>')}));