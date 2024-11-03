import React from 'react'
import { Tabs } from 'expo-router'
import { Platform, useColorScheme } from 'react-native'
// import { light, dark } from '@Constants/Colors'
// import { getDynamicValue } from '@Constants/Functions'
import tw from 'twrnc'
// import TabsIcons from '@Components/Icons/TabsIcons'
// import Onboard from '@Components/PageComponents/Onboard/Onboard'
import { useAtom } from 'jotai'
import TabsIcon from '@Components/Icons/TabsIcon'
// import { firstTimeOnAppAtom } from '@State/firstTimeOnAppAtom'

export default function TabLayout() {
	const theme = useColorScheme()
	// const [firstTimeOnApp] = useAtom(firstTimeOnAppAtom)
	
	return (
		<>
			{/* {3 > 2
				? (<Onboard />)
				: ( */}
			<>
				<Tabs
					screenOptions={({ route }) => ({
						tabBarStyle: {...tw`shadow-lg`, ...{
							// backgroundColor: Platform.OS === 'ios' ? (theme === 'light' ? light.iosHeaderBackground : dark.iosHeaderBackground) : (theme === 'light' ? light.tabsBackgroundColor : dark.tabsBackgroundColor),
							// height: Platform.OS === 'android' ? getDynamicValue(80) : getDynamicValue(100),
							// display: route.name === 'search' || route.name === 'podcastmix' ? 'none' : 'flex',
						}},
						// tabBarInactiveTintColor: theme === 'dark' ? dark.iconsColor : light.iconsColor,
						// tabBarActiveTintColor: theme === 'dark' ? dark.activeIconColor : light.activeIconColor,
						tabBarIconStyle: {...tw`text-center`, ...{
							// color: theme === 'dark' ? dark.iconsColor : light.iconsColor,
						}},
						unmountOnBlur: false,
						lazy: false,
					})}>
					<Tabs.Screen
						name="history"
						options={{
							headerShown: false,
							tabBarIcon: ({ color, focused }) => <TabsIcon name="clipboard-list" color={color} focused={focused} pageName='history' />,
							title: '',
							unmountOnBlur: false,
							lazy: false,
						}}
					/>
					<Tabs.Screen
						name="index"
						options={{
							headerShown: false,
							tabBarIcon: ({ color, focused }) => <TabsIcon name="house" color={color} focused={focused} pageName='home' />,
							title: '',
							unmountOnBlur: false,
							lazy: false,
						}}
					/>
					<Tabs.Screen
						name="profile"
						options={{
							headerShown: false,
							tabBarIcon: ({ color, focused }) => <TabsIcon name="user-large" color={color} focused={focused} pageName='radios' />,
							title: '',
							unmountOnBlur: false,
							lazy: false,
						}}
					/>
					
				</Tabs>
			</>
			{/* )
			} */}
		</>
	)
}
