import React from 'react'
import { Outlet, useNavigate } from 'react-router';

export const FixedNavigationBar = () => {
  return (
    <div>
        <h1>FixedNavigationBar</h1>
        <Outlet></Outlet>
    </div>
  )
}
