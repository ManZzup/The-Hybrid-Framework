var SCROLL_THRESHOLD = 50;
var SWIPE_THRESHOLD = 20;
var isTouch = false;
var prevX = 0;
var prevY = 0;
var curX = 0;
var curY = 0;

/**
 * 
 * @param {DOMElement} target
 * @param {Function(swipe-direction)} callback
 * Used to detect a swipe and to check it's direction, basic usage for the
 * drawer open and close
 */
function swipe(target,callback){
    target.addEventListener('touchstart',function(e){
        isTouch = true;
        prevX = e.changedTouches[0].clientX;
        prevY = e.changedTouches[0].clientY;
        //alert(prevX);
    });
    target.addEventListener('touchend',function(e){
        curX = e.changedTouches[0].clientX;
        curY = e.changedTouches[0].clientY;
        checkSwipe(e);
        isTouch = false;
        prevX = 0;       
    });
    target.addEventListener('touchmove',function(e){
        if(isTouch){
            curX = e.changedTouches[0].clientX;
            curY = e.changedTouches[0].clientY;
            checkSwipe(e);
        }
    });
    
    function checkSwipe(e){
        if(Math.abs(curY - prevY) >= SCROLL_THRESHOLD){
            isTouch = false;
            prevX = 0;
            curX = 0;
            return;
        }
        if(curX - prevX >= SWIPE_THRESHOLD){
             if(isTouch){
		     callback("right");
		     isTouch = false;
		     prevX = 0;
		     curX = 0;
		     e.preventDefault();		     
		     return false;
             }
        }
        if(prevX - curX >= SWIPE_THRESHOLD){
             if(isTouch){
		     callback("left");
		     isTouch = false;
		     prevX = 0;
		     curX = 0;
		     e.preventDefault();
		     return false;
             }
        }
    }
}
