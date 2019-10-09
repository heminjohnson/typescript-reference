// string
let myName: string = "Max";

// number
let myAge: number = 27;

// boolean
let hasHobbies: boolean = false;

// array
let hobbies: any[] = ["cooking", "sports"];

// tuples
let address: [string, number] = ["superStreet", 99];

// enums
enum Color {
  Gray,
  Green = 100,
  Blue = 2
}
let myColor: Color = Color.Blue;
console.log(myColor);

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log("hello");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(10, 2));

// function types
let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string; age: number } = {
  name: "max",
  age: 27
};

// complex
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealAge: number | string = 27;
myRealAge = "27";

// checkTypes
let finalValue = 30;
if (typeof finalValue === "number") {
  console.log("final value is a number");
}

// never
function neverReturns(): never {
  throw new Error("An Error");
}

// Nullable Types
// Refer to strictnullchecks in tsconfig
let canBeNull: number | null = 12;
canBeNull = null;
let canALsoBeNull;
canALsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;
