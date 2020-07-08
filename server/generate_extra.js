var faker = require('faker');
const fs = require('fs')
var materialArray = require("./materials.json");

var database = { products: [], 
                 suppliers: [],
                 articles: [],
                 colors: [],
                 materials: []};

//Product
for (var i = 1; i<= 300; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number()
  });

  database.suppliers.push({
    id: i,
    name: faker.company.companyName()
  });
};

//acticles
for(var i = 1; i<= 50; i++){
  database.articles.push({
    id: i,
    text: faker.lorem.sentence(3)
  });
};

//colors
for(var i = 1; i<= 20; i++){
  database.colors.push({
    id: i,
    name: faker.commerce.color()
  });
};

//Yarn material 
var arr = materialArray.Materials; //array of material
arr.forEach(element => {
  database.materials.push({
    id: element.id,
    name: element.matName
  });    
});

console.log(JSON.stringify(database));