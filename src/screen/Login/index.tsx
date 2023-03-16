import {SafeAreaView, View} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import MessageIcon from '../../../assets/icons/Message.svg';
import SearchIcon from '../../../assets/icons/search.svg';
import styles from './styles';
import Button from '../../components/Button';

const Login = () => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Input />
        <Input suffixIcon={MessageIcon} variant="success" />
        <Input suffixIcon={SearchIcon} variant="warning" />
        <Input variant="error" />
        <Button btnIcon={MessageIcon} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
