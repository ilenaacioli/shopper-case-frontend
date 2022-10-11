import React from 'react'
import {useProtectedPage} from "../../Hooks/useProtectPage"

function AdminPage() {
  useProtectedPage()
  
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage