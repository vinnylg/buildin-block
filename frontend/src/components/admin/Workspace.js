import React from 'react'
import styled from 'styled-components'
import sizeMe from 'react-sizeme'

const WorkspaceDiv = styled.div `
  position: relative;
  border: 5px solid blue;
  background-color: #f0f0f0;
`

function Workspace( props ){
  return(
    <WorkspaceDiv style={{ marginLeft: props.leftSide?'250px':'0' }}>
      { props.children }
    </WorkspaceDiv>
  )
}

export default sizeMe({ monitorHeight: true })(Workspace)
