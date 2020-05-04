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
		let array = [1, 2, 3, 4, 5];
		const bills = this.props.bills.map((bill) => {
			return bill;
		});
		// let contributors= bills.map(contributor=> {return contributor})

		// console.log("this is home", bills);
		return (
			//  <View style={styles.container}>

			//        <TouchableOpacity onPress={()=> this.props.navigation.navigate("Bill Details")}>
			//            {bills.map(bill=> <Text style={styles.item}>{bill.description}</Text>)}

			//        </TouchableOpacity>

			//   </View>
			// console.log(this.props.bills)
			<FlatList
				data={this.props.bills}
				keyExtractor={(item) => item.id}
                renderItem={({ item }) => 
                <TouchableOpacity onPress={()=> this.props.navigation.navigate("Bill Details",{item: item})}>
					<Text style={styles.item}>{item.description}    ${item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
                </TouchableOpacity>
				}
			/>
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
});

// componentDidMount(){
//     fetch("http://localhost:3000/bills")
//     .then(resp=>resp.json())
//     .then(bills => {
//         console.log(bills)
//         // console.log("in action",bills)
//     })
// }
