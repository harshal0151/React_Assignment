const restaurants = [
  {
    "name": "The Gourmet Bistro",
    "cuisine": "French",
    "location": "123 Main St, Paris, France",
    "rating": 4.8,
    "famous_dish": "Coq au Vin"
  },
  {
    "name": "Sushi World",
    "cuisine": "Japanese",
    "location": "456 Sushi Ave, Tokyo, Japan",
    "rating": 4.7,
    "famous_dish": "Sushi Platter"
  },
  {
    "name": "Pasta Palace",
    "cuisine": "Italian",
    "location": "789 Pasta Rd, Rome, Italy",
    "rating": 4.5,
    "famous_dish": "Spaghetti Carbonara"
  },
  {
    "name": "Taco Town",
    "cuisine": "Mexican",
    "location": "101 Taco Ln, Mexico City, Mexico",
    "rating": 4.3,
    "famous_dish": "Tacos al Pastor"
  },
  {
    "name": "Curry House",
    "cuisine": "Indian",
    "location": "202 Spice Blvd, Mumbai, India",
    "rating": 4.6,
    "famous_dish": "Chicken Tikka Masala"
  },
  {
    "name": "Burger Haven",
    "cuisine": "American",
    "location": "303 Burger St, New York, USA",
    "rating": 4.4,
    "famous_dish": "Classic Cheeseburger"
  },
  {
    "name": "Dragon's Delight",
    "cuisine": "Chinese",
    "location": "404 Dragon Rd, Beijing, China",
    "rating": 4.7,
    "famous_dish": "Peking Duck"
  },
  {
    "name": "Le Café Parisien",
    "cuisine": "French",
    "location": "555 Bistro St, Lyon, France",
    "rating": 4.5,
    "famous_dish": "Escargot"
  },
  {
    "name": "Zen Garden",
    "cuisine": "Vegetarian",
    "location": "666 Green Way, Kyoto, Japan",
    "rating": 4.6,
    "famous_dish": "Vegetable Tempura"
  },
  {
    "name": "Tapas Tapas",
    "cuisine": "Spanish",
    "location": "777 Tapas St, Barcelona, Spain",
    "rating": 4.8,
    "famous_dish": "Paella"
  },
  {
    "name": "Grill Master",
    "cuisine": "American",
    "location": "123 Grill Rd, Dallas, USA",
    "rating": 4.5,
    "famous_dish": "BBQ Ribs"
  },
  {
    "name": "La Fiesta",
    "cuisine": "Mexican",
    "location": "456 Fiesta Ave, Cancun, Mexico",
    "rating": 4.4,
    "famous_dish": "Chiles Rellenos"
  },
  {
    "name": "Mama's Kitchen",
    "cuisine": "Italian",
    "location": "789 Mama St, Florence, Italy",
    "rating": 4.6,
    "famous_dish": "Lasagna"
  },
  {
    "name": "Curry Express",
    "cuisine": "Indian",
    "location": "101 Spice Ln, Delhi, India",
    "rating": 4.5,
    "famous_dish": "Butter Chicken"
  },
  {
    "name": "Seafood Paradise",
    "cuisine": "Seafood",
    "location": "202 Ocean Blvd, Sydney, Australia",
    "rating": 4.7,
    "famous_dish": "Grilled Lobster"
  },
  {
    "name": "Steak House",
    "cuisine": "American",
    "location": "303 Beef Rd, Chicago, USA",
    "rating": 4.6,
    "famous_dish": "Ribeye Steak"
  },
  {
    "name": "Dim Sum Delight",
    "cuisine": "Chinese",
    "location": "404 Dim Sum Rd, Hong Kong, China",
    "rating": 4.8,
    "famous_dish": "Dim Sum Platter"
  },
  {
    "name": "Pizza Heaven",
    "cuisine": "Italian",
    "location": "555 Pizza St, Naples, Italy",
    "rating": 4.9,
    "famous_dish": "Margherita Pizza"
  },
  {
    "name": "Bistro Bonjour",
    "cuisine": "French",
    "location": "666 Bonjour Blvd, Nice, France",
    "rating": 4.7,
    "famous_dish": "Bouillabaisse"
  },
  {
    "name": "Sushi Zen",
    "cuisine": "Japanese",
    "location": "777 Zen Ave, Kyoto, Japan",
    "rating": 4.6,
    "famous_dish": "Sashimi"
  },
  {
    "name": "Taco Fiesta",
    "cuisine": "Mexican",
    "location": "888 Fiesta St, Guadalajara, Mexico",
    "rating": 4.3,
    "famous_dish": "Enchiladas"
  },
  {
    "name": "Pasta La Vista",
    "cuisine": "Italian",
    "location": "999 Pasta Ave, Venice, Italy",
    "rating": 4.5,
    "famous_dish": "Pasta Primavera"
  },
  {
    "name": "Spice Route",
    "cuisine": "Indian",
    "location": "111 Curry Ln, Bangalore, India",
    "rating": 4.7,
    "famous_dish": "Lamb Rogan Josh"
  },
  {
    "name": "Burger Barn",
    "cuisine": "American",
    "location": "222 Burger Blvd, Los Angeles, USA",
    "rating": 4.5,
    "famous_dish": "Bacon Burger"
  },
  {
    "name": "Dragon's Lair",
    "cuisine": "Chinese",
    "location": "333 Dragon St, Shanghai, China",
    "rating": 4.6,
    "famous_dish": "Sweet and Sour Pork"
  },
  {
    "name": "Le Petit Chef",
    "cuisine": "French",
    "location": "444 Chef Ln, Bordeaux, France",
    "rating": 4.8,
    "famous_dish": "Ratatouille"
  },
  {
    "name": "Sushi House",
    "cuisine": "Japanese",
    "location": "555 Sushi St, Osaka, Japan",
    "rating": 4.7,
    "famous_dish": "Nigiri"
  },
  {
    "name": "Taco Loco",
    "cuisine": "Mexican",
    "location": "666 Taco Ave, Tijuana, Mexico",
    "rating": 4.4,
    "famous_dish": "Burritos"
  },
  {
    "name": "Trattoria Bella",
    "cuisine": "Italian",
    "location": "777 Bella Blvd, Milan, Italy",
    "rating": 4.8,
    "famous_dish": "Risotto"
  },
  {
    "name": "Curry King",
    "cuisine": "Indian",
    "location": "888 Spice Blvd, Jaipur, India",
    "rating": 4.6,
    "famous_dish": "Biryani"
  },
  {
    "name": "Burger Blast",
    "cuisine": "American",
    "location": "999 Burger Rd, Miami, USA",
    "rating": 4.3,
    "famous_dish": "Double Cheeseburger"
  }
];

export default restaurants;
