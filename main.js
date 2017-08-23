var coffeeShop = {
    beans: 40,
    money: 100,

    buysupplies: function(BUYBEANS) {
        coffeeShop.beans += BUYBEANS;
        coffeeShop.money -= BUYBEANS * 2;
        alert("We just bought " + BUYBEANS + " packages of beans, and now we have " + coffeeShop.beans + " packages of beans in stock.  We also just spent " + BUYBEANS * 2 + " dollars on the supplies.  We have $" + coffeeShop.money + " in our bank account!")
    },

    drinkRequirements: {
        latte: {
            beanRequirement: 10,
            price: 4
        },
        americano: {
            beanRequirement: 5,
            price: 2
        },
        doubleshot: {
            beanRequirement: 15,
            price: 7
        },
        frenchpress: {
            beanRequirement: 12,
            price: 5
        }
    },

    makeDrink: function(drinkType) {

        var drinkRequest = this['drinkRequirements'][drinkType.toLowerCase()]; //  the first object put in '' so it's not a variable.

        if (drinkRequest) {
            var beanRequirement = this.drinkRequirements[drinkType.toLowerCase()].beanRequirement
        } else {
            return alert("Sorry, we don't make " + drinkType + ".");
        }

        if (beanRequirement < this.beans) {
            this.beans -= beanRequirement;
            alert('' + drinkType + " coming right up!");
        } else {
            alert("Sorry, we do not have enough beans in stock!");
        }
    }
}

coffeeShop.makeDrink("latte");
console.log(coffeeShop.beans);
coffeeShop.makeDrink("americano");
console.log(coffeeShop.beans);
coffeeShop.makeDrink("filtered");
console.log(coffeeShop.beans);
coffeeShop.makeDrink("doubleShot");
console.log(coffeeShop.beans);
coffeeShop.makeDrink("frenchPress");
console.log(coffeeShop.beans);

coffeeShop.buysupplies(10);
console.log(coffeeShop.beans);
console.log("$" + coffeeShop.money);