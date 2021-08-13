import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetups";
import TasksList from "./pages/TasksList";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>

    <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>

        <Route path="/NewMeetups">
          <NewMeetups />
        </Route>

        <Route path="/Favorites">
          <Favorites />
        </Route>

        <Route path="/TasksList">
          <TasksList />
        </Route>

      </Switch>
    </div>
  );
}

export default App;

/*return (
  <div>
    <h1>Group Ironman</h1>
      <Todo text='Debug Info' />
      
  </div>
);*/

// <Pinput />
//  const value = 'near you!';
//return <div>This is a Group Ironman Helper, coming to an Old School Runescape {value}</div>;
