import React from 'react'
import { Text as DefaultText, View as DefaultView, TextProps, ViewProps, TextInput as DefaultTextInput, TextInputProps as DefaultTextInputProps } from 'react-native'
import { light, dark } from '@Constants/colors'
import { useColorScheme } from 'react-native'

interface ThemeProps {
  lightColor?: string;
  darkColor?: string;
}

interface ModifiedTextProps extends ThemeProps, TextProps {}
interface ModifiedViewProps extends ThemeProps, ViewProps {}
interface TextInputProps extends ThemeProps, DefaultTextInputProps {}

export function useThemeColor(
	props: { light?: string; dark?: string },
	colorName: keyof typeof light & keyof typeof dark
) {
	const theme = useColorScheme() ?? 'light'
	// Instead of using colorFromProps, use the colorName to select the color based on the theme
	const color = theme === 'light' ? light[colorName] : dark[colorName]
	// If the color is explicitly set in props for the current theme, use it, otherwise fallback to the color from the theme constants
	return props[theme] ?? color
}


export function Text(props: ModifiedTextProps) {
	const { style, lightColor, darkColor, ...otherProps } = props
	const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

	return <DefaultText style={[{ color }, style]} {...otherProps} />
}

export function View(props: ModifiedViewProps) {
	const { style, lightColor, darkColor, ...otherProps } = props
	const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')

	return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}

export function TextInput(props: TextInputProps) {
	const { style, lightColor, darkColor, ...otherProps } = props
	const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

	return <DefaultTextInput style={[{ color }, style]} {...otherProps} />
}

export {
	ThemeProps,
	ModifiedTextProps,
	ModifiedViewProps,
	TextInputProps
}
