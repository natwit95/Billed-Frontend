import React from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { TextInputMask } from "react-native-masked-text";
import { editContributors } from "../../action";

class SettleBill extends React.Component {
	state = {
		editContribution: this.props.route.params.contributor,
		
	};

	handleAmount = (input) => {
		this.setState((prevState) => {
			return {
				editContribution: {
					...prevState.editContribution,
					contributed_amount: this.props.route.params.contributor.contributed_amount - input
				}
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

	clearState = () => {
		this.setState({
		editContribution: {}
	})
	}

	handlePayment = () => {
        if(this.state.editContribution.contributed_amount >= 0 ){
            const data = {...this.state.editContribution};

			this.props.editContribution(data)
			this.clearState()
			
			// this.setState({loading: !this.state.loading})
			// this.setState({editContribution: this.props.route.params.contributor})
			this.props.navigation.goBack()
			
            }else{
            alert("You cannot pay an amount greater than the bill balance ")
		}
		
	};
	


	render() {
	
					
		return (
			<View style={styles.center}>
				<View >
                <Text style={{ fontSize: 25, alignSelf: "center", marginBottom:10}}>Amount Due:<Text style={{color:"red", fontSize: 25}}> ${this.state.editContribution.contributed_amount}.00</Text></Text>
					<Text style={{ fontSize: 15}}>How much would you like to pay today?</Text>

				</View>
				<TextInput
					placeholder= "$0.00"
					// style={styles.inputStyle}
					// type={"number"}
					// options={{
					// 	unit: "$",
					// 	delimiter: ",",
					// 	separator: ".",
					// }}
					style={styles.inputStyle}
					value={this.state.editContribution.contributed_amount}
					onChangeText={(input)=>this.handleAmount(input)}
				/>
				<TouchableOpacity onPress={this.handlePayment} style={styles.button}><Text style={styles.buttonText}>Make Payment</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.button}><Text style={styles.buttonText}>Cancel</Text></TouchableOpacity>
				
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		bills: state.bills,
		currUser: state.currUser,
		users: state.users
	};
}

function mdp(dispatch){
	return {
		editContribution: (contributor_obj) => dispatch(editContributors(contributor_obj))
	}
}
export default connect(mapStateToProps, mdp)(SettleBill);

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
		marginTop: 15,
		alignContent: "center",
	},
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgb(216, 187, 255)",
		margin:57,
		marginTop: 150,
		marginBottom:150,
		borderRadius:30,
		borderColor:"black",
		shadowColor: "black",
		shadowOpacity: 1,
		shadowOffset: {
			width: 4,
			height: 4,
		},
	},
	button: {
		borderWidth: 1,
		borderColor: '#007BFF',
		backgroundColor: '#007BFF',
		padding: 4,
		margin: 5,
		borderRadius: 10
	  },
	 buttonText: {
		color: '#FFFFFF',
		fontSize: 15,
		textAlign: 'center'
	  }
});
