import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Edit = ({ todos, setTodos }) => {
  const { id } = useParams();
  const navigation = useNavigate();

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  function handleSubmit(e) {
    e.preventDefault();
    if (todoIndex !== -1) {
      todos[todoIndex].title = e.target.title.value.trim();
      todos[todoIndex].desc = e.target.description.value.trim();
      todos[todoIndex].date = new Date().toLocaleString();

      localStorage.setItem("todos", JSON.stringify(todos));
    }

    navigation("/todos");
    e.target.reset();
  }

  return (
    <div className="container w-full min-h-screen bg-slate-800 flex justify-center items-start">
      <div className="todo-form p-5 flex flex-col w-1/2 justify-center items-center ">
      <h1 className="text-center text-3xl pt-5 font-semibold mb-5 text-yellow-500">Update Todo</h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-3  bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-5"
        >
          <label htmlFor="title" className="tracking-wide text-sm text-slate-50">
            Title
          </label>
          <input
            type="text"
            placeholder="Title"
            id="title"
            defaultValue={todos[todoIndex].title}
            className="border-[0.5px] text-sm border-slate-700 w-full py-2 px-3  text-zinc-100 outline-none bg-gradient-to-r from-slate-950 to-slate-900"
            required
          />
          <label htmlFor="description" className="tracking-wide text-sm text-slate-50">
            Description
          </label>
          <textarea
            type="text"
            placeholder="Description"
            id="description"
            defaultValue={todos[todoIndex].desc}
            className="tracking-tight resize-none min-h-40 text-sm border-[0.5px]  border-slate-700 w-full py-2 px-3  text-[#EBF5EE] outline-none  bg-gradient-to-r from-slate-950  to-slate-900"
            required
          ></textarea>
          <input
            type="submit"
            value="Update"
            className="text-sm tracking-tight  w-1/3 self-center cursor-pointer py-2 px-3  text-white text-md  outline-none bg-gray-600  hover:shadow-[0px_5px_60px_0px_gray] rounded-lg ease-in-out duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default Edit;
