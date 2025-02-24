import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { store } from './store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </Provider>
)
