import React, { useContext, useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { ArrowRight} from 'react-bootstrap-icons';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopContext } from '../context/ShopContextProvider';

const Navbar = () => {
  
  const Globalstate = useContext(ShopContext);
  const dispatch = Globalstate.dispatch;
  const state = Globalstate.state;
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="/" style={{color:'white'}}>Ecommerce App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse m-2" id="navbarNav">
          <LinkContainer to="/" style={{color:'white'}}>
            <Nav.Link >Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/practice" style={{color:'white' , marginLeft:'15px'}}>
             
             <Nav.Link >Practice</Nav.Link>
             
           </LinkContainer>
          
          <LinkContainer to="/cart" style={{color:'white' , marginLeft:'50rem'}}>
             
            <Nav.Link><ShoppingCartIcon fontSize='medium'/></Nav.Link>
            
          </LinkContainer>
         
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar