import {useState} from 'react'
import { AccountBalanceRounded,Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './components/Header/Header';
import MenuContainer from './components/Footer/MenuContainer'
import { useEffect } from 'react';
import MenuCard from './components/MenuCard/MenuCard';
import BannerName from './components/Banner/BannerName';
import SubMenuContainer from './components/SubMenu/SubMenuContainer';
import {MenuItems, Items} from './components/Data';
import ItemCard from './components/ItemCard/ItemCard';
import DebitCard from './components/DebitCard/DebitCard';
import CartItem from './components/CartItem/CartItem'
import { useStateValue } from './components/StateProvider';


function App() {

  const [isMainData, setMainData] = useState(Items.filter(element => element.itemId === 'buger01'))
  const [{cart}, dispatch] = useStateValue()
  const [totalPrice, setTotalPrice] = useState(null)


  useEffect(() => {
    console.log(cart)
    const menuLi = document.querySelectorAll('#menu li');

    function setMenuActive() {
      menuLi.forEach(e => e.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach(e => e.addEventListener('click' , setMenuActive))

    const menuCards = document
    .querySelector('.rowContainer')
    .querySelectorAll('.rowMenuCard');
    
    function setMenuCardActive () {
      menuCards.forEach(e => e.classList.remove('active'));
      this.classList.add("active");
    }

    menuCards.forEach(e => e.addEventListener('click', setMenuCardActive))

  }, [isMainData, cart])

  const setData = (itemId) => {
    setMainData(Items.filter(element => element.itemId === itemId))
  }
  return (
    <div className="App">
        <Header/>
        <main>
          <div className='mainContainer'>
            <div className='banner'>
                <BannerName name={"Ivan"} discount={'20'} link={'#'}/>
                <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
                      alt=""
                      className="deliveryPic"
                />
            </div>
            <div className='dishContainer'>
              <div className='menuCard'>
                <SubMenuContainer name={"Menu Category"}/>
              </div>
              <div className='rowContainer'>
                {
                  MenuItems && MenuItems.map(data => (
                    <div key = {data.id} onClick={() => setData(data.itemId)}>
                        <MenuCard 
                          imgSrc={data.imgSrc} 
                          name={data.name}
                          isActive = {data.id === 1 ? true : false}
                        />
                    </div>
                  ))
                }
              </div>
              <div className='dishItemContainer'>
                {
                  isMainData && isMainData.map(data => (
                    <ItemCard 
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc} 
                    name={data.name} 
                    ratings={data.ratings} 
                    price={data.price}
                  />
                  ))
                }
              </div>
            </div>
          </div>
          <div className='rightMenu'>
            <div className='debitCardContainer'>
              <div className='debitCard'>
                  <DebitCard/>
              </div>
            </div>

                {!cart ? (<div>Checkout is empty :(</div>) : (
                  <div className='cartCheckoutContainer'>
                    <div className='cart_container'>
                      <SubMenuContainer name={" Cart Items"}/>
                      <div className='cartItems'>
                        {
                          cart && cart.map((data) => (
                            <CartItem 
                              key={data.id}
                              itemId={data.id}
                              name={data.name}
                              img={data.imgSrc}
                              price={data.price}
                          />
                          ))
                        }
                      </div>
                    </div>
                    <div className='totalSection'>
                       <h3>Total</h3>
                       {
                         !cart ? (<div></div>) : (
                          <p>
                            <span>$</span>{totalPrice}
                          </p> 
                         )
                       }
                    </div>
                    <button className='checkOut'>Check Out</button>
                  </div>
                )}
          </div>
        </main>
        <div className='bottomMenu'>
          <ul id="menu">
            <MenuContainer link={'#'} icon = {<HomeRounded />} isHome/>
            <MenuContainer link={'#'} icon = {<Chat />}/>
            <MenuContainer link={'#'} icon = {<AccountBalanceRounded />}/>
            <MenuContainer link={'#'} icon = {<Favorite />}/>
            <MenuContainer link={'#'} icon = {<SummarizeRounded />}/>
            <MenuContainer link={'#'} icon = {<Settings />}/>
            <div className='indicator'></div>
          </ul>
        </div>
    </div>
  );
}

export default App;