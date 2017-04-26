/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];



 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

//Array properties
var CustomerDB = new function() {
  this.customers = new Array();
  this.addresses = new Array();
  this.stores = new Array();
}

//Main "insertData" Function(Method)
CustomerDB.insertData = function (allData) {

  for (var i  = 0; i < allData.length; i++) {
    
    if (allData[i]["type"] == "store") {
      CustomerDB.addStore(allData[i]);
      
    } else if (allData[i]["type"] == "customer") {
      CustomerDB.addCustomer(allData[i]);
      
    } else if (allData[i]["type"] == "address") {
      CustomerDB.addAddress(allData[i]);
    }
  }
}

/******************** Customer methods ********************/
CustomerDB.addCustomer = function (customerObj) { //set "add_date" to current date
  var thisDay = new Date();
  customerObj["data"]["add_date"] = thisDay;
  this.customers.push(customerObj);
}

CustomerDB.outputAllCustomers = function () {
  console.log("All Customers");
  
  for (var i  = 0; i < this.customers.length; i++) {
    
    //Customer object
    CustomerDB.outputCustomerById(this.customers[i]["data"]["customer_id"]);
  }
}

CustomerDB.outputCustomerById = function (customer_id) {

  for (var i  = 0; i < this.customers.length; i++) {
    var customerObj = this.customers[i]["data"];
    
    if (customerObj["customer_id"] == customer_id) {
      console.log("\nCustomer " + customerObj["customer_id"] + ": " + customerObj["first_name"] + " " + customerObj["last_name"] + " (" + customerObj["email"] + ") ");
      
      //Address object 
      var addrObj = CustomerDB.getAddressById(customerObj["address_id"]);
      console.log("Home Address: " + addrObj["data"]["address"] + " " + addrObj["data"]["city"] + ", " + addrObj["data"]["province"] + ". " + addrObj["data"]["postal_code"]);
      
      //Join date
      console.log("Joined: " + customerObj["add_date"] + "\n");
    }
  }
}

CustomerDB.outputCustomersByStore  = function (store_id) {
 
  var storeObj = CustomerDB.getStoreById(store_id);
  console.log("Customers in Store: " + storeObj["data"]["name"]);

  for (var i = 0; i < this.customers.length; i++) {
    var customerObj = this.customers[i]["data"];
  
    if (customerObj["store_id"] == store_id) {
      CustomerDB.outputCustomerById(customerObj["customer_id"] + "\n");
    }
  }
  console.log("\n");
}

CustomerDB.removeCustomerById = function (customer_id) {

  var Found = false;
  var index = 0;

  for (var i = 0; i < this.customers.length; i++) {
    if (customer_id == this.customers[i]["data"]["customer_id"]) {
      Found = true;
      index = i;
    }
  }

  if (Found) {
    CustomerDB.removeAddressById(this.customers[index]["data"]["address_id"]);
  }

  this.customers.splice(index, 1);
}


/******************** Store methods ********************/

CustomerDB.addStore = function (storeObj) {
  this.stores.push(storeObj);
}

CustomerDB.getStoreById = function (store_id) {
  
  var index = 0;
 
  for (var i = 0; i < this.stores.length; i++) {
    var storeObj = this.stores[i]["data"];
 
    if (storeObj["store_id"] == store_id) {
      index = i;
    }
  }
  return this.stores[index];
}

CustomerDB.outputAllStores = function () {
  console.log("All Stores\n");
 
  for (var i  = 0; i < this.stores.length; i++) {
    var storeObj = this.stores[i]["data"]; 
    var locationObj = CustomerDB.getAddressById(storeObj["address_id"]);
    var locationObj = locationObj["data"];

    console.log("\nStore " + storeObj["store_id"] + ": " + storeObj["name"] + "\n");
    console.log("Location: " + locationObj["address"] + " " + locationObj["city"] + ", " + locationObj["province"] + " " + locationObj["postal_code"]);
  }
}

/******************** Address methods ********************/
CustomerDB.addAddress = function (addressObj) {
  this.addresses.push(addressObj);
}

CustomerDB.outputAllAddresses = function () {
  console.log("All Addresses");
  
  for (var i  = 0; i < this.addresses.length; i++) {
    
    //Printing address
    var addrObj = this.addresses[i]["data"];
    console.log("\nAddress " + addrObj["address_id"] + ": " + addrObj["address"] + " " + addrObj["city"] + ", " + addrObj["province"] + ". " + addrObj["postal_code"] + "\n");
  }
}

CustomerDB.getAddressById = function (address_id) {
  var index = 0;
 
  for (var i = 0; i < this.addresses.length; i++) {
    var addressObj = this.addresses[i];
 
    if (addressObj["data"]["address_id"] == address_id) {
      index = i;
    }
  }
  return this.addresses[index];
}

CustomerDB.removeAddressById = function (address_id) {
 
  var addressIndex = 0;
  var index = 0;
  var Found = false;

  for (var i = 0; i < this.addresses.length; i++) {
    var addrObj = this.addresses[i]["data"];
    
    if (addrObj["address_id"] == address_id) {
      addressIndex++;
      
      if (addressIndex == 1) {
        if (address_id != 4536) { 
          index = i;
          Found = true;
        }
      }
    }
  }

  if (Found) {
    
    var storeExist = false;
    var customerAddressExist = false;
    var compareAddress = address_id;

    //if store exist 
    for (i  = 0; i < this.stores.length; i++) {
      
      if (compareAddress == this.stores[i]["data"]["address_id"]) {
        storeExist = true;
        
      }
    }

    //if customer also exist
    for (i  = 0; i < this.customers.length; i++) {
      
      if (compareAddress == this.customers[i]["data"]["address_id"]) {
        if (i != index) {
          customerAddressExist = true;
        }
      }
    }

    if (storeExist != false || customerAddressExist != false) {
      this.addresses.splice(index, 1);
    }
  }
}



/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/

// Insert all Data into the Database

CustomerDB.insertData(allData);


// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n");

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n");

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n");

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n");

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n");

