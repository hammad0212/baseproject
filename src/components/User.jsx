import React from 'react' 
    import { useParams } from 'react-router-dom'

export default function User() {
    const {name}=useParams()
  return (
    <div>
      <p>HELLO :{name}</p>
    </div>
  )
}
