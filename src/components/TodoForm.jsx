import React, { useEffect } from "react";

const TodoForm = ({ todos, setTodos }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value.trim();
    const desc = e.target.description.value.trim();
    const id = "id" + Math.random().toString(16).slice(2);
    const date = new Date().toLocaleString();

    setTodos((prev) => [...prev, { title, desc, date, id }]);
    e.target.reset();
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container w-full min-h-screen bg-black flex justify-center items-start">
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
            className="tracking-tight text-sm border-[0.5px]  border-slate-700 w-full py-2 px-3  text-[#EBF5EE] outline-none  bg-gradient-to-r from-slate-950  to-slate-900"
            required
          />
          <input
            type="submit"
            value="Add"
            className="text-sm tracking-tight  w-1/3 self-center cursor-pointer py-2 px-3  text-white text-md  outline-none bg-yellow-500  hover:shadow-[0px_5px_60px_0px_#ecc94b] rounded-lg ease-in-out duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
