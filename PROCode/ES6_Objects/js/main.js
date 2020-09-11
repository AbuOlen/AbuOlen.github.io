const invoiceImp = {
  order_item1: {
    product: {
      name: "milk",
      packaging: {
        quantity: 20,
        type_package: "soft polyethylene", 
      },
      storage_conditions: {
        temperature: {
          min: -3,
          max: 5,
        },
      },
      expiration_period: 5,
      production_date: new Date(2020, 08, 09),
    },
    quantity: 3,
  },

  order_item2: {
    product: {
      name: "butter",
      packaging: {
        quantity: 30,
        type_package: "paper",
      },
      storage_conditions: {
        temperature: {
          min: -11,
          max: -6,
        },
      },
      expiration_period: 45,
      production_date: new Date(2020, 07, 10),
    },
    quantity: 4,
  },

  order_item3: {
    product: {
      name: "yogurt",
      packaging: {
        quantity: 6,
        type_package: "plastic",
      },
      storage_conditions: {
        temperature: {
          min: -3,
          max: 10,
        },
      },
      expiration_period: 7,
      production_date: new Date(2020, 08, 09),
    },
    quantity: 7,
  },

  order_item4: {
    product: {
      name: "ice_cream",
      packaging: {
        quantity: 12,
        type_package: "waffle",
      },
      storage_conditions: {
        temperature: {
          min: -30,
          max: -18,
        },
      },
      expiration_period: 290,
      production_date: new Date(2020, 07, 10),
    },
    quantity: 2,
  },
};

const invoiceExp = {};

let today = new Date();   
let received = 0;
let returned = 0;
let propName = 0;

function imp_exp(tempMax, expPeriod, prodDate, quantity, prodQuantity) {
  if (
    tempMax > -5 &&
    expPeriod - (today - prodDate) / (1000 * 60 * 60 * 24) > 2
  ) {
    received += quantity * prodQuantity;
  } else {
    returned += quantity * prodQuantity;
    invoiceExp[propName] = item;
    propName++;
  }
};

let item = invoiceImp.order_item1;
imp_exp(item.product.storage_conditions.temperature.max, item.product.expiration_period, 
  item.product.production_date, item.quantity, item.product.packaging.quantity);

item = invoiceImp.order_item2;
imp_exp(item.product.storage_conditions.temperature.max, item.product.expiration_period, 
  item.product.production_date, item.quantity, item.product.packaging.quantity);

item = invoiceImp.order_item3;
imp_exp(item.product.storage_conditions.temperature.max, item.product.expiration_period, 
  item.product.production_date, item.quantity, item.product.packaging.quantity);

item = invoiceImp.order_item4;
imp_exp(item.product.storage_conditions.temperature.max, item.product.expiration_period, 
  item.product.production_date, item.quantity, item.product.packaging.quantity);

console.log(invoiceExp);

document.getElementById("imp").innerHTML = "Прийнято " + received + " од.";

document.getElementById("exp").innerHTML  = " Не прийнято " + returned + " од.";