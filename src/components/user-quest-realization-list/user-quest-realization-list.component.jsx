import React from 'react';
import axios from 'axios';

import '../styles/table.styles.scss';
import {REALIZATIONS_URL} from "../../const/endpoints.backend";
import Button from "../button/button.component";

class UserQuestRealizationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            realizations: []
        };
    };

    componentDidMount() {
        const userId = +this.props.match.params.userId;
        const questId = +this.props.match.params.questId;
        if(userId && questId) {
            this.findRealizations(userId, questId);
        }
    }

    findRealizations = (userId, questId) => {

        axios.get(REALIZATIONS_URL + '/user/' + userId + '/quest/' + questId)
            .then(response => response.data)
            .then((data) => {
                this.setState({realizations: data})
            });
        };

    deleteRealization = (realizationId) => {
        axios.delete(REALIZATIONS_URL + '/' + realizationId);
    }



    render() {
        const {realizations} = this.state;

        return (
            <>
                <h2 align='center'> Realizations </h2>
                <div className='rwd-table'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Description</th>
                        </tr>
                        </thead>

                        <tbody>
                        {realizations.length === 0 ?
                            <tr>
                                <td> No Realizations Available.</td>
                            </tr>
                            :
                            realizations.map((real) => (
                                <tr key={real.realizationId}>
                                    <td>{real.description}</td>
                                    <td>
                                        <Button onClick={() => this.deleteRealization(real.realizationId)}>
                                            delete
                                        </Button>
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

export default UserQuestRealizationList;
