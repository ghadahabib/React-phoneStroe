import React from "react";
import {Link} from 'react-router-dom';
import Paypal from "./paypalbtn";
function CartTotals ({value, history}) {
    const{cartSubTotal, tax, cartTotal, clearCart} = value;
    return(
       <React.Fragment>
           <div className='container'>
               <div className='row'>
                   <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-end'>
                       <Link to='/'>
                           <button className='btn btn-outline-danger text-uppercase mb-3 px-5' 
                           type='button' onClick={()=> clearCart()}>
                               clear cart
                           </button>
                       </Link>
                       <h5>
                       <span className='section-title'>subtotal :</span>
                       <strong>$: {cartSubTotal}</strong>
                       </h5>
                       {/* End subtotal */}
                       <h5>
                       <span className='section-title'>tax :</span>
                       <strong>$: {tax}</strong>
                       </h5>
                       {/* End tax */}
                       <h5>
                       <span className='section-title'>total :</span>
                       <strong>$: {cartTotal}</strong>
                       </h5>
                       {/* End total */}
                       <Paypal total={cartTotal} clearcart={clearCart} history={history}/>
                   </div>
               </div>
           </div>
       </React.Fragment>
    );
}
export default CartTotals;