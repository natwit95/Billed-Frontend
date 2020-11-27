  
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles.js'
import { connect } from 'react-redux'

const Login = (props) =>

 <View style={styles.center}>
    <Text style={styles.title}>Login</Text>
    
  </View>

function mapStateToProps(state){

  return {
     bills: state.bills,
     currUser: state.currUser,
     
  } 
  
}
export default connect(mapStateToProps)(Login);