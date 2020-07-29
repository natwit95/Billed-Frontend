import React from "react";
import {View,Text,TextInput,Button,StyleSheet,Header, TouchableOpacity, Image} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { connect } from 'react-redux'
// import Autocomplete from 'react-native-autocomplete-input';
import AutoTags from  'react-native-tag-autocomplete';
import { postBills } from "../../action";



class AddBill extends React.Component {
	state= {
		
		description: "",
		currency: "",
		date: "",
		splitWith: [this.props.currentUser]

	}

	handleDescription = (input) => {
		
			this.setState({ description: input });
		
	};

	handleCurrency = (input) => {
		this.setState({ currency: input });
	};

	handleDate = (input) => {
		this.setState({ date: input });
	};

// 	handleSearch = (input) => {
// 		const followers = this.props.currentUser.followings.filter(follower=> follower.name.toUpperCase().includes(input.toUpperCase()))
// console.log("IN THE SEARCH TERM:", this.state.searchTerm)
// 		this.setState({searchTerm: followers })
// 	}

	

	handleDelete = index => {
		let splitWith = this.state.splitWith;
		splitWith.splice(index, 1);
		this.setState({ splitWith });
	}

	handleAddition = suggestion => {
		if(this.state.splitWith.includes(suggestion)){
			return alert("You cannot add the same person twice!")
		}
		this.setState((prevState)=>({ splitWith: [...prevState.splitWith, suggestion]}));
	}
	// addBills = (bill) => {
	// 	this.setState((prevState)=> ({bills: {...prevState.bills, bill}}))
	//   }

	// handleSuggestions= () => {
	// 	let currentFollowers = this.props.currentUser.followings
	// 	if(currentFollowers.length <= 0){
	// 		alert("Add friends before splitting")
	// 	}else{
	// 	return currentFollowers}
	// }   //use this when you have follow friends feature

	clearState = () => {
		this.setState({
		description: "",
		currency: "",
		date: "",
		splitWith: [this.props.currentUser]
	})
	}
	handlePost = () => {
		// console.log("this is working")
		const {description, currency, date } = this.state
		if(description.length && currency.length && date.length > 0){
    
		const data = {
      description: this.state.description,
      amount: this.state.currency.replace(/[^\d\.]/g,''),
      due_date: this.state.date,
	  user_id: this.props.currentUser.id,
	  bill_contributors: [...this.state.splitWith]
	  };


	  this.props.postBills(data)//action creator
	  this.clearState()
	  this.props.navigation.navigate("Home")
      
	}else{
		alert("Please make sure all inputs are filled before submitting a bill")
	}
		
	}

	
	render() {
		// console.log("spitting bill with::",this.state.splitWith)
		// console.log("split with", this.state.splitWith)
		// console.log(this.state.currenc)
		// console.log(this.state.date)
		// console.log(this.state.bills)

		// let newFollowers = this.handleSuggestions() ///use this when you have a follow friends feature
		// const followers = this.props.currentUser.followings.map(follower=> follower.name)
		console.log(this.state.splitWith)
		return (
      
			<View style={styles.center}>
				
				
				<View style={{flex:.2}}>
				<Image

						style={{ width: 160, height: 40, marginTop: -115,  opacity: 0.8}}
						source={require("./add_bill.png")}
					/>
				</View>
				<View style={styles.autocompleteContainer} >
				
				<AutoTags 
				
					suggestions={this.props.currentUser.followings}
					tagsSelected={this.state.splitWith}
					handleAddition={this.handleAddition}
					handleDelete={this.handleDelete}
					placeholder="Split With.."
					onCustomTagCreated={this.handleAddition}
					tagsOrientedBelow={true}
					
					
					
					 />
				</View>
			
				<TextInput style={styles.inputStyle}
				 	placeholder="Description..."
					value={this.state.description} 
					onChangeText={(input)=>this.handleDescription(input)}
				/>
				<TextInputMask
					placeholder="$0.00"
					style={styles.inputStyle}
					type={"money"}
					options={{
						unit: "$",
						delimiter: ",",
						separator: ".",
					}}
					value={this.state.currency}
					onChangeText={(input)=>this.handleCurrency(input)}
				/>
				<TextInputMask
					placeholder="DD/MM/YYYY"
					style={styles.inputStyle}
					type={"datetime"}
					options={{
						format: "DD/MM/YYYY",
					}}
					value={this.state.date}
					onChangeText={this.handleDate}
				/>
        <TouchableOpacity style={styles.button} type="solid" onPress={this.handlePost}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
			</View>
		);
	}
}

function mapStateToProps(state){
	// console.log("I am in add bill:", state.users)
	return {
	   currentUser: state.currUser,
	   bills: state.bills
	   
	} 
  }

  function mdp(dispatch){
	  return{
		postBills: (bill_obj) => dispatch(postBills(bill_obj))
	  }
  }

export default connect(mapStateToProps,mdp)(AddBill);

const styles = StyleSheet.create({
	inputStyle: {
		height: 40,
		width: 200,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: "white",
		padding: 10,
		// justifyContent: "center",
		marginTop: 10,
		
  },
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgb(216, 187, 255)",
		// width:300,
		// alignContent: "center",
		margin:57,
		marginTop: 170,
		marginBottom:150,
		borderRadius:30,
		shadowColor: "black",
		shadowOpacity: 1,
		shadowOffset: {
			width: 4,
			height: 4,
		},
	},
	title: {
		fontSize: 20,
		marginBottom: 10,
	},
	autocompleteContainer: {
		// flex: 1,
    // left: 55,
	position: "absolute",
    right: 0,
    top: 20,
	zIndex: 1,
	marginTop: 20,
	// borderColor:"black"
        
        
	
	// backgroundColor: "white",
		
	},
	button: {
		borderWidth: 1,
		borderColor: 'purple',
		backgroundColor: 'purple',
		padding: 4,
		margin: 8,
		borderRadius: 10
	  },
	 buttonText: {
		color: '#FFFFFF',
		fontSize: 20,
		textAlign: 'center'
	  }
});
