var faker = require('faker');
const materials = require("./materials.json");

var database = { products: [], 
                 suppliers: [],
                 articals: [],
                 colors: [],
                 materials: materials};

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

  if(i<=50){
  database.articals.push({
    id: i,
    text: faker.lorem.sentence(3)
  });
  };

  if(i<=20){
    database.colors.push({
      id: i,
      name: faker.commerce.color()
    });
  };
};

console.log(JSON.stringify(database));