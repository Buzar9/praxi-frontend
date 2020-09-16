import React from 'react';

import '../styles/table.styles.scss';
import {Link} from "react-router-dom";
import AchApprovedButton from "../ach-approved-button/ach-approved-button.component";
import AchievementOpen from "../achievement-open/achievement-open.component";

const Achievement = ({title, questList, userId, achievementId, ...otherProps}) => (

    <>
        <h2 align='center'>
            {title}
            {userId ?
                <AchApprovedButton achievementId={achievementId} userId={userId}/>
                :
                <AchievementOpen achievementId={achievementId} />
            }
        </h2>
        <div className='rwd-table'>

            <table className='table'>
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Job</th>
                    {userId ? <th>Realizations</th> : null}
                </tr>
                </thead>
                <tbody>
                {questList.length === 0 ?
                    <tr align='center'>
                        <td> No Quest Available</td>
                    </tr>
                    :
                    questList.map((quest) => (
                        <tr key={quest.questId}>
                            <td>{quest.description}</td>
                            <td>{quest.job}</td>
                            <td>
                                { userId ?
                                    <div>
                                        <Link className='link' to={'/realizations/' + userId + '/' + quest.questId}> See All </Link>
                                        <br/>
                                        <Link className='link' to={'/add/realizations/' + userId + '/' + quest.questId} > Add </Link>
                                    </div>
                                    :
                                    null
                                }
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    </>


);
export default Achievement;
