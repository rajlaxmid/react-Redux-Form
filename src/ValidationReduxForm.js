import React from 'react';

import UserForm from './UserForm';
import Menu from './Menu';


class ValidationReduxForm extends React.Component {

    constructor(props){
        super(props);
    }
    
    submit(values){
      //onSubmit of ContactForm his is called
      //you can pass the "values" to action by using mapDispatchToPropr() method using Redux
      console.log('form value: >>>>>>>>>>> ', values);
    }
   
    render() {

      return (
      	<div>
            <Menu /><br />
            <h3>Redux-Form: With Validation Example</h3>
            <UserForm onSubmit={this.submit} />
        </div> 
      );
    }
}

export default ValidationReduxForm;