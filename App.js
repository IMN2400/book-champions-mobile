import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BookList } from './src/components/BookList';
import { MyBooks } from './src/components/MyBooks';
import { Profile } from './src/components/Profile';

export default function App() {
  
  const BottomTabs = createBottomTabNavigator()
  return (<NavigationContainer>
      <BottomTabs.Navigator screenOptions={{sceneStyle: {paddingTop:60}, headerShown: false}}>
        <BottomTabs.Screen name='bookList' component={BookList} />
        <BottomTabs.Screen name='myBooks' component={MyBooks} />
        <BottomTabs.Screen name='profile' component={Profile} />
      </BottomTabs.Navigator>
  </NavigationContainer>);
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 300,
      borderColor: '#020',
      borderWidth: 3,
      padding: 50,
      paddingBottom: 210,
    },

    mainContainer: {
      padding: 50,
      paddingBottom: 210,
    }
  });



  