// foodItems.js

// List of common allergens (for reference):
// "milk", "peanuts", "eggs", "wheat", "fish", "shellfish", "soy", "tree_nuts", "sesame"

export const FOOD_ITEMS = [
  {
    id: 'milk-carton',
    name: 'Milk Carton',
    emoji: '🥛',
    allergens: ['milk'],
    safeFor: ['peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'peanut-butter',
    name: 'Peanut Butter',
    emoji: '🥜',
    allergens: ['peanuts'],
    safeFor: ['milk', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'apple',
    name: 'Apple',
    emoji: '🍎',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'bread',
    name: 'Bread',
    emoji: '🍞',
    allergens: ['wheat'],
    safeFor: ['milk', 'peanuts', 'eggs', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'egg-omelette',
    name: 'Egg Omelette',
    emoji: '🍳',
    allergens: ['eggs'],
    safeFor: ['milk', 'peanuts', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'carrot',
    name: 'Carrot',
    emoji: '🥕',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'fish-stick',
    name: 'Fish Stick',
    emoji: '🐟',
    allergens: ['fish'],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'yogurt',
    name: 'Yogurt',
    emoji: '🥛',
    allergens: ['milk'],
    safeFor: ['peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'banana',
    name: 'Banana',
    emoji: '🍌',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'cereal',
    name: 'Cereal',
    emoji: '🥣',
    allergens: ['wheat'],
    safeFor: ['milk', 'peanuts', 'eggs', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'cookie',
    name: 'Cookie',
    emoji: '🍪',
    allergens: ['eggs', 'wheat'],
    safeFor: ['milk', 'peanuts', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'smoothie',
    name: 'Smoothie',
    emoji: '🥤',
    allergens: ['milk'],
    safeFor: ['peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'salad',
    name: 'Salad',
    emoji: '🥗',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'cheese',
    name: 'Cheese',
    emoji: '🧀',
    allergens: ['milk'],
    safeFor: ['peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'almonds',
    name: 'Almonds',
    emoji: '🌰',
    allergens: ['tree_nuts'],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'sesame']
  },
  {
    id: 'cashews',
    name: 'Cashews',
    emoji: '🌰',
    allergens: ['tree_nuts'],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'sesame']
  },
  {
    id: 'soy-milk',
    name: 'Soy Milk',
    emoji: '🥛',
    allergens: ['soy'],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'tree_nuts', 'sesame']
  },
  {
    id: 'tofu',
    name: 'Tofu',
    emoji: '🍲',
    allergens: ['soy'],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'tree_nuts', 'sesame']
  },
  {
    id: 'shrimp',
    name: 'Shrimp',
    emoji: '🍤',
    allergens: ['shellfish'],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'crab',
    name: 'Crab',
    emoji: '🦀',
    allergens: ['shellfish'],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'oatmeal',
    name: 'Oatmeal',
    emoji: '🥣',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    emoji: '🍫',
    allergens: ['milk', 'peanuts'],
    safeFor: ['eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'granola',
    name: 'Granola',
    emoji: '🥣',
    allergens: ['wheat', 'tree_nuts'],
    safeFor: ['milk', 'peanuts', 'eggs', 'fish', 'shellfish', 'soy', 'sesame']
  },
  {
    id: 'ice-cream',
    name: 'Ice Cream',
    emoji: '🍨',
    allergens: ['milk', 'eggs'],
    safeFor: ['peanuts', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'butter',
    name: 'Butter',
    emoji: '🧈',
    allergens: ['milk'],
    safeFor: ['peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'whipped-cream',
    name: 'Whipped Cream',
    emoji: '🍦',
    allergens: ['milk'],
    safeFor: ['peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'lemon',
    name: 'Lemon',
    emoji: '🍋',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'orange',
    name: 'Orange',
    emoji: '🍊',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'grapes',
    name: 'Grapes',
    emoji: '🍇',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'tomato',
    name: 'Tomato',
    emoji: '🍅',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'pasta',
    name: 'Pasta',
    emoji: '🍝',
    allergens: ['wheat'],
    safeFor: ['milk', 'peanuts', 'eggs', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'lasagna',
    name: 'Lasagna',
    emoji: '🍝',
    allergens: ['wheat', 'milk', 'eggs'],
    safeFor: ['peanuts', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'pizza',
    name: 'Pizza',
    emoji: '🍕',
    allergens: ['wheat', 'milk', 'eggs'],
    safeFor: ['peanuts', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'bacon',
    name: 'Bacon',
    emoji: '🥓',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'scrambled-eggs',
    name: 'Scrambled Eggs',
    emoji: '🍳',
    allergens: ['eggs'],
    safeFor: ['milk', 'peanuts', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'hot-dog',
    name: 'Hot Dog',
    emoji: '🌭',
    allergens: ['wheat'],
    safeFor: ['milk', 'peanuts', 'eggs', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'french-fries',
    name: 'French Fries',
    emoji: '🍟',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'soda',
    name: 'Soda',
    emoji: '🥤',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'coffee',
    name: 'Coffee',
    emoji: '☕',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  },
  {
    id: 'tea',
    name: 'Tea',
    emoji: '🍵',
    allergens: [],
    safeFor: ['milk', 'peanuts', 'eggs', 'wheat', 'fish', 'shellfish', 'soy', 'tree_nuts', 'sesame']
  }
];
