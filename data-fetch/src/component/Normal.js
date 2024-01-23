
import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContextProvider'
import { Button } from 'react-bootstrap'


const Normal = () => {
   const{ addToCart}  = useContext(ShopContext)
   
  return (
    <>
     <Button onClick={() =>addToCart()}>Add to Cart</Button>
    </>
  )
}

export default Normal