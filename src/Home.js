import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>this is Home <br/>
    <Link to="signup"> Sign up</Link><br />
    <Link to="login"> Log in</Link><br />
    </div>
  )
}
