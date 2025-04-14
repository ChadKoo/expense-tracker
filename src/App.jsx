import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });
  const [expenses, setExpenses] = useState([]);//adds new expense added by user
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();    
    setExpenses([...expenses, { ...form, amount: Number(form.amount) }]);
    setForm({ title: '', description: '', category: '', amount: '', date: '' });
  };


  let filteredExpenses;

  if (search === '') {
    // If the search input is empty or just spaces, show all expenses
    filteredExpenses = expenses;
  } else {
    // Otherwise, filter the expenses by checking if the title or description matches the search input
    filteredExpenses = expenses.filter((exp) => {
      const lowerSearch = search.toLowerCase();
      const matchesTitle = exp.title.toLowerCase().includes(lowerSearch);
      const matchesDescription = exp.description.toLowerCase().includes(lowerSearch);
      return matchesTitle || matchesDescription;
    });
  }

  return (
    <div className="container-fluid min-vh-100 bg-light py-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-12 mb-4 px-4 border-end">
          <h2>Add Expense</h2>
          <form onSubmit={handleSubmit}>
            <input className="form-control mb-2" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
            <input className="form-control mb-2" name="description" value={form.description} onChange={handleChange} placeholder="Description" />
            <input className="form-control mb-2" name="category" value={form.category} onChange={handleChange} placeholder="Category" />
            <input className="form-control mb-2" type="number" name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" required />
            <input className="form-control mb-2" type="date" name="date" value={form.date} onChange={handleChange} required />
            <button className="btn btn-primary w-100">Submit</button>
          </form>
        </div>

        {/* Main section */}
        <div className="col-md-9 col-12 px-4">
          <div className="d-flex justify-content-end mb-3">
            <div className="input-group w-50">
              <input
                className="form-control"
                placeholder="Search expenses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-secondary">Search</button>
            </div>
          </div>

          <h1 className="text-center text-primary">Expense Tracker</h1>
          <div className="table-responsive">
            <table className="table table-striped table-hover text-center">
              <thead className="table-dark">
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.map((exp) => (
                  <tr key={idx}>
                    <td>{exp.title}</td>
                    <td>{exp.description}</td>
                    <td>{exp.category}</td>
                    <td>{exp.amount}</td>
                    <td>{exp.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
