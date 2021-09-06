import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class Paypal extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.props.clearcart();
            this.props.history.push('/');
        }
 
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; 
        let currency = 'USD'; 
 
        const client = {
            sandbox: 'ASz3AS6OBZa4JtiKlFL2uJOBBOvy3iC2VO67qttwCQS94s5APkDmkotqz9KATMZxdyJ8yX8yAnnF5HwN',
            production: 'YOUR-PRODUCTION-APP-ID',
        }       
        return (
            <PaypalExpressBtn 
            env={env} 
            client={client}
            currency={currency}
            total={this.props.total} 
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel} 
            />
        );
    }
}