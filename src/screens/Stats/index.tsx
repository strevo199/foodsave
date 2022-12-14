import React, {useState} from 'react';
import { 
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    Image,
    TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Stats = ({animatedStyle}) => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [userList, setUserList] = useState([
    {
      name: 'Rahul',
      email: 'rahul@gmail.com',
      image_path: 'https://www.beautifulhomes.com/content/dam/beautifulhomes/images/user-image-icon-11.jpg',
      sender_id: '1',
      receiver_id: '2',
    },
    {
      name: 'Muskan',
      email: 'muskan@gmail.com',
      image_path: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png',
      sender_id: "2",
      receiver_id: '1'
    },
  ])
    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
                ...animatedStyle
            }}
        >
           <View style={{
                padding: 15,
                marginTop: 50,
                backgroundColor: theme.colors.background,
                alignItems: "center",
                justifyContent: 'center'
            }}>
                <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: theme.colors.text1
                }}>{`  User List  `}</Text>
            </View>
            <FlatList
                style={{
                marginHorizontal: 15,
                marginTop: 20
                }}
                data={userList}
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({ item, index }) =>
                <TouchableOpacity
                    key={index}
                    style={{
                    padding: 10,
                    elevation: 10,
                    borderRadius: 10,
                    borderWidth: 1,
                    backgroundColor: '#ff',
                    borderColor: '#ddd',
                    marginBottom: 20,
                    flexDirection: 'row',
                    alignItems: "center"
                    }}
                    onPress={() => {
                    navigation.push('Chat',
                        {
                        record: item
                        }
                    )
                    }}
                >
                    <Image
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        borderWidth: 0.5,
                        borderColor: '#ddd'
                    }}
                    source={{ uri: item.image_path }}
                    resizeMode='contain'
                    />
                    <Text
                    style={{
                        fontSize: 14,
                        marginLeft: 20,
                        fontWeight: '400'
                    }}
                    >{item.name + `\n` + item.email} </Text>
                </TouchableOpacity>
                }
            />
        </Animated.View>
    );
};

export default Stats;
