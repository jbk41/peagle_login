import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col, Menu, Dropdown } from 'antd';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {UserOutlined, DownOutlined} from '@ant-design/icons';
import "antd/dist/antd.css";
import '../../css/ProfilePage.css';


const menu = (
    <Menu>
        <Menu.Item key="logout">
            <a>Profile</a>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to='/'> Log out </Link>
        </Menu.Item>
    </Menu>
);


class ProfileWidget extends React.Component {



    render() {
        return (
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="user-widget-dropdown" onClick={e => e.preventDefault()}>
                    <UserOutlined /> <DownOutlined />
                </a>
            </Dropdown>
        )
    }

}


export default ProfileWidget;
