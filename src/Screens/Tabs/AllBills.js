import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import Swiper from "react-native-web-swiper";
import { TextInput } from "react-native-paper";

class AllBills extends React.Component {
	renderContributions = () => {
	
		return this.props.contributors.filter(
			(contributor) =>
				contributor.user_id === this.props.currUser.id &&
				contributor.contributed_amount > 0
		);
	};

	totalAmountOwed = () => {
		const amounts = this.props.contributors
			.filter((contributor) => contributor.user_id === this.props.currUser.id)
			.map((contributor) => contributor.contributed_amount)
			.reduce((a, b) => a + b, 0);
		return amounts.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
	};

	render() {
		return (
			<ScrollView >
				<View style={styles.center}>
					<Text style={styles.headerText}>
						Your contribution amount due: ${this.totalAmountOwed()}
					</Text>
				</View>
				{this.renderContributions().map((contributor) => (
				<View key={contributor.id} style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.descriptionText}>
							{contributor.description}
						</Text>
					</View>
					<View style={styles.row}>
						<Text style={styles.description}> Remaining Balance Due:</Text>
						<Text style={styles.amount}>
							$
							{contributor.contributed_amount
							.toFixed(2)
							.replace(/\d(?=(\d{3})+\.)/g, "$&,")}
						</Text>
					</View>
					<Button
						onPress={() =>
							this.props.navigation.navigate("Settle Bill", {
								contributor: contributor
							})
						}
						title={contributor.paid ? "PAID" : "SETTLE BILL"}
					/>
					</View>
				))}
			</ScrollView>
		);
	}
}

function mapStateToProps(state) {
	return {
		bills: state.bills,
		currUser: state.currUser,
		contributors: state.contributors,
	};
}

export default connect(mapStateToProps)(AllBills);

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// justifyContent: "center",
		// borderRadius: 10,
		// marginTop: 180,
		// marginBottom: 180,
		// fontSize: 20,
		borderRadius: 10,
		// borderWidth: 1,
		height: 170,
		alignItems: "center",
		// backgroundColor: "lightpink",
		backgroundColor: "white",
		marginBottom: 10,
		marginLeft: "2%",
		width: "96%",
		shadowColor: "black",
		shadowOpacity: 1,
		shadowOffset: {
			width: 3,
			height: 3,
		},
	},

	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 15,
		marginTop: 6,
		shadowColor: "black",
		shadowOpacity: 1,
		shadowOffset: {
			width: 4,
			height: 4,
		},
		
	},
	headerText: {
		marginTop: 2,
		color: "black",
		fontSize: 25,
		textAlign: "center",
		backgroundColor: "white",
		width: 350,
		
		
	},
	descriptionText: {
		color: "#FFFFFF",
		fontSize: 25,
		textAlign: "center",
		color: "black",
		fontWeight: "bold",
		
	},
	header: {
		//   flex:1,
		backgroundColor: "rgb(216, 187, 255)",
		// marginTop: 20,
		width: "100%",
		height: "25%",
		// alignItems: "center",
		borderRadius: 10,
		borderBottomEndRadius: 0,
		borderBottomStartRadius: 0,
		borderTopColor: "black",
		fontFamily: "Avenir",
		justifyContent: "center",
		
	},
	description: {
		fontSize: 20,
		lineHeight: 40,
		width: 250,
		marginRight: 10,
		// fontWeight: "bold",
		fontFamily: "Avenir",
		
	},
	amount: {
		fontSize: 25,
		lineHeight: 40,
		fontFamily: "Avenir",
		fontWeight: "bold",
		marginRight: 0,
		color: "red",
	},
	row: {
		flex: 1,
		paddingVertical: 25,
		paddingHorizontal: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		// borderBottomWidth: 1,
		// borderBottomColor: "white",
		// borderRadius:20,
		// backgroundColor:'#c6cbef'
	},
});
