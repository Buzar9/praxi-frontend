import React from 'react';
import axios from 'axios';
import {USERS_URL} from "../../const/endpoints.backend";

import '../styles/table.styles.scss';
import AchievementList from "../achievement-list/achievement-list.component";

const initialState = {
    username: '',
    openAchList: [],
    finishedAchList: []
}

class UserSingle extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;

    }

    componentDidMount() {
        const userId = +this.props.match.params.userId;
        const questId = +this.props.match.params.questId;
        if (userId) {
            this.findAchievementById(userId);
        }
    };

    findAchievementById = (userId) => {
        axios.get(USERS_URL + '/' + userId)
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        userId: response.data.userId,
                        username: response.data.username,
                        openAchList: response.data.openAchList,
                        finishedAchList: response.data.finishedAchList
                    });
                }
            }).catch((error) => {
            console.error('ERROR - ' + error);
        });
    };

    render() {
        const {username, openAchList, finishedAchList, userId} = this.state;

        return (
            <>
                <h1 align='center'>{username}</h1>
                <AchievementList achievements={openAchList} name='Open Achievements' userId={userId}/>
                <AchievementList achievements={finishedAchList} name='Finished Achievements' userId={userId}/>
            </>

        )
    }

};
export default UserSingle;
