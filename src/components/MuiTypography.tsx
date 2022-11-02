import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 heading</Typography>
        <Typography variant='h2'>h2 heading</Typography>
        <Typography variant='h3'gutterBottom>h3 heading</Typography>
        <Typography variant='h4'>h4 heading</Typography>
        <Typography variant='h5' component="h1">h5 heading</Typography>
        <Typography variant='h6'>h6 heading</Typography>
    
        <Typography variant='subtitle1'>Sub title 1</Typography>
        <Typography variant='subtitle2'>Sub title 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis quae dolor, nihil in mollitia ratione numquam, asperiores eos architecto quam dicta adipisci facere, esse odit! Eligendi laudantium ipsa consequuntur?</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi dolor dolores voluptate a laudantium ullam fugit incidunt non autem animi esse sunt assumenda ipsum, quos repellendus error hic accusantium!</Typography>
    </div>
  )
}

export default MuiTypography