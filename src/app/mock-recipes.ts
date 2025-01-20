import { WeightType } from './enum';
import { RecipeDetail, TypeList } from './recipe';


export const filterIngredient: string[] = ['apple', 'egg', 'blueberries', 'plain flour', 'butter', 'yogurt', 'sugar', 'ramen', 'steak', 'tomato', 'chicken', 'rice', 'onion'];

export const filterTime: string[] = ['5', '30', '45', '50', '60'];

// export const filterTime: string[] = ['5 mins', '30 mins', '45 mins', '50 mins', '1 hour'];

export const filterType: string[] = ['breakfast', 'brunch', 'lunch', 'dinner', 'beverages', 'desserts', 'bake', 'cupcakes', 'pie', 'cocktail', 'curry'];

export const filterCuisine: string[] = ['american', 'chinese', 'korean', 'indian'];


export const Recipes: RecipeDetail[] = [
    {
        // 1
        id: 1,
        thumbnail: 'assets/pics/bbmf.jpg',
        name: 'Blueberry Muffins',
        hashtag: ['desserts'],
        timeMin: 45,
        author: 'sweets_holic00',
        date: '2024-05-25',
        likeQty: 20,
        commentQty: 8,
        comments: [{
            persona: 'Cia',
            comment: 'good',
            like: 1,
            isLike: 0
        }, {
            persona: 'Coco',
            comment: 'awesome',
            like: 0,
            isLike: 0
        }, {
            persona: 'Amy',
            comment: 'yum yum',
            like: 2,
            isLike: 0
        }, {
            persona: 'Bob',
            comment: 'great',
            like: 0, isLike: 0
        }, {
            persona: 'May',
            comment: 'good recipe',
            like: 0,
            isLike: 0
        }, {
            persona: 'Una',
            comment: 'luv it',
            like: 1,
            isLike: 0
        }, {
            persona: 'Peter',
            comment: '<3',
            like: 3, isLike: 0
        }, {
            persona: 'Elsa',
            comment: 'easy peasy',
            like: 0,
            isLike: 0
        }],
        introduction: 'moist, sweet, and bursting with fruity flavor. ',
        ingredients: [{
            item: 'unsalted butter softened, plus 1 tbsp, melted, for greasing',
            metric: 100,
            type: WeightType.g,
        }, {
            item: 'golden caster sugar',
            metric: 140,
            type: WeightType.g,
        }, {
            item: 'large eggs',
            metric: 2,
            type: WeightType.none,
        }, {
            item: 'natural yogurt',
            metric: 140,
            type: WeightType.g,
        }, {
            item: 'vanilla extract',
            metric: 1,
            type: WeightType.tsp,
        }, {
            item: 'milk',
            metric: 2,
            type: WeightType.tbsp,
        }, {
            item: 'plain flour',
            metric: 250,
            type: WeightType.g,
        }, {
            item: 'baking powder',
            metric: 2,
            type: WeightType.tsp,
        }, {
            item: 'bicarbonate of soda',
            metric: 1,
            type: WeightType.tsp,
        }, {
            item: 'pack blueberries (or use frozen)',
            metric: 125,
            type: WeightType.g,
        }],
        serve: 12,
        step: [`Heat oven to 200C/180C fan/gas 6 and line a 12-hole muffin tin with paper cases.  \n
                Beat the butter and caster sugar together until pale and fluffy. \n
                Add the eggs and beat in for 1 min, then mix in the yogurt, vanilla extract and milk. Combine the flour, baking powder and bicarb in a bowl with 1/4 tsp fine salt, then tip this into the wet ingredients and stir in. \n
                Finally, fold in the blueberries and divide the mixture between the muffin cases.`,
            'Bake for 5 mins, then reduce oven to 180C/160C fan/gas 4 and bake for 15-18 mins more until risen and golden, and a cocktail stick inserted into the centre comes out clean.',
            `Cool in the tin for 10 mins, then carefully lift out onto a wire rack to finish cooling. \n
                Will keep for 3-4 days in an airtight container - after a day or two, pop them in the microwave for 10-15 secs on high to freshen up.`
        ],
        nutrition: [{
            element: 'Kcal',
            weight: 226,
            type: WeightType.none,
        }, {
            element: 'Fat',
            weight: 10,
            type: WeightType.g,
        }, {
            element: 'Saturates',
            weight: 6,
            type: WeightType.g,
        }, {
            element: 'Carbs',
            weight: 30,
            type: WeightType.g,
        }, {
            element: 'Sugar',
            weight: 14,
            type: WeightType.g,
        }, {
            element: 'Fibre',
            weight: 1,
            type: WeightType.g,
        }, {
            element: 'Protein',
            weight: 4,
            type: WeightType.g,
        }, {
            element: 'Salt',
            weight: 0.6,
            type: WeightType.g,
        }]
    },

    // 2
    {
        id: 2,
        thumbnail: 'assets/pics/breakfast.jpg',
        name: 'Eggs Benedict',
        hashtag: ['breakfast','brunch',  'american'],
        timeMin: 30,
        author: 'chef001',
        date: '2022-09-03',
        likeQty: 10,
        commentQty: 5,
        comments: [{
            persona: 'Cia',
            comment: 'good',
            like: 0,
            isLike: 0
        }, {
            persona: 'Coco',
            comment: 'awesome',
            like: 0,
            isLike: 0
        }, {
            persona: 'Amy',
            comment: 'yum yum',
            like: 0,
            isLike: 0
        }, {
            persona: 'Bob',
            comment: 'great',
            like: 0,
            isLike: 0
        }, {
            persona: 'May',
            comment: 'good recipe',
            like: 0,
            isLike: 0
        }],
        introduction: `let's make the perfect eggs benedict.`,
        ingredients: [{
            item: 'white wine vinegar',
            metric: 3,
            type: WeightType.tbsp,
        }, {
            item: 'eggs',
            metric: 4,
            type: WeightType.none,
        }, {
            item: 'toasting muffins',
            metric: 2,
            type: WeightType.none,
        }, {
            item: 'parma ham',
            metric: 4,
            type: WeightType.none,
        }, {
            item: 'butter',
            metric: 125,
            type: WeightType.g,
        }, {
            item: 'egg yolks',
            metric: 2,
            type: WeightType.none,
        }, {
            item: 'white wine vinegar or tarragon vinegar',
            metric: 1 / 2,
            type: WeightType.tsp,
        }, {
            item: 'squeeze of lemon juice',
            metric: 0,
            type: WeightType.none,
        }, {
            item: 'pinch of cayenne pepper',
            metric: 0,
            type: WeightType.none,
        }],
        serve: 2,
        step: [`To prepare: \n
                Bring a deep saucepan of water to the boil (at least 2 litres) and add 3 tbsp white wine vinegar. Lower the heat down to a gentle simmer.\n
                Break the eggs into four separate coffee cups or ramekins. Split the muffins, toast them for a few minutes either side and warm some plates.`,
            `To make the hollandaise: \n
                Melt the butter in a saucepan and skim any white solids from the surface. Keep the butter warm. \n
                Put the egg yolks, white wine or tarragon vinegar, a pinch of salt and a splash of ice-cold water in a metal or glass bowl that will fit over a small pan. Whisk for a few minutes, then put the bowl over a pan of barely simmering water and whisk continuously until pale and thick, about 3-5 mins. \n
                Remove from the heat and slowly whisk in the melted butter bit by bit until it's all incorporated and you have a creamy hollandaise. (If it gets too thick, add a splash of water.) Season with a squeeze of lemon juice and a little cayenne pepper. Keep warm until needed.`,
            `To make the eggs benedict: \n
                Swirl the simmering vinegared water briskly to form a vortex and slide in an egg. It will curl round and set to a neat round shape. Cook for 2-3 mins, then remove with a slotted spoon. \n
                Repeat with the other eggs, one at a time, re-swirling the water as you slide in the eggs. Spread some sauce on each muffin, scrunch a slice of ham on top, then top with an egg. Spoon over the remaining hollandaise and serve at once.`
        ],
        nutrition: [{
            element: 'Kcal',
            weight: 705,
            type: WeightType.none,
        }, {
            element: 'Fat',
            weight: 64,
            type: WeightType.g,
        }, {
            element: 'Saturates',
            weight: 36,
            type: WeightType.g,
        }, {
            element: 'Carbs',
            weight: 16,
            type: WeightType.g,
        }, {
            element: 'Sugar',
            weight: 0,
            type: WeightType.g,
        }, {
            element: 'Fibre',
            weight: 1,
            type: WeightType.g,
        }, {
            element: 'Protein',
            weight: 18,
            type: WeightType.g,
        }, {
            element: 'Fibre',
            weight: 1.3,
            type: WeightType.g,
        }]
    },

    // 3
    {
        id: 3,
        thumbnail: 'assets/pics/lunch.jpg',
        name: 'Beef Noodles',
        hashtag: ['lunch', 'chinese'],
        timeMin: 30,
        author: 'chef002',
        date: '2023-04-25',
        likeQty: 50,
        commentQty: 3,
        comments: [{
            persona: 'Cia',
            comment: 'good',
            like: 0,
            isLike: 0
        }, {
            persona: 'Coco',
            comment: 'awesome',
            like: 0,
            isLike: 0
        }, {
            persona: 'Amy',
            comment: 'yum yum',
            like: 0,
            isLike: 0
        }],
        introduction: `let's make the perfect beef noodles`,
        ingredients: [{
            item: 'cucumber slices, peeled',
            metric: 4,
            type: WeightType.none,
        }, {
            item: 'rice wine vinegar',
            metric: 2,
            type: WeightType.tsp,
        }, {
            item: 'caster sugar',
            metric: 1 / 2,
            type: WeightType.tsp,
        }, {
            item: 'ramen paste',
            metric: 1,
            type: WeightType.tbsp,
        }, {
            item: 'egg',
            metric: 1,
            type: WeightType.none,
        }, {
            item: 'ramen',
            metric: 1,
            type: WeightType.none,
        }, {
            item: 'handful of spinach, kale, pak choi or cabbage',
            metric: 0,
            type: WeightType.none,
        }, {
            item: 'steak, thinly sliced',
            metric: 100,
            type: WeightType.g,
        }, {
            item: 'sesame oil',
            metric: 1,
            type: WeightType.tsp,
        }, {
            item: 'chilli oil, soy sauce and sliced spring onions',
            metric: 0,
            type: WeightType.none,
        }],
        serve: 1,
        step: [`Put the cucumber, vinegar and sugar in a non-metallic bowl and set aside to pickle lightly. Bring 300ml water to the boil and add 1 tbsp ramen paste and the noodles. If you're using kale, add this to one side of the pan (it will take longer to cook than other greens). Cover and cook for 1 min less than the pack instructions on the noodles.`,
            `Mix the remaining 1 tsp of ramen paste with the sliced steak. Add the steak to the noodle mixture, remove from the heat leave to stand for 1 min - the residual heat will cook the thinly sliced steak. If using spinach, pak choi or cabbage, add this to one side of the pan now, cover and leave to stand for another 30 seconds until wilted.`,
            `Serve the beef noodles in a deep bowl with as much of the broth as you like, topped with the sesame oil, chilli oil, soy sauce, spring onions, pickled cucumber and any pickling liquid from the bowl.`
        ],
        nutrition: [{
            element: 'Kcal',
            weight: 439,
            type: WeightType.none,
        }, {
            element: 'Fat',
            weight: 13,
            type: WeightType.g,
        }, {
            element: 'Saturates',
            weight: 4,
            type: WeightType.g,
        }, {
            element: 'Carbs',
            weight: 49,
            type: WeightType.g,
        }, {
            element: 'Sugar',
            weight: 5,
            type: WeightType.g,
        }, {
            element: 'Fibre',
            weight: 5,
            type: WeightType.g,
        }, {
            element: 'Protein',
            weight: 30,
            type: WeightType.g,
        }, {
            element: 'Fibre',
            weight: 1.69,
            type: WeightType.g,
        }]
    },

    // 4
    {
        id: 4,
        thumbnail: 'assets/pics/dinner.jpg',
        name: 'Chicken Curry',
        hashtag: ['lunch', 'dinner', 'curry', 'indian'],
        timeMin: 50,
        author: 'chef001',
        date: '2024-08-16',
        likeQty: 200,
        commentQty: 10,
        comments: [{
            persona: 'Cia',
            comment: 'good',
            like: 0,
            isLike: 0
        }, {
            persona: 'Coco',
            comment: 'awesome',
            like: 0,
            isLike: 0
        }, {
            persona: 'Amy',
            comment: 'yum yum',
            like: 0,
            isLike: 0
        }, {
            persona: 'Bob',
            comment: 'great',
            like: 0,
            isLike: 0
        }, {
            persona: 'May',
            comment: 'good recipe',
            like: 0,
            isLike: 0
        }, {
            persona: 'Una',
            comment: 'luv it',
            like: 0,
            isLike: 0
        }, {
            persona: 'Peter',
            comment: '<3',
            like: 0,
            isLike: 0
        }, {
            persona: 'Elsa',
            comment: 'easy peasy',
            like: 0,
            isLike: 0
        }, {
            persona: 'Vivi',
            comment: ':)',
            like: 0,
            isLike: 0
        }, {
            persona: 'Wendy',
            comment: 'tasty',
            like: 0,
            isLike: 0
        }],
        introduction: `let's make the perfect chicken curry.`,
        ingredients: [{
            item: 'sunflower oil',
            metric: 2,
            type: WeightType.tbsp,
        }, {
            item: 'onion, thinly sliced',
            metric: 1,
            type: WeightType.none,
        }, {
            item: 'garlic cloves, crushed',
            metric: 2,
            type: WeightType.none,
        }, {
            item: 'thumb-sized piece of ginger, grated',
            metric: 0,
            type: WeightType.none,
        }, {
            item: 'chicken thighs, boneless and skinless',
            metric: 6,
            type: WeightType.none,
        }, {
            item: 'medium spice paste (tikka works well)',
            metric: 3,
            type: WeightType.tbsp,
        }, {
            item: 'can chopped tomatoes',
            metric: 400,
            type: WeightType.g,
        }, {
            item: 'Greek yogurt',
            metric: 100,
            type: WeightType.g,
        }, {
            item: 'small bunch of coriander, leaves chopped',
            metric: 1,
            type: WeightType.none,
        }, {
            item: 'ground almonds',
            metric: 50,
            type: WeightType.g,
        }, {
            item: 'naan breads or cooked basmati rice',
            metric: 0,
            type: WeightType.none,
        }],
        serve: 1,
        step: [`Heat the oil in a flameproof casserole dish or large frying pan over a medium heat. Add the onion and a generous pinch of salt and fry for 8-10 mins, or until the onion has turned golden brown and sticky. Add the garlic and ginger, cooking for a further minute.`,
            `Chop the chicken into chunky 3cm pieces, add to the pan and fry for 5 mins before stirring through the spice paste and tomatoes, along with 250ml water. Bring to the boil, lower to a simmer and cook on a gentle heat uncovered for 25-30 mins or until rich and slightly reduced. Stir though the yogurt, coriander and ground almonds, season and serve with warm naan or fluffy basmati rice.`
        ],
        nutrition: [{
            element: 'Kcal',
            weight: 354,
            type: WeightType.none,
        }, {
            element: 'Fat',
            weight: 23,
            type: WeightType.g,
        }, {
            element: 'Saturates',
            weight: 4,
            type: WeightType.g,
        }, {
            element: 'Carbs',
            weight: 10,
            type: WeightType.g,
        }, {
            element: 'Sugar',
            weight: 8,
            type: WeightType.g,
        }, {
            element: 'Fibre',
            weight: 3,
            type: WeightType.g,
        }, {
            element: 'Protein',
            weight: 24,
            type: WeightType.g,
        }, {
            element: 'Fibre',
            weight: 0.6,
            type: WeightType.g,
        }]
    },

    // 5
    {
        id: 5,
        thumbnail: 'assets/pics/applepie.jpg',
        name: 'Apple Pie',
        hashtag: ['desserts', 'bake', 'pie'],
        timeMin: 60,
        author: 'chef003',
        date: '2021-04-25',
        likeQty: 13,
        commentQty: 2,
        comments: [{
            persona: 'Cia',
            comment: 'good',
            like: 0,
            isLike: 0
        }, {
            persona: 'Coco',
            comment: 'awesome',
            like: 0,
            isLike: 0
        }],
        introduction: `let's make the perfect apple pie.`,
        ingredients: [{
            item: 'plain flour',
            metric: 225,
            type: WeightType.g,
        }, {
            item: 'butter or margarine',
            metric: 140,
            type: WeightType.g,
        }, {
            item: 'garlic cloves, crushed',
            metric: 2,
            type: WeightType.none,
        }, {
            item: 'large cooking apples',
            metric: 2,
            type: WeightType.none,
        }, {
            item: 'honey',
            metric: 2,
            type: WeightType.tsp,
        }, {
            item: 'pinch of mixed spice',
            metric: 0,
            type: WeightType.none,
        }, {
            item: 'egg, beaten',
            metric: 1,
            type: WeightType.none,
        }, {
            item: 'crème fraîche, vanilla ice cream or natural yogurt',
            metric: 0,
            type: WeightType.none,
        }],
        serve: 4,
        step: [`Heat oven to 200C/180C fan/gas 6. To make the pastry, sift the flour into a large mixing bowl and add the butter or margarine. Using your fingers, mix together until the mixture resembles breadcrumbs.`,
            `Add about 3 tbsp cold water - 1 tbsp at a time - to bind the mixture into a ball. Then wrap it in cling film and leave to chill in the fridge while you prepare the apples, or for 30 mins if you have time.`,
            `While the pastry is chilling, core the apples, then cut into even-sized chunks so they all cook in the same amount of time. Put the apples into the pie dish, drizzle over the honey and add the cinnamon, mixed spice and about 2 tbsp water.`,
            `Roll out the pastry on a floured work surface until it is large enough to cover the pie dish. Using the rolling pin, carefully lift the pastry and lay it over the top of the apple mixture. Carefully trim off the excess pastry (this can be rerolled and cut into shapes to decorate the pie crust if you like) and press the pastry edges onto the dish to create a seal.`,
            `Make a small cut in the pastry so that the air can escape during cooking, then brush with beaten egg to glaze.`,
            `Bake the pie in the oven for 20-30 mins until the pastry is golden and sandy in appearance and the apple filling is bubbling and hot. Serve while still warm with crème fraîche, ice cream or natural yogurt.`
        ],
        nutrition: [{
            element: 'Kcal',
            weight: 527,
            type: WeightType.none,
        }, {
            element: 'Fat',
            weight: 31,
            type: WeightType.g,
        }, {
            element: 'Saturates',
            weight: 19,
            type: WeightType.g,
        }, {
            element: 'Carbs',
            weight: 52,
            type: WeightType.g,
        }, {
            element: 'Sugar',
            weight: 11,
            type: WeightType.g,
        }, {
            element: 'Fibre',
            weight: 5,
            type: WeightType.g,
        }, {
            element: 'Protein',
            weight: 8,
            type: WeightType.g,
        }, {
            element: 'Fibre',
            weight: 0.6,
            type: WeightType.g,
        }]
    },

    // 6
    {
        id: 6,
        thumbnail: 'assets/pics/cocktail.jpg',
        name: 'Hurricane Cocktail',
        hashtag: ['cocktail', 'beverages'],
        timeMin: 5,
        author: 'chef002',
        date: '2024-06-01',
        likeQty: 55,
        commentQty: 5,
        comments: [{
            persona: 'Cia',
            comment: 'good',
            like: 0,
            isLike: 0
        }, {
            persona: 'Coco',
            comment: 'awesome',
            like: 0,
            isLike: 0
        }, {
            persona: 'Amy',
            comment: 'yum yum',
            like: 0,
            isLike: 0
        }, {
            persona: 'Bob',
            comment: 'great',
            like: 0,
            isLike: 0
        }, {
            persona: 'May',
            comment: 'good recipe',
            like: 0,
            isLike: 0
        }],
        introduction: `let's make the perfect hurricane cocktail.`,
        ingredients: [{
            item: 'dark rum',
            metric: 50,
            type: WeightType.ml,
        }, {
            item: 'white rum',
            metric: 50,
            type: WeightType.ml,
        }, {
            item: 'passion fruit',
            metric: 1,
            type: WeightType.none,
        }, {
            item: 'orange, juiced',
            metric: 1,
            type: WeightType.none,
        }, {
            item: 'lemon, juiced',
            metric: 1,
            type: WeightType.none,
        }, {
            item: 'sugar syrup',
            metric: 50,
            type: WeightType.ml,
        }, {
            item: 'grenadine',
            metric: 2,
            type: WeightType.tsp,
        }, {
            item: 'cocktail cherries',
            metric: 4,
            type: WeightType.none,
        }, {
            item: 'orange slices',
            metric: 2,
            type: WeightType.none,
        }],
        serve: 1,
        step: [`Fill a cocktail shaker with ice then add the rums. Scoop the flesh and seeds from the passion fruit and add to the shaker along with the orange and lemon juices, sugar syrup and grenadine.`,
            `Shake well until the outside of the cocktail shaker feels icy cold. Fill two hurricane glasses with fresh ice then double strain the drink into the prepared glasses.`,
            `While the pastry is chilling, core the apples, then cut into even-sized chunks so they all cook in the same amount of time. Put the apples into the pie dish, drizzle over the honey and add the cinnamon, mixed spice and about 2 tbsp water.`,
            `Garnish each one with an orange slice skewered onto a cocktail stick and a couple of cocktail cherries.`
        ],
        nutrition: [{
            element: 'Kcal',
            weight: 215,
            type: WeightType.none,
        }, {
            element: 'Fat',
            weight: 0,
            type: WeightType.g,
        }, {
            element: 'Saturates',
            weight: 0,
            type: WeightType.g,
        }, {
            element: 'Carbs',
            weight: 24,
            type: WeightType.g,
        }, {
            element: 'Sugar',
            weight: 22,
            type: WeightType.g,
        }, {
            element: 'Fibre',
            weight: 0,
            type: WeightType.g,
        }, {
            element: 'Protein',
            weight: 0.5,
            type: WeightType.g,
        }, {
            element: 'Fibre',
            weight: 0.01,
            type: WeightType.g,
        }]
    }
]


export const Typelist: TypeList[] = [{
    thumbnail: 'assets/pics/breakfast.jpg',
    hashtag: 'breakfast'
}, {
    thumbnail: 'assets/pics/lunch.jpg',
    hashtag: 'lunch'
}, {
    thumbnail: 'assets/pics/dinner.jpg',
    hashtag: 'dinner'
}, {
    thumbnail: 'assets/pics/applepie.jpg',
    hashtag: 'desserts'
}, {
    thumbnail: 'assets/pics/cocktail.jpg',
    hashtag: 'beverages'
}]
