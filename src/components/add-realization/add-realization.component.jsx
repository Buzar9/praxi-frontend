import React, {Component} from 'react';
import axios from 'axios';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {REALIZATIONS_URL} from "../../const/endpoints.backend";

const initialState = {
    description: '',
}

class AddRealization extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange = event => {
        if (event.target.value) {
            this.setState({[event.target.name]: event.target.value})
        }
    }

    submitRealization = event => {
        event.preventDefault();

        const message = {
            description: this.state.description
        };

        axios.post(REALIZATIONS_URL +
            '/user/' + this.props.match.params.userId +
            '/quest/' + this.props.match.params.questId,
            message)
    }

    resetAll = event => {
        event.preventDefault();
        this.setState(initialState);
    };

    render() {
        return (
            <>
                <form onSubmit={this.submitRealization}>
                    <FormInput
                        name='description'
                        type='description'
                        value={this.state.description}
                        handleChange={this.handleChange}
                        label='Description'
                        required
                    />
                    <div>
                        <Button type='submit'> ADD </Button>
                        <Button onClick={this.resetAll}> RESET </Button>
                    </div>
                </form>
            </>
        )
    }
}

export default AddRealization;

