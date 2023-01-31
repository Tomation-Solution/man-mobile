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

  // && Localization.decimalSeparator !== '.'

  const getKeyboardType = (): KeyboardTypeOptions | undefined => {
    if (keyboardType === 'numeric' && Platform.OS === 'ios' ) {
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
