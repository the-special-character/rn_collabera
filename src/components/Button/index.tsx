import {Text, Pressable, View, PressableProps} from 'react-native';
import React from 'react';
import styles from './styles';
import {SvgProps} from 'react-native-svg';

type Props = {
  btnIcon?: React.FC<SvgProps>;
};

const Button = ({btnIcon: Icon, ...props}: Props) => {
  return (
    <Pressable style={styles.btn} {...props}>
      {Icon && <Icon height={24} width={24} stroke="#fff" />}
      <Text style={styles.btnText}>Button</Text>
    </Pressable>
  );
};

export default Button;
