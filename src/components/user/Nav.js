import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import '../../css/ProfilePage.css';
import { Row, Col } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


//<div style={{text-align:right}}>
//</div>

class Nav extends React.Component {
    state = {
        userID: "root",
        loggedIn: false
    }

    render() {
        return (
            <>
            <Header>
                <div>
                    <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">Something</Menu.Item>
                        <Menu.Item key="3">Something else </Menu.Item>
                    </Menu>
                </div>
            </Header>
            </>
        )
    }

}


export default Nav;
