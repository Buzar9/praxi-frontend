import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'
import NotFoundPage from "./pages/not-found/not-found-page.component";
import AchievementSingle from "./components/achievement-single/achievement-single.component";
import AchievementsTable from "./components/table/achievement-table.component";
import UsersList from "./components/users-list/users-list.component";
import UserSingle from "./components/user-single/user-single.component";
import Navibar from "./components/navibar/navibar.component";
import UserQuestRealizationList from "./components/user-quest-realization-list/user-quest-realization-list.component";
import AddRealization from "./components/add-realization/add-realization.component";

function App() {
  return (
    <>
      <Navibar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/achievements" component={AchievementsTable}/>
        <Route exact path="/achievements/:achievementId/:userId" exact component={AchievementSingle}/>
        <Route exact path="/users" component={UsersList}/>
        <Route exact path="/users/:userId" component={UserSingle}/>
        <Route exact path="/realizations/:userId/:questId" component={UserQuestRealizationList}/>
        <Route exact path="/add/realizations/:userId/:questId" component={AddRealization}/>

        <Route exact path='/404' component={NotFoundPage}/>
        <Redirect path={'*'} to= '/404' />
      </Switch>
    </>
  );
}

export default App;
