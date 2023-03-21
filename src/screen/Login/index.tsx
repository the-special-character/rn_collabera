import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useRef} from 'react';
import {Formik, Field} from 'formik';
import Input from '../../components/Input';
import MessageIcon from '../../../assets/icons/Message.svg';
import LockIcon from '../../../assets/icons/Lock.svg';
import GoogleIcon from '../../../assets/icons/Google.svg';
import styles from './styles';
import Button from '../../components/Button';
import axiosInstance from '../../utils/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  // const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const passwordRef = useRef();

  // useEffect(() => {
  //   const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
  //     setIsKeyboardVisible(true);
  //   });
  //   const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
  //     setIsKeyboardVisible(false);
  //   });

  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.wrapper}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, actions) => {
          try {
            const res = await axiosInstance.post('login', values);
            await AsyncStorage.setItem('@token', JSON.stringify(res.data));
            navigation.push('main');
            actions.resetForm();
          } catch (error) {
            actions.setErrors({
              serverError: error.message,
            });
          }
        }}>
        {({handleSubmit, errors}) => (
          <SafeAreaView style={[styles.seprator]}>
            <View style={styles.headerWrapper}>
              <Text style={styles.title}>Welcome Back!</Text>
              <Text style={styles.body}>Please Enter your account here</Text>
            </View>
            <View style={styles.inputWrapper}>
              {errors.serverError && (
                <Text
                  style={{
                    textAlign: 'center',
                    marginBottom: 24,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'red',
                  }}>
                  {errors.serverError}
                </Text>
              )}
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
                validate={(value: string) => {
                  if (!value) {
                    return 'Required...';
                  }
                  return '';
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
                validate={(value: string) => {
                  if (!value) {
                    return 'Required...';
                  }
                  return '';
                }}
              />
              <Text style={styles.forgot}>Forgot Password?</Text>
            </View>
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
          </SafeAreaView>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default Login;
