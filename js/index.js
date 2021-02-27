// 使用单例模式来实现
// 传入实参引入jQuery
let detailShow = (function($) {
    function showDetailImage() {
        let $product = $('.product'),
            $body = $('body'),
            $productList = $product.children('li'),
            $detail = null;

        function computed(ev) {
            $detail.css({
                left: ev.pageX + 15,
                top: ev.pageY + 15,
                position: "absolute"
            })
        }
        $productList.mouseover(function(ev) {
            let $this = $(this),
                bigImg = $this.children('img').attr('big-img');
            // this:当前操作的Li
            if (!$detail) {
                $body.append(`<div class="detail">
                <img src="${bigImg}" alt="">
            </div>`);
                $detail = $('.detail');
            }

            computed(ev);
        }).mouseout(function(ev) {
            if ($detail) {
                $detail.remove(); //将这个元素从页面中移除,变量存储的值还在
                $detail = null;
            }
        }).mousemove(computed);
    }
    return {
        init: showDetailImage
    }
})($);
detailShow.init();