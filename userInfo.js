//task three

const { formatArrayStrings } = require("./arrayManipulation");

function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) =>({ 
    originalName: name,
    modifiedName: modifiedNames[index],
    id:index + 1
  }));
}

//example
const name = ["Amponsah,Bresaa,Darkwah,Nyarko,Ayisi"]
const profiles = createUserProfiles(names,formatttedStrings);
console.log(profiles);

/*output
[
  { originalName: "Amponsah", modifiedName: "Kofi", id: 1},
  { originalName: "Bresaa", modifiedName: "Abena", id: 2},
  { originalName: "Darkwah", modifiedName: "Jhay", id: 3},
  { originalName: "Nyarko", modifiedName: "Kwame", id: 4},
  { originalName: "Ayisi", modifiedName: "Ama", id: 5},
]
*/

module.exports = {createUserProfiles};