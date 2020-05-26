localStorage.setItem("Мышь", 20);
localStorage.setItem("Чайник", 50);
localStorage.setItem("Светильник", 100);
localStorage.setItem("Весы", 30);

(function(){
    let no = document.querySelectorAll('.No');
    let elem = no.length;
    while(elem--){
        no[elem].onclick = noClick;
        function noClick(e){
            let el = e ? e.target : window.event.srcElement;
            if(el.tagName === "BUTTON"){
                if(el.className === "add") {
                    if(el.nextElementSibling.value < "50") el.nextElementSibling.value++, check();
                    else return;
                    }
                    else {
                        if(el.previousElementSibling.value != "1") el.previousElementSibling.value--, check();
                        else return;
                    }
                };
            }
        }
    }(), check());

(function(){
let colecsh = document.querySelectorAll('.remove');
let colecshLength = colecsh.length;
while(colecshLength--){
    colecsh[colecshLength].onclick = show;
    function show(e){
        let elem = e ? e.target : window.event.srcElement;
        let shut = elem.closest('.close');
        shut.remove();
        check();
    }
    }
}());

function check(){
let sum = document.querySelectorAll(".No");
let sumLength = sum.length;
let orderValue = 0;
let elements;
while(sumLength--){
    elements = sum[sumLength];
    let numValue = elements.querySelector('.num').value;
    let nameKesh =  elements.querySelector('[name]').getAttribute("Name");
    let sumValue = localStorage.getItem(nameKesh);
    let order = numValue * sumValue;
    orderValue += order;
    elements.querySelector('.sum').innerHTML = order;
}
itog.innerHTML = orderValue;
localStorage.setItem("Order", orderValue)
};