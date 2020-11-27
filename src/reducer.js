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
           
            return {...prevState, currUser: action.payload.user}
        case 'CREATE_BILL':
       
            return {...prevState, bills: [...prevState.bills, action.payload.bill],
                  contributors: [...prevState.contributors, ...action.payload.bill.bill_contributors]}
        case 'GET_FOLLOWS':
            return {...prevState, followers: [...prevState.followers, action.payload.follows]}
        case 'FOLLOW_USER':
           
            return {...prevState, followers: [...prevState.followers, action.payload.follow ], 
                currUser: {...prevState.currUser, followings: [...prevState.currUser.followings, action.payload.follow.followed_user]}}
        
        default:
            return {...prevState}
    }
}
