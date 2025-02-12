import clsx from 'clsx'
import React from 'react'

const ItemLayout = ({children, className}) => {
  return (
    <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center space-y-8 text-foreground', className)}>
      {children}

    </div>
  )
}

export default ItemLayout