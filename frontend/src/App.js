import React, { useState} from 'react';

import AdminApp from './components/admin/AdminApp'
import SiteApp from './components/site/SiteApp'

function App() {
  const [ editMode, setEditMode ] = useState(true)

  const changeMode = () => setEditMode(!editMode)

  return (
    <>
     { editMode ? (<AdminApp />) : (<SiteApp />) }
    </>
  )
}

export default App
