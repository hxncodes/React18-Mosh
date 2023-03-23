import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;

}
const Alerts = ({ children }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  )
}

export default Alerts