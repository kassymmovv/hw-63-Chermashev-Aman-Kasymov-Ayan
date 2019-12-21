import React, {Component} from 'react';
import axios from 'axios'
import {NavLink} from "react-router-dom";



class Redactor extends Component {

state = {
post:null
};

async componentDidMount() {
    const id = this.props.match.params.id;

    const response = await axios.get(`https://blog-chermashev-kasymov.firebaseio.com/post/${id}.json`);
    this.setState({post:response.data})
}
deletePost = async () => {
    const id = this.props.match.params.id;

    await axios.delete(`https://blog-chermashev-kasymov.firebaseio.com/post/${id}.json`);
    this.props.history.push('/posts')
};

    render() {
        return (
            this.state.post !== null ? <div>
                <h1>{this.state.post.title}</h1>
                <p>{this.state.post.message}</p>
                <button onClick={this.deletePost}>delete</button>
                <NavLink to={`/edit/${this.props.match.params.id}`}>Edit</NavLink>
            </div> : <div>Loading</div>
        );
    }
}

export default Redactor;