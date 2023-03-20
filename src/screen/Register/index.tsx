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
import CheckMarkIcon from '../../../assets/icons/checkMark.svg';
import SelectedCheckMarkIcon from '../../../assets/icons/SelectedCheckMark.svg';
import MessageIcon from '../../../assets/icons/Message.svg';
import LockIcon from '../../../assets/icons/Lock.svg';
import styles from '../Login/styles';
import Button from '../../components/Button';

const Register = ({navigation}) => {
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
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}>
        {({handleSubmit, values}) => (
          <SafeAreaView style={[styles.seprator]}>
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
            <View style={styles.validationWrapper}>
              <Text style={styles.msgTitle}>Your Password must contain:</Text>
              <View style={styles.msgWrapper}>
                {values.password.length > 6 ? (
                  <SelectedCheckMarkIcon height={24} width={24} />
                ) : (
                  <CheckMarkIcon height={24} width={24} />
                )}

                <Text
                  style={[
                    styles.msgText,
                    {
                      color: values.password.length > 6 ? '#2E3E5C' : '#9FA5C0',
                    },
                  ]}>
                  Atleast 6 characters
                </Text>
              </View>
              <View style={styles.msgWrapper}>
                {/\d/.test(values.password) ? (
                  <SelectedCheckMarkIcon height={24} width={24} />
                ) : (
                  <CheckMarkIcon height={24} width={24} />
                )}
                <Text
                  style={[
                    styles.msgText,
                    {
                      color: /\d/.test(values.password) ? '#2E3E5C' : '#9FA5C0',
                    },
                  ]}>
                  Contains a number
                </Text>
              </View>
            </View>
            <View style={styles.btnsWrapper}>
              <Button onPress={handleSubmit} />
              <Text style={[styles.body, {color: '#2E3E5C'}]}>
                Already have an account?{' '}
                <Text
                  style={{color: '#1FCC79', fontWeight: '700'}}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  Sign in
                </Text>
              </Text>
            </View>
          </SafeAreaView>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default Register;
