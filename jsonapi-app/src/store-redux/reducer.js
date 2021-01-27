const initState = {
    loading: true,
    posts: [
        /*{
            id: 1,
            title: "Hello this is January"
        },
        {
            id: 2,
            title: "The next month is February"
        }*/
    ],
    error: ''
}

export default function postStateReducer(state = initState, action) {
    if(action.type === "GET_POST"){
        return {
            ...state,
            loading: true
        }
    }
    if(action.type === "GET_SUCCESS"){
        return {
            loading: false,
            posts: action.payload,
            error: ''
        }
    }
    if(action.type === "GET_FAIL"){
        return {
            loading: false,
            posts: [],
            error: action.payload
        }
    }
    return state;
}