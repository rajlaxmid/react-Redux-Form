import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import { testme } from './store/actions';

import ContactForm from './ContactForm';
import Menu from './Menu';


class Home extends React.Component {

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
            <h3>Redux-Form: Simple form Example (No Validation)</h3>
            <ContactForm onSubmit={this.submit} />
        </div> 
      );
    }
}

export default Home;