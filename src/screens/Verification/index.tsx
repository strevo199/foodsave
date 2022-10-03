import React, {useState} from 'react'
import { View, Text, StatusBar, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native'
import { useTheme } from 'styled-components';

import { McText, McImage } from '../../Components'
import { Images } from '../../Constants'
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

  const CELL_COUNT = 4;
const loginValidate = Yup.object().shape({
    email: Yup.string().email().required('username field is required!'),
    password: Yup.string().min(6).max(10, 'Password should not excced 10 chars.').required(),
});

const Verification = ({navigation}) => {
    const theme = useTheme();
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
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
                        <CodeField
                            ref={ref}
                            {...props}
                            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({index, symbol, isFocused}) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                            )}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert(JSON.stringify(value.length))
                                //navigation.navigate('Home')
                            }}
                            style={{
                                height: 50,
                                borderRadius: 10,
                                backgroundColor: value.length !== 4 ?  theme.colors.grey : theme.colors.primary,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop:20
                            }}
                        >
                            <McText semi size={16} color="#212230">Verify</McText>
                            
                        </TouchableOpacity >
                        <View>
                            
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 30}}>
                                <McText size={16} color={theme.colors.text1}>Did not receive code? </McText>
                                <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('SignUp')
                                }}>
                                    <McText size={16} color={theme.colors.primary}>Resend Code </McText>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </View>
        </>
    )
}

export default Verification


const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 60,
      height: 60,
      lineHeight: 55,
      fontSize: 30,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#00000030',
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#000',
    },
  });