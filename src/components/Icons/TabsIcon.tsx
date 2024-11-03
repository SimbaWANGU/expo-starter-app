import { Platform, Text } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
// import { GothamRoundedMediumText } from '@Components/Styled/StyledText'
import { View } from '@Components/Styled/Themed'
import tw from 'twrnc'
import { RFPercentage } from 'react-native-responsive-fontsize'

interface TabsIconProps {
	name: React.ComponentProps<typeof FontAwesome6>['name']
	color: string
	focused?: boolean
	pageName?: string
}

const TabsIcon: React.FC<TabsIconProps> = ({ name, color, focused, pageName }) => {
	return (
		<View
			style={[tw`h-full w-full ${Platform.OS === 'ios' ? focused ? 'mt-8' : 'mt-8' : 'mt-2'} flex flex-col bg-transparent text-center items-center justify-evenly` , {
				
			}]}
		>
			<FontAwesome6 size={20} name={name} color={color} style={tw``} />
			{/* <Text style={[tw``, { fontSize: RFPercentage(1.1), color: color }]}>{pageName}</Text> */}
		</View>
	)
}

export default TabsIcon