const laptops = [
  {
    id: 1,
    brand: "ASUS",
    model: "TUF Gaming A15",
    price: 94990,
    category: "gaming",

    performance: 95,
    gaming: 98,
    battery: 72,
    display: 86,
    portability: 55,
    value: 91,

    specs: {
      processor: "Ryzen 7",
      gpu: "RTX 4060",
      ram: "16 GB",
      storage: "1 TB SSD",
      display: "15.6-inch 144Hz",
      battery: "6.5 hrs",
    },

    pros: [
      "Excellent gaming performance",
      "Strong GPU",
      "Good upgradeability",
    ],

    cons: [
      "Heavy",
      "Average battery life",
    ],
  },

  {
    id: 2,
    brand: "Lenovo",
    model: "LOQ 15",
    price: 89990,
    category: "gaming",

    performance: 90,
    gaming: 92,
    battery: 76,
    display: 89,
    portability: 60,
    value: 94,

    specs: {
      processor: "Core i7",
      gpu: "RTX 4050",
      ram: "16 GB",
      storage: "1 TB SSD",
      display: "15.6-inch 165Hz",
      battery: "7.2 hrs",
    },

    pros: [
      "Excellent value",
      "Great display",
      "Good battery",
    ],

    cons: [
      "Bulky",
      "Slightly weaker GPU",
    ],
  },

  {
    id: 3,
    brand: "HP",
    model: "Victus 15",
    price: 87990,
    category: "gaming",

    performance: 88,
    gaming: 90,
    battery: 70,
    display: 82,
    portability: 63,
    value: 89,

    specs: {
      processor: "Ryzen 7",
      gpu: "RTX 4060",
      ram: "16 GB",
      storage: "512 GB SSD",
      display: "15.6-inch 144Hz",
      battery: "5.8 hrs",
    },

    pros: [
      "Strong gaming performance",
      "Good GPU",
      "Competitive price",
    ],

    cons: [
      "Lower storage",
      "Average display brightness",
    ],
  },

  {
    id: 4,
    brand: "Acer",
    model: "Nitro V",
    price: 82990,
    category: "gaming",

    performance: 86,
    gaming: 88,
    battery: 68,
    display: 84,
    portability: 61,
    value: 95,

    specs: {
      processor: "Core i7",
      gpu: "RTX 4050",
      ram: "16 GB",
      storage: "512 GB SSD",
      display: "15.6-inch 144Hz",
      battery: "6 hrs",
    },

    pros: [
      "Excellent value",
      "Good gaming performance",
      "Affordable entry point",
    ],

    cons: [
      "Build could be better",
      "Average battery",
    ],
  },

  {
    id: 5,
    brand: "ASUS",
    model: "ROG Strix G16",
    price: 119990,
    category: "gaming",

    performance: 99,
    gaming: 99,
    battery: 68,
    display: 97,
    portability: 48,
    value: 86,

    specs: {
      processor: "Core i9",
      gpu: "RTX 4060",
      ram: "16 GB",
      storage: "1 TB SSD",
      display: "16-inch 165Hz",
      battery: "6 hrs",
    },

    pros: [
      "Top-tier performance",
      "Excellent display",
      "Powerful GPU",
    ],

    cons: [
      "Expensive",
      "Heavy",
    ],
  },

  {
    id: 6,
    brand: "MSI",
    model: "Katana 15",
    price: 91990,
    category: "gaming",

    performance: 91,
    gaming: 94,
    battery: 64,
    display: 80,
    portability: 52,
    value: 92,

    specs: {
      processor: "Core i7",
      gpu: "RTX 4060",
      ram: "16 GB",
      storage: "1 TB SSD",
      display: "15.6-inch 144Hz",
      battery: "5.5 hrs",
    },

    pros: [
      "Strong gaming hardware",
      "Good value",
      "RTX 4060",
    ],

    cons: [
      "Average display",
      "Shorter battery life",
    ],
  },

  {
    id: 7,
    brand: "Apple",
    model: "MacBook Air M4",
    price: 99990,
    category: "general",

    performance: 91,
    gaming: 45,
    battery: 98,
    display: 94,
    portability: 96,
    value: 88,

    specs: {
      processor: "Apple M4",
      gpu: "Integrated",
      ram: "16 GB",
      storage: "512 GB SSD",
      display: "13.6-inch Retina",
      battery: "16+ hrs",
    },

    pros: [
      "Excellent battery life",
      "Very portable",
      "Excellent display",
    ],

    cons: [
      "Not ideal for gaming",
      "Limited upgradeability",
    ],
  },

  {
    id: 8,
    brand: "ASUS",
    model: "Vivobook 16",
    price: 72990,
    category: "general",

    performance: 82,
    gaming: 58,
    battery: 86,
    display: 85,
    portability: 74,
    value: 93,

    specs: {
      processor: "Core i7",
      gpu: "Integrated",
      ram: "16 GB",
      storage: "512 GB SSD",
      display: "16-inch",
      battery: "10 hrs",
    },

    pros: [
      "Great value",
      "Large display",
      "Good everyday performance",
    ],

    cons: [
      "Not for serious gaming",
      "Average speakers",
    ],
  },

  {
    id: 9,
    brand: "Lenovo",
    model: "IdeaPad Slim 5",
    price: 67990,
    category: "general",

    performance: 80,
    gaming: 50,
    battery: 89,
    display: 83,
    portability: 82,
    value: 94,

    specs: {
      processor: "Ryzen 7",
      gpu: "Integrated",
      ram: "16 GB",
      storage: "512 GB SSD",
      display: "14-inch",
      battery: "11 hrs",
    },

    pros: [
      "Excellent student laptop",
      "Good battery",
      "Strong value",
    ],

    cons: [
      "Not designed for gaming",
      "Basic graphics",
    ],
  },

  {
    id: 10,
    brand: "HP",
    model: "Pavilion Plus",
    price: 74990,
    category: "general",

    performance: 83,
    gaming: 55,
    battery: 84,
    display: 91,
    portability: 85,
    value: 89,

    specs: {
      processor: "Core i7",
      gpu: "Integrated",
      ram: "16 GB",
      storage: "512 GB SSD",
      display: "14-inch 2.8K",
      battery: "9 hrs",
    },

    pros: [
      "Excellent display",
      "Portable",
      "Good everyday performance",
    ],

    cons: [
      "Limited gaming",
      "Average upgradeability",
    ],
  },

  {
    id: 11,
    brand: "Lenovo",
    model: "Legion 5",
    price: 114990,
    category: "creator",

    performance: 97,
    gaming: 97,
    battery: 70,
    display: 94,
    portability: 50,
    value: 88,

    specs: {
      processor: "Ryzen 7",
      gpu: "RTX 4060",
      ram: "16 GB",
      storage: "1 TB SSD",
      display: "15.6-inch 165Hz",
      battery: "6 hrs",
    },

    pros: [
      "Excellent performance",
      "Great display",
      "Good for creative workloads",
    ],

    cons: [
      "Heavy",
      "Expensive",
    ],
  },

  {
    id: 12,
    brand: "ASUS",
    model: "Zenbook 14",
    price: 89990,
    category: "creator",

    performance: 88,
    gaming: 48,
    battery: 95,
    display: 96,
    portability: 94,
    value: 87,

    specs: {
      processor: "Core Ultra 7",
      gpu: "Integrated",
      ram: "16 GB",
      storage: "1 TB SSD",
      display: "14-inch OLED",
      battery: "13 hrs",
    },

    pros: [
      "Excellent display",
      "Very portable",
      "Long battery life",
    ],

    cons: [
      "Not a gaming machine",
      "Premium price",
    ],
  },

  {
    id: 13,
    brand: "HP",
    model: "Envy 14",
    price: 94990,
    category: "creator",

    performance: 89,
    gaming: 55,
    battery: 88,
    display: 94,
    portability: 87,
    value: 86,

    specs: {
      processor: "Core Ultra 7",
      gpu: "Integrated",
      ram: "16 GB",
      storage: "1 TB SSD",
      display: "14-inch OLED",
      battery: "10 hrs",
    },

    pros: [
      "Premium build",
      "Excellent display",
      "Good productivity performance",
    ],

    cons: [
      "Expensive",
      "Limited gaming",
    ],
  },

  {
    id: 14,
    brand: "Acer",
    model: "Swift Go",
    price: 69990,
    category: "general",

    performance: 81,
    gaming: 46,
    battery: 91,
    display: 90,
    portability: 93,
    value: 92,

    specs: {
      processor: "Core Ultra 5",
      gpu: "Integrated",
      ram: "16 GB",
      storage: "512 GB SSD",
      display: "14-inch OLED",
      battery: "12 hrs",
    },

    pros: [
      "Very portable",
      "Good battery",
      "Strong value",
    ],

    cons: [
      "Not for gaming",
      "Average performance",
    ],
  },

  {
    id: 15,
    brand: "Lenovo",
    model: "Yoga Slim",
    price: 84990,
    category: "general",

    performance: 85,
    gaming: 50,
    battery: 93,
    display: 92,
    portability: 95,
    value: 90,

    specs: {
      processor: "Core Ultra 7",
      gpu: "Integrated",
      ram: "16 GB",
      storage: "1 TB SSD",
      display: "14-inch OLED",
      battery: "13 hrs",
    },

    pros: [
      "Excellent portability",
      "Great battery",
      "Premium display",
    ],

    cons: [
      "Limited gaming",
      "Not upgrade-friendly",
    ],
  },
];

export default laptops;