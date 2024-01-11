let sales:number =121_212_121;
let course:string ="TypeScript";
let isPublised: boolean =true;
let level;   

function render(document:any){
  console.log(document);
}
//                   Array
// let arr:number[] =[1,2,3,"Harshit"];

// if type is not defined then it will act as :any default for JS
let arr1 =[];
arr1[0]=1;
arr1[1]="String";

arr1.forEach((n)=>{
    n
})

//                   Tuples
let user:[number,string] = [1,'Harshit'];

//                    Enums
const enum Size {Small =1, Medium =2, Large=3}; //always use const with enum it gives more optimiized code
let  mySize:Size=Size.Medium;
// console.log(mySize);

//                    Functions =>Ts provides return type to the functions
function calculateTax(income:number,taxYear=2022): number{
  if((taxYear )<2022)
     return income*1.2;
  return income*1.3
}

calculateTax(10_000,2022) //calculateTax(10_000) can perform in TS but with default Parameters

//                      Object
// let employee:{
//   readonly id:number,
//   name:string,
//   retire:(date:Date)=> void //how to define method in the obejct
// }={id:1,
//   name:"Harshit Joshi",
//   retire:(date:Date)=>{
//     console.log(date);
//   }
// }

// console.log(employee);

// employee.id =0; cannot modify these property (readonly)

//                      Type Alias
 type Employee={
  readonly id:number,
  name:String,
  retire:(date:Date)=>void
 }

 let employee:Employee={
    id:1,
    name:'Mosh',
    retire:(date:Date)=>{
      console.log(date);
    }
 }

//  console.log(employee.retire);

//                      Union Types
function kgToLbs(weight:number|string){
  //Narrowing
  if(typeof weight ==="number"){
    return weight*2.2;           // now we get all methods in number object
  }else{
    return parseInt(weight)*2.2;
  }
  //  weight.                         //in this case we can only use a union of functions that is common between number and string SOLUTION USE Narrowing
}
kgToLbs(10);
kgToLbs("10Kg");

//                       Intersection Types
type Draggable={
  drag:()=>void
};
type Resizable={
  resize:()=>void
}
type UIWidget=Draggable & Resizable;

let textBox:UIWidget={
  drag:()=>{},
  resize:()=>{}
}
//                         Literal Types
 let value:100 | 50=100;

 type metric='Kilometer' | 'meter';

 let distance:metric='meter';
//  console.log(value);

 //                    Nullable Types
 function greet(name:string |null|undefined){
  if(name)
  console.log(name.toUpperCase());
  else
  console.log('Hola!')
 }
//  greet(null);

 //                   Optional Property Access Operator


type Customer={
  birthday:Date
};

function getCustomer(id:number): Customer | null | undefined{
  return id===0 ? null :{birthday:new Date()};
}
 let customer=getCustomer(0);
//  if(customer!=null && customer!==undefined)

  console.log(customer?.birthday);

//                      Optional element Access Operator

  customer?.birthday;
//                       Optinal  Call


