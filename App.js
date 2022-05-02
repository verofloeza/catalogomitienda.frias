import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    MontserratBold: require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    RobotoBold: require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    Roboto: require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return <AppLoading />
  };
  
  return (
    <Provider store={store}>
      <MainNavigator /> 
    </Provider>
    
  );
}