import React from 'react';
import axios from 'axios';

import '../styles/table.styles.scss';
import {ACHIEVEMENTS_URL} from "../../const/endpoints.backend";
import AchievementsList from "../achievement-list/achievement-list.component";

class AchievementsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            achievements: []
        };
    }

    componentDidMount() {
        this.findAllAchievements();
    }

    findAllAchievements = event => {
        // event.preventDefault();

        axios.get(ACHIEVEMENTS_URL)
            .then(response => response.data)
            .then((data) => {
                this.setState({achievements: data})
            });
    };

    render() {
        return(
            <AchievementsList achievements={this.state.achievements} name={'Achievements'}/>
        )
    }
};

export default AchievementsTable;
