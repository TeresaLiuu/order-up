/* eslint-disable max-len */
'use strict';

const menuSeed = [
  {
    category: `Food`,
    name: `Charcuterie Board`,
    price: `18.00`,
    description: `Beechers Flagship Cheddar, Prosciutto, Grapes, and Grand Central Bakery Multigrain Bread`,
    pairing: `Pinot Grigio`,
    prepareTime: 10,
    ingredients: [
      {
        productName: `Beecher's Flagship Cheddar`,
        quantity: 1
      },
      {
        productName: `Multigrain Bread`,
        quantity: 1
      },
      {
        productName: `Prosciutto`,
        quantity: 1
      },
      {
        productName: `Grapes`,
        quantity: 1
      }
    ]
  },
  {
    category: `Food`,
    name: `Hand Cut Fries doused in Cheddar Sauce`,
    price: `6.00`,
    description: `Shoestring fries seasoned with salt and pepper with a drizzling of cheddar sauce for extra oomph`,
    pairing: `IPA`,
    prepareTime: 10,
    ingredients: [
      {
        productName: `Potatoes`,
        quantity: 1
      },
      {
        productName: `Beecher's Flagship Cheddar`,
        quantity: 1
      }
    ]
  },
  {
    category: `Food`,
    name: `Oysters by the Number`,
    price: `4.00`,
    description: `Fresh Hama Hama oysters served with sides of cocktail sauce and mignonette`,
    pairing: `Pilsner`,
    prepareTime: 15,
    ingredients: [
      {
        productName: `Oysters`,
        quantity: 1
      }
    ]
  },
  {
    category: `Food`,
    name: `Potato Hash`,
    price: `10.00`,
    description: `Crispy potatoes served with veggies and melted Swiss`,
    pairing: `IPA`,
    prepareTime: 15,
    ingredients: [
      {
        productName: `Potatoes`,
        quantity: 1
      },
      {
        productName: `Onions`,
        quantity: 1
      },
      {
        productName: `Gossner Sliced Natural Swiss`,
        quantity: 1
      },
      {
        productName: `Mushrooms`,
        quantity: 1
      },
      {
        productName: `Spinach`,
        quantity: 1
      },
      {
        productName: `Tomato`,
        quantity: 1
      }
    ]
  },
  {
    category: `Food`,
    name: `Grilled Veggie Sandwich`,
    price: `12.50`,
    description: `Grilled broccoli, carrots, spinach and feta on toasty naan`,
    pairing: `Pilsner`,
    prepareTime: 20,
    ingredients: [
      {
        productName: `Broccoli`,
        quantity: 1
      },
      {
        productName: `Carrots`,
        quantity: 1
      },
      {
        productName: `Spinach`,
        quantity: 1
      },
      {
        productName: `Feta`,
        quantity: 1
      }
    ]
  },
  {
    category: `Food`,
    name: `Beef Tacos`,
    price: `9.00`,
    description: `Beef tacos wrapped in a flour tortila with cheddar cheese`,
    pairing: `Spiced Rum`,
    prepareTime: 15,
    ingredients: [
      {
        productName: `Ground Beef`,
        quantity: 1
      },
      {
        productName: `Beecher's Flagship Cheddar`,
        quantity: 1
      },
      {
        productName: `Flour Tortilla`,
        quantity: 1
      }
    ]
  },
  {
    category: `Food`,
    name: `Veggie Tacos`,
    price: `9.00`,
    description: `Veggie tacos wrapped in a flour tortila with pepper jack cheese`,
    pairing: `Silver Rum`,
    prepareTime: 15,
    ingredients: [
      {
        productName: `Spinach`,
        quantity: 1
      },
      {
        productName: `Tomato`,
        quantity: 1
      },
      {
        productName: `Onions`,
        quantity: 1
      },
      {
        productName: `Broccoli`,
        quantity: 1
      },
      {
        productName: `Mushrooms`,
        quantity: 1
      },
      {
        productName: `Pepper Jack`,
        quantity: 1
      },
      {
        productName: `Flour Tortilla`,
        quantity: 1
      }
    ]
  },
  {
    category: `Food`,
    name: `The Burger to End all Burgers`,
    price: `14.50`,
    description: `1/2 lb burger on toasted Grand Central Bakery Como bread. Toppings include fried onions, mushrooms, and pepperjack cheese.`,
    pairing: `Amber`,
    prepareTime: 20,
    ingredients: [
      {
        productName: `Como Bread`,
        quantity: 1
      },
      {
        productName: `Ground Beef`,
        quantity: 1
      },
      {
        productName: `Onions`,
        quantity: 1
      },
      {
        productName: `Mushrooms`,
        quantity: 1
      },
      {
        productName: `Pepper Jack Cheese`,
        quantity: 1
      }
    ]
  },
  {
    category: `Food`,
    name: `Roasted Lemon Garlic Chicken`,
    price: `20.99`,
    description: `Served with charred broccoli and roasted baby red potatoes. `,
    pairing: `Pilsner`,
    prepareTime: 25,
    ingredients: [
      {
        productName: `Chicken`,
        quantity: 1
      },
      {
        productName: `Broccoli`,
        quantity: 1
      },
      {
        productName: `Baby Red Potatoes`,
        quantity: 1
      }
    ]
  },
  {
    category: `Food`,
    name: `NY Strip Steak Frites`,
    price: `30.00`,
    description: `Served with asparagus, basil butter, garlic aioli and hand cut fries`,
    pairing: `Malbec`,
    prepareTime: 25,
    ingredients: [
      {
        productName: `NY Strip`,
        quantity: 1
      },
      {
        productName: `Potatoes`,
        quantity: 1
      },
      {
        productName: `Asparagus`,
        quantity: 1
      }
    ]
  },
  {
    category: `Food`,
    name: `Prosciutto Wrapped Chicken with Mushrooms`,
    price: `20.99`,
    description: `Served with roasted baby red potatoes. `,
    pairing: `Pinot Grigio`,
    prepareTime: 25,
    ingredients: [
      {
        productName: `Chicken`,
        quantity: 1
      },
      {
        productName: `Prosciutto`,
        quantity: 1
      },
      {
        productName: `Mushrooms`,
        quantity: 1
      },
      {
        productName: `Baby Red Potatoes`,
        quantity: 1
      }
    ]
  },

  {
    category: `Beverage`,
    name: `Pinot Grigio`,
    price: `7.99`,
    description: `Dry white wine that has a punchy acidity with flavors of lemons, limes, green apples and honeysuckle`,
    pairing: `Charcuterie`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Pinot Grigio`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Malbec`,
    price: `7.99`,
    description: `Dark, inky purple color profiles and ripe flavors of plums, black cherry, and blackberry can give this wine a decidedly jammy character`,
    pairing: `NY Strip Steak Frites`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Malbec`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Pilsner`,
    price: `6.99`,
    description: `Light straw color with spicy floral and strong hop flavors`,
    pairing: `Roasted Lemon Garlic Chicken`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Pilsner`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Amber`,
    price: `6.99`,
    description: `Quite malty but not heavily caramelized in flavor`,
    pairing: `The Burger to End All Burgers`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Amber`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `IPA`,
    price: `6.99`,
    description: `Bitter, floral, earthy, citrusy, piney, fruity`,
    pairing: `Hand Cut Fries`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `IPA`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Vodka`,
    price: `8.99`,
    description: `Clear liquor best served in tropical drinks`,
    pairing: `Oysters by the Number`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Vodka`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Gin`,
    price: `8.99`,
    description: `Clear liquor, juniper forward best served in a martini`,
    pairing: `Roasted Lemon Garlic Chicken`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Gin`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Whiskey`,
    price: `8.99`,
    description: `Amber colored liquor with strong smokey flavors`,
    pairing: `NY Strip Steak Frites`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Whiskey`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Spiced Rum`,
    price: `8.99`,
    description: `Amber colored liquor with spicey flavor`,
    pairing: `The Burger to End all Burgers`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Spiced Rum`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Silver Rum`,
    price: `8.99`,
    description: `Clear colored liquor with subtle spiced flavor`,
    pairing: `Grilled Veggie Sandwich`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Silver Rum`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Coca Cola`,
    price: `2.99`,
    description: `Soft Beverage`,
    pairing: `Hand Cut Fries doused in Cheddar Sauce`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Coca Cola`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Sprite`,
    price: `2.99`,
    description: `Soft Beverage`,
    pairing: `Hand Cut Fries doused in Cheddar Sauce`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Sprite`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Root Beer`,
    price: `2.99`,
    description: `Soft Beverage`,
    pairing: `Hand Cut Fries doused in Cheddar Sauce`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Root Beer`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Club Soda`,
    price: `1.99`,
    description: `Soft Beverage`,
    pairing: `Hand Cut Fries doused in Cheddar Sauce`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Club Soda`,
        quantity: 1
      }
    ]
  },
  {
    category: `Beverage`,
    name: `Orange Juice`,
    price: `2.99`,
    description: `Juice Beverage`,
    pairing: `Oysters by the Number`,
    prepareTime: 5,
    ingredients: [
      {
        productName: `Orange Juice`,
        quantity: 1
      }
    ]
  }
];

module.exports = {
  menuSeed
};
