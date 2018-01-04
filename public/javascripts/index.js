/**
 * Created by admin on 2017/12/21.
 */
function IndexImageMoveIn(p){
    p.children[0].setAttribute("class", "hint");
}

function IndexImageMoveOut(p) {
    p.children[0].setAttribute("class", "hint-hind");
}

//$("div.index-view .hint-back").mouseenter(IndexImageMoveIn);
//$("div.index-view .hint").mouseleave(IndexImageMoveOut);