/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';



import Drawer from './src/screen/Dra';
import Once from './src/screen/Onc';


AppRegistry.registerComponent(appName, () => Drawer);
