import react,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({ title: '', description: '', category: '', amount: '', date: '' })
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
      <table>
  <tr>
    <th>Expenses</th>
    <th>Description</th>
    <th>Category</th>
    <th>Amount</th>
    <th>Date</th>
  </tr>
  <tr>
    <td>Ugali Mayai Mix</td>
    <td>Wednesday\'s Lunch</td>
    <td>food</td>
    <td>100</td>
    <td>2025-04-08</td>
  </tr>
  <tr>
    <td>NYC tokens</td>
    <td>power tokens</td>
    <td>utilities</td>
    <td>2000</td>
    <td>2025-04-05</td>
  </tr>
  <tr>
    <td>Buy shoes </td>
    <td>Add to my shoe collection</td>
    <td>personal</td>
    <td>5000</td>
    <td>2025-04-09</td>
  </tr>
  <tr>
    <td>Buy book</td>
    <td>Add to my book collection</td>
    <td>growth</td>
    <td>10000</td>
    <td>2025-04-07</td>
  </tr>
</table>

      </div>
      </>
  )
}

export default App
