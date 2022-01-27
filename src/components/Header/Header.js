import React, { useEffect } from 'react';
import {} from '@mui/material';
import {BarChart, SearchRounded, ShoppingCartRounded} from '@mui/icons-material';
import './Header.css';
import { useStateValue } from '../StateProvider';
 
const Header = () => {

  const [{cart}, dispatch] = useStateValue()
  const cartItems = cart;

  useEffect(() => {
    const toggleMenu = document.querySelector(".toggleMenu");
    const shoppingCart = document.querySelector(".cart");

     toggleMenu.addEventListener('click' , () => {
      document.querySelector('.rightMenu').classList.toggle('active');
      toggleMenu.classList.toggle('active');
    })
    shoppingCart.addEventListener('click' , () => {
      document.querySelector('.rightMenu').classList.toggle('active');
    })
  }, [])

  return (
      <header>
          <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc' alt='' />
          
          <div className='inputBox'>
              <SearchRounded className = "searchIcon"/>
              <input type="text" placeholder='Search'/>
        </div> 
        <div className='shoppingCart'>
          <ShoppingCartRounded className='cart'/>
          <div className='cart_content'>
          {
            !cart ? (<p>0</p>) : (<p>{cart.length}</p>)
          }
          </div>
        </div>
        <div className='profileContainer'>
          <div className='imgBox'>
            <img className='profilePic' src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937" alt='' />
          </div>
          <h2 className='userName'>Ivan Ivanov</h2>
        </div>
        <div className='toggleMenu'>
          <BarChart className='toggleIcon'/>
        </div>
      </header>
  )
}
export default Header;