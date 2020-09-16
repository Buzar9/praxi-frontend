import React from 'react';
import axios from 'axios';
import { ACHIEVEMENTS_URL } from "../../const/endpoints.backend";

import '../styles/table.styles.scss';
import Achievement from "../achievement/achievement.component";

const initialState = {
    achievementId: '',
    title: '',
    questList: []
}

class AchievementSingle extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        const achievementId = +this.props.match.params.achievementId;
        if(achievementId) {
            this.findAchievementById(achievementId);
        }
    };

    findAchievementById = (achievementId) => {
        axios.get(ACHIEVEMENTS_URL + '/' + achievementId)
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        achievementId: response.data.achievementId,
                        title: response.data.title,
                        questList: response.data.questList
                    });
                }
            }).catch((error) => {
                console.error('ERROR - ' + error);
        });
    };

    render() {
        const userId = +this.props.match.params.userId;
        const {title, questList, achievementId} = this.state;

        return(

            <Achievement title={title} questList={questList} userId={userId} achievementId={achievementId} />
        )
    }

};
export default AchievementSingle;
