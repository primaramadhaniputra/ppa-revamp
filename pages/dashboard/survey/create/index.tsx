import React from 'react'
import { BreadCrumb } from './styles'

const Create = () => {
  return (
    <div>
      <BreadCrumb >
        <li><a href="#">Home</a></li>
        <li><a href="#">Category</a></li>
        <li><a href="#">Subcategory</a></li>
        <li><a href="#">Current Page</a></li>
      </BreadCrumb>
    </div>
  )
}

export default Create