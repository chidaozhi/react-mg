import React from 'react'
import $ from '../../imports/main/jquery/jquery-vendor.js';
import bootstrap from '../../imports/main/bootstrap/bootstrap-vendor.js';


class FormInput extends React.Component{
    constructor(props) {
        super(props);


    };
    render(){
        return(
            <p className="form-group">
                <label htmlFor={this.props.id} className="col-sm-2 control-label">
                    {this.props.labelText}
                </label>
                <input type={this.props.type} className={this.props.className + " col-sm-6"} id={this.props.id} name={this.props.name} placeholder={this.props.testvalue} readOnly={this.props.readonly}/>
            </p>
        );
    }
}






export default FormInput;