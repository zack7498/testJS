let map = new Map();

map.set(`a`, `hello`);
map.set(`b`, `world`);

for(let [key, value] of map){
  console.log(`key: `, key);
  console.log(`value:`, value);
}