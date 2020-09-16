import React from 'react';
import axios from 'axios';

import '../styles/table.styles.scss';
import {USERS_URL} from "../../const/endpoints.backend";
import {Link} from "react-router-dom";
import Button from "../button/button.component";
import UserSingle from "../user-single/user-single.component";

const initialState = {
    uid: 0,
    show: false,
    users: []
}

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }


    componentDidMount() {
        this.findAllUsers();
    }

    findAllUsers = event => {

        axios.get(USERS_URL)
            .then(response => response.data)
            .then((data) => {
                this.setState({users: data})
            });
    };

    handleSingleUser = (userId) => {
        this.setState({'show': !this.state.show, uid: userId});
        // this.setState({uid: 2})
        console.log(this.state.uid)
    }


    render() {
        return (
            <>
                <h2 align='center'> Users </h2>
                <div className='rwd-table'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Username</th>
                        </tr>
                        </thead>

                        <tbody>
                        {this.state.users.length === 0 ?
                            <tr>
                                <td> No Users Available.</td>
                            </tr>
                            :
                            this.state.users.map((user) => (
                                <tr key={user.userId}>
                                    <td>
                                        <Link className='link' to={'/users/' + user.userId}> {user.username} </Link>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
};

export default UsersList;
