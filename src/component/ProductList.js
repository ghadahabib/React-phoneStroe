
import React, {Component, Fragment} from 'react';
import ProductItem from './ProductItem';
import Tilte from './Title';
import {ProductConsumer} from'../context';
class Products extends Component {
render() {
    return (
     <Fragment>
       <div className='py-5'>
         <div className="container">
           <Tilte name='our' title='products'></Tilte>
           <div className='row'>
             <ProductConsumer>
               {value => {
                 return value.products.map( product => {
                   return <ProductItem key={product.id} product ={product}/>
                 })
               }}
             </ProductConsumer>
             
           </div>

         </div>
      
       </div>
     </Fragment>
    )
  }
}
export default Products;


