import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { auth, db } from '../../firebase/config';

function NuevoPost() {
  const [descripcionPost, setDescripcionPost] = useState('');
  const [error, setError] = useState('');

  function onSubmit() {
    db.collection('posts').add({
      descripcionPost: descripcionPost,
      email: auth.currentUser.email,
      createdAt: Date.now(),
      likes: []
    })
    .then(() => {
      setDescripcionPost('');
      setError('Post creado correctamente');
    })
    .catch((error) => {
      setError('Error al crear el post');
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nuevo post</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribí tu post"
        value={descripcionPost}
        onChangeText={(text) => setDescripcionPost(text)}
      />

      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Publicar</Text>
      </Pressable>

      <Text>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#eeeeee'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17
  }
});

export default NuevoPost;