import React, { useState, useEffect } from 'react'

function App() {
  const [techList, setTechlist] = useState([])
  const [newTech, setNewTech] = useState('')

  useEffect(() => {
    const techListStorage = localStorage.getItem('techList')
    if (techListStorage) {
      setTechlist(JSON.parse(techListStorage))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('techList', JSON.stringify(techList))
  }, [techList])

  const addNewTech = () => {
    setTechlist([...techList, newTech])
    setNewTech('')
  }

  return (
    <div>
      <h1>TechList</h1>
      <ul>
        {techList.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new technology"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={addNewTech}>
        Add
      </button>
    </div>
  )
}

export default App
