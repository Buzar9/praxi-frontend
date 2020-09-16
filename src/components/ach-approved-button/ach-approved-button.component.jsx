import React from 'react'
import {ACHIEVEMENTS_URL} from "../../const/endpoints.backend";
import Button from "../button/button.component";
import axios from "axios";

class AchApprovedButton extends React.Component {

    constructor(props) {
        super(props);
    }


    approvedAchievement = event => {
        event.preventDefault();
        const achievementId = this.props.achievementId;
        const userId = this.props.userId;
        if (userId && achievementId) {

        axios.put(ACHIEVEMENTS_URL + '/' + achievementId + '/finish/user/' + userId )
        }
    }

    render() {
        return (
            <Button onClick={this.approvedAchievement}> Approved </Button>
        )
    }

}

export default AchApprovedButton;
