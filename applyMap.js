const student = [
    { id: 21, name: 'shakil' },
    { id: 31, name: 'fariha' },
    { id: 41, name: 'jannat' },
    { id: 51, name: 'safa' },
];

const nameArray = student.map(s => s.name);
const idArray = student.map(s => s.id);
const bigId = student.filter(s => s.id > 31);
const findBaby = student.find(s => s.id >31);

console.log(nameArray);
console.log(idArray);
console.log(bigId);
console.log(findBaby);
