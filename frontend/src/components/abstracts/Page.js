import React from 'react'
import GridLayout from 'react-grid-layout'
import styled from 'styled-components'
import '../styles/grid-styles.css'
import '../styles/resize-styles.css'

const GridLayoutStyled = styled(GridLayout) `
  background-color: yellow;
`

class Page extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 1},
      {i: 'b', x: 1, y: 0, w: 1, h: 1}
    ];

    return (
      <GridLayoutStyled className="layout" layout={layout} cols={12} rowHeight={30} width={this.props.size.width}>
        <div key="a">a</div>
        <div key="b">b</div>
      </GridLayoutStyled>
    )
  }
}

export default Page
