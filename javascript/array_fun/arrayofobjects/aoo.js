const Mobile_Collection = {
    Brand: { name: "OnePlus", condition: "Brand New", Dealer: "S.K. Mobiles", Warranty: "2 Years" },
    Model: "OnePlus 12R",
    specification: "Snapdragon 8 Gen 2",
    Expected_price: 45000
}
console.log(Mobile_Collection.Brand.Dealer);


const Refrigerator_Unit = {
    Brand: "Samsung",
    Model: { name: "CoolMax", capacity: "350L", Manufacturer: "Samsung India Pvt Ltd" },
    Covered: "Blue steel",
    specification: "Automatic Defrost",
    Expected_price: 38000
}
console.log(Refrigerator_Unit.Model.capacity);


const AirPods = {
    Brand: "Apple",
    Model: { Gen: 3, warranty: "1 year", Sound_quality: "Dolby Surround" },
    specification: "Wireless Charging pod",
    Expected_price: 23000
}
console.log(AirPods.Model.Sound_quality);


const Scooter = {
    Brand: "Honda",
    Model: { name: "Activa", series: "6G", engine: "110cc", color: "Red" },
    specification: "Fuel Efficient",
    Expected_price: 95000
}
console.log(Scooter.Model.series);


const Washing_Machine = {
    Brand: { name: "IFB", location: "Chennai", engineer: "Arun", delivery_days: 5 },
    Model: "Front Load Turbo",
    specification: "7kg Capacity with Heater",
    Expected_price: 42000
}
console.log(Washing_Machine.Brand.engineer);


const SmartWatch_Selection = {
    Brand: "Fire-Boltt",
    Model: { name: "Invincible Plus", support: "Bluetooth Call", healthMonitor: true },
    specification: "AMOLED Display",
    Expected_price: 8000
}
console.log(SmartWatch_Selection.Model.support);


const Laptops = [
    {
        Brand: "HP",
        Model: { name: "Pavilion", generation: "12th Gen", processor: "i5" },
        Expected_price: 62000
    },
    {
        Brand: "Dell",
        Model: { name: "Inspiron", generation: "11th Gen", processor: "i3" },
        Expected_price: 48000
    }
]
console.log(Laptops[0].Model.processor);


const Bikes = [
    {
        Brand: "Royal Enfield",
        Model: { name: "Meteor 350", type: "Cruiser", engine: "349cc" },
        Expected_price: 210000
    },
    {
        Brand: "TVS",
        Model: { name: "Raider", type: "Commuter", engine: "125cc" },
        Expected_price: 100000
    }
]
console.log(Bikes[1].Model.engine);


const Products_Shop = [
    {
        item: "Microwave",
        details: { brand: "Panasonic", warranty: "3 Years", power: "1200W" },
        price: 12000
    },
    {
        item: "Toaster",
        details: { brand: "Morphy Richards", warranty: "2 Years", power: "900W" },
        price: 3500
    }
]
console.log(Products_Shop[0].details.power);


const Courses_List = [
    {
        name: "Full Stack Development",
        Instructor: { name: "Sathish", experience: 6 },
        duration: "6 Months"
    },
    {
        name: "UI/UX Design",
        Instructor: { name: "Divya", experience: 4 },
        duration: "4 Months"
    }
]
console.log(Courses_List[1].Instructor.name);


const Employee_Records = [
    {
        emp_name: "Vikram",
        department: { name: "Finance", manager: "Leela" },
        salary: 52000
    },
    {
        emp_name: "Karthik",
        department: { name: "Marketing", manager: "Ramesh" },
        salary: 48000
    }
]
console.log(Employee_Records[0].department.manager);


const Gadgets = [
    {
        item: "Bluetooth Speaker",
        model: { name: "Boat Stone", features: "Waterproof", battery: "10hrs" },
        price: 2500
    },
    {
        item: "Gaming Mouse",
        model: { name: "Logitech G502", features: "RGB Lighting", dpi: "16000" },
        price: 4500
    }
]
console.log(Gadgets[1].model.features);
