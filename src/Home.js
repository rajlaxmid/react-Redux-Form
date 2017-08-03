import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import { testme } from './store/actions';

import ContactForm from './ContactForm';


class Home extends React.Component {

    constructor(props){
        super(props);
    }
    
    submit(values){
      // print the form values to the console
      console.log('form value: >>>>>>>>>>> ', values);
    }
   
    render() {

      return (
      	<div>
            Home page<br />
            <ContactForm onSubmit={this.submit} />
        </div> 
      );
    }
}

export default Home;