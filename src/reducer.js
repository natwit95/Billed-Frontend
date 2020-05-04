const initialState = {
    bills: [],
    users: [],
    currUser: {
        "id": 1,
        "name": "Natalia",
        "username": "natwit95",
        "email": "natalia@yahoo.com",
        "followers": [
        {
        "id": 2,
        "name": "Anthony",
        "username": "anthony78",
        "email": "anthony@yahoo.com"
        },
        {
        "id": 3,
        "name": "Cindy",
        "username": "cindy95",
        "email": "cindy@yahoo.com"
        }
        ],
        "followings": [
        {
        "id": 2,
        "name": "Anthony",
        "username": "anthony78",
        "email": "anthony@yahoo.com"
        },
        {
        "id": 3,
        "name": "Cindy",
        "username": "cindy95",
        "email": "cindy@yahoo.com"
        }
        ]
        }
}


export const reducer = (prevState = initialState, action) => {
// console.log('in the reducer', action.payload)
    switch (action.type) {
    
        case 'GET_BILLS':
            return {...prevState, bills: action.payload.bills}
        case 'GET_USERS':
            return {...prevState, users: action.payload.users}
        // case 'CURRENT_USER':
        //     let currentUser = prevState.users.filter(user=> user.id === 1)
        //     // return console.log("in recucer",currentUser)
        //     return {...prevState, currUser: currentUser}
        case 'CREATE_BILL':
            return {...prevState, bills: [...prevState.bills, action.payload.bill]}
        default:
            return {...prevState}
    }
}
