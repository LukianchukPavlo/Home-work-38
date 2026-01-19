import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from "./Input";


interface User {
  name: string;
  email: string;
}

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState<User>({ name: "", email: "" });


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>User: {user.name} - {user.email}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <Input
          type="text"
          placeholder="Enter you name"
          value={user.name}
          onChange={(value) => setUser({ ...user, name: value })}
        />
        <br />
        <Input
        type="email"
        placeholder="Enter your email"
        value={user.email}
        onChange={(value) =>
          setUser({ ...user, email: value })
        }
      />
        <br />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
