import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

//Some basic typescript tests

function assert(arg:boolean, msg){
  if (!arg) throw msg;
}

//variables
if (true){let a = 2;} //can't access a out here!
//const make a reference immutable
const a  = 2; //can't write to a out here.
const b = 3;

//destructuring
let input = [1, 2]; let [first, second] = input; assert(first === 1, 'first == 1');
let obj = {c: 1, d: 2}; let {c, d} = obj; assert(c===1, 'c == 1');
//default values
function keep(wholeObject: {a: string, b?:number}){
  let {a, b = 100} = wholeObject;
}

//spread operator
let foo = {a:1, b:2};
let bar = {c: 3, d: 4};
let baz = {...foo, ...bar};
assert(baz.a === 1, 'baz.a ==1 ');

//enum
enum Colors {RED, BLUE,GREEN};

//classes and instances

class User {
  constructor(public id : number, public name : string, public dob : Date){}
}
let u : User = new User(1, 'alice', new Date('1999'));
