import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Row, Col, Divider } from 'antd';
import LoginPage from './LoginPage';
import FPPage from './FPPage';
import SignUpPage from './SignUpPage';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={LoginPage} />
                        <Route path='/reset-password' exact component={FPPage} />
                        <Route path='/signup' exact component={SignUpPage} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
