import React from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BillDetails from '../Screens/Stack/BillDetails';
import Home from '../Screens/Tabs/Home';
import AddBill from '../Screens/Tabs/AddBill';
import AllBills from '../Screens/Tabs/AllBills';
import Account from '../Screens/drawer/Account';
import AddFriends from '../Screens/drawer/AddFriends';

const Drawer = createDrawerNavigator()
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()




class AppNavigator extends React.Component {


  createHomeStack = () => 
  <Stack.Navigator >
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Bill Details" component={BillDetails}  />
  </Stack.Navigator>
  
  createTabsNav = () =>   
  <Tab.Navigator >
    <Tab.Screen name="Home" children={this.createHomeStack} options={{tabBarIcon: 'home-account'}}/> 
      
    <Tab.Screen name="Add Bill" options={{tabBarIcon: 'plus'}}>
      {props => <AddBill {...props}  />}
      </Tab.Screen>
    <Tab.Screen name="Pay Bills" component={AllBills} options={{tabBarIcon: 'credit-card'}} />
  </Tab.Navigator> 
  

  render() {
    // console.log(this.state)
    return (

    <NavigationContainer  >
      <Drawer.Navigator initialRouteName=" " drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 180,
        
      }}>
        <Drawer.Screen name=" " component={this.createTabsNav} options={{ drawerIcon: props => <Image
          style={{ width: 110, height: 35 }}
          source={require('../assets/billed.png')}
          /> }}  
      />
        <Drawer.Screen initialRouteName="Account" name="Account" component={Account} />
        <Drawer.Screen name="Add Friends" component={AddFriends} />
        
      </Drawer.Navigator> 
    </NavigationContainer>

  );
}
}
export default AppNavigator;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(50, 50, 50)',
    border: 'rgb(199, 199, 204)',
    position: 'center',
    fontSize: 100,
    color: '#1273de',
  },
}; 