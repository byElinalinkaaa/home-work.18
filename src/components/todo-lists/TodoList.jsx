import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActionTypes } from "../../store/todo/todoReducer";
import styled from "styled-components";

const TodoList = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const dispatch = useDispatch();

  const changeEdit = (e) => {
    setEditValue(e.target.value);
  };

  const deleteHandler = () => {
    dispatch({ type: todoActionTypes.DELETE_TODO, payload: todo.id });
  };

  const toggleHandler = () => {
    dispatch({ type: todoActionTypes.COMPLETE_TODO, payload: todo.id });
  };

  const editTodoHandler = () => {
    dispatch({
      type: todoActionTypes.EDIT_TODO,
      id: todo.id,
      value: editValue,
    });
    setIsEditing(false);
  };

  const editHandler = () => {
    setIsEditing(true);
    setEditValue(todo.title);
  };

  return (
    <LiStyle>
      {isEditing ? (
        <>
          <input type="text" value={editValue} onChange={changeEdit} />
          <button onClick={editTodoHandler}>Save</button>
        </>
      ) : (
        <>
          <Span done={todo.completed}>{todo.title}</Span>
          <Button onClick={deleteHandler}>Delete</Button>
          <Button onClick={toggleHandler}>Completed</Button>
          <Button onClick={editHandler}>Edit</Button>
        </>
      )}
    </LiStyle>
  );
};

export default TodoList;

const LiStyle = styled.li`
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
`;

const Span = styled.span`
  text-decoration: ${(todo) => (todo.done ? "line-through" : "")};
`;

const Button = styled.div`
  /* text-decoration:center;
width:120px;
height:50px;
    background-color:gold; */
  padding: 10px;
  width: 25%;
  border-radius: 10%;
  background: #b8b51b;
  color: #162826;
  font-size: 20px;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
`;
