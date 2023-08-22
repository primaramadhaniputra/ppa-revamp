import React, { useState } from 'react'
import { Switch } from './styles'

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(true)
  return (
    <Switch >
      <input type="checkbox" checked={isChecked} id='chekcbox' />
      <label className='slider round' htmlFor="checkbox" onClick={() => setIsChecked(!isChecked)}></label>
    </Switch>
  )
}

export default Toggle