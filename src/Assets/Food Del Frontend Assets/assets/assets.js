import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
   
    {
        menu_name: "Salad",
        menu_image: menu_1
    },
    {
        menu_name: "Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Deserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Noodles",
        menu_image: menu_8
    }]

export const  food_list = [
    {
        _id: "1",
        name: "Greek Salad",
        image: food_1,
        price: 12,
        description: "A refreshing mix of cucumbers, tomatoes, olives, and feta cheese dressed with olive oil and herbs.",
        category: "Salad",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        additonal_info: "XYZ", 
        isGlutenFree: true
    },
    {
        _id: "2",
        name: "Veg Salad",
        image: food_2,
        price: 18,
        description: "A healthy combination of fresh vegetables including lettuce, carrots, and bell peppers, served with a tangy vinaigrette.",
        category: "Salad",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: true
    },
    {
        _id: "3",
        name: "Clover Salad",
        image: food_3,
        price: 16,
        description: "A vibrant salad with mixed greens, clover sprouts, avocado, and a light lemon dressing.",
        category: "Salad",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: true
    },
    {
        _id: "4",
        name: "Chicken Salad",
        image: food_4,
        price: 24,
        description: "Grilled chicken breast served on a bed of mixed greens with tomatoes, cucumbers, and a creamy ranch dressing.",
        category: "Salad",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: false,
        isGlutenFree: true
    },
    {
        _id: "5",
        name: "Lasagna Rolls",
        image: food_5,
        price: 14,
        description: "Rolled lasagna filled with ricotta cheese, spinach, and marinara sauce, topped with melted mozzarella.",
        category: "Rolls",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "6",
        name: "Peri Peri Rolls",
        image: food_6,
        price: 12,
        description: "Spicy Peri Peri chicken wrapped in a soft tortilla, with fresh lettuce and a creamy sauce.",
        category: "Rolls",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: false,
        isGlutenFree: false
    },
    {
        _id: "7",
        name: "Chicken Rolls",
        image: food_7,
        price: 20,
        description: "Tender chicken strips with veggies, wrapped in a thin flatbread, and served with a tangy dip.",
        category: "Rolls",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: false,
        isGlutenFree: false
    },
    {
        _id: "8",
        name: "Veg Rolls",
        image: food_8,
        price: 15,
        description: "A delightful mix of grilled vegetables and paneer, rolled in a whole wheat flatbread.",
        category: "Rolls",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "9",
        name: "Ripple Ice Cream",
        image: food_9,
        price: 14,
        description: "Creamy vanilla ice cream with ripples of rich chocolate fudge.",
        category: "Desserts",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "10",
        name: "Fruit Ice Cream",
        image: food_10,
        price: 22,
        description: "A fruity delight made with real pieces of mango, strawberry, and pineapple blended into creamy ice cream.",
        category: "Desserts",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "11",
        name: "Jar Ice Cream",
        image: food_11,
        price: 10,
        description: "Classic vanilla ice cream served in a convenient jar, perfect for on-the-go.",
        category: "Desserts",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "12",
        name: "Vanilla Ice Cream",
        image: food_12,
        price: 12,
        description: "Smooth and creamy vanilla ice cream made from the finest vanilla beans.",
        category: "Desserts",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "13",
        name: "Chicken Sandwich",
        image: food_13,
        price: 12,
        description: "Grilled chicken breast with lettuce, tomato, and mayo, served on a whole grain bun.",
        category: "Sandwich",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: false,
        isGlutenFree: false
    },
    {
        _id: "14",
        name: "Vegan Sandwich",
        image: food_14,
        price: 18,
        description: "A hearty sandwich filled with avocado, sprouts, cucumber, and hummus on whole grain bread.",
        category: "Sandwich",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: true
    },
    {
        _id: "15",
        name: "Grilled Sandwich",
        image: food_15,
        price: 16,
        description: "A classic grilled cheese sandwich with melted cheddar and mozzarella on sourdough bread.",
        category: "Sandwich",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "16",
        name: "Bread Sandwich",
        image: food_16,
        price: 24,
        description: "Freshly baked bread with your choice of fillings, served with a side of chips.",
        category: "Sandwich",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "17",
        name: "Cup Cake",
        image: food_17,
        price: 14,
        description: "A moist and fluffy cupcake topped with rich buttercream frosting.",
        category: "Cake",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "18",
        name: "Vegan Cake",
        image: food_18,
        price: 12,
        description: "A delicious vegan cake made with almond flour and topped with a dairy-free frosting.",
        category: "Cake",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: true
    },
    {
        _id: "19",
        name: "Butterscotch Cake",
        image: food_19,
        price: 20,
        description: "A rich and moist butterscotch cake layered with creamy butterscotch frosting.",
        category: "Cake",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "20",
        name: "Sliced Cake",
        image: food_20,
        price: 15,
        description: "A perfectly portioned slice of our signature cake, available in various flavors.",
        category: "Cake",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "21",
        name: "Garlic Mushroom",
        image: food_21,
        price: 14,
        description: "Sautéed garlic mushrooms served with a sprinkle of fresh parsley.",
        category: "Pure Veg",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: true
    },
    {
        _id: "22",
        name: "Fried Cauliflower",
        image: food_22,
        price: 22,
        description: "Crispy fried cauliflower florets served with a tangy dipping sauce.",
        category: "Pure Veg",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "23",
        name: "Mix Veg Pulao",
        image: food_23,
        price: 10,
        description: "A fragrant rice dish cooked with mixed vegetables and aromatic spices.",
        category: "Pure Veg",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: true
    },
    {
        _id: "24",
        name: "Rice Zucchini",
        image: food_24,
        price: 12,
        description: "A healthy and flavorful rice dish with sautéed zucchini and herbs.",
        category: "Pure Veg",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: true
    },
    {
        _id: "25",
        name: "Cheese Pasta",
        image: food_25,
        price: 12,
        description: "Creamy pasta with a rich cheese sauce, perfect for cheese lovers.",
        category: "Pasta",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "26",
        name: "Tomato Pasta",
        image: food_26,
        price: 18,
        description: "Pasta tossed in a fresh and tangy tomato sauce, garnished with basil.",
        category: "Pasta",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "27",
        name: "Creamy Pasta",
        image: food_27,
        price: 16,
        description: "Pasta in a rich and creamy white sauce, topped with parmesan cheese.",
        category: "Pasta",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "28",
        name: "Chicken Pasta",
        image: food_28,
        price: 24,
        description: "Pasta with tender chicken pieces in a flavorful Alfredo sauce.",
        category: "Pasta",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: false,
        isGlutenFree: false
    },
    {
        _id: "29",
        name: "Butter Noodles",
        image: food_29,
        price: 14,
        description: "Simple and delicious noodles tossed in butter and herbs.",
        category: "Noodles",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "30",
        name: "Veg Noodles",
        image: food_30,
        price: 12,
        description: "Stir-fried noodles with a mix of fresh vegetables and soy sauce.",
        category: "Noodles",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "31",
        name: "Somen Noodles",
        image: food_31,
        price: 20,
        description: "Japanese-style noodles served with a light and savory broth.",
        category: "Noodles",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    },
    {
        _id: "32",
        name: "Cooked Noodles",
        image: food_32,
        price: 15,
        description: "Noodles cooked to perfection with a blend of vegetables and spices.",
        category: "Noodles",
        quantity: 0,
        totalPrice: 0,
        isVegetarian: true,
        isGlutenFree: false
    }
];
