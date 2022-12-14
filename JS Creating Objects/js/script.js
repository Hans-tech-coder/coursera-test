// Object creation
// var company = new Object();
// company.name = "Facebook";

// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "Blue";

// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);

// console.log(company["name"]);

// var stockPropName = "stock of company";
// company[stockPropName] = 220;
// console.log("Stock price is: " + company[stockPropName]);

// Better waay: object literal
var facebook = {
  name: "Facebook",
  ceo: {
    firstName: "Mark",
    favColor: "Blue"
  },
  "stock of company": 220
};

console.log(facebook.ceo.firstName);