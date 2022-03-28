
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/core';
import CustomInput from './CustomInput';
import myButton from './myButton';
import {Auth} from 'aws-amplify';

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const Registration = () => {
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();

    const onSubmitPressed = async data => {
    //console.log(data);
        const {name, email, contact, password, gender} = data;
        try {
        await Auth.signUp({
            name,
            password,
            attributes: {email, contact, gender},
        });
    }
    catch{data}
};

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>

            <CustomInput
            name="name"
            control={control}
            placeholder="Name"
            rules={{
                required: 'Name is required',
                minLength: {
                value: 3,
                message: 'Name should be at least 3 characters long',
                },
                maxLength: {
                value: 24,
                message: 'Name should be max 24 characters long',
                },
            }}
            />

            <CustomInput
            name="email"
            control={control}
            placeholder="Email"
            rules={{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
            }}
            />

            <CustomInput
            name="contact"
            control={control}
            placeholder="Mobile no."
            rules={{
                required: 'Mobile no. with std code "+91" is required',
                minLength: {
                value: 10,
                message: 'Mobile no should have only 10-digits',
                },
                maxLength: {
                value: 10,
                },
            }}
            />

            <CustomInput
            name="password"
            control={control}
            placeholder="Password"
            secureTextEntry
            rules={{
                required: 'Password is required',
                minLength: {
                value: 8,
                message: 'Password should be at least 8 characters long',
                },
            }}
            />

            <CustomInput
            name="gender"
            control={control}
            placeholder="Male or Female"
            rules={{
                required: 'Gender is required',
                minLength: {
                value: 4,
                message: 'Enter either Male or Female',
                },
                maxLength: {
                value: 6,
                message: 'Enter either Male or Female',
                },
            }}
            />

            <myButton
            text="Submit"
            onPress={handleSubmit(onSubmitPressed)}
            />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});

export default Registration;
