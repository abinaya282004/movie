
import React, { useContext } from 'react';
import { CartContext } from './cartcontext';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import Link from '@mui/joy/Link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <>
    <NavBar/>
    <div className="container mt-5">
      <h2 className='text-center' >Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div key={item._id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card mt-3">
                <img src={item.image} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <Link  color="neutral" textColor="text.primary" endDecorator={<ArrowOutwardIcon />} sx={{ fontWeight: 'md' }} >
                    {item.name}
                    </Link> 
                  <p className="card-text">Price: {item.ticketprice} USD</p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item._id)} style={{height:'55px'}}>
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default CartPage;
