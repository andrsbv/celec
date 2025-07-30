import './App.css'

import Grid from '@mui/material/Grid' // ← Grid clásico
import HydrologyTable from './components/HydrologyTable'
import Student from './components/Student'

import DataHour from './interface/DataHour'
import { useState, useEffect } from 'react'

function App() {
  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/CELEC/hidrologia_17122024.json"

  const [data, setData] = useState<DataHour[]>([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err))
  }, [])

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Student apellidos="Bohórquez Villao" nombres="Andrés Martín" paralelo="P1" />
      </Grid>

      <Grid item xs={12}>
        <HydrologyTable data={data} />
      </Grid>
    </Grid>
  )
}

export default App
