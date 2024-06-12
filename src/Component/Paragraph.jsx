import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
function Paragraph() {
   const context = useContext(ThemeContext)
  return (
    <p className={context.theme}>Hello S3 CORP</p>
  )
}

export default Paragraph