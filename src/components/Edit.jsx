import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Edit = ({ todos, setTodos }) => {
  const { id } = useParams();
  const todo = todos.filter((todo) => todo.id === id)[0];

  const navigation = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
     todo.title = e.target.title.value.trim();
     todo.desc = e.target.description.value.trim();
     todo.date = new Date().toLocaleString();

     

     navigation("/todos");
    e.target.reset();
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <div className="todo-form p-5 flex w-1/2 justify-center items-center ">
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-3  bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-5"
      >
        <label htmlFor="title" className="tracking-wide text-sm">
          Title
        </label>
        <input
          type="text"
          placeholder="Title"
          id="title"
          defaultValue={todo.title}
          className="border-[0.5px] text-sm border-slate-700 w-full py-2 px-3  text-zinc-100 outline-none bg-gradient-to-r from-slate-950 to-slate-900"
          required
        />
        <label htmlFor="description" className="tracking-wide text-sm">
          Description
        </label>
        <input
          type="text"
          placeholder="Description"
          id="description"
          defaultValue={todo.desc}
          className="tracking-tight text-sm border-[0.5px]  border-slate-700 w-full py-2 px-3  text-[#EBF5EE] outline-none  bg-gradient-to-r from-slate-950  to-slate-900"
          required
        />
        <input
          type="submit"
          value="Update"
          className="text-sm tracking-tight  w-1/3 self-center cursor-pointer py-2 px-3  text-white text-md  outline-none bg-gray-600  hover:shadow-[0px_5px_60px_0px_gray] rounded-lg ease-in-out duration-300"
        />
      </form>
    </div>
  );
};

export default Edit;
