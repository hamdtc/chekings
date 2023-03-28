
const human = { name: 'Ananya' };
function intro(age) { return `${this.name} is ${age}`;} 
console.log(intro.call(human, 21)); 
console.log(intro.bind(human, 21));
