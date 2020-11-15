import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

import CardSilder from "react-native-cards-slider";
import { Button } from "react-native-paper";
import Swiper from "react-native-web-swiper";
import Modal from "react-native-modal";
import { TextInputMask } from "react-native-masked-text";

class BillDetails extends React.Component {
	showModal = () => {
		this.setState((prevState) => ({
			showModal: !prevState.showModal,
		}));
	};

	render() {
		const bills = this.props.route.params.item;

		const bill_contributors = this.props.route.params.item.bill_contributors.filter(
			(contributor) => contributor.user_id !== bills.user_id
		);

		return (
			<View style={{ flex: 1 }}>
				<Swiper>
					{bill_contributors.map((contributor) => (
						<View key={contributor.user_id} style={styles.container}>
							<View style={styles.header}>
								<Text style={styles.descriptionText}>{contributor.name}</Text>
							</View>
							<View style={{ marginTop: 40 }}>
								<Text style={{ fontSize: 20 }}>
									Amount Owed for {contributor.description}:{" "}
									<Text style={{ color: "red" }}>
										$
										{contributor.contributed_amount
											.toFixed(2)
											.replace(/\d(?=(\d{3})+\.)/g, "$&,")}
									</Text>{" "}
								</Text>
							</View>
							<Button style={{ marginTop: 20 }} onPress={null}>
								<Text style={{ fontSize: 20 }}>
									Status: {contributor.paid ? "PAID" : "UNPAID"}
								</Text>
							</Button>
						</View>
					))}
				</Swiper>
			</View>
		);
	}
}

export default BillDetails;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		marginTop: 180,
		marginBottom: 180,
		borderRadius: 10,
		height: 170,
		alignItems: "center",
		backgroundColor: "#fff",
		marginBottom: 20,
		marginLeft: "2%",
		width: "96%",
		shadowColor: "black",
		shadowOpacity: 1,
		shadowOffset: {
			width: 3,
			height: 3,
		},
	},
	inputStyle: {
		height: 40,
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
		borderRadius: 10,
		borderBottomEndRadius: 0,
		borderBottomStartRadius: 0,
		borderTopColor: "black",
		fontFamily: "Avenir",
		justifyContent: "center",
	},
});
