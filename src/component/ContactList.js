import { useState } from "react";
import "./ContactList.css";
function ContactList() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodo = todos.map((t) =>
        t.id === editTodo.id
          ? { id: t.id, name, mobile }
          : { id: t.id, name: t.name, mobile: t.mobile }
      );
      setTodos(updatedTodo);
      setEditId(0);
      setName("");
      setMobile("");
      return;
    }

    if (name !== "" && mobile !== "") {
      setTodos([{ id: `${name}=${Date.now()}`, name, mobile }, ...todos]);
      setName("");
      setMobile("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setName(editTodo.name);
    setMobile(editTodo.mobile);
    setEditId(id);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Contact List</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name..."
          />
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number..."
          />
          <button type="submit">{editId ? "Edit" : "Add"}</button>
        </form>{" "}
      </div>
      <div className="contact-list">
        <ul className="top-list">
          <li className="top-name">Name</li>
          <li className="top-mobile">Mobile No.</li>
        </ul>
        <ul className="allTodos">
          {todos.map((t) => (
            <li className="single-contact-list">
              <span className="contactText" key={t.id}>
                <span className="name"> {t.name}</span>{" "}
                <span className="mobile">{t.mobile}</span>
              </span>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactList;