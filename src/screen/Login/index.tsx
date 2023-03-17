import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import MessageIcon from '../../../assets/icons/Message.svg';
import LockIcon from '../../../assets/icons/Lock.svg';
import GoogleIcon from '../../../assets/icons/Google.svg';
import styles from './styles';
import Button from '../../components/Button';

const Login = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.wrapper}>
      <View style={[styles.seprator, {flex: 1}]}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.body}>Please Enter your account here</Text>
        </View>
        <View style={styles.inputWrapper}>
          <Input prefixIcon={MessageIcon} keyboardType="email-address" />
          <Input prefixIcon={LockIcon} secureTextEntry />
        </View>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
      <View style={styles.seprator}>
        <View style={styles.btnsWrapper}>
          <Button />
          <Text style={styles.body}>or Continue with</Text>
          <Button btnIcon={GoogleIcon} type="outline" />
          <Text style={[styles.body, {color: '#2E3E5C'}]}>
            Don't have any account?{' '}
            <Text style={{color: '#1FCC79', fontWeight: '700'}}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
