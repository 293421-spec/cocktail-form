import { useState } from 'react'
import axios from 'axios'

const API = 'https://cocktails-api-production.up.railway.app'

function App() {
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [instructions, setInstructions] = useState('')
  const [message, setMessage] = useState('')

  async function handleLogin() {
    try {
      const res = await axios.post(`${API}/auth/login`, { email, password })
      setToken(res.data.access_token)
      setMessage('Zalogowano! ')
    } catch {
      setMessage('Błąd logowania ')
    }
  }

  async function handleSubmit() {
    try {
      await axios.post(`${API}/cocktails`, {
        name,
        category,
        instructions,
        ingredients: [{ ingredientId: 1, amount: '50ml' }],
      }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setMessage('Koktajl dodany! ')
    } catch {
      setMessage('Błąd dodawania koktajlu ')
    }
  }

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'Arial' }}>

      {!token ? (
        <>
          <h1>🔐 Logowanie</h1>
          <div style={{ marginBottom: '12px' }}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }} />
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label>Hasło:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }} />
          </div>
          <button onClick={handleLogin}
            style={{ padding: '10px 20px', backgroundColor: '#2196F3', color: 'white', border: 'none', cursor: 'pointer' }}>
            Zaloguj
          </button>
        </>
      ) : (
        <>
          <h1>🍹 Dodaj koktajl</h1>
          <div style={{ marginBottom: '12px' }}>
            <label>Nazwa:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
              style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }} />
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label>Kategoria:</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}
              style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }} />
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label>Instrukcje:</label>
            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)}
              style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px', height: '100px' }} />
          </div>
          <button onClick={handleSubmit}
            style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
            Dodaj koktajl
          </button>
        </>
      )}

      {message && <p style={{ marginTop: '16px', color: 'green' }}>{message}</p>}
    </div>
  )
}

export default App