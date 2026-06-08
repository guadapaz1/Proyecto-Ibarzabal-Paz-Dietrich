import { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { db, auth } from '../../firebase/config';

function NuevoPost() {

    const [descripcionPost, setDescripcionPost] = useState("");

    function post() {

        db.collection('posts').add({
            owner: auth.currentUser.email,
            descripcionPost: descripcionPost,
            createdAt: Date.now()
        })
        .then(() => {
            setDescripcionPost("");
        })
        .catch(error => console.log(error))

    }

    return(

        <View style={styles.container}>

            <Text style={styles.title}>Publica un Post</Text>

            <TextInput style={styles.input}
                placeholder='Escribi un post'
                value={descripcionPost}
                onChangeText={(text) => setDescripcionPost(text)}
            />

            <Pressable onPress={post} style={styles.button}>
                <Text style={styles.buttonText}>Publicar</Text>
            </Pressable>

        </View>

    )

}

export default NuevoPost;


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