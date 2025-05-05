import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Añade una nueva tarea..."
        style={styles.input}
      />
      <button
        type="submit"
        style={styles.button}
      >
        Añadir
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    marginBottom: '16px'
  },
  input: {
    flex: 1,
    padding: '10px 12px',
    border: '1px solid #ced4da',
    borderRadius: '4px 0 0 4px',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.15s ease-in-out'
  },
  button: {
    padding: '10px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.15s ease-in-out'
  }
};

export default AddTodo;