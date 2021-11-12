import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import RootStore from './src/persistance/stores/RootStore';
import { StatusBar } from 'react-native';
import CommonLoading from './src/components/CommonLoading';
import { NavigationContainer } from '@react-navigation/native';
import ApplicationNavigator from './src/navigation/ApplicationNavigator';

export default function App() {

  // React.useEffect(() => {
  //   SplashScreen.hide();
  // });

  Text.defaultProps = Text.defaultProps || {}
  Text.defaultProps.allowFontScaling = false

  return (
    <Provider store={RootStore}>
      <SafeAreaProvider>
        <StatusBar
          hidden={false}
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
          <NavigationContainer>
            <ApplicationNavigator />
          </NavigationContainer>
        <Toast ref={ref => Toast.setRef(ref)} />
        <CommonLoading ref={ref => CommonLoading.setRef(ref)} />
      </SafeAreaProvider>
    </Provider>

  );
};