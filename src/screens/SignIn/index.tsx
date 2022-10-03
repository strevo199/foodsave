import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, TextInput, Alert } from 'react-native'
import { useTheme } from 'styled-components';

import { McText, McImage } from '../../Components'
import { Images } from '../../Constants'
import { Formik } from 'formik';
import * as Yup from 'yup';

const loginValidate = Yup.object().shape({
    email: Yup.string().email().required('username field is required!'),
    password: Yup.string().min(6).max(10, 'Password should not excced 10 chars.').required(),
});

const SignIn = ({navigation}) => {
    const theme = useTheme();
    
    return (
        <>
            <View style={{ 
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.colors.background,
            }}>
                <StatusBar hidden={true} />
                <View>
                    <View style={{ 
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 30
                    }}>
                            <McImage source={Images.logo} />
                            <McText secondary size={28} color={theme.colors.text1} style={{
                                marginTop: 16
                            }}>Foodajo</McText>
                        </View>
                        <Formik
                            initialValues={{
                            email: '',
                            password: '',
                            }}
                            validationSchema={loginValidate}
                            onSubmit={(values) => {
                                Alert.alert(JSON.stringify(values))
                                //console.log(values)
                            //register(values);
                        }}>
                        {({ values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit, 
                            isValid,
                            setFieldTouched,
                        }) => (
                            <View> 
                            
                                <TextInput 
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={() => setFieldTouched('email')}
                                    placeholderTextColor={theme.colors.grey}
                                    placeholder='Email' 
                                    style={{
                                        width: 300, 
                                        height: 50, 
                                        borderWidth: 1, 
                                        borderRadius: 10, 
                                        padding: 10, 
                                        marginTop: 10, 
                                        borderColor: theme.colors.text1, 
                                        color: theme.colors.text1  
                                    }} 
                                />
                                {(errors.email && touched.email) &&
                                    <McText semi size={12} color="#ff0000">{errors.email}</McText>
                                }
                                <TextInput 
                                    placeholder='Password' 
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    onBlur={() => setFieldTouched('passwordd')}
                                    placeholderTextColor={theme.colors.grey}
                                    secureTextEntry={true} 
                                    style={{
                                        width: 300, 
                                        height: 50, 
                                        borderWidth: 1, 
                                        borderRadius: 10, 
                                        padding: 10, 
                                        marginTop: 10, 
                                        borderColor: theme.colors.text1, 
                                        color: theme.colors.text1  
                                    }} />
                                {(errors.password && touched.password) &&
                                    <McText semi size={12} color="#ff0000">{errors.password}</McText>
                                }
                                 
                                <TouchableOpacity
                                    onPress={handleSubmit}
                                    style={{
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: !isValid ? theme.colors.grey : theme.colors.primary,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop:20
                                    }}
                                >
                                    <McText semi size={16} color="#212230">Login</McText>
                                    
                                </TouchableOpacity >
                            </View>
        
                        )}
                        </Formik>
                        
                        <View>
                            
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 30}}>
                                <McText size={16} color={theme.colors.text1}>Don't have an account. </McText>
                                <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('SignUp')
                                }}>
                                    <McText size={16} color={theme.colors.primary}>Sign Up </McText>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </View>
        </>
    )
}

export default SignIn
