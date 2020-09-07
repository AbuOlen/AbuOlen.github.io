const invoiceImp = {
  order_item1: {
    product: {
      name: "milk",
      quantity: 20,
      type_package: "soft polyethylene",
      storage_conditions: {
        temperature: {
          min: -3,
          max: 5,
        },
      },
      expiration_period: 5,
      production_date: new Date(2020, 08, 05),
    },
    quantity: 3,
  },

  order_item2: {
    product: {
      name: "butter",
      quantity: 30,
      type_package: "paper",
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
      quantity: 6,
      type_package: "plastic",
      storage_conditions: {
        temperature: {
          min: -3,
          max: 10,
        },
      },
      expiration_period: 7,
      production_date: new Date(2020, 08, 03),
    },
    quantity: 7,
  },

  order_item4: {
    product: {
      name: "ice_cream",
      quantity: 12,
      type_package: "waffle",
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


let today = new Date();   
let received = 0;
let returned = 0;
let item = invoiceImp.order_item1;


if (
  item.product.storage_conditions.temperature.max > -5 &&
  item.product.expiration_period -
    (today - item.product.production_date) / (1000 * 60 * 60 * 24) >2) {
  received += item.quantity * item.product.quantity;
} else {
  returned += item.quantity * item.product.quantity;
}

item = invoiceImp.order_item2;


if (
  item.product.storage_conditions.temperature.max > -5 &&
  item.product.expiration_period -
    (today - item.product.production_date) / (1000 * 60 * 60 * 24) >2) {
  received += item.quantity * item.product.quantity;
} else {
  returned += item.quantity * item.product.quantity;
}

item = invoiceImp.order_item3;


if (
  item.product.storage_conditions.temperature.max > -5 &&
  item.product.expiration_period -
    (today - item.product.production_date) / (1000 * 60 * 60 * 24) >2) {
  received += item.quantity * item.product.quantity;
} else {
  returned += item.quantity * item.product.quantity;
}

item = invoiceImp.order_item4;


if (
  item.product.storage_conditions.temperature.max > -5 &&
  item.product.expiration_period -
    (today - item.product.production_date) / (1000 * 60 * 60 * 24) >2) {
  received += item.quantity * item.product.quantity;
} else {
  returned += item.quantity * item.product.quantity;
}


document.getElementById("imp").innerHTML = "Прийнято " + received + " од.";

document.getElementById("exp").innerHTML  = " Не прийнято " + returned + " од.";