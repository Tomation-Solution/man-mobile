// import * as Localization from 'expo-localization'
import { forwardRef } from 'react'
import * as React from 'react'
import { KeyboardTypeOptions, Platform, TextInput, TextInputProps } from 'react-native'

export const ThemedTextInputV2 = forwardRef(
  function (props: React.PropsWithChildren<TextInputProps>, ref: React.Ref<any>): JSX.Element {
  const {
    style,
    keyboardType,
    ...otherProps
  } = props

  const getKeyboardType = (): KeyboardTypeOptions | undefined => {
    if (keyboardType === 'numeric' && Platform.OS === 'ios' && Localization.decimalSeparator !== '.') {
      return 'default'
    }
    return keyboardType
  }

  return (
    <TextInput
      placeholderTextColor={}
      style={[style]}
      ref={ref}
      {...otherProps}
      keyboardType={getKeyboardType()}
    />
  )
})
