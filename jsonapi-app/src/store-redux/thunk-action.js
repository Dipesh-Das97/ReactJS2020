import axios from 'axios';

const fetchapi = () => {
    return (dispatch) => {
        dispatch({type: "GET_POST"});
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            const posts = res.data;
            dispatch({type: "GET_SUCCESS", payload: posts})
        })
        .catch(error => {
            dispatch({type: "GET_FAIL", payload: error.message})
        })
    }
}

export default fetchapi;