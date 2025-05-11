
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Practice/Demo'
import { Details } from './Practice/Details';



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
