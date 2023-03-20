import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {Formik, Field} from 'formik';
import Input from '../../components/Input';
import MessageIcon from '../../../assets/icons/Message.svg';
import LockIcon from '../../../assets/icons/Lock.svg';
import GoogleIcon from '../../../assets/icons/Google.svg';
import styles from './styles';
import Button from '../../components/Button';

const Login = ({navigation}) => {
  const passwordRef = useRef();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.wrapper}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}>
        {({handleSubmit}) => (
          <>
            <View style={[styles.seprator, {flex: 1}]}>
              <View style={styles.headerWrapper}>
                <Text style={styles.title}>Welcome Back!</Text>
                <Text style={styles.body}>Please Enter your account here</Text>
              </View>
              <View style={styles.inputWrapper}>
                <Field
                  name="email"
                  component={Input}
                  prefixIcon={MessageIcon}
                  keyboardType="email-address"
                  placeholder="Email"
                  autoCapitalize="none"
                  inputMode="email"
                  autoComplete="email"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordRef.current.focus();
                  }}
                />
                <Field
                  innerRef={passwordRef}
                  name="password"
                  component={Input}
                  prefixIcon={LockIcon}
                  secureTextEntry
                  placeholder="Password"
                  autoComplete="current-password"
                  returnKeyType="done"
                  onSubmitEditing={handleSubmit}
                />
              </View>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </View>
            <View style={styles.seprator}>
              <View style={styles.btnsWrapper}>
                <Button onPress={handleSubmit} />
                <Text style={styles.body}>or Continue with</Text>
                <Button btnIcon={GoogleIcon} type="outline" />
                <Text style={[styles.body, {color: '#2E3E5C'}]}>
                  Don't have any account?{' '}
                  <Text
                    style={{color: '#1FCC79', fontWeight: '700'}}
                    onPress={() => {
                      navigation.push('Register');
                    }}>
                    Sign Up
                  </Text>
                </Text>
              </View>
            </View>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default Login;
