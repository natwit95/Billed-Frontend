import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { connect } from 'react-redux'
import { fetchBills, fetchUsers, currentUser } from './src/action'

class App extends React.Component {

  componentDidMount(){

    this.props.allBills()
    this.props.allUsers()
    // console.log("Iam in APPP",  this.props.bills)
}

	render() {
    // console.log("Iam in APPP", this.props)
    return(
    
      <AppNavigator />
    
	)}
}


function mapStateToProps(state){
  // console.log("MSP",state)
  return {
    
     bills: state.bills,
     users: state.users
  }   
}

const mdp = (dispatch) => {
  return {
      allBills: () => dispatch(fetchBills()),
      allUsers: () => dispatch(fetchUsers()),
      // currentUser: () => dispatch(currentUser())
  }
}

export default connect(mapStateToProps,mdp)(App);
 