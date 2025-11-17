
function formatValue(value: string | number | boolean): string | number | boolean {
    
    if (typeof value === "string"){
        return value.toUpperCase();
    }

    else if ( typeof value === "number") {
        return value * 10;
    }

    else if(typeof value === "boolean"){
        return !value;
    }

    return value;

}






function getLength(value: string | any[]): number {

    if (typeof value === "string"){

        return value.length;
    }

    else if(Array.isArray(value)){

        return value.length;
    }


    return 0;
}






class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}`;

    }


}






type Item = {title: string; rating: number};

function filterByRating(items: Item[]): Item[]{

    return items.filter(item => item.rating >= 4);
}

type User = {id: number; name: string; email: string; isActive: boolean};

function filterActiveUsers(users: User[]): User[]{

    return users.filter(user => user.isActive);


}






interface Book{

    title: string; 
    author: string; 
    publishedYear: number;
    isAvailable: boolean;

}

function printBookDetails(book: Book): string{


    const available = book.isAvailable ? 'Yes' : 'No';

    
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}` ;


}





function getUniqueValues(arr_1: number[] | string[], arr_2: number[] | string[]): (number |string)[] {


    const result : (number | string )[] = [] ;

    const addIfMissing = (value : number | string) =>{
        let found = false;
        for(let i = 0;  i< result.length; i++){
            if(result[i] === value){

                found = true;

                break;
            }
        }

        if (!found){
            result.push(value);
        }
    };

    for(const item of arr_1){
        addIfMissing(item);
    }

    for(const item of arr_2){
        addIfMissing(item);
    }


    return result; 

}





type Product= { name: string; price: number; quantity: number; discount?: number};


function calculateTotalPrice(products: Product[]): number{


    return products.reduce((total, product) => {

        const price = product.price * product.quantity; 
        const discoutedPrice = product.discount ? price * (1- product.discount / 100): price; 

        return total + discoutedPrice;
    }, 0);

}


