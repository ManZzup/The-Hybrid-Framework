window.addEventListener("load",function(){
    /**
     * Initialize drawer to open and close on touch swipe events
     */
    swipe(document.getElementById("page"),function(direction){
        if(direction == "right"){
            //drawerClose("drawer2");
            drawerOpen("drawer1");
        }else{
            //drawerClose("drawer1");
            //drawerOpen("drawer2");            
        }
    });  
    
    /**
     * Initialize the dialog
     */
    dialog1 = new fries.Dialog({
        selector: "#dialog1",
        callbackOk: function(){
            this.hide();
        },
        callbackCancel: function(){
            this.hide();
        }
    });
    
    var pull = document.getElementById("pull");
    var loader = document.getElementById("loader");
    new EasyPuller(pull, {
			scrollingX: 0,
			scrollingY: 1
    },function(){
    	loader.innerHTML = "Release to refresh";
    },function(){
    	loader.innerHTML = "Pull to refresh";
    },function(){
    	loader.innerHTML = "Refreshing";
    });
    
    
},"false");

function showDialog(){
    dialog1.show();
}
function showToast(){
    var toast = new fries.Toast({
        content: "Hello toast",
        duration: 1000
    });
}
function showSearch(){
    document.getElementById("block-search").style.display = "block";
    document.getElementById("block-buttons").style.display = "none";
}
function hideSearch(){
    document.getElementById("block-search").style.display = "none";
    document.getElementById("block-buttons").style.display = "block";
}
function showMenu(){
    
}
