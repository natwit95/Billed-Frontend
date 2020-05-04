import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

import { connect } from "react-redux";
import { TextInputMask } from "react-native-masked-text";

class SettleBill extends React.Component {
	state = {
		// showModal: false,
		amount: "",
		editContribution: this.props.route.params.contributor,
	};

	handleAmount = (input) => {
		this.setState((prevState) => {
			return {
				editContribution: {
					...prevState.editContribution,
					contributed_amount: this.props.route.params.contributor.contributed_amount - input,
				},
			};
		});
	};

	//       handleEdit = (id) => {
	//         let object = this.props.route.params.contributor
	//         this.setState({
	//             editContribution: object
	//         })
	//         // this.props.navigation.navigate("Settle Bill")
	//         console.log("BILLL IDDD",id)
	// }

	// handleAmount = (input) => {
	// 	this.setState({
	// 		amount: input,
	// 	});
	// };

	handlePayment = () => {
        if(this.state.editContribution.contributed_amount >= 0 ){
            const data = {...this.state.editContribution, contributed_amount: this.state.editContribution.contributed_amount};

            fetch(`http://localhost:3000/bill_contributors/${this.props.route.params.contributor.id}`, {
              method: 'PATCH', // or 'PUT'
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }else{
            alert("You cannot pay an amount greater than the bill balance ")
        }
       
    };

	render() {
		console.log("OBJECT OF AMOUNT",this.props.route.params.contributor)
		console.log(this.state.editContribution);
		// route.params.contributor.contributed_amount
		return (
			<View style={styles.center}>
				<View>
                <Text>Amount Due:{this.props.route.params.contributor.contributed_amount}</Text>
					<Text>How much would you like to pay today?</Text>

				</View>
				<TextInput
					placeholder= "$0.00"
					style={styles.inputStyle}
					type={"money"}
					options={{
						unit: "$",
						delimiter: ",",
						separator: ".",
					}}
					style={styles.inputStyle}
					value={this.state.editContribution.contributed_amount}
					onChangeText={this.handleAmount}
					//   {console.log()}
				/>
				<Button onPress={this.handlePayment} title="Make Payment" />
				<Button onPress={() => this.props.navigation.goBack()} title="Cancel" />
			</View>
		);
	}
}

function mapStateToProps(state) {
	// {console.log("I am in ALL BILLS", state.bills)
	return {
		bills: state.bills,
		currUser: state.currUser,
	};
}

export default connect(mapStateToProps)(SettleBill);

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
});
