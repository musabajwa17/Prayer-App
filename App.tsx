import * as React from 'react'
import MainContainer from './navigation/MainContainer'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
<SafeAreaProvider>
<MainContainer />

</SafeAreaProvider>  )
}

export default App
