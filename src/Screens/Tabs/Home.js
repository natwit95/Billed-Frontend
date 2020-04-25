  
import React from 'react';
import { View, Text, FlatList,StyleSheet, TouchableOpacity} from 'react-native';
// import { styles } from '../../styles/styles.js'


const Home = (props) =>{
let array=[1,2,3,4,5]


return(
 <View style={styles.container}>
     <FlatList 
        data={array}
        renderItem={()=>
       <TouchableOpacity onPress={()=> props.navigation.navigate("Bill Details")}>
        <Text style={styles.item}>Home</Text>
       </TouchableOpacity> 
    }
    />
  </View>
)}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25,
        paddingHorizontal:0
    },
    item: {
        marginTop:10,
        // marginBottom:10,
        paddingBottom:40,
        backgroundColor: 'pink',
        fontSize:20,
        height:10,
        
        
        
        
        
        
        



    }
})