import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { db, auth } from '../../firebase/config';
import firebase from 'firebase';


function Post(props) {
 
  const usuarioActual = auth.currentUser.email

  const likes = props.data.likes ? props.data.likes : [];

  const [yaLikeo,setYaLikeo] = useState(false);

  useEffect(() => {
    if (likes.includes(usuarioActual)) {
      setYaLikeo(true)}
      else{
        setYaLikeo(false)
      }
    }, [props.data.likes])
  
  
  const likearPost = () => {
    db.collection('posts')
      .doc(props.id)
      .update({
        likes: firebase.firestore.FieldValue.arrayUnion(usuarioActual)
      });
  };

  const quitarLike = () => {
    db.collection('posts')
      .doc(props.id)
      .update({
        likes: firebase.firestore.FieldValue.arrayRemove(usuarioActual)
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.email}>{props.data.email}</Text>

      <Text style={styles.descripcion}>
        {props.data.descripcionPost}
      </Text>

      <Text style={styles.likes}>
        Likes: {likes.length}
      </Text>

      {
        yaLikeo ?
          <Pressable style={styles.button} onPress={quitarLike}>
            <Text style={styles.buttonText}>Quitar like</Text>
          </Pressable>
        :
          <Pressable style={styles.button} onPress={likearPost}>
            <Text style={styles.buttonText}>Like</Text>
          </Pressable>
      }

      <Pressable
    style={styles.commentButton}
    onPress={() => props.navigation.navigate('Comentarios', { id: props.id })}>
    <Text style={styles.buttonText}>Comentar</Text>
    </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8
    },
  email: {
    fontWeight: 'bold',
    marginBottom: 8
  },
  descripcion: {
    fontSize: 16,
    marginBottom: 10
  },
  likes: {
    marginBottom: 10
  },
  button: {
    backgroundColor: '#4F46E5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }, 
  commentButton: {
    backgroundColor: '#4F46E5',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
}
});

export default Post;