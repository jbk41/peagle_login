import React from 'react';
import ProfileContent from './ProfileContent';
import Nav from './Nav';
import ProfileWidget from './ProfileWidget';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { Row, Col, Divider } from 'antd';
import "antd/dist/antd.css";
import '../../css/ProfilePage.css';
import {EditOutlined} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

class ProfilePage extends React.Component {
    render () {
        return (
            <>
                <ProfileContent />
            </>
        )
    }
}

export default ProfilePage;
