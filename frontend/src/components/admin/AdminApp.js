import React, { useState } from 'react'
import styled from 'styled-components'
import { SizeMe } from 'react-sizeme'

import AdminBar from './AdminBar'
import AdminSide from './AdminSide'
import Page from '../Page'

function AdminApp(){
  const [ leftSide, setLeftSide ] = useState(true)
  const [ workspace, setWorkspace ] = useState(true)

  const handleLeftSide = () => setLeftSide(!leftSide)
  const handleWorkspace = () => setWorkspace(!workspace)

  const AdminApp = styled.div `
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #808080;
  `

  const Workspace = styled.div `
    position: relative;
    margin-left: ${leftSide?'250px':'0'};
    border: 5px solid blue;
    background-color: #f0f0f0;
  `

  return (
    <AdminApp>
      <AdminBar openLeftSide={handleLeftSide} openWorkspace={handleWorkspace}/>
      <AdminSide open={leftSide}/>
      { workspace &&
        <Workspace>
          <Page />
        </Workspace>
      }
    </AdminApp>
  )
}

export default AdminApp
