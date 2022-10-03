// import React from 'react'
import { View, Text, StatusBar, TouchableOpacity, TextInput, Alert, Button } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useTheme } from 'styled-components';
import { McText, McImage} from '../../../Components'
import { Images } from '../../../Constants'
import PhoneInput from 'react-native-phone-input'

const loginValidate = Yup.object().shape({
    first_name: Yup.string().required('first name field is required!'),
    last_name: Yup.string().required('last name field is required!'),
    phone: Yup.string().min(10).required('phone field is required!'),
    email: Yup.string().email().required('email field is required!'),
    password: Yup.string().min(6).max(10, 'Password should not excced 10 chars.').required(),
});

export const SignUp = ({navigation}) => {
    const theme = useTheme();
    
    return (
        <> 
            <View style={{ 
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.color.background,
            }}>
                <StatusBar hidden={true} />
                <View>
                    <View style={{ 
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 30
                    }}>
                            <McImage source={Images.logo} />
                            <McText secondary size={28} color={theme.color} style={{
                                marginTop: 16
                            }}>Foodajo</McText> 
                        </View>
                        <Formik
                            initialValues={{
                                first_name: '',
                                last_name: '',
                                phone: '',
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
                                    value={values.first_name}
                                    onChangeText={handleChange('first_name')}
                                    onBlur={() => setFieldTouched('first_name')}
                                    placeholderTextColor={theme.colors.grey}
                                    placeholder='First Name' 
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
                                {(errors.first_name && touched.first_name) &&
                                    <McText semi size={12} color="#ff0000">{errors.first_name}</McText>
                                }
                                <TextInput 
                                    value={values.last_name}
                                    onChangeText={handleChange('last_name')}
                                    onBlur={() => setFieldTouched('last_name')}
                                    placeholderTextColor={theme.colors.grey}
                                    placeholder='Last Name' 
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
                                {(errors.last_name && touched.last_name) &&
                                    <McText semi size={12} color="#ff0000">{errors.last_name}</McText>
                                }
                                {/* <TextInput 
                                    value={values.phone}
                                    onChangeText={handleChange('phone')}
                                    onBlur={() => setFieldTouched('phone')}
                                    placeholderTextColor={theme.colors.grey}
                                    placeholder='Phone' 
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
                                /> */}
                                <PhoneInput
                                    ref={ref => {
                                        this.phone = ref;
                                    }}
                                    initialCountry={'ng'}
                                    setValue={values.phone}
                                    onChangePhoneNumber={handleChange('phone')}
                                    blur={() => setFieldTouched('phone')}
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
                            
                                {(errors.phone && touched.phone) &&
                                    <McText semi size={12} color="#ff0000">{errors.phone}</McText>
                                }
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
                                    <McText semi size={16} color="#212230">Sign Up</McText>
                                    
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
                                <McText size={16} color={theme.colors.text1}>I already have an account. </McText>
                                <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('SignIn')
                                }}>
                                    <McText size={16} color={theme.colors.primary}>Login </McText>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 30}}>
                                <McText size={16} color={theme.colors.text1}>I already have an account. </McText>
                                <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Verification')
                                }}>
                                    <McText size={16} color={theme.colors.primary}>Verification </McText>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </View>
        </>
    )
}

