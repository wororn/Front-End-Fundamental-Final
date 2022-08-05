window.onscroll=function(){
    scrollfunction()
};

function scrollfunction(){
    if (document.body.scrollTop>20 ||document.documentElement.scrollTop>20){
        document.getElementById("navbar").style.top="-1px";
        document.getElementById("navbar").style.left="-35px";
    }else{
        document.getElementById("navbar").style.top="100px";
        document.getElementById("navbar").style.left="30px";
    }

};

