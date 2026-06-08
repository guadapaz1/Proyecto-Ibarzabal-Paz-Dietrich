import { useState, useEffect } from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import { auth, db} from '../../firebase/config';


function Register(props) {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState('');
    const [registererror, setRegisterError] = useState('');

    
    function registerOnSubmit(email, pass, username){
        auth.createUserWithEmailAndPassword(email, pass)
        .then((response) => {

            db.collection('users').add({
            email: email,
            username: username,
            createdAt: Date.now()
        })
            //sign out aca
            setRegister(true);
            props.navigation.navigate("Login");
         })
        .catch(error =>{
            console.log(error)
            setRegisterError("Fallo en el registro.")
        })
    }


    useEffect(
        ()=> {
            auth.onAuthStateChanged(
                user => {
                    if (user) {
                        props.navigation.navigate("HomeMenu")
                    }
                }
            )
        },  []
    )
  


    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Register
            </Text>

            <TextInput style={styles.input}
                keyboardType='email-address'
                placeholder='email'
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <TextInput style={styles.input}
                keyboardType='default'
                placeholder='username'
                onChangeText={(text) => setUsername(text)}
                value={username}
            />

            <TextInput style={styles.input}
                keyboardType='default'
                placeholder='password'
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            <Pressable style={styles.button} onPress={() => registerOnSubmit(email, password,username)}>
                <Text style={styles.buttonText}> Registrate </Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => props.navigation.navigate("Login")}>
                <Text style={styles.buttonText}> Ir al Login </Text>
            </Pressable>

            <View>

                <Text>{registererror}</Text>

            </View>

        </View>

    )
}

export default Register

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 10,
        marginTop: 20
    },

    title: {
        fontSize: 30,
        marginBottom: 20
    },

    input: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical: 10
    },

    button: {
        backgroundColor: '#28a745',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#28a745',
        marginTop: 10
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }

})