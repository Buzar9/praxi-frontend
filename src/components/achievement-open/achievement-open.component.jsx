import React from 'react'
import {ACHIEVEMENTS_URL} from "../../const/endpoints.backend";
import Button from "../button/button.component";
import axios from "axios";
import FormInput from "../form-input/form-input.component";

class AchievementOpen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: null
        }
    }



    submitAchievement = (userId) => {
        const achievementId = this.props.achievementId;
        if (achievementId) {
            axios.put(ACHIEVEMENTS_URL + '/' + achievementId + '/add/user/' + userId)
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.submitAchievement}>
                    <FormInput
                        name='userId'
                        typer='userId'
                        value={this.state.userId}
                        label='User ID'
                        required
                        />
                    <Button type='submit'> Open </Button>
                </form>
            </>
        )
    }

}

export default AchievementOpen;
