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
                value={email}/>

            <TextInput style={styles.input}
                keyboardType='default'
                placeholder='password'
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}/>

            <Pressable style={styles.button} onPress={() => loginOnSubmit(email, password)}>
                <Text style={styles.buttonText}> Login </Text>
            </Pressable>

            <Pressable onPress={() => props.navigation.navigate("Register")}>
                <Text style={styles.link}>¿No tenés cuenta? Registrate</Text>
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
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 40,
        backgroundColor: '#F5F7FA'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 25,
        color: '#4F46E5'
    },
    input: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        marginVertical: 10
    },
    button: {
        backgroundColor: '#4F46E5',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 10
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    
    link: {
        color: '#4F46E5',
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold'
    },

})