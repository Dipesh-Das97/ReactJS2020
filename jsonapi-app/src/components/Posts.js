import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchapi from '../store-redux/thunk-action'

class Posts extends Component {
    componentDidMount(){
        this.props.dispatch(fetchapi());
    }
    render() {
        return this.props.posts.map((post) => (
            <div key={post.id}>
            <li>
            *POST TITLE*: {post.title}<br/>   
            <img src={post.thumbnailUrl} alt='' width="100" height="50"/><br/>
            <a href={post.url}>CLICK HERE</a>
            </li>         
            </div>
        ))
    }
}


const mapStateToProps = state => ({
    loading: state.loading,
    posts: state.posts,
    error: state.error
})


export default connect(mapStateToProps)(Posts);