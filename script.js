let firstClass = document.getElementById('first_class')
let vat = document.getElementById('vat')
let total = document.getElementById('total')
let economy = document.getElementById('economy')
function priceCount(increaseDecrease) {
    var subTotal = document.getElementById('subtotal')
   if(increaseDecrease=='increase'){
    subTotal.innerHTML = parseInt(subTotal.innerHTML) + 150
    vat.innerHTML = parseInt(subTotal.innerHTML) * 0.1
    total.innerHTML = parseInt(subTotal.innerHTML) + parseInt(vat.innerHTML)
   }else{
    subTotal.innerHTML = parseInt(subTotal.innerHTML) - 150
    vat.innerHTML = parseInt(subTotal.innerHTML) * 0.1
    total.innerHTML = parseInt(subTotal.innerHTML) + parseInt(vat.innerHTML)
   }
}
function priceCount1(increaseDecrease) {
    var subTotal = document.getElementById('subtotal')
    if(increaseDecrease=='increase'){
     subTotal.innerHTML = parseInt(subTotal.innerHTML) + 100
     vat.innerHTML = parseInt(subTotal.innerHTML) * 0.1
     total.innerHTML = parseInt(subTotal.innerHTML) + parseInt(vat.innerHTML)
    }else{
     subTotal.innerHTML = parseInt(subTotal.innerHTML) - 100
     vat.innerHTML = parseInt(subTotal.innerHTML) * 0.1
     total.innerHTML = parseInt(subTotal.innerHTML) + parseInt(vat.innerHTML)
    }
}
function increaseNumber(itemQuantity) {
    var itemValue = document.getElementById(itemQuantity).value
    var newValue = parseInt(itemValue) + 1
    document.getElementById(itemQuantity).value = newValue
    if(itemQuantity=='first_class'){
        priceCount('increase')
    }else{
        priceCount1('increase')
    }
}
function decreaseNumber(itemQuantity) {
    var itemValue = document.getElementById(itemQuantity).value
    if(itemValue<=0){
        itemValue = 0
        
    }else{
        var newValue = parseInt(itemValue) - 1
        document.getElementById(itemQuantity).value = newValue
        var subTotal = document.getElementById('subtotal')
        if(itemQuantity=='first_class'){
            priceCount('decrease')
        }else{
            priceCount1('decrease')
        }

    }
}
 