import React from "react";
import TodoItem from "./TodoItem"
import "./checkboxes.css"

export default function CheckBoxes() {
    return (
        <div className="todo-list">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>

        </div>
    )
}