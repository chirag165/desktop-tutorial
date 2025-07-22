import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onEdit, onDelete, onChangeStatus }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? <p>No tasks available.</p> : 
        tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onEdit={onEdit} 
            onDelete={onDelete} 
            onChangeStatus={onChangeStatus} 
          />
        ))
      }
    </div>
  );
}

export default TaskList;