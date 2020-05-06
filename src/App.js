import React from 'react'
import Comp from './Comp'
import NestedComp from './NestedComp'

const someStyle = { display: 'flex', flexDirection: 'row' }

const App = () => {
  return (
    <main id="main">
      <h1>Hi</h1>
      <div id="comps" style={someStyle}>
        <Comp className="comp" number={1} />
        <Comp className="comp" number={2} />
        <Comp className="comp" number={39} />
      </div>
      <div id="nested-comps" style={someStyle}>
        <NestedComp className="nested-comp" />
      </div>
    </main>
  )
}

export default App