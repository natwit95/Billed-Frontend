import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { connect } from 'react-redux'
import { fetchBills, fetchUsers, fetchContributors, getCurrentUser, getFollowers } from './src/action'

class App extends React.Component {

  componentDidMount(){

    this.props.allBills()
    this.props.allUsers()
    this.props.allContributors()
    this.props.currentUser()
    this.props.allFollowers()
}

	render() {
    return(
    
      <AppNavigator />
    
	)}
}


function mapStateToProps(state){
  return {
    
     bills: state.bills,
     users: state.users,
     contributors: state.contributors
  }   
}

const mdp = (dispatch) => {
  return {
      allBills: () => dispatch(fetchBills()),
      allUsers: () => dispatch(fetchUsers()),
      allContributors: () => dispatch(fetchContributors()),
      currentUser: () => dispatch(getCurrentUser()),
      allFollowers: ()=> dispatch(getFollowers())
  }
}

export default connect(mapStateToProps,mdp)(App);
