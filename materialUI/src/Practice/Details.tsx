
import Autocomplete from '@mui/material/Autocomplete'

import  TextField  from '@mui/material/TextField'
import   Button from '@mui/material/Button'
import info  from './info';
import { Box, Stack } from '@mui/material';


export const Details = () => {
  return (
  
   <Autocomplete
    disablePortal
    options={info}
    getOptionLabel={(option) => option.name}
    sx={{ width: 300, marginTop:2, marginBottom:2}}
    renderInput={(params) => <TextField {...params} label="Details" />}
  />


  )
}
