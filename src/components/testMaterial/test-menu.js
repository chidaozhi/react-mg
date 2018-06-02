import React from 'react'
import $ from '../../imports/main/jquery/jquery-vendor.js';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css'
import '../../asset/modules/menu/style/test-menu.css'

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };


    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        $('.trigger,.tixing-right').hide();
        $('.trigger-out').show();
    };
    toggleout = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        $('.trigger-out').hide();
        $('.trigger').show();
    };
    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type='menu-unfold'
                        onClick={this.toggle}
                    />
                    <Icon
                        className="trigger-out"
                        type='menu-fold'
                        onClick={this.toggleout}
                        style={{display:'none'}}
                    />
                </Header>


                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        {/*<div className="logo" />*/}
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default SiderDemo