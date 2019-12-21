import React, {Component} from 'react';
import axios from 'axios'

class EditMessage extends Component {
    state={
        title: '',
        message: ''
    };
    async componentDidMount() {
        const id = this.props.match.params.id;

        let response = await axios.get(`https://blog-chermashev-kasymov.firebaseio.com/post/${id}.json`);
        this.setState({
            title: response.data.title,
            message: response.data.message
        })
    }

    changeHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    editMessage = async (event) => {
        event.preventDefault();
        const id = this.props.match.params.id;
        const patch = {
            title: this.state.title,
            message: this.state.message,
        };
        await axios.put(`https://blog-chermashev-kasymov.firebaseio.com/post/${id}.json`, patch);
        this.props.history.push('/posts')
    };

    render() {
        return (
            <div>
                <input onChange={this.changeHandler} type="text" value={this.state.title} name="title"/>
                <textarea onChange={this.changeHandler} name='message' cols="30" rows="10" value={this.state.message}></textarea>
                <button onClick={this.editMessage}>Save</button>
            </div>
        );
    }
}

export default EditMessage;