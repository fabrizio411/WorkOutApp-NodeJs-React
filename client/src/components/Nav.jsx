import React, { useState } from 'react'
import { NavProvider } from '../context/NavContext'

function Nav() {
  return (
    <NavProvider>
      <div>Nav</div>
    </NavProvider>
  )
}

export default Nav