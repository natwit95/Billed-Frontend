
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

