import React from 'react'
import $ from '../../imports/main/jquery/jquery-vendor.js';
import bootstrap from '../../imports/main/bootstrap/bootstrap-vendor.js';
import 'icheck/skins/all.css';
import {Radio, RadioGroup} from 'react-icheck';

class FormRadio extends React.Component{
    constructor(props) {
        super(props);

    };
    render(){
        return(
            <div className="form-radio form-group">
                <label className="col-sm-2 control-label">{this.props.labelText}</label>
                <RadioGroup name={this.props.name} value={this.props.value1}>
                    <Radio
                        value={this.props.value1}
                        radioClass={this.props.class1 + " iradio_minimal-blue col-sm-3"}
                        increaseArea="20%"
                        label={this.props.label1Text}
                    />
                    <Radio
                        value={this.props.value2}
                        radioClass={this.props.class2 + " iradio_minimal-blue col-sm-3"}
                        increaseArea="20%"
                        label={this.props.label2Text}
                    />
                </RadioGroup>
            </div>


        );
    }


}


export default FormRadio;