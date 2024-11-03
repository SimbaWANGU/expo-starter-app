import React, { useEffect } from 'react'
import { Linking, useColorScheme } from 'react-native'
import { Link, SplashScreen, useNavigationContainerRef } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useReactQueryDevTools } from '@dev-plugins/react-query'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as Sentry from '@sentry/react-native'
import App from '@Components/App/App'
import ErrorBoundary from 'react-native-error-boundary'
import Fallback from '@Components/Fallback/Fallback'

// import QuickSand from '@fonts/Quicksand_Bold.otf'

SplashScreen.preventAutoHideAsync()
const routingInstrumentation = new Sentry.ReactNavigationInstrumentation()

// Sentry.init({
// 	dsn: "https://71fef3f89c26060458a4f90e4f54c3a2:da9eadab22517db8ca8037d87f0e057c@o4506275145908224.ingest.us.sentry.io/4506275154558976",
// 	tracesSampleRate: 1.0,
// 	debug: true,
// 	integrations: [
// 		new Sentry.ReactNativeTracing({
// 			routingInstrumentation,
// 		}),
// 	],
// })

// const client = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 60 * 5, // 5 minutes
//     },
//     mutations: {
//       onError: (error) => {
//         if ('message' in error) {
//           console.error(error.message)
//         }
//       }
//     }
//   },
// })


const RootLayout = () => {
	const queryClient = new QueryClient()
	const theme = useColorScheme()
	const ref = useNavigationContainerRef()
	const [loaded, error] = useFonts({
		// SpaceMono: SpaceMono,
		// QuickSand: QuickSand,
	})
	useReactQueryDevTools(queryClient)
  
	useEffect(() => {
		if (ref) {
			routingInstrumentation.registerNavigationContainer(ref)
		}
	}, [ref])

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	// useEffect for error handling
	useEffect(() => {
		if (error) {
			Sentry.captureException(error)
			SplashScreen.hideAsync()
		}
	}, [error])

	// const segments = useSegments()
	// const isLogin = segments[segments.length - 1] === '(tabs)'
	// const drawerTitle = isLogin ? 'LOGIN' : segments.length > 0 ? segments[segments.length - 1].toLowerCase() : ''

	// const runTypeMessage = Updates.isEmbeddedLaunch
	// ? 'This app is running from built-in code'
	// : 'This app is running an update'

	// console.log('runTypeMessage', runTypeMessage)

	return (
      <ErrorBoundary>
		<GestureHandlerRootView>
        <QueryClientProvider client={queryClient}>
          <App />
          <StatusBar
            style="auto"
            // backgroundColor={theme === 'light' ? light.background : dark.background}
            />
        </QueryClientProvider>
		</GestureHandlerRootView>
      </ErrorBoundary>
	)
}

Sentry.wrap(RootLayout)

export default RootLayout
