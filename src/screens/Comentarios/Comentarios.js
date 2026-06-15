import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TextInput, Pressable, FlatList} from 'react-native';
import { db } from '../../firebase/config';
import firebase from 'firebase';

function Comentarios(props) {

    const { id } = props.route.params;

    const [post, setPost] = useState();
    const [comentario, setComentario] = useState("");

    useEffect(() => {
        db.collection("posts")
            .doc(id)
            .onSnapshot(doc => {
                setPost(doc.data());
            });
    }, []);

    function agregarComentario() {

        if (comentario === "") {
            return;
        }

        db.collection('posts')
            .doc(id)
            .update({
                comentarios: firebase.firestore.FieldValue.arrayUnion(comentario)
            })
            .then(() => {
                setComentario('');
            });
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Comentarios</Text>

            {post ?

                <View style={styles.postContainer}>
                    <Text style={styles.email}>
                        {post.email}
                    </Text>

                    <Text>
                        {post.descripcionPost}
                    </Text>
                </View>

            : null}

            <TextInput
                style={styles.input}
                placeholder="Escribí un comentario"
                value={comentario}
                onChangeText={(text) => setComentario(text)}/>

            <Pressable style={styles.button} onPress={agregarComentario} >
                <Text style={styles.buttonText}> Enviar </Text>
            </Pressable>

            <FlatList
                data={post ? post.comentarios : []}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.comentario}>
                        <Text>{item}</Text>
                    </View>
                )}
            />
        </View>
    );
}

export default Comentarios;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#F5F7FA'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#4F46E5',
        marginBottom: 20
    },

    postContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20
    },

    email: {
        fontWeight: 'bold',
        marginBottom: 8
    },

    input: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10
    },

    button: {
        backgroundColor: '#4F46E5',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },

    comentario: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10
    },

    comentarioTexto: {
        fontSize: 15
    },

    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4F46E5'
    }
});