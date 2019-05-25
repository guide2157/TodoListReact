import React from "react";
import {Route, Router} from "react-router-dom";

import TodoList from "./todo/TodoList";
import TodoCreate from "./todo/CreateTodo";
import TodoEdit from "./todo/EditTodo";
import TodoDelete from "./todo/DeleteTodo";
import TodoView from "./todo/TodoView";
import history from "../history";

const App = () => {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Route path="/" exact component={TodoList}/>
                        <Route path="/todo/:id" exact component={TodoView}/>
                        <Route path="/todo/new" exact component={TodoCreate}/>
                        <Route path="/todo/edit/:id" exact component={TodoEdit}/>
                        <Route path="/todo/delete/:id" exact component={TodoDelete}/>
                    </div>
                </Router>
            </div>
        );
};

export default App;