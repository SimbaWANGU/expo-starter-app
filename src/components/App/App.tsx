import React from 'react'
import { useFocusEffect, Stack } from 'expo-router'
import { useAtom } from 'jotai'
import { useCallback, useEffect } from 'react'
// import * as StoreReview from 'expo-store-review'
// import analytics from '@react-native-firebase/analytics'
import * as Sentry from '@sentry/react-native'
import ErrorBoundary from 'react-native-error-boundary'
import Fallback from '@Components/Fallback/Fallback'

const App = () => {
	// useFocusEffect(
	// 	useCallback(() => {
	// 		const logScreenView = async () => {
	// 			try {
	// 				await analytics().logAppOpen()
	// 			} catch (error) {
	// 				Sentry.captureException(error)
	// 			}
	// 		}

	// 		logScreenView()
	// 	}, [])
	// )

	// useEffect(() => {
	// 	const checkAndRequestReview = async () => {
	// 		try {
	// 			const hasAction = await StoreReview.hasAction()
	// 			if (hasAction && displayReview) {
	// 				await StoreReview.requestReview()
	// 			}
	// 		} catch (error) {
	// 			Sentry.captureException(error)
	// 		}
	// 	}

	// 	checkAndRequestReview()
	// }, [displayReview])

  
  

	return (
    
    <Stack
			screenOptions={{
        headerShown: false,
			}}
      >
			<Stack.Screen
				name={'(home)'}
				options={{ headerShown: false }}
				getId={() => String(Date.now())}	
        />
		</Stack>
	)
}

export default App