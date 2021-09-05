
import React , {Component} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {ProductConsumer} from'../context';
import PropTypes from "prop-types";
class ProductItem extends Component {
render() {
  const {id, title, img, price, inCart} = this.props.product;
    return (
     <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
       <div className='card'>
         <ProductConsumer>
           {value => (
             <div className='img-container p-5' onClick={() => value.handeldetail(id)}>
                <Link to='/details'>
                <img src={img} alt='product' className='card-img-top'/>
                </Link>
                <button className='cart-btn' disabled={inCart ? true : false} 
                onClick={() => {
                  value.addtocart(id);
                  value.openModal(id);
                }}>
                  {inCart ? (<p className="text-capitalize mb-0" disabled> {''}in cart</p>) : 
                  <i className="fa fa-cart-plus" aria-hidden="true"></i>}
                </button>
              </div>
           )}
         </ProductConsumer>
         {/* cart-footer */}
         <div className='card-footer d-flex justify-content-between'>
           <p className='align-self-center mb-0'>
             {title}
           </p>
           <h5 className='tex-blue fst-italic mb-0'>
             <span className='mr-1'>$</span>
             {price}
            </h5>
         </div>
       </div>
     </ProductWrapper>
    )
  }
}
ProductItem.propTypes = {
  product: PropTypes.shape({
    id:PropTypes.number,
    title:PropTypes.string,
    img:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}

const ProductWrapper = styled.div`
.card{
  border-color: transparent;
  transition: all .6s linear;
}
.card-footer{
  background-color : transparent;
  border-top : transparent;
  transition: all .6s linear;
}
&:hover{
  .card{
    border-color : .04rem solid rgba(0, 0, 0, .2);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
  .card-footer{
    background-color : rgba(247, 247 , 247);
  }
}
.img-container{
  position : relative;
  overflow : hidden; 
  &:hover {
    .card-img-top{
      transform : scale(1.2);
    }
    .cart-btn{{
      transform : translate(0, 0);
    }
  }
}
  .card-img-top{
    transition: all .6s linear;
  } 
  .cart-btn{
    position : absolute;
    bottom :0;
    right : 0;
    padding : 0.2rem 0.4rem;
    background : var(--light-blue);
    border : none;
    color: var(--main-white);
    font-size : 1.4rem;
    border-radius : .5rem 0 0 0;
    transform : translate(100%, 100%);
    transition: all .6s linear;
    &:hover{
      color : var(--main-color);
      cursor : pointer;
    }
  }

`
export default ProductItem;
