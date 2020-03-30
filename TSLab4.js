//mountains
var products = [{ name: 'mouse', price: 20 }, { name: 'headset', price: 35 }, { name: 'HDMI', price: 10 }];
function calcAverageProductPrice(prodArray) {
    // add all the items in the array 
    var p = 0;
    for (var _i = 0, prodArray_1 = prodArray; _i < prodArray_1.length; _i++) {
        var items = prodArray_1[_i];
        p += items.price;
    }
    ;
    console.log(p);
    var average = p / prodArray.length;
    console.log(average);
}
;
calcAverageProductPrice(products);
var inventory = [{ name: 'motor', price: 10.00, quantity: 10 },
    { name: 'sensor', price: 12.50, quantity: 4 },
    { name: 'LED', price: 1.00, quantity: 20 }];
function calcInventoryValue(items) {
    //pull items
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var i = items_1[_i];
        console.log(i);
    }
    ;
    //get i.price & i.quantity
    // get total for each item (array(x).price * array(x).quantity)
    var totals = items.map(function (x) {
        return x.price * x.quantity;
    });
    console.log(totals);
    //add all totals together
    var p = 0;
    for (var _a = 0, totals_1 = totals; _a < totals_1.length; _a++) { // pulling all the totals into an array
        var i = totals_1[_a];
        p += i;
    }
    ;
    console.log(p);
    //return total
}
calcInventoryValue(inventory);
