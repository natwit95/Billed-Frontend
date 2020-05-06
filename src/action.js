
export function getUsers(users){
    return {type: "GET_USERS", payload: {users}}
}

// export function currentUser(){
//     return{type: "CURRENT_USER", payload: "nuser"}
// }
export const fetchBills = () => dispatch => {
      fetch("http://localhost:3000/bills")
            .then(resp=>resp.json())
            .then(bills => {
                // console.log("in ACTION JS.........................", bills)
                dispatch({type: "GET_BILLS", payload: {bills}})
                
            })
    
}

export const fetchUsers = () => dispatch => {
      fetch("http://localhost:3000/users")
        .then(resp=>resp.json())
        .then(users=> {
            dispatch(getUsers(users))
            // console.log(users)
        })
}

export const postBills = (bill_obj) => dispatch => {
    fetch("http://localhost:3000/bills", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({bill: bill_obj}),
		})
			.then((response) => response.json())
			.then((data) => {
                dispatch({ type: 'CREATE_BILL', payload: {bill: data}})
			})
}

export const fetchContributors = () => dispatch => {
    fetch("http://localhost:3000/bill_contributors")
          .then(resp=>resp.json())
          .then(contributors => {
            //   console.log("in ACTION JS.........................", contributors)
              dispatch({type: "GET_CONTRIBUTORS", payload: {contributors}})
            
          })
  
}

export const editContributors = (contributor_obj) => dispatch => {
    // console.log("the OBJECT TO EDIT",contributor_obj)
    fetch(`http://localhost:3000/bill_contributors/${contributor_obj.id}`, {
              method: 'PATCH', // or 'PUT'
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({bill_contributor: contributor_obj})
            })
            .then(response => response.json())
            .then(data => {
                console.log("in ACTION JSS",data) 
                // console.log("the OBJECT TO EDIT",contributor_obj)
                dispatch({ type: 'EDIT_CONTRIBUTOR', payload: { bill_contributor: data } })

            })
            // .catch((error) => {
            //   console.error('Error:', error);
            // });
}


export const getCurrentUser = () => dispatch => {
  fetch("http://localhost:3000/users/1")
        .then(resp=>resp.json())
        .then(user=> {
          dispatch({type: 'CURRENT_USER', payload: {user}})
            // console.log(user)
        })
}

export const getFollowers = () => dispatch => {
  fetch("http://localhost:3000/follows")
        .then(resp=>resp.json())
        .then(follows=> {
          // console.log(follows)
          dispatch({type: 'GET_FOLLOWS', payload: {follows}})
            // console.log(user)
        })

}

export const followUser = (follow_obj) => dispatch => {
  fetch('http://localhost:3000/follows', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({follow: follow_obj}),
  })
  .then(response => response.json())
  .then(data => {
    dispatch({ type: 'FOLLOW_USER', payload: {follow: data}})
  })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });
}
