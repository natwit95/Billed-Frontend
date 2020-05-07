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
            return { ...prevState, contributors: [...editedContributors]}
        case 'CURRENT_USER':
            // console.log('in the FOLLOW USERR reducer', action.payload.user)
            return {...prevState, currUser: action.payload.user}
        case 'CREATE_BILL':
            // console.log("in REDUCER",action.payload.bill)
            return {...prevState, bills: [...prevState.bills, action.payload.bill],
                  contributors: [...prevState.contributors, ...action.payload.bill.bill_contributors]}
        case 'GET_FOLLOWS':
            return {...prevState, followers: [...prevState.followers, action.payload.follows]}
        case 'FOLLOW_USER':
            // console.log(action.payload.follow)
            return {...prevState, followers: [...prevState.followers, action.payload.follow ], 
                currUser: {...prevState.currUser, followings: [...prevState.currUser.followings, action.payload.follow.followed_user]}}
        
        default:
            return {...prevState}
    }
}
