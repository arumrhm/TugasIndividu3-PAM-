import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import User from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <View style={customHeaderStyle.headerContainer}>
            <Icon 
                style={customHeaderStyle.menuIcon}
                name="menu" 
                color="#fff"
            />
            <User 
                style={customHeaderStyle.userIcon}
                name="user" 
                color="white"
            />
        </View>
    );
};

const customHeaderStyle = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'limegreen',
        height: '20%',
        marginLeft: -10,
        marginRight: -10,
        zIndex: 1,
    },
    menuIcon: {
        fontSize: 40,
    },
    userIcon: {
        fontSize: 40,
    },
});

export default Header;