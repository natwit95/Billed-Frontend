import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { connect } from "react-redux";
import Swiper from "react-native-web-swiper";
import { TextInput } from "react-native-paper";

class AllBills extends React.Component {
	

	renderContributions = () => {
		let bills = this.props.bills.map((bill) => bill);
		const contributors = this.props.bills.map((bill) =>
			bill.bill_contributors.filter(
				(contributor) =>
					contributor.user_id === this.props.currUser.id &&
					contributor.contributed_amount > 0
			)
		);
		let currUserContributions = [].concat.apply([], contributors);

		return currUserContributions;
	};

	render() {
		// console.log("EDIT-CONTRIBUTION:::::::::::",this.state.editContribution)
		return (
     
			// this.handleEdit(this.props.route.params.bill_id),
			<Swiper>
				{this.renderContributions().map((contributor) => (
					<View key={contributor.user_id} style={styles.container}>
						<Text>Total for: {contributor.name}</Text>
						<Text>{contributor.description}</Text>
						<Text>Amount Owed: {contributor.contributed_amount}</Text>
           
						<Button
							onPress={()=> this.props.navigation.navigate("Settle Bill", {contributor: contributor})}
							title={contributor.paid ? "PAID" : "SETTLE BILL"}
						/>
					</View>
				))}
			</Swiper>
       
		);
	}
}

function mapStateToProps(state) {
	return {
		bills: state.bills,
		currUser: state.currUser,
	};
}

export default connect(mapStateToProps)(AllBills);

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		justifyContent: "center",
		borderRadius: 10,
		marginTop: 180,
		marginBottom: 180,
		fontSize: 20,
		borderRadius: 10,
		borderWidth: 1,
		height: 170,
		alignItems: "center",
		backgroundColor: "lightpink",
	},
	inputStyle: {
		// height: 40,
		width: 200,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: "white",
		padding: 10,
		// justifyContent: "center",
		marginTop: 15,
		alignContent: "center",
	},
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
