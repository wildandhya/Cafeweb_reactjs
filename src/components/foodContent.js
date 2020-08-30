/** @format */

import React, { Fragment} from "react";


import {connect, useDispatch}from 'react-redux'

import {addMenu, deleteMenu} from '../redux/action/cart'

import "../styles/foodcontent.css";

const FoodContent = ({product, cart}) => {

  const dispatch = useDispatch()

  const addToCart = (id, menu, price, image)=>{
    const cartItem = cart 
    let alreadyExist = false
    cartItem.forEach(item => {
        if(item.id === id){
            alreadyExist = true;
            item.qty++
            
        }
          
    });
    if(!alreadyExist){
       const cartData = {
           id: id,
           menu:menu,
           price: price,
           image:image,
           qty:1
       }
        dispatch(addMenu(cartData))
    }
    
  }
  
  return (
    <Fragment>
      <div className='food-content'>
        <div className='food-items'>
          <div className='card-img d-flex flex-wrap justify-content-around'>
            {product.map(item => {
              return(
                <>
                <div key={item.id}>
                  <img src={item.image} alt=''onClick={()=> addToCart(item.id, item.menu, item.price, item.image) }/>
                  <h1>{item.menu}</h1>
                  <p>Rp.{item.price}</p>
                </div>
                </>
              )
            })}
          </div>
        </div>
      
      </div>      
    </Fragment>
  ); 
}

const mapStateToProps = (state) => {
  return {
    product: state.product.data,
    cart: state.cart.data
  }
}


export default connect(mapStateToProps)(FoodContent) 
