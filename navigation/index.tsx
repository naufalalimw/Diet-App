import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { API_URL } from '../constants/ENV';
import { AuthContext, User } from '../constants/context';
import { ActivityIndicator, Alert, ColorSchemeName } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Login from '../screens/Login';
import HomeScreen from '../screens/Homepage';
import BottomTabNavigator from './BottomTabNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
        if (userToken) {
          let user = await fetch(API_URL+'/api/auth/user',{
            headers: {
              Authorization: 'Bearer '+userToken
            }
          }).then (res => res.json())
          Object.assign(User, {...user, token: userToken})
        }
      } catch (e) {
        // Restoring token failed
        Alert.alert("Something Error!!!")
        userToken = null
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: {user: Object, access_token: string}) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        if (!data) {
          return
        }
        Object.assign(User,{...data.user, token: data.access_token})
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => {
        SecureStore.deleteItemAsync('access_token')
        AsyncStorage.clear()
        dispatch({ type: 'SIGN_OUT' })
      }, 
    }),
    []
  );

  return (
    
      <Stack.Navigator>
        {(true) ? (
          <Stack.Screen name="Root" component={BottomTabNavigator} />
        ) : (
          <Stack.Screen name="NotFound" component={HomeScreen} />
        )}
      </Stack.Navigator>
    
  );
}