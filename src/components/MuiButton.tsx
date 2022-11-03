import React from 'react'
import { Stack, Button, IconButton, ButtonGroup } from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
const MuiButton = () => {
    return (
        <>
            <Stack spacing={4}>
                <Stack spacing={2} direction='row'>
                    <div>MuiButton</div>
                    <Button variant='text'>Text</Button>
                    <Button variant='contained'>Contained</Button>
                    <Button variant='outlined'>outlined</Button>
                </Stack>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color="primary">Primary</Button>
                <Button variant='contained' color="secondary">Secondary</Button>
                <Button variant='contained' color="error">Error</Button>
                <Button variant='contained' color="warning">Warning</Button>
                <Button variant='contained' color="info">Info</Button>
                <Button variant='contained' color="success">Success</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>
                    Small
                </Button>
                <Button variant='contained' size='medium'>
                    Medium
                </Button>
                <Button variant='contained' size='large'>
                    Large
                </Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<AcUnitIcon />}>Send</Button>
                <Button variant='contained' endIcon={<AcUnitIcon />}>Send</Button>
            </Stack>

            <IconButton aria-label='send' color='success' size='small'>
                <AcUnitIcon />
            </IconButton>

            <Stack direction='row'>
                <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary'
                    aria-label="alignment  button group"
                >
                    <Button onClick={() => alert('Left click')}>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
        </>
    )
}

export default MuiButton