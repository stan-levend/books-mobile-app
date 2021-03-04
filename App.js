// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import SearchScreen from './src/screens/SearchScreen'
import BookScreen from './src/screens/BookScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import UserAccountScreen from './src/screens/UserAccountScreen'
import FavoritesScreen from './src/screens/FavoritesScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import FavoriteBookScreen from './src/screens/FavoriteBookScreen';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// SearchNavigator.navigationOptions = () => {
//   return {
//     headerShown: false,
//     tabBarLabel: "Saved Books",
//     tabBarIcon: ({ tintColor }) => (
//       <Fontisto name="favorite" size={24} color="black" />
//     ),
//     showIcon: true,
//   }
// };

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const SearchBookTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchBook" component={SearchScreen}
        options={{ title: 'Search for a book', headerShown: false }} />
      <Stack.Screen name="Book" component={BookScreen}
        options={{ title: '' }} />
    </Stack.Navigator>
  )
}

const FavoriteBooksTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoriteBook" component={FavoriteBookScreen}
        options={{ title: '' }} />
      <Stack.Screen name="FavoriteBooks" component={FavoritesScreen}
        options={{ title: 'Favorite books', headerShown: false }} />
    </Stack.Navigator>
  )
}

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search book" component={SearchBookTab}
        options={{ title: 'Search', tabBarIcon: () => <MaterialCommunityIcons name="book-search" size={24} color="black" /> }} />
      <Tab.Screen name="Favorites" component={FavoriteBooksTab}
        options={{ title: 'My Books', tabBarIcon: () => <Entypo name="book" size={24} color="black" /> }} />
      <Tab.Screen name="User Account" component={UserAccountScreen}
        options={{ title: 'User Account', tabBarIcon: () => <FontAwesome name="user" size={24} color="black" /> }} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen}
          options={{ title: 'Home Screen' }} />
        <Stack.Screen name="Login" component={LoginScreen}
          options={{ title: 'Login Screen', headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen}
          options={{ title: 'SignUp Screen', headerShown: false }} />
        <Stack.Screen name="BottomTab" component={BottomTab}
          options={{ title: 'SignUp Screen', headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const switchNavigator = createSwitchNavigator({
//   welcome: WelcomeScreen,
//   signIn: SignInScreen,
//   signUp: SignUpScreen,
//   // loginNavigator: createStackNavigator({
//   // }),
//   bottomTabNavigator: createBottomTabNavigator({
//     Search: createStackNavigator({
//       searchBook: SearchScreen,
//       book: BookScreen,
//     }, {
//       headerShown: false,
//       tabBarLabel: "Saved Books",
//       tabBarIcon: ({ tintColor }) => (
//         <Fontisto name="favorite" size={24} color="black" />
//       ),
//       showIcon: true,
//     }),
//     favorites: FavoritesScreen,
//     userAccount: UserAccountScreen,
//   })
// });

export default App



// export default createAppContainer(switchNavigator)