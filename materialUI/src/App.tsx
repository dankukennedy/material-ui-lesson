
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Tutor-001/Demo'
import { Details } from './Tutor-001/Details';



function App() {

  return (
    <>
   <StyledEngineProvider injectFirst>
   <Demo />
   <Details/>
    </StyledEngineProvider>
    </>
  )
}

export default App
