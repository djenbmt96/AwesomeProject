import Type from '../Enum.js';
let count= 0;
export default function(state=count, action){
  switch (action.type) {
    case Type.INCREAMENT: count++;
      break;
    case Type.DECREAMENT: count--;
      break;
  }
  return count;
}