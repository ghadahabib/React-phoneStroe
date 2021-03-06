
import React , {Component} from "react";
import Tilte from '../Title'; 
import CartColums from './CartColums';
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartLIst";
import CartTotals from "./CartTotals";

class Cart extends Component {
render() {
    return (
     <section className="cart">
       <ProductConsumer>
         {value => {
           const {cart} = value;
           if (cart.length > 0 ){
             return(
               <React.Fragment>
                  <Tilte name='your' title='cart'/>
                  <CartColums></CartColums>
                  <CartList value={value}></CartList>
                  <CartTotals value={value} history={this.props.history}></CartTotals>
               </React.Fragment>
             )
           }
           else{
             return(
              <EmptyCart/>
             )
           } 
         }
         }
       </ProductConsumer>
         
         
     </section>
    )
  }
}
export default Cart;