import { Stack } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from 'expo-font' // custom fonts
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync() // when the app is initially loading this will make the splash screen visable

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync() // we only want to show our homepage if the fonts have been loaded
    }
  }, [fontsLoaded])

  if(!fontsLoaded) return null

  return <Stack onLayout={onLayoutRootView}/>
}

export default Layout