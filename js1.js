age = [1,2,3,4,5]
ageObj = [{id:1},{id:4},{id:3},{id:2}];
let a;
let b;
const one = () => {
 return age.every((number) => a = number);
}
one();
const two =()=> {
  return ageObj.every((object) => b =object.id);
}
two();
const compare = (one,two) => {
  console.log(typeof one)
  console.log(typeof two)
console.log(one === two);
}

compare(a,b);