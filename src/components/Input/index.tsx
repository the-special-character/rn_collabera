import {TextInput, View, TextInputProps, Text} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import styles from './styles';

type Props = {
  variant?: 'success' | 'warning' | 'error';
  prefixIcon?: React.FC<SvgProps>;
} & TextInputProps;

const Input = ({
  field: {name, value},
  form: {touched, errors, setFieldValue, setFieldTouched}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  variant,
  prefixIcon: PrefixIcon,
  innerRef,
  ...props
}: Props) => {
  const inputStyle = [styles.input];
  if (variant) {
    inputStyle.push(styles[variant]);
  }

  console.log(PrefixIcon);

  return (
    <View>
      <View style={styles.inputWrapper}>
        {PrefixIcon && (
          <PrefixIcon
            height={24}
            width={24}
            stroke="#3E5481"
            style={styles.svg}
          />
        )}
        <TextInput
          ref={innerRef}
          value={value}
          placeholderTextColor="#9FA5C0"
          style={inputStyle}
          onChangeText={text => setFieldValue(name, text)}
          onBlur={() => setFieldTouched(name, true)}
          {...props}
        />
      </View>
      {touched[name] && errors[name] && <Text>{errors[name]}</Text>}
    </View>
  );
};

export default Input;
