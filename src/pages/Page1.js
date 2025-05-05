import React from 'react';
import TodoList from '../components/TodoList';

const Page1 = () => {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '24px',
      backgroundImage: 'linear-gradient(90deg, #020024 0%,rgb(9, 61, 121) 35%, #00d4ff 100%)',

    }}>
      <TodoList />
    </div>
  );
};

export default Page1;
