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
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow col-span-1">
          <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
          <input
            name="title"
            placeholder="Enter expense title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
            required
          />
          <input
            name="description"
            placeholder="Enter expense description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            name="category"
            placeholder="Enter category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            name="amount"
            type="number"
            placeholder="Enter amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
            required
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
            required
          />
          <button type="submit" className="bg-black text-white w-full py-2 rounded hover:bg-gray-800">Submit</button>
        </form>

        <div className="col-span-1 md:col-span-3">
          <input
            placeholder="Search expenses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-2 text-left">Expense</th>
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((exp, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{exp.title}</td>
                  <td className="p-2">{exp.description}</td>
                  <td className="p-2">{exp.category}</td>
                  <td className="p-2">{exp.amount}</td>
                  <td className="p-2">{exp.date}</td>
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


