import React from 'react'
import Navbar from '../componets/Navbar';
import CategoryMenu from '../componets/CategoryMenu';
import FoodItems from '../componets/FoodItems';
import Cart from '../componets/Cart';

function Home(){
     return(
        <div>
        <Navbar/>
        <CategoryMenu/>
        <FoodItems/>
        <Cart/>
        </div>
     )
}
export default Home;