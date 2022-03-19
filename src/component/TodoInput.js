import React, { useState } from "react";
import { use, useDispatch } from "react-redux";
import { addTodo } from "../redux/app.actions";
import { Button , Input} from "antd";

const TodoInput = () => {
    const [name, setName] = useState("");
    let dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo({
            id: Math.random(),
            name,
        })
        );
        setName("");
    };
    return (
        <>
            <div className="row m-2">
                <input type="text" onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="col-8" />
                <Button className="ml-3" type="primary" onClick={handleAddTodo} size="medium"
                    style={{ width: "135px" }}>
                    Add
                </Button>

            </div>
        </>
    );
};
export default TodoInput;