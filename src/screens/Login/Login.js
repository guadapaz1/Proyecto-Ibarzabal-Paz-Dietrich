import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit() {
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <View>
            <Text>Login</Text>

            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                value={email}
            />

            <TextInput
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password}
            />

            <Pressable onPress={() => onSubmit()}>
                <Text>Ingresar</Text>
            </Pressable>

            <Pressable onPress={() => props.navigation.navigate('Register')}>
                <Text>¿No tenés cuenta? Registrate</Text>
            </Pressable>
        </View>
    );
}

export default Login;