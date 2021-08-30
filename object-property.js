const friends = [
    {id : 01, name : "Nikka"},
    {id : 02, name : "Boltu"},
    {id : 03, name : "Kyabla"},
    {id : 04, name : "Maku"},
    {id : 05, name : "vyado"}
];

const names = friends.map(s => s.name);
console.log(names);

const ids = friends.map(s => s.id);
console.log(ids);