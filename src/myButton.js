import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const myButton = ({onPress, text}) => {
    return (
        <Pressable
        onPress={onPress}
        style={[styles.container]}>
        <Text
            style={[styles.text ]}>
            {text}
        </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '30%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#3B71F3',
        borderColor: '#3B71F3',
        borderWidth: 2,
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

});

export default myButton;
