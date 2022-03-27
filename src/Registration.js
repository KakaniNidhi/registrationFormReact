
import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {myButton} from './src/myButton';

const Registration = () => {
    const {control, handleSubmit} = useForm();

    const onSubmitPressed = data => {
    console.log(data);
    };
    return(
        <View style={styles.screen}>
            <Controller 
                control={control}
                name="username"
                render={({field: {value, onChange, onBlur}})=>(
                    <TextInput 
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={'username'}
                        style={styles.input}
                        secureTextEntry={secureTextEntry}
                    />
                )}
            />
            <myButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default Registration;
