/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
//import App from './App';

//import listview from './my/listviewdata';
//import maps from './my/maps';
//import Test from './my/test_component';
//import Test from './my/test';
//import ProgressBar from './my/progressBar';
import TestComponent from './my/testComponent';
AppRegistry.registerComponent(appName, () => TestComponent);
