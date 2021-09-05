import React from "react";
function CartItem ({item, value}) {
    const { id, title, img, price, total,count} =item;
    const {increment, decrement, removeItem} = value;
    return(
        <div className='row my-2 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} alt='product' style={{width:'5rem', height:'5rem'}} className='img-fluid'/>
            </div>
            {/* End img */}
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>product: </span>
                {title}
            </div>
            {/* ENd product name */}
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>price: </span>
                {price}
            </div>
            {/* End price */}
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
            <div className="d-flex justify-content-center">
                <div>
                    <span className='btn btn-black mx-1' onClick={()=> decrement(id)}>-</span>
                </div>
                {/* ENd increment */}
                <div>
                    <span className='btn btn-black mx-1'>{count}</span>
                </div>
                {/* End count */}
                <div>
                    <span className='btn btn-black mx-1' onClick={()=> increment(id)}>+</span>
                </div>
                {/* End decrement */}
            </div>
            </div>
            {/* End quentity */}
            <div className='col-10 mx-auto col-lg-2'>
                <div className='cart-icon' onClick={()=> removeItem(id)}>
                <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>
            {/* End removeitem */}
            <div className='col-10 mx-auto col-lg-2'>
                <strong>products total $:{total}</strong>
            </div>
            {/* End total */}
        </div>
    )
}
export default CartItem;