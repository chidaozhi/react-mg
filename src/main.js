import React from 'react';
import 'normalize.css/normalize.css';
import 'typeface-roboto';
// import SiderDemo from './components/testMaterial/test-menu.js';
import $ from './imports/main/jquery/jquery-vendor.js';
import axios from 'axios';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css'
import './asset/modules/menu/style/test-menu.css'
import FormInput from './components/form/form-input.js';
import FormRadio from './components/form/form-radio.js';
import AppButton from './components/testMaterial/test-button.js';
import NavMenu from './components/menu/nav-menu.js';
import M_1 from './service/m_1.json';
// import M_2 from './service/m_2.json';
import './asset/modules/main.css';
import './asset/modules/menu/style/test-menu.css'
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
// React.prototype.$http = axios;

class App extends React.Component{
    state = {
        collapsed: false,
        firstMenuId:'m_1',
        leftMenuData:M_1.m_1
    };

    componentWillMount = () => {

    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
        $('.trigger,.tixing-right').hide();
        $('.trigger-left,.tixing-left').show();
    };
    toggleout = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
        $('.trigger-left,.tixing-left').hide();
        $('.trigger,.tixing-right').show();
    };
    firstMenuClick = (event) => {
        this.setState({firstMenuId:event.getAttribute('id')});
        let _self = this;
        axios.get("http://127.0.0.1:5000/" + _self.state.firstMenuId ).then((res) => {
            let leftMenu = res.data;
            // (function (data) {
            _self.setState({leftMenuData:leftMenu},function () {
                console.log(_self.state.leftMenuData);
                // recursion = (data) => {
                //     return (
                //         data.map((menu, index) => {
                //             if (menu.children) {
                //                 return (
                //                     <SubMenu key={menu.id} title={menu.name}>
                //                         {this.recursion(menu.children)}
                //                     </SubMenu>
                //                 )
                //             } else {
                //                 return (<Menu.Item key={menu.id}>{menu.name}</Menu.Item>)
                //             }
                //         })
                //     )
                // };
            })
            // }).call(this,leftMenu);

        });
        console.log(_self.state.leftMenuData);
    };

    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <NavMenu firstMenuClick={this.firstMenuClick}></NavMenu>
                    <div className="tixing tixing-right" onClick={this.toggle}>
                        <Icon
                            className="trigger"
                            type='menu-fold'
                        />
                    </div>
                    <div className="tixing tixing-left" onClick={this.toggleout}>
                        <Icon
                            className="trigger-left"
                            type='menu-unfold'
                            style={{display:'none'}}
                        />
                    </div>
                </Header>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            {/*{this.recursion(this.state.leftMenuData)}*/}
                        </Menu>
                    </Sider>

                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }

    // constructor(props) {
    //     super(props);
    //     // this.state = {testvalue:'test'};
    //     // this.handleChange = this.handleChange.bind(this);
    //
    // };
    //
    // // handleChange(event){
    // //     this.setState({
    // //         testvalue: event.target.value
    // //     })
    // // };
    // render(){
    //     return(
    //         <div>
    //             <SiderDemo></SiderDemo>
    //             <NavMenu></NavMenu>
    //             <AppButton></AppButton>
    //             <form id="form-basic" className="form-horizontal   ">
    //                 <div id="basic-form" className="form-content">
    //                     <FormInput testvalue="user" type="text" name="username" id="form-username" className="form-control" labelText="*用户名：" ></FormInput>
    //                     <FormInput testvalue="password" type="password" name="password" id="form-password" className="form-control" labelText="*密码：" ></FormInput>
    //                     <FormInput testvalue="confirm" type="password" name="confirm-password" id="form-confirm-password" className="form-control" labelText="*确认密码："></FormInput>
    //                     <FormInput testvalue="mail" type="text" name="mail" id="form-mail" className="form-control" labelText="*电子邮箱："></FormInput>
    //                     <FormInput testvalue="phone" type="text" name="phone" id="phone" className="form-control" labelText="*手机号码：" ></FormInput>
    //                     <FormRadio labelText="*性别：" id1="form-male" id2="form-female" name="sex" value1="男" value2="女" label1Text="男" label2Text="女"></FormRadio>
    //                     <FormInput testvalue="date" type="text" name="date" id="form-date" className="form-control" labelText="*生日：" readonly="true"></FormInput>
    //                 </div>
    //             </form>
    //         </div>
    //     );
    // }
}
export default App;
