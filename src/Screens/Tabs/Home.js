  
import React from 'react';
import { View, Text, FlatList,StyleSheet, TouchableOpacity} from 'react-native';
// import { styles } from '../../styles/styles.js'
import { connect } from 'react-redux'
import { fetchBills, fetchUsers, currentUser } from '../../action'





class Home extends React.Component{

componentDidMount(){

    this.props.allBills()
    this.props.allUsers()
}

render(){
let array=[1,2,3,4,5]
return(
    
 <View style={styles.container}>
     <FlatList 
        data={array}
    
        renderItem={()=>
       <TouchableOpacity onPress={()=> this.props.navigation.navigate("Bill Details")}>
        <Text style={styles.item}>Home:{} </Text>
       </TouchableOpacity> 
    }
    />
  </View>
)}}


function mapStateToProps(state){
   

    return {
       bills: state.bills,
       currUser: state.currUser,
       
    } 
    
}

const mdp = (dispatch) => {
    return {
        allBills: () => dispatch(fetchBills()),
        allUsers: () => dispatch(fetchUsers()),
        // currentUser: () => dispatch(currentUser())
    }
}

export default connect(mapStateToProps,mdp)(Home);





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25,
        paddingHorizontal:0,
        borderRadius:10
    },
    item: {
        marginTop:10,
        // marginBottom:10,
        paddingBottom:40,
        backgroundColor: 'pink',
        fontSize:20,
        height:10,
        borderRadius:10
        
        
        
        
        
        
        



    }
})

// componentDidMount(){
//     fetch("http://localhost:3000/bills")
//     .then(resp=>resp.json())
//     .then(bills => {
//         console.log(bills)
//         // console.log("in action",bills)
//     })
// }