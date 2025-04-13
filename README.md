# Expense Tracker App

A simple and responsive React app that allows users to track their expenses, add new ones using a form, and search through them in real-time.

---

## Features

- 📋 View a list of expenses in a table.
- ➕ Add new expenses using a user-friendly form.
- 🔍 Filter expenses using a search bar.
- 🎨 Clean and minimal UI built with Tailwind CSS.

---

## Built With

- [React](https://reactjs.org/) – For building the user interface.
- [Tailwind CSS](https://tailwindcss.com/) – For styling the components.

---


## Getting Started

Follow these steps to run the project on your local machine:

### 1. Clone the repo
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker

2. Install dependencies
npm install

3. Start the development server
npm start
Your app should now be running at http://localhost:3000.

📁 Project Structure

src/
├── App.js         # Main component with all the logic
├── index.js       # Entry point
├── index.css      # Tailwind CSS setup (optional)
└── ...
Demo

Users can fill out the form on the left to add a new expense. The added expense shows up instantly in the table on the right. They can also filter through expenses using the search bar.

Concepts Used
useState for managing:

The list of expenses

The form values

The search input

map() to render table rows dynamically

filter() to search through expenses

Controlled components (value and onChange in inputs)

JSX & React event handling







Author
Made by Chadwick Koo


