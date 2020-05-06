import React from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	ListItem,
} from "react-native";
// import { styles } from '../../styles/styles.js'
import { connect } from "react-redux";
// import { fetchBills, fetchUsers, currentUser } from '../../action'

class Home extends React.Component {
	// getContributors=() => (
	//     this.props.bills.map(bill=> {  <FlatList
	//         data={bill}

	//         renderItem={(item)=>
	//        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Bill Details")}>
	//         <Text style={styles.item}>{item.des}</Text>
	//        </TouchableOpacity>
	//     }
	//     />})

	// )

	Response = ({ description }) => {
		return (
			<View style={styles.item}>
				<Text h4 style={styles.title}>
					{description}
				</Text>
			</View>
		);
	};

	render() {
		// console.log("this is home",this.props.bills)
		// let array = [1, 2, 3, 4, 5];
		// const bills = this.props.bills.map((bill) => {
		// 	return bill;
		// });
		// let contributors= bills.map(contributor=> {return contributor})

		// console.log("this is home", bills);
		return (
			
			 <View style={styles.container}>
				 <View style={{borderBottomWidth:1,marginBottom:7}} ><Text style={{textAlign:"center",fontSize:35, }}>Welcome {this.props.currentUser.name}!</Text></View>
			<FlatList
				data={this.props.bills}
				keyExtractor={(item) => item.id}
                renderItem={({ item }) => 
                <TouchableOpacity style={styles.row} onPress={()=> this.props.navigation.navigate("Bill Details", {item: item})}>
					<Text style={styles.description}>{item.description}</Text>
					<Text style={styles.amount}>${item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
                </TouchableOpacity>
				}
			/> 
			</View>
			
		);
	}
}

function mapStateToProps(state) {
	return {
		bills: state.bills,
		currentUser: state.currUser,
	};
}

// const mdp = (dispatch) => {
//     return {
//         allBills: () => dispatch(fetchBills()),
//         allUsers: () => dispatch(fetchUsers()),
//         // currentUser: () => dispatch(currentUser())
//     }
// }

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 25,
		paddingHorizontal: 0,
		borderRadius: 10,
	},
	item: {
		marginTop: 10,
		// marginBottom:10,
		paddingBottom: 40,
		backgroundColor: "pink",
		fontSize: 20,
		height: 10,
		borderRadius: 10,
	},
	description: {
		fontSize:20,
		lineHeight: 30,
		width:200,
		marginRight: 15,
		fontWeight: 'bold',
		fontFamily: 'Avenir',
		color: "black"
	},
	amount: {
		fontSize:25,
		lineHeight:40,
		fontFamily: 'Avenir',
		color: "black"
	},
	row:{
		flex:1,
		paddingVertical: 25,
		paddingHorizontal: 15,
		flexDirection:'row',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: "white",
		borderRadius:20,
		backgroundColor:'rgb(230, 204, 190)',
		

	}


});

// componentDidMount(){
//     fetch("http://localhost:3000/bills")
//     .then(resp=>resp.json())
//     .then(bills => {
//         console.log(bills)
//         // console.log("in action",bills)
//     })
// }
