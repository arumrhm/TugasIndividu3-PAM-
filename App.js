 import React from 'react';
 import MainPage from './src/components/layouts/MainPage';
 import SearchPage from './src/components/layouts/SearchPage';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 const Stack = createNativeStackNavigator();
 
 const App = () => {
 
     return (
         <NavigationContainer>
             <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
                 <Stack.Screen name="MainPage" component={MainPage} />
                 <Stack.Screen name="SearchPage" component={SearchPage} />
             </Stack.Navigator>
         </NavigationContainer>
     );
 };
 
 
 export default App;
 