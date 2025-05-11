
import Autocomplete from '@mui/material/Autocomplete'

import { TextField } from '@mui/material'
import info  from './info';


export const Details = () => {
  return (

    <Autocomplete
    disablePortal
    options={info}
    getOptionLabel={(option) => option.name}
    sx={{ width: 300, marginTop:2,}}
    renderInput={(params) => <TextField {...params} label="Details" />}
  />

  )
}
