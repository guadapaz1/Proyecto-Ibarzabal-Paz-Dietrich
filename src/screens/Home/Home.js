import { View, Text, StyleSheet,FlatList } from 'react-native';
import DynamicForm from '../../components/DynamicForm/DynamicForm';
import { useState, useEffect } from 'react';
import { db, auth} from '../../firebase/config';

function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        db.collection('posts').onSnapshot(
            docs => {
                let postsList = [];
                docs.forEach(doc => {
                    postsList.push({
                        id: doc.id,
                        data: doc.data()
                    });
                });
            setPosts(postsList);
            }
        );
    })

    return (

        <View style={styles.container}>

            <Text style={styles.text}>
                Pantalla Home
            </Text>

            <DynamicForm/>

            <Text style={styles.text}> Posts</Text>

                <FlatList 
                data={posts} 
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text>{item.data.descripcionPost}</Text>
                )}/>

        </View>

    )
}

export default Home;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 30,
        marginTop: 20,
        marginBottom:10
    }

})