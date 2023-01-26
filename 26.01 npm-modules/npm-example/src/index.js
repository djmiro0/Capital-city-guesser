import { myTestFunction } from './modules/testmodule';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'; //importing css 
import moment from 'moment'; //use of third party module npm module.
import Typed from 'typed.js';


console.log("Hello World! Welcome to my app This is a test");
console.log("Hello welcome :D");

myTestFunction();

const h1 = document.querySelector('h1');
h1.innerText = 'I changed the h1 element';

const currentDate = moment(new Date());
const dateNextWeek = currentDate.add(1,'week');
console.log("the moment in one week is", dateNextWeek.format('LLLL'));

const timeResult = document.querySelector('#time-result');
timeResult.innerText = `${dateNextWeek.format('LLLL')}`;

let options = {
    strings: ['', '$ git add . ^1000 <br>$ git commit -m "hello" <br>$ git push origin main'],
    typeSpeed: 60
  };

let typed = new Typed('.terminal-background', options); 