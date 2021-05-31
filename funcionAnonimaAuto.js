//funcion anonima autoejecutable
(function(d,w,c){

    console.log(d);
    console.log(w);
    c.log(c);
})(document,window,console);
//clasica
(function(){
    console.log("funcion anonima");
})();

//crockford
((function(){
    console.log("funcion");
})());

//unaria
+function(){
    console.log("unaria");
}();

!function(){
    console.log("facebook");
}();
