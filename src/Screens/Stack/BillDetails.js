  
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import { styles } from '../../styles/styles.js'
import CardSilder from 'react-native-cards-slider';



class BillDetails extends React.Component{
  render(){
    return(
      
      <CardSilder autoplay interval={2000}>
        <View style={styles.container}>
          <Text>HI</Text>
        </View>
        <View style={styles.container}>
          <Text>you</Text>
        </View>
        <View style={styles.container}>
          <Text>lol</Text>
        </View>
        <View style={styles.container}>
          <Text>me</Text>
        </View>
      </CardSilder>
    )
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius:10,
    marginTop:180,
    marginBottom:180,
    fontSize:20,
    borderRadius:10,
    borderWidth: 1,
    height: 170,  
    alignItems:'center', 
    backgroundColor: 'lightpink'  
},
});


export default BillDetails;
