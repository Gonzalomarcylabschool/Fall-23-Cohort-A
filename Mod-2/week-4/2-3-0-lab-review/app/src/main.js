import './style.css'
import { listFunc } from './utils';
const listItems =[1, 2, 3, 4, 5]
const ul = document.querySelector('ul');

listItems.forEach((num)=>{
  listFunc(num, ul);
})