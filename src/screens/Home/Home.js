import { View, Text, StyleSheet, FlatList } from 'react-native';
//import DynamicForm from '../../components/DynamicForm/DynamicForm';
import Post from '../../components/Post/Post';
import { db } from '../../firebase/config';
import { useState, useEffect } from 'react';

function Home(props) {
     const [posts, setPosts] = useState([]);
     
    useEffect(() => {
  db.collection('posts')
    .orderBy('createdAt', 'desc')
    .onSnapshot(docs => {
      let posts = [];

      docs.forEach(doc => {
        posts.push({
          id: doc.id,
          data: doc.data()
        });
      });

      setPosts(posts);
    });
}, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Home</Text>
        
         <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <Post data={item.data} id={item.id} navigation={props.navigation} />
        )}
      />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#F5F7FA'    },
    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4F46E5'
    },
    texto: {
        fontSize: 18
    }
});

export default Home