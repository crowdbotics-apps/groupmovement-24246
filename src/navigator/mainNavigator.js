import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList200279Navigator from '../features/ArticleList200279/navigator';
import ArticleList200278Navigator from '../features/ArticleList200278/navigator';
import ArticleList200277Navigator from '../features/ArticleList200277/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList200279: { screen: ArticleList200279Navigator },
ArticleList200278: { screen: ArticleList200278Navigator },
ArticleList200277: { screen: ArticleList200277Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
