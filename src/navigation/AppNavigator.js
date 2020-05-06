import React from 'react';
import 'react-native-gesture-handler';
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
import Login from '../Screens/Stack/Login';
import Signup from '../Screens/Stack/Signup';
import SettleBill from '../Screens/Stack/SettleBill';
// import Form from '../Screens/Stack/Form';



const Drawer = createDrawerNavigator()
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()




class AppNavigator extends React.Component {

  createPayBillStack = () => 
  <Stack.Navigator >
    <Stack.Screen name="Pay Bills" component={AllBills}/>
    <Stack.Screen name="Settle Bill" component={SettleBill}  />
    
  </Stack.Navigator>


  createHomeStack = () => 
  <Stack.Navigator >
    {/* <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Login" component={Signup}/> */}
    
    <Stack.Screen name="Home" component={Home}/>
   
    <Stack.Screen name="Bill Details" component={BillDetails}   />
    
  </Stack.Navigator>
  
  createTabsNav = () =>   
  <Tab.Navigator style={MyTheme}>
    <Tab.Screen name="Home" children={this.createHomeStack} options={{tabBarIcon: 'home-account'}}/> 
      
    <Tab.Screen name="Add Bill" options={{tabBarIcon: 'plus', }} >
      {props => <AddBill {...props}  />}
      </Tab.Screen>
    <Tab.Screen name="Pay Bills" children={this.createPayBillStack} options={{tabBarIcon: 'credit-card'}} />
  </Tab.Navigator> 
  

  render() {
    // console.log(this.state)
    return (

    <NavigationContainer theme={MyTheme} >
      <Drawer.Navigator initialRouteName=" " drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 180,
        
      }}>
        <Drawer.Screen name=" " component={this.createTabsNav} options={{ drawerIcon: props => <Image
          style={{ width: 110, height: 35 }}
          source={require('../assets/billed.png')}
          /> }}  
      />
        <Drawer.Screen name="Search Friends" component={AddFriends} />
        <Drawer.Screen initialRouteName="Account" name="Account" component={Account} />
        
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
    // primary: 'rgb(164, 80, 139)',
    background: 'rgb(234, 219, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(50, 50, 50)',
    border: 'rgb(199, 199, 204)',
    position: 'center',
    fontSize: 100,
    color: '#1273de',
    header:'rgb(200, 204, 146)'
  },
}; 