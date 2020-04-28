import React from "react";
import {View,Text,TextInput,Button,StyleSheet,Header, TouchableOpacity, Picker} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { connect } from 'react-redux'
import Autocomplete from 'react-native-autocomplete-input';
import AutoTags from  'react-native-tag-autocomplete';



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
	addBills = (bill) => {
		this.setState((prevState)=> ({bills: {...prevState.bills, bill}}))
	  }

	// handleSuggestions= () => {
	// 	let currentFollowers = this.props.currentUser.followings
	// 	if(currentFollowers.length <= 0){
	// 		alert("Add friends before splitting")
	// 	}else{
	// 	return currentFollowers}
	// }   //use this when you have follow friends feature
	handlePost = (event) => {
		console.log("this is working")
		event.preventDefault();
    
		const data = {
      bill: {description: this.state.description,
      amount: this.state.currency,
      due_date: this.state.date,
	  user_id: this.props.currentUser.id,
	  bill_contributors: [...this.state.splitWith]}
	  };
	  
	  console.log("data", data)
	  		//this will go into action creator
		fetch("http://localhost:3000/bills", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				// this.addBills(data)
			console.log(data)
			})
			// .then(null)
      
	
		
	}

	
	render() {
		// console.log("spitting bill with::",this.state.splitWith)
		console.log("split with", this.state.splitWith)
		console.log(this.state.currency)
		console.log(this.state.date)
		console.log(this.state.description)

		// let newFollowers = this.handleSuggestions() ///use this when you have a follow friends feature
		// const followers = this.props.currentUser.followings.map(follower=> follower.name)
		return (
      
			<View style={styles.center}>
				<Text style={styles.title}>Add Bill </Text>
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
				<TextInput
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
        <Button title="Submit" type="solid" onPress={this.handlePost} />
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

export default connect(mapStateToProps)(AddBill);

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
		marginTop: 15,
		
  },
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		marginBottom: 10,
	},
	autocompleteContainer: {
		flex: 1,
    left: 38,
    position: "absolute",
    // right: 30,
    top: 60,
	zIndex: 1,
	marginTop: 15,
        
        
	
	// backgroundColor: "white",
		
	}
});
