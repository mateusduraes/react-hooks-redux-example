import React, { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const techList = useSelector(state => state)
  const dispatch = useDispatch()
  const [newTech, setNewTech] = useState('')
  const techListSize = useMemo(() => techList.length, [techList])

  useEffect(() => {
    const techListStorage = localStorage.getItem('techList')
    if (techListStorage) {
      dispatch({
        type: '@tech/initialize',
        payload: JSON.parse(techListStorage),
      })
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('techList', JSON.stringify(techList))
  }, [techList])

  const addNewTech = () => {
    dispatch({ type: '@tech/add', payload: newTech })
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
      <p>You have {techListSize} technologies added</p>
    </div>
  )
}

export default App
