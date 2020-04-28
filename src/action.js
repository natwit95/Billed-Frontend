
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
                dispatch({type: "GET_BILLS", payload: {bills}})
                // console.log("in ACTION JS", bills)
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


