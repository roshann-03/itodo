import React from "react";
import { useNavigate } from "react-router-dom";
const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (idx) => {
    let filteredTodos = todos.filter((todo, i) => i !== idx);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container w-full min-h-screen bg-black ">
      <h1 className="text-center text-3xl pt-5 font-semibold mb-5 text-yellow-500">Todo List</h1>
      <div className="todo-list rounded w-[60%] mx-auto bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-5 h-full">
        <ul className="flex flex-col gap-5">
          {todos.length > 0 ? (
            todos.map((todo, idx) => {
              return (
                <li key={idx}>
                  <div className="todo-item  items-center p-5 bg-slate-900  border border-slate-700">
                    <div className="flex justify-between items-cente mb-4">
                      <h1 className="text-white text-lg font-semibold">
                        {todo.title}
                      </h1>

                      <div className="text-white text-xs action-buttons flex gap-3 items-center">
                        <span className="time">{todo.date}</span>

                        <div className="relative inline-flex  group">
                          <div className="absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#f3d44e] via-[#f1a500] to-[#f17a03] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                          <button
                            onClick={() => handleEdit(todo.id)}
                            title="Get quote now"
                            className="relative  inline-flex items-center justify-center text-lg font-bold text-white transition-all duration-200 bg-transparent font-pj rounded-xl"
                            role="button"
                          >
                            <i className="fa-solid fa-pen-to-square text-yellow-400 "></i>
                          </button>
                        </div>

                        <div className="relative inline-flex  group">
                          <div className="absolute transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#f3774e] via-[#f10085] to-[#f10307] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                          <button
                            onClick={() => handleDelete(idx)}
                            title="Get quote now"
                            className=" relative inline-flex items-center justify-center text-lg font-bold text-white transition-all duration-200 bg-transparent font-pj rounded-xl"
                            role="button"
                          >
                            <i className="fa-solid fa-trash text-red-400"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm">{todo.desc}</p>
                  </div>
                </li>
              );
            })
          ) : (
            <h1 className="text-white text-center text-lg font-semibold">
              No todo.{" "}
            </h1>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
