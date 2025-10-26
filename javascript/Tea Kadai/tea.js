let teaShopTitle = "Rajini Murugan Tea Stall";
console.log(teaShopTitle);

let funny_tea_location = "KK Nagar ";
console.log(funny_tea_location);

let annaTeaNumber = 9952850095;
console.log(annaTeaNumber);

let kadai_menu = { group1: "Tea", group2: "Coffee", group3: "Snacks", group4: "Juice" };
console.log(kadai_menu.group1);

let kadaiTeaTypes = ["Oru Strong Tea", "Iru Ginger Tea", "Naalu Sombu Tea", "Boss Special Choco Tea"];
console.log(kadaiTeaTypes);

let kadaiTeaRates = { strongTea: 10, gingerTea: 15, sombuTea: 20, bossTea: 25, chocoTea: 30 };
console.log(kadaiTeaRates);

let kadai_menu2 = { group1: "Tea", group2: "Coffee", group3: "Snacks", group4: "Juice" };
console.log(kadai_menu2.group2);

let funnyCoffeeTypes = ["Filter Coffee", "Expresso", "Latte Vetti", "Roast-u", "Sweet-naa Raw-u"];
console.log(funnyCoffeeTypes);

let funnyCoffeeRates = { Filter_Coffee: 25, Expresso: 50, Latte_Vetti: 70, Roast_u: 90, Sweet_Raw: 120 };
console.log(funnyCoffeeRates);

let kadai_menu3 = { group1: "Tea", group2: "Coffee", group3: "Snacks", group4: "Juice" };
console.log(kadai_menu3.group3);

let tiffinCorner = {
  puffs: ["Veg Puff", "Kozhi Puff", "Mushroom Puff"],
  sandwich: ["Veg Mayo Sandwich", "Egg Toast Sandwich", "Chicken Grill Sandwich"],
  burger: ["Veg Burger", "Chicken Burger", "Beef-a Burger", "Periya Tandoori Burger"],
};
console.log(tiffinCorner.puffs[0]);

let snackRateList = {
  puffPrice: { veg_puff: 20, kozhi_puff: 30, mushroom_puff: 25 },
  sandwichPrice: { veg: 40, egg: 50, chicken: 70 },
  burgerPrice: { veg: 60, chicken: 80, beef: 90, tandoori: 100 },
};
console.log(snackRateList.puffPrice);

let kadai_menu4 = { group1: "Tea", group2: "Coffee", group3: "Snacks", group4: "Juice" };
console.log(kadai_menu4.group4);

let juiceMadness = ["Naiga Melon", "Pomegranate Paavam", "Water-Melon Super", "ABC Juice (Athu Best Combo)"];
console.log(juiceMadness);

let juiceMoney = { Naiga_Melon: 40, Pomegranate: 50, Water_Melon_Super: 30, ABC_Juice: 70 };
console.log(juiceMoney);


const thirstyCustomer = (dialogue) => {
  console.log(dialogue);
};
thirstyCustomer("Customer: Machan, oru Coffee kudunga da!");

const lazyWaiter = (reply) => {
  console.log(reply);
};
lazyWaiter("Waiter: Coffee illa bro, Tea dhaan iruku. Juice venuma?");

const customerSwitch = (juiceWish) => {
  console.log(juiceWish);
};
customerSwitch("Customer: Okay boss, Water-Melon Juice podunga...");

const waiterCheck = "Waiter: Seri, kitchen la ketu varren!";
console.log(waiterCheck);

const backKitchen = (juiceName) => {
  if (juiceName == "Water_Melon_Super") {
    console.log("Waiter: Super sir, available. 5 mins la varum!");
  } else {
    console.log("Waiter: Illa sir, try other drink!");
  }
};
backKitchen("Water_Melon_Super");

const juiceServing = (readyMsg) => {
  console.log(readyMsg);
};
juiceServing("Waiter: Idunga sir, unga Water-Melon juice, fresh-a iruku!");

const billing = (billText) => {
  console.log(billText);
};
billing("Waiter: Total 30 rupees, anna!");

const funnyPayment = (payText) => {
  console.log(payText);
};
funnyPayment("Customer: Bro, GPay la send panna okay va?");

const kadaiOwner = "Owner: GPay, PhonePe, Paytm — ellam okay bro!";
console.log(kadaiOwner);

const paymentDone = () => {
  console.log("Customer: Paid bro, check pannunga!");
};
paymentDone();

let teaThanks = () => {
  console.log("Owner: Aha! Payment received 😄. Rajini Murugan Tea Stall-ku marubadiyum varunga bro!");
};
teaThanks();
