import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const FormInput = props => {
  const { placeholder, label, error } = props;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        {/* <Text style={{ fontWeight: '700',color:'#9DA292',fontSize:12,lineHeight:18 }}>{label}</Text> */}
        {error ? (
          <Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>
        ) : null}
      </View>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#9DA292',
    height: 35,
    color:'rbga(0,0,18, 0.16)',
    borderRadius: 8,
    fontSize: 15,
    paddingLeft: 6,

  },
});

export default FormInput;
