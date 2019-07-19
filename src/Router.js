import React from 'react';
import { StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import SplashPage from './components/SplashPage/SplashPage';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Home from './components/Home/Home';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Tutorial from './components/Tutorial/Tutorial';
import Welcome from './components/Welcome/Welcome';

const RouterComponent = () => {
	return (
		<React.Fragment>
			<StatusBar barStyle="dark-content" />
			<Router>
				<Scene key="root">
					<Scene key="splashPage" component={SplashPage} initial hideNavBar={true} />
					<Scene key="loginForm" component={LoginForm} hideNavBar={true} />
					<Scene key="signUpForm" component={SignUpForm} hideNavBar={true} />
					<Scene key="home" component={Home}  hideNavBar={true} />
					<Scene key="chatRoom" component={ChatRoom} hideNavBar={true} />
					<Scene key="tutorial" component={Tutorial} hideNavBar={true} />
					<Scene key="welcome" component={Welcome} hideNavBar={true} />
				</Scene>
			</Router>
		</React.Fragment>
	);
};

export default RouterComponent;
