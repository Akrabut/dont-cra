import React, { useState } from 'react'

const Comp = ({ number }) => {
  const [render, setRender] = useState(false)

  const toRender = () => {
    return render ? <p>{`Wow comp${number}, that text really is awesome!`}</p> : null
  }

  return (
    <article className="articles" id={`comp${number}`} style={{margin: '2%'}}>
    <button onClick={() => setRender(!render)}>{`Click for awesome text ${number}`}</button>
    {toRender()}
    </article>
  )
}

export default Comp