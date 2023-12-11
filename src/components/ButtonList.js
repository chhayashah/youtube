import React from 'react'
import Button from './Button'

const list = ["All","Live","Gaming"];

function ButtonList() {
  return (
    <div className='flex'>
      <Button class="All"/>
      <Button class="songs"/>
      <Button class="cricket"/>
      <Button class="movie"/>
      <Button class="cooking"/>
      <Button class="songs"/>
      <Button class="cricket"/>
      <Button class="movie"/>
      <Button class="cooking"/>
      <Button class="songs"/>
      <Button class="cricket"/>
      <Button class="movie"/>
      <Button class="cooking"/>
    </div>
  )
}

export default ButtonList;
