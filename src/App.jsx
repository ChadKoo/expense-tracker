import react,{ useState } from 'react'
import './App.css'



function App() {
  const [form, setForm] = useState({ title: 'Ugali MayaiMix', description: 'Wednesday Lunch', category: 'Food', amount: '100', date: '2025-04-05' })
  const [expenses, setExpenses] = useState([]) //displays new expense
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });//updates field changed by user
  };

  const filteredExpenses = expenses.filter((exp) =>
    exp.title.toLowerCase().includes(search.toLowerCase()) ||
    exp.description.toLowerCase().includes(search.toLowerCase())//checks if title or description match user input
  );

  


  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, { ...form, amount: Number(form.amount) }]);//Adds new expense list, copies previous form, converts string to number
    setForm({ title: '', description: '', category: '', amount: '', date: '' });//clears the form
  };


  return (
    <div  >
      <h1 >Expense Tracker</h1>
      <div >
        <form onSubmit={handleSubmit} >
          <h2 >Add Expense</h2>
          <input
            name="title"
            placeholder="Enter expense title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <input
            name="description"
            placeholder="Enter expense description"
            value={form.description}
            onChange={handleChange}
            />
          <input
            name="category"
            placeholder="Enter category"
            value={form.category}
            onChange={handleChange}
            />
          <input
            name="amount"
            type="number"
            placeholder="Enter amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <button type="submit" >Submit</button>
        </form>

        <div >
          <input
            placeholder="Search expenses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
          <table >
            <thead>
              <tr>
                <th >Expense</th>
                <th >Description</th>
                <th >Category</th>
                <th >Amount</th>
                <th >Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((exp, index) => (
                <tr key={index} >
                  <td >{exp.title}</td>
                  <td >{exp.description}</td>
                  <td >{exp.category}</td>
                  <td >{exp.amount}</td>
                  <td >{exp.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;


