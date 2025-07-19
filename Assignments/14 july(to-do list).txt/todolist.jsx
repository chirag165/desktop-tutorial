import React from "react";

const ToDoList = () => {
  const todos = [
    { id: 1, title: "Finish report", description: "Monthly financial report", category: "Work", completed: true },
    { id: 2, title: "Team meeting", description: "Sync with dev team", category: "Work", completed: false },
    { id: 3, title: "Buy groceries", description: "Milk, eggs, and bread", category: "Personal", completed: false },
    { id: 4, title: "Gym", description: "Leg day workout", category: "Personal", completed: true },
    { id: 5, title: "Read book", description: "Finish 'Atomic Habits'", category: "Hobby", completed: false },
    { id: 6, title: "Painting session", description: "Try new watercolor technique", category: "Hobby", completed: true },
  ];

  const categories = [...new Set(todos.map(todo => todo.category))];

return (
    <div className="todo-container">
      <h2>Grouped To-Do List</h2>
      {categories.map(category => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          {todos
            .filter(todo => todo.category === category)
            .map(todo => (
              <div key={todo.id} className="todo-item">
                <p>
                  {todo.completed ? "✅" : "❌"} <strong>{todo.title}</strong>
                </p>
                <p className="todo-description">{todo.description}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ToDoList;