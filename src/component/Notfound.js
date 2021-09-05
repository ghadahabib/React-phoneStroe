
import React , {Component} from "react";
class NotFound extends Component {
render() {
  // console.log(this.props);
    return (
     <div className='container'>
       <div className='row'>
         <div className='col-10 text-center mx-auto text-uppercase pt-5 section-title'>
           <h1 className='fs-1'>404</h1>
           <h1>Error</h1>
           <h2>page not found</h2>
           <h3>the requested url <span className='text-danger'>{this.props.location.pathname}</span>was not found</h3>
         </div>
       </div>
     </div>
    )
  }
}
export default NotFound;