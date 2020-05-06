import React, { useState, useEffect } from 'react'

const NestedComp = ({ number }) => {
  const [outerRender, setOuterRender] = useState(false)
  const [innerRender, setInnerRender] = useState(false)

  useEffect(() => {
    if (!outerRender) setInnerRender(false)
  }, [outerRender])

  const renderOuter = () => {
    return outerRender ? <button id="inner-button" onClick={() => setInnerRender(!innerRender)}>Wow another button!!</button> : null
  }

  const renderInner = () => {
    return innerRender ? <p>Wow look at that frontend logic</p> : null
  }

  return (
    <article className="articles" id="nested" style={{ margin: '2%' }}>
      <button id="outer-button" onClick={() => setOuterRender(!outerRender)}>Click for another button!</button>
      <br></br>
      {renderOuter()}
      <br></br>
      {renderInner()}
    </article>
  )
}

export default NestedComp