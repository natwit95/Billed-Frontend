  
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles.js'
import { connect } from 'react-redux'

const Login = (props) =>

 <View style={styles.center}>
   {/* {console.log("I am in ALL BILLS", props.bills)} */}
    <Text style={styles.title}>Login</Text>
    
  </View>

function mapStateToProps(state){
  // {console.log("I am in ALL BILLS", state.bills)}

  return {
     bills: state.bills,
     currUser: state.currUser,
     
  } 
  
}
export default connect(mapStateToProps)(Login);