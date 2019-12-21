import React, {Component} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import './Add.css';
import axiosPosts from "../../axios-post";
import nanoid from 'nanoid'
class Add extends Component {
    state = {
      title: '',
      message: '',
      id: ''
    };

    getTitle = (event) => {
        this.setState({title: event.target.value,id:nanoid()});
    };
    getMessage = event => {
        this.setState({message: event.target.value});
    };

    postData = async (event) => {
        event.preventDefault();
        const post = {
            title: this.state.title,
            message: this.state.message,
            id: this.state.id
        };
        await axiosPosts.post('post.json', post);
        this.props.history.push('/posts')
    };
    render() {

        return (
            <div>
                <NavBar/>
                <form className="addPost" onSubmit={this.postData}>
                    <h2>Add Post</h2>
                    <p>Title</p>
                    <input type="text" onChange={event => this.getTitle(event)}/>
                    <p>Description</p>
                    <textarea name="" id="" cols="30" rows="10" onChange={event => this.getMessage(event)}/>
                    <p><button type="submit" className="btn btn-success">Save</button></p>
                </form>
            </div>
        );
    }
}

export default Add;