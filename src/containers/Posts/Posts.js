import React, {Component} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import axios from 'axios';
import {NavLink} from 'react-router-dom'
class Posts extends Component {
    state = {
        messages: null,
        title: '',
        message: ''
    };

    async componentDidMount(){

       const req = await axios.get('https://blog-chermashev-kasymov.firebaseio.com/post.json');
        console.log(req.data);
        let messages = [];
        for (let key in req.data){
            messages.push({
                message: req.data[key].message,
                title: req.data[key].title,
                id: key
            })
        }
        this.setState({messages})

    }
    callback = () => {


    };

    render() {
        return (
            <div>
                <NavBar/>
                <button onClick={this.callback}>Click</button>
                {this.state.messages !== null ? this.state.messages.map((post) => {
                    return(
                        <div style={{border: '1px solid #ccc'}} key={post.id}>
                            <p>{post.title}</p>
                            <p>{post.message}</p>
                            <NavLink to={`/${post.id}`}>see more</NavLink>
                        </div>
                    )
                }) : <div>Loading</div>}
            </div>
        );
    }
}

export default Posts;