import React, { Component } from 'react';
import {reduxForm , Field} from  'redux-form';

class SurveyForm extends Component{
    render(){
        return(
            <div>
                SurveyForm
            </div>
        );
    }   
}
export default reduxForm({
    form: 'surveyFrom'
})(SurveyForm); 