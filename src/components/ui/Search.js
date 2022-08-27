import React from 'react'
import { useState } from 'react'

const Search = ({getQuery}) => {
    const [text, settext] = useState('')
    const onChange = (q)=>{
        settext(q)
        getQuery(q)
    }
  return (
    <section className='search'>
        <input type="text" className='form-control' placeholder='Search Characters'
        autoFocus value={text} onChange={(e)=>{
            onChange(e.target.value)
        }}/>
    </section>
  )
}

export default Search