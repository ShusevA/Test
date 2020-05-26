form.oninput = function(){
    if(Name.value  && Address.value && Phone.value && Email.value) {
    subm.removeAttribute("disabled");
    }
}
let num = document.getElementById("Phone");
 num.onkeypress = function(e){
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    let ag = getChar(e);
    if (ag == null) return;
    if(ag == "+") return true;
    if(!num.value.match(/^\+/))return false;
    if (ag < '0' || ag > '9') {
    return false;
            }
        }
function getChar(event) {
    if (event.which == null) {
    if (event.keyCode < 32) return null;
    return String.fromCharCode(event.keyCode);
}
    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which);
    }
        return null;
        }
Email.onblur = function() {
    if(!this.value.match(/.+@.+\../i)){
    this.className = "error";
    error.innerHTML = "Invalid e-mail";
}
};
Email.onfocus = function() {
    if (this.className == 'error') {
    this.className = "";
    error.innerHTML = "";
}
};
if(localStorage.getItem("Order") >= "300"){
    document.querySelector('.delivery').setAttribute("disabled", true)
}