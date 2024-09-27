const marvel_heroes=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"];
// console.log(marvel_heroes.push(dc));
// console.log(marvel_heroes);
const newHeroes=marvel_heroes.concat(dc);
console.log(newHeroes);
const all_new_heroes=[...marvel_heroes,...dc]
console.log(all_new_heroes)
const another_array=[1,2,3,4,[5,6],[,7,8,4,[6,4,3,]]]
const flat_array=another_array.flat(2);
console.log(flat_array);
console.log(Array.isArray("Ashish"))
console.log(Array.from("Ashish"));
let score_1=100;
let score_2=900;
console.log(Array.of(score_1,score_2));



