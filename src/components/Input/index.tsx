import {TextInput, View, TextInputProps} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import styles from './styles';

type Props = {
  variant?: 'success' | 'warning' | 'error';
  suffixIcon?: React.FC<SvgProps>;
} & TextInputProps;

const Input = ({variant, suffixIcon: SuffixIcon, ...props}: Props) => {
  const inputStyle = [styles.input];
  if (variant) {
    inputStyle.push(styles[variant]);
  }

  console.log(SuffixIcon);

  return (
    <View style={styles.inputWrapper}>
      {SuffixIcon && <SuffixIcon height={24} width={24} style={styles.svg} />}
      <TextInput style={inputStyle} {...props} />
    </View>
  );
};

export default Input;
