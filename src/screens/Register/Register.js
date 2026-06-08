import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

function Register(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit() {
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                value={email}
            />

            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                keyboardType="default"
                onChangeText={text => setUsername(text)}
                value={username}
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
                <Text>Registrarme</Text>
            </Pressable>

            <Pressable onPress={() => props.navigation.navigate('Login')}>
                <Text>¿Ya tenés cuenta? Iniciá sesión</Text>
            </Pressable>
        </View>
    );
}

export default Register;

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