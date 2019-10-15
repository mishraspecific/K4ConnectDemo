import {createStackNavigator,} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import HomeScreen from '../containers/HomeScreen';
import DetailScreen from '../containers/DetailScreen';

const appNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Users',
        headerTitleStyle: {
          fontSize: 20,
        },
      },
    },
    DetailScreen: {
      screen: DetailScreen,
      navigationOptions: {
        title: 'UserDetail',
        headerTitleStyle: {
          fontSize: 20,
        },
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: 'Back',
    },
  },
  {
    initialRouteName: 'HomeScreen',
  },
);

const Router = createAppContainer(appNavigator);

export default Router;
