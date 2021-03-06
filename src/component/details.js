
import React , {Component} from "react";
import {ProductConsumer} from'../context';
import {Link} from 'react-router-dom';
import {CustmBtn} from './Buttons';
class ProductDetails extends Component {
render() {
    return (
     <ProductConsumer>
         {value => {
           const{id, company, img, info, price, title, inCart} = value.detail; 
           return(
             <div className='container py-5'>
               {/* title */}
               <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                 <h1>{title}</h1>
               </div>
               {/* End title */}
               {/* product-info */}
               <div className='row'>
                 <div className='col-10 mx-auto col-md-6 my-3'>
                   <img src={img} className='img-fluid' alt='product1'/>
                 </div>
                 <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                   <h3> model name : {title}</h3>
                   <h5 className='text-uppercase text-muted mt-3 mb-2'>
                     made by : <span>{company}</span>
                   </h5>
                   <h5 className='text-blue'>
                     <strong>
                      price :<span>$</span>{price}
                     </strong>
                   </h5>
                 <p className='text-capitalize fw-bold mt-3 mb-0'>
                   some info about product:
                 </p>
                 <p className='text-muted lead'>
                   {info}
                 </p>
                 <div className='buttons'>
                   <Link to='/'>
                      <CustmBtn modal>
                        back to products
                      </CustmBtn>
                   </Link>

                   <CustmBtn cart disabled={inCart? true : false} onClick={() => {
                     value.addtocart(id);
                     value.openModal(id);
                   }}>
                     {inCart ? 'in cart' : 'add to cart'}
                   </CustmBtn>
                 </div>
                 {/* End buttons */}
                 </div>
               </div>
               {/* End row */}
             </div>
           )
         }}
     </ProductConsumer>
    )
  }
}
export default ProductDetails;