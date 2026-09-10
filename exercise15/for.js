let users = [
    {name: "fadumo",age: 30, city: "baydhabo"},
    {name: "faarax",age: 35,city: "muqdisho"},
    {name: "najma",age: 35,city: "hargeysa"}
];

for (let user of users) {
    for (let key in user) {
        console.log(key + ": " + user[key]);
    }

    console.log("---");
}
