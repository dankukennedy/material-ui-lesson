
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Demo'


function App() {

  return (
    <>
   <StyledEngineProvider injectFirst>
   <Demo />
    </StyledEngineProvider>
    </>
  )
}

export default App
