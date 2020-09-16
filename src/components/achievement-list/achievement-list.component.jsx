import React from 'react';

import '../styles/table.styles.scss';
import {Link} from "react-router-dom";

const AchievementsList = ({achievements, name, userId}) => (

    <>
        <h2 align='center'> {name} </h2>
        <div className='rwd-table'>
            <table className='table'>
                <thead>
                <tr>
                    <th>Level</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                {achievements.length === 0 ?
                    <tr>
                        <td> No Achievements Available.</td>
                    </tr>
                    :
                    achievements.map((ach) => (
                        <tr key={ach.achievementId}>
                            <td>{ach.level}</td>
                            <td>
                                <Link className='link' to={'/achievements/' + ach.achievementId + '/' + userId}>
                                    {ach.title}
                                </Link>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    </>

);
export default AchievementsList;
