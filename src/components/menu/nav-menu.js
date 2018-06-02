import React from 'react'
import $ from '../../imports/main/jquery/jquery-vendor.js';
import bootstrap from '../../imports/main/bootstrap/bootstrap-vendor.js';
import axios from 'axios'
import '../../asset/modules/menu/style/nav-menu.css'
import logoImg from '../../asset/modules/menu/img/logo9.png'
// import menuData from '../../service/main.json'

class NavMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menus:'',
            menuList:[]
        }
    }
    componentWillMount(){
        axios.get('http://127.0.0.1:5000/menus').then(function (res) {
            this.setState({
                menus:res.data
            })
        }.bind(this));
    }
    componentDidMount(){
        let _self = this;
        $('.nav.navbar-nav li:nth-child(1)').toggleClass('active');
        const MAIN_LI = $('.nav.navbar-nav li');
        let choiceId = '';
        MAIN_LI.click(function () {
            MAIN_LI.removeClass('active');
            $(this).addClass('active');
            choiceId = $(this).attr("id");
        });


    }


    render(){

        // const menus = menuData.menus;


        return(
            <div className="container-fluid">
                <nav className="navbar navbar-fixed-top navbar-inverse navbar-nav">
                    <div className="container-fluid middle-nav">

                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img alt="Brand" src={logoImg} className="system-name-img"/>
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {this.state.menus.map( (menu) => {
                                    return (<li title={menu.title} onClick={this.props.firstMenuClick}><a href="#" id={menu.id}>{menu.name}</a></li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default NavMenu
