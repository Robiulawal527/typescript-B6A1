
function formatValue(givenValue: string | number | boolean): string | number | boolean 

{
    
    if ( typeof givenValue === "string"){

        return givenValue.toUpperCase();

    }

    else if ( typeof givenValue === "number") {
        return givenValue * 10;
    }

    else if (typeof givenValue === "boolean"){


        return !givenValue;
    }

    return givenValue;

}






function getLength(values: string | any[]): number {

    if (typeof values === "string")
        
    {

        return values.length;

    }

    else if(Array.isArray(values))
        
    {


        return values.length;
    }


    return 0;
}






class Person{

    name: string;
    age: number;

    constructor(name: string, age: number)
    
    {
        this.name = name;
        this.age = age;
    }

    getDetails(): string
    
    {
        return `Name: ${this.name}, Age: ${this.age}`;

    }


}






type itemsAre = { title : string ; rating :  number};

function filterByRating(items_are: itemsAre[]): itemsAre[]

{

    return items_are.filter(item => item.rating >= 4);
}

type Users = { id: number; name: string; email: string; isActive: boolean} ;

function filterActiveUsers(users: Users[]): Users[]

{

    return users.filter(user => user.isActive);


}






interface Book{

    title: string; 
    author: string; 
    publishedYear: number;
    isAvailable: boolean;

}

function printBookDetails(b : Book) : string{


    const available = b.isAvailable ? 'Yes' : 'No';

    
    return `Title: ${b.title}, Author: ${b.author}, Published: ${b.publishedYear}, Available: ${available}` ;


}





function getUniqueValues(array_one: number[] | string[], array_two: number[] | string[]): (number |string)[]

{


    const result : (number | string )[] = [] ;

    const addingIfMissing = (values : number | string) =>{
        let flag = false;
        for(let i = 0;  i< result.length; i++){
            if(result[i] === values){

                flag = true;

                break;
            }
        }

        if (!flag){
            result.push(values);
        }
    };

    for(const item of array_one){
        addingIfMissing(item);
    }

    for(const item of array_two){
        addingIfMissing(item);
    }


    return result; 

}





type Product= { name: string; price: number; quantity: number; discout?: number};


function calculateTotalPrice(productsare: Product[]): number


{


    return productsare.reduce
    (
        
        (total, product) => 
        {

            const Price = product.price * product.quantity; 
            let discoutedPrice: number;
            if (product.discout) {
            discoutedPrice = Price * (1 - product.discout / 100);
            } else {
            discoutedPrice = Price;
            }

            return total + discoutedPrice;
        }, 0 
    );

}


