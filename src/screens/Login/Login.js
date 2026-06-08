import { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import { auth } from '../../firebase/config';

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [loginerror, setLoginError] = useState('');

    
    function loginOnSubmit(email, pass){

        if(!email.includes("@")){
        setLoginError("Email mal formateado");
        return;
        }

        else if(pass.length < 6){
        setLoginError("La password debe tener una longitud mínima de 6 caracteres");
        return;
        } 
        
        else {
            auth.signInWithEmailAndPassword(email, pass)
        .then((response) => {
            setLogin(true);
            props.navigation.navigate("HomeMenu");
        })
        .catch(error =>{
            setLoginError("Credenciales incorrectas.")
        })
        }
    }

    return (

        <View style={styles.container}>

            <Text style={styles.title}> Login </Text>

            <TextInput style={styles.input}
                keyboardType='email-address'
                placeholder='email'
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <TextInput style={styles.input}
                keyboardType='default'
                placeholder='password'
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            <Pressable style={styles.button} onPress={() => loginOnSubmit(email, password)}>
                <Text style={styles.buttonText}> Login </Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => props.navigation.navigate("Register")}>
                <Text style={styles.buttonText}> Ir al Registro </Text>
            </Pressable>

            <View>

                <Text>{loginerror}</Text>

            </View>

        </View>

    )
}

export default Login

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