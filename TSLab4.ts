//mountains

interface Mountain{
    name: string;
    height: number;
}

const mountains: Mountain[] = [{name: 'Kilimanjaro', height: 19341}, 
{name: 'Everest', height: 29029}, 
{name: 'Denali', height: 20310}];

console.log(mountains);

function findNameOfTallestMountain(mtnArray) {
    let tallest = 0;
    mtnArray.forEach(mnt => {
        if(mnt.height > tallest) {
            tallest = mnt.height;
        }
    });
     let mtnID = mtnArray.forEach(mnt => {
         if(mnt.height === tallest) {
             console.log(mnt.name);
         }
     });   
};
      findNameOfTallestMountain(mountains); 


//products
interface Product {
    name: string;
    price: number;
}

const products: Product[] = [{name:'mouse', price: 20}, {name:'headset', price: 35}, {name:'HDMI', price: 10}];

function calcAverageProductPrice(prodArray){
    // add all the items in the array 
    let p = 0;
    for(let items of prodArray){
        p += items.price        
    };
    console.log(p);
    
    let average = p / prodArray.length
    console.log(average);
};
calcAverageProductPrice(products);

//interface
interface InventoryItem extends Product{
    quantity: number;
}

const inventory: InventoryItem[] = [{name:'motor', price: 10.00, quantity: 10},
{name:'sensor', price: 12.50, quantity: 4},
{name:'LED', price: 1.00, quantity: 20}];

function calcInventoryValue (items) {
    //pull items
    for(let i of items){
        console.log(i);
    };
    //get i.price & i.quantity

    // get total for each item (array(x).price * array(x).quantity)
    let totals = items.map(x => 
    x.price * x.quantity
    );
    console.log(totals);

    //add all totals together
    let p = 0;
    for(let i of totals){ // pulling all the totals into an array
        p += i     
    };
    console.log(p);
    //return total
} 
calcInventoryValue (inventory);






