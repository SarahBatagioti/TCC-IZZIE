import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import theme from './styles/Theme.ts'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
)
