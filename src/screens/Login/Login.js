import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit() {
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
    
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                value={email}
            />
    
            <TextInput
                style={styles.input}
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password}
            />
    
            <Pressable style={styles.boton} onPress={() => onSubmit()}>
                <Text>Ingresar</Text>
            </Pressable>
    
            <Pressable onPress={() => props.navigation.navigate('Register')}>
                <Text>¿No tenés cuenta? Registrate</Text>
            </Pressable>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        padding: 10,
        marginBottom: 10,
    },
    boton: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
});