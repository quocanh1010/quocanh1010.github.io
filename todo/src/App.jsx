import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadTaskAsync } from "./actions/todoActions";
import "./App.css";
import TodoList from "./TodoList";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTaskAsync());
    }, []);

    return (
        <div>

            <TodoList />
        </div>
    );
};

export default App;