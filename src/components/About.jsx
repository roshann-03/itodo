import React from 'react'

const About = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex justify-center text-white">
      <div className="bg-slate-900 rounded shadow-md max-w-lg p-8 h-full mt-5 shadow-yellow-500">
        <h1 className="text-3xl font-bold mb-4 text-center">About iTodo</h1>
        <p className="mb-4">
          iTodo is a simple todo list application built using React and Tailwind CSS. It allows you to add, edit, and delete todos.
        </p>
        <p className="mb-4">
          The application stores todos in the browser's local storage, so they are persisted even after refreshing the page.
        </p>
        <p className="mb-4">
          Feel free to explore the application and add some todos to your list.
        </p>
        <p className="mb-4">
          If you have any feedback or suggestions, please let us know.
        </p>
      </div>
    </div>
  )
}

export default About