/* eslint-disable prettier/prettier */
import {createStackNavigator} from 'react-navigation';

import PageOne from './page_one';
import PageTwo from './page_two';

 const App = createStackNavigator({
  Home: { screen: PageOne },
  Profile: { screen: PageTwo },
});
export default App;
