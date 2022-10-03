import React, {useState} from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import { McText, McImage} from '../Components'
import { Images } from '../Constants'
import Home from '../screens/Home';
import Settings from '../screens/Settings'
import { backgroundColor, transform } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import Profile from '../screens/Profile'
import Accounts from '../screens/Accounts'
import Stats from '../screens/Stats'
import Help from '../screens/Help'
import Transactions from '../screens/Transactions'

const MENUs = [
    {
        name: 'Home',
        label: "Home"
    },
    {
        name: 'Profile',
        label: "Profile"
    },
    {
        name: 'Accounts',
        label: "Accounts"
    },
    {
        name: 'Transactions',
        label: "Transactions"
    },
    {
        name: 'Stats',
        label: "Stats"
    },
    {
        name: 'Settings',
        label: "Settings"
    },
    {
        name: 'Help',
        label: "Help "
    }

]
const Drawer  = createDrawerNavigator();

const CustomDrawerContent = ({ navigation, theme }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    return <View style={{
        flex:  1
    }}>
        <View style={{
            width: 210,
            height: 107,
            borderBottomEndRadius: 107 / 2,
            backgroundColor: theme.colors.background,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    backgroundColor: theme.colors.boxBackground,
                    marginRight: 10, 
                }}>
                    <McImage source={Images.avatar1} />
                </View>
                <View>
                    <McText semi size={16} color={theme.colors.text1} >Amina John</McText>
                    <McText medium size={10} color={theme.colors.text3} >Abuja, Nigeria</McText>
                </View>
            </View>
        </View>
        <DrawerContentScrollView
            scrollEnabled={false}
            contentContainerStyle={{}}
            style={{marginLeft: -18}}
        >
            {MENUs?.map((menu, index) => {
                return (
                    <DrawerItem
                        activeTintColor={theme.colors.boxBackground}
                        focused = {activeIndex === index}
                        key={index}
                        onPress={() => {
                            navigation.navigate(menu.name)
                            setActiveIndex(index)
                        }}
                        label={({focused}) => {
                            return (
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center'
                                }}>
                                    <View style={{
                                        width: 4,
                                        height: 33,
                                        marginRight: 26,
                                        backgroundColor: focused ? theme.colors.primary : 'transparent'
                                    }}>

                                    </View>
                                    <McText
                                        size={16}
                                        bold={focused}
                                        color={theme.colors.text1}
                                    >{menu.label}</McText>
                                </View>
                            )
                        }}
                    >

                    </DrawerItem>
                )
            })}
        </DrawerContentScrollView>
        <TouchableOpacity onPress={() => {
            // Simulate logout 
            navigation.closeDrawer();
            navigation.navigate('Splash')
        }} style={{marginBottom: 27, marginLeft: 30}}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <McImage source={Images.logout} style={{ tinycolor: theme.colors.text2, marginRight: 8}} />
                <McText bold sixe={16} color={theme.colors.text2}>Logout </McText>
            </View>
            <View style={{marginTop: 62}}>
                <McText medium size={10} color={theme.colors.text2}>Version 1.0.1</McText> 
            </View>
        </TouchableOpacity>
    </View>
}

const DrawerMenu = () => {
    const [progress, setProgress] = useState( new Animated.Value(0))
    const theme = useTheme()

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.75]
    })

    const rotate = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: ['0deg', '-10deg']
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 30]
    })

    const animatedStyle = {
        borderRadius, transform: [{scale, rotateZ: rotate}]
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.colors.boxBackground
        }}>
            <Drawer.Navigator
                hideStatusBar={true}
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: '60%',
                    backgroundColor: 'transparent'
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initialRouteName='Home'
                drawerContent={(props) => {
                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0)
                    return(
                        <CustomDrawerContent 
                            navigation={props.navigation}
                            theme={theme}
                        />
                    )
                }}
            >
                <Drawer.Screen name='Home'>
                    {(props) => <Home {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name='Profile'>
                    {(props) => <Profile {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name='Accounts'>
                    {(props) => <Accounts {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name='Transactions'>
                    {(props) => <Transactions {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name='Stats'>
                    {(props) => <Stats {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name='Settings'>
                    {(props) => <Settings {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>

                <Drawer.Screen name='Help'>
                    {(props) => <Help {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default DrawerMenu;
