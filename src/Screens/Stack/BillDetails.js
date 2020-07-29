import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
// import { styles } from '../../styles/styles.js'
import CardSilder from "react-native-cards-slider";
import { Button } from "react-native-paper";
import Swiper from "react-native-web-swiper";
import Modal from "react-native-modal";
import { TextInputMask } from "react-native-masked-text";

class BillDetails extends React.Component {
	// state = {
    // showModal: false,
    // amount: ""
	// };

	showModal = () => {
		this.setState((prevState) => ({
			showModal: !prevState.showModal,
		}));
  };
  
//   handleAmount = (input) => {
    
//     this.setState({
//       amount: input
//     })
//   }

  handlePayment = () => {
    //patch the cintributors amount to input they type in 
  }
   
	render() {
    // console.log("getting items",this.props.route.params.item)
    // console.log(parseFloat(this.state.amount.replace(/[^\d\.]/g,'')))
		const bills = this.props.route.params.item;

		const bill_contributors = this.props.route.params.item.bill_contributors.filter(
			(contributor) => contributor.user_id !== bills.user_id
		);
		//bill_contributors above returns everyone except the user that created the bill
		// console.log("filtering:::",bill_contributors)
		return (
			<View style={{ flex: 1 }} >
				{/* <View >
					<Modal backdropColor="white" backdropOpacity={.95} isVisible={this.state.showModal} style={styles.center}>
            <Text>How much would you like to pay?</Text>
						<TextInputMask
					style={styles.inputStyle}
					type={"money"}
					options={{
						unit: "$",
						delimiter: ",",
						separator: ".",
          }} 
          style={styles.inputStyle}
          value={this.state.amount}
          onChangeText={this.handleAmount}
        ></TextInputMask>
            <Button>Make Payment</Button>
            <Button onPress={this.showModal}>Back</Button>
					</Modal>
				</View> */}
				<Swiper>
					
					{bill_contributors.map((contributor) => (
					
						<View key={contributor.user_id} style={styles.container}>
							<View style={styles.header}>
							<Text style={styles.descriptionText}>{contributor.name}</Text>
							</View>
							<View style={{marginTop: 40}}>
								
							<Text style={{fontSize: 20}}>Amount Owed for {contributor.description}: <Text style={{color:"red"}}>${contributor.contributed_amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text> </Text>
							</View>
							<Button style={{marginTop:20}} onPress={null}>
								<Text style={{fontSize: 20}}>Status: {contributor.paid ? "PAID" : "UNPAID" }</Text>
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
	// flex: 1,
	justifyContent: "center",
	// borderRadius: 10,
	marginTop: 180,
	marginBottom: 180,
	// fontSize: 20,
	borderRadius: 10,
	// borderWidth: 1,
	height: 170,
	alignItems: "center",
	// backgroundColor: "lightpink",
	backgroundColor: '#fff',
	marginBottom: 20,
	marginLeft: '2%',
	width: '96%',
	shadowColor: 'black',
	shadowOpacity: 1,
	shadowOffset:{
		width: 3,
		height:3

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
    alignContent: "center"
		
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
		// alignItems: "center",
		borderRadius: 10,
		borderBottomEndRadius: 0,
		borderBottomStartRadius: 0,
		borderTopColor: "black",
		fontFamily: "Avenir",
		justifyContent: "center",
		
	},
});