import React from 'react';

import { USERS_URL } from "../../const/endpoints.backend";
import UsersList from "../../components/users-list/users-list.component";

const UserList = () => (

    <div className='all'>
        <div className='page'>
            <UsersList url={USERS_URL}/>
        </div>
    </div>

);

export default UserList;
