import React from 'react'

interface Props{
children: string,
color: string,
onBtnClick:()=>void
}

const Btn = ({children, color, onBtnClick}:Props) => {
  return (
    <button className={'btn btn-'+color} onClick={onBtnClick}>{children}</button>
  )
}

export default Btn