import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen5101666Navigator from '../features/BlankScreen5101666/navigator';
import SignIn23101665Navigator from '../features/SignIn23101665/navigator';
import SignUp24101664Navigator from '../features/SignUp24101664/navigator';
import ArticleList5101663Navigator from '../features/ArticleList5101663/navigator';
import BlankScreen1101483Navigator from '../features/BlankScreen1101483/navigator';
import BlankScreen0101328Navigator from '../features/BlankScreen0101328/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen5101666: { screen: BlankScreen5101666Navigator },
SignIn23101665: { screen: SignIn23101665Navigator },
SignUp24101664: { screen: SignUp24101664Navigator },
ArticleList5101663: { screen: ArticleList5101663Navigator },
BlankScreen1101483: { screen: BlankScreen1101483Navigator },
BlankScreen0101328: { screen: BlankScreen0101328Navigator },

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
