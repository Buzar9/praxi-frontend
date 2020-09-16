import React from 'react';
import axios from 'axios';

import '../styles/table.styles.scss';
import {USERS_URL} from "../../const/endpoints.backend";
import {Link} from "react-router-dom";

class RealizationsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
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
                                        <Link className='link' to={'/users/' + user.userId}>
                                            {user.username}
                                        </Link>
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

export default RealizationsList;
