import React, {Component} from "react";
import styled from "styled-components";
import {ProductConsumer} from '../context';
import {CustmBtn} from './Buttons' ;
import {Link} from 'react-router-dom';
class Modal extends Component{
    render() {
        return(
            <ProductConsumer>
                {(value) => {
                    
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className='row'>
                                    <div id= "modal"className='col-8 mx-auto mt-5 col-md-6 col-lg-4 
                                    text-center text-capitalize p-5'>
                                        <h5>item added to cart</h5>
                                        <img src={img} alt='product' className='img-fluid'/>
                                        <h5>{title}</h5>
                                        <h5 className='text-muted'>price : ${price}</h5>
                                        <Link to ='/'>
                                            <CustmBtn modal className='mb-3 pb-1' onClick={()=> closeModal()}>
                                                continue shopping
                                            </CustmBtn>
                                        </Link>
                                        <Link to ='/cart'>
                                            <CustmBtn cart onClick={()=> closeModal()}>
                                                go to cart
                                            </CustmBtn>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )}
                    
                }}
            </ProductConsumer>
        )
    }
}
const ModalContainer = styled.div`
position : fixed;
left : 0;
right:0;
top:0;
bottom :0;
background : rgba(0, 0, 0, 0.3);
display : flex;
align-items:center;
justify-content : center;
#modal{
    background-color : var(--main-white);
}
`
export default Modal;