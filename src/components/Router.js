import React from "react";
import { Switch, Route } from "react-router-dom";
import WelComePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList"

export default function Router() {
  

  return (
    <div className="page-view ui botton segment active tab">
      <Switch>
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationList} />
        <Route component={WelComePage} />
      </Switch>
    </div>
  );
}
