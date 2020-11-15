import React from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	ListItem,
	Image,
} from "react-native";
import { connect } from "react-redux";


class Home extends React.Component {

	totalOwed = () => {
		const amounts = this.props.contributors
		.filter((contributor) => contributor.user_id !== this.props.currentUser.id)
		.map((contributor) => contributor.contributed_amount)
		.reduce((a, b) => a + b, 0);
		return amounts.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
	}

	render() {
		

		return (
			<View>
				<Image
					style={{ width: 150, height: 50, marginTop: 10, alignSelf: "center" }}
					source={require("./billed.png")}
				/>
				<View style={{ marginBottom: 7, marginTop: 7 }}>
					<Text style={{ textAlign: "center", fontSize: 20 }}>
						Welcome {this.props.currentUser.name}, so far your bill contributors owe you ${this.totalOwed()}!
					</Text>
				</View>
				<FlatList
					data={this.props.bills}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.row}
							onPress={() =>
								this.props.navigation.navigate("Bill Details", { item: item })
							}
						>
							<Text style={styles.description}>{item.description}</Text>
							<Text style={styles.amount}>
								${item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
							</Text>
						</TouchableOpacity>
					)}
				/>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		bills: state.bills,
		currentUser: state.currUser,
		contributors: state.contributors,
	};
}



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
		fontSize: 20,
		lineHeight: 30,
		width: 200,
		marginRight: 15,
		fontWeight: "bold",
		fontFamily: "Avenir",
		color: "black",
	},
	amount: {
		fontSize: 25,
		lineHeight: 40,
		fontFamily: "Avenir",
		color: "black",
	},
	row: {
		flex: 0.5,
		paddingVertical: 15,
		paddingHorizontal: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottomWidth: 0,
		borderBottomColor: "white",
		borderRadius: 20,
		backgroundColor: "white",
		marginTop: 5,
		marginBottom:10,
		marginRight: 7,
		marginLeft: 7,
		shadowColor: "black",
		shadowOpacity: 1,
		shadowOffset: {
			width: 4,
			height: 4,
		},

		
	},
});
