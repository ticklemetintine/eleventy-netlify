function animateChart(_obj){

    var _o=$(_obj);

    this.on=function(){
        $(_obj).addClass('on');
    }

    this.off=function(){
        $(_obj).removeClass('on');
    }

}