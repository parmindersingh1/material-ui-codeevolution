import  MailIcon from '@mui/icons-material/Mail'
import { Badge, Stack } from '@mui/material'
import React from 'react'

export const MuiBadge = () => {
  return (
    <Stack direction="row" spacing={2}>
        <Badge badgeContent={5} color='primary'>
            <MailIcon />
        </Badge>

        <Badge badgeContent={0} color='secondary' showZero>
            <MailIcon />
        </Badge>

        <Badge badgeContent={100} color='primary' max={999}>
            <MailIcon />
        </Badge>

        <Badge variant='dot' color='primary'>
            <MailIcon />
        </Badge>
        <Badge variant='dot' color='primary' invisible={true}>
            <MailIcon />
        </Badge>
    </Stack>
  )
}
