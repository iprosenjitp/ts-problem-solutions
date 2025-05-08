function formatString(input: string, toUpper?: boolean): string {
    let convertedInput: string = input.toLowerCase();

    if (toUpper === true || toUpper === undefined) {
        convertedInput = input.toUpperCase();
    }

    return convertedInput;
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter((item) => (item.rating >= 4.0));
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    arrays.forEach(array => {
        result.push(...array);
    })

    return result;
}

class Vehicle {
    private make: string;
    year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel() {
        console.log(`Model: ${this.model}`);
    }
}

function processValue(value: string | number): number {
    if(typeof value === "string") {
        return value.length;
    }
    return (value * 2);
}

interface Product {
    name: string;
    price: number;
}
  
function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length === 0) {
        return null;
    }

    let maxPrice: number =  products[0].price;
    let result: Product = products[0];
    
    for(const product of products) {
        if(product.price > maxPrice) {
            maxPrice = product.price;
            result = product;
        }
    }

    return result;
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
  
function getDayType(day: Day): string {
    if(day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
    return new Promise<number> ((resolve, reject) => {
        if(n >= 0) {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
        else {
            reject("Negative number not allowed");
        }
    });
}



 

