import React from 'react'
import ReactDOM from 'react-dom'
import TouchCancel from '../TouchCancel'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const handle = () => {}
  ReactDOM.render(<TouchCancel do={handle} />, div)
})
