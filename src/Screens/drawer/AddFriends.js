import React from "react";
import {
	View,
	Text,
	ActivityIndicator,
	FlatList,
	SafeAreaView,
	TextInput,
	StyleSheet,
  TouchableOpacity,
  Icon,
  Image
} from "react-native";
// import { styles } from "../../styles/styles.js";
import { connect } from "react-redux";
import { Header } from "@react-navigation/stack";
import { followUser } from "../../action";


class AddFriends extends React.Component {
	state = {
		isLoading: true,
		searchTerm: "",
  };
  
  const = {currentUser, users} = this.props

  handleFollow = (item )=> {
    
    const data = { follower_id: currentUser.id, followed_user_id: item.id   };

     this.props.followUser(data)
     this.props.navigation.navigate("Add Bill", {data})

  }

	renderItem = ({ item }) => (
		<View style={styles.row}>
			<Text>{item.name + " "}</Text>
			<Text style={{ color: "black", fontWeight: "bold" }}>{item.email}</Text>
			<TouchableOpacity onPress={()=> this.handleFollow(item)}>
				<Text style={{ color: "black", fontWeight: "bold", color: "blue" }}>
					+FOLLOW
				</Text>
			</TouchableOpacity>
		</View>
	);

	handleSearch = (input) => {
		// console.log(this.state.searchTerm)
		this.setState({
			searchTerm: input,
		});
	};

	renderSearched = () => {
    
		return users.filter((follower) =>
      follower.name.includes(this.state.searchTerm) && follower.id !== currentUser.id 
		);
	};

	render() {
		console.log(this.state.searchTerm);
		// console.log(renderItems)
		return (
			<View style={{ flex: 1, backgroundColor: 'rgb(234, 219, 255)' }}>
        
				<SafeAreaView style={{ backgroundColor: "black" }} />
        <View style={{ alignItems: "center", marginTop:10}}>
         <Image 
         style={{ width: 300, height: 50,  }}
         source={require('./community.png')}/></View>
        
				<TextInput
					placeholder="🔍"
          placeholderTextColor="black"
          
					style={{
						backgroundColor: "white",
						height: 50,
						fontSize: 36,
						padding: 10,
						color: "black",
						marginTop: 10,
						borderBottomWidth: 0.5,
						borderBottomColor : "black",
            // borderRadius: 15,
            marginRight:7,
            marginLeft: 7
					}}
					value={this.state.searchTerm}
					onChangeText={(input) => this.handleSearch(input)}
				/>

				<View style={{  backgroundColor: 'rgb(234, 219, 255)' , marginTop: 10, }}>
          {/* <View style={{alignItems: "center"}}><Text >Follow Contributors</Text></View> */}
          
					{/* {this.state.isLoading? 
          <View style={{...StyleSheet.absoluteFill, alignItems:'center', justifyContent: 'center'}} >
              <ActivityIndicator size="large" color="black"/>
          </View> : null
          
        } */}
					<FlatList
						data={this.renderSearched()}
						renderItem={this.renderItem}
						// ListEmptyComponent={()=> (
						//   <View>
						//   <Text style={{ color: "black", alignContent:"center"}}>You dont have any followers yet</Text>
						//   </View>
						// )}
					/>
				</View>
			</View>
		);
	}
}
function mapStateToProps(state) {
	// console.log("I am in add bill:", state.users)
	return {
		currentUser: state.currUser,
    bills: state.bills,
    users: state.users
	};
}

function mdp(dispatch) {
	return {
		followUser: (follow_obj) => dispatch(followUser(follow_obj))
	};
}
export default connect(mapStateToProps, mdp)(AddFriends);

const styles = StyleSheet.create({
	name: {
		fontSize: 20,
		lineHeight: 30,
		width: 200,
		marginRight: 15,
		fontWeight: "bold",
		fontFamily: "Avenir",
		color: "black",
	},
	add: {
		fontSize: 25,
		lineHeight: 40,
		fontFamily: "Avenir",
		color: "black",
	},
	row: {
		flex: 1,
    marginTop: 5,
    marginRight:10,
    marginLeft:10,
		paddingVertical: 20,
		paddingHorizontal: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(234, 219, 255)',
		borderRadius: 20,
		backgroundColor: "white",
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
