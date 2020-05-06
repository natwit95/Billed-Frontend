// 
const initialState = {
    bills: [],
    users: [],
    contributors: [],
    currUser: [],
    followers: []
}


export const reducer = (prevState = initialState, action) => {
    switch (action.type) {
    
        case 'GET_BILLS':
            return {...prevState, bills: action.payload.bills}
        case 'GET_CONTRIBUTORS':
            return {...prevState, contributors: action.payload.contributors}
        case 'GET_USERS':
            return {...prevState, users: action.payload.users}
        case "EDIT_CONTRIBUTOR":
            // console.log("in reducer", action.payload.bill_contributor)
            let editedContributors = prevState.contributors.map((contributor)=>{
                if(contributor.id === action.payload.bill_contributor.id){
                    return action.payload.bill_contributor
                }
                else{
                    return contributor
                }
            })
            // let editedContributor = prevState.contributors.filter(contr => contr.id === action.payload.bill_contributor.id)[0]
            // editedContributor.contributed_amount = action.payload.bill_contributor.contributed_amount
            // console.log("in reducer",editedContributors)
            return { ...prevState, contributors: [...editedContributors]}
        case 'CURRENT_USER':
            // console.log('in the FOLLOW USERR reducer', action.payload.user)
            return {...prevState, currUser: action.payload.user}
        case 'CREATE_BILL':
            return {...prevState, bills: [...prevState.bills, action.payload.bill]}
        case 'GET_FOLLOWS':
            return {...prevState, followers: [...prevState.followers, action.payload.follows]}
        case 'FOLLOW_USER':
            return {...prevState, followers: [...prevState.followers, action.payload.follow]}
            

        default:
            return {...prevState}
    }
}
