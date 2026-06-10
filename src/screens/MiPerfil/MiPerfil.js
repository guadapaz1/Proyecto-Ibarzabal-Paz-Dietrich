import { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { auth, db } from '../../firebase/config';
import Post from '../../components/Post/Post';

function MiPerfil(props) {
    const [username, setUsername] = useState('');
    const [misPosts, setMisPosts] = useState([]);

    useEffect(() => {
        db.collection('users')
            .onSnapshot(docs => {
                docs.forEach(doc => {
                    if (doc.data().email === auth.currentUser.email) {
                        setUsername(doc.data().username);
                    }
                });
            });
    }, []);

    useEffect(() => {
        db.collection('posts')
            .orderBy('createdAt', 'desc')
            .onSnapshot(docs => {
                let postsPropios = [];

                docs.forEach(doc => {
                    if (doc.data().email === auth.currentUser.email) {
                        postsPropios.push({
                            id: doc.id,
                            data: doc.data()
                        });
                    }
                });

                setMisPosts(postsPropios);
            });
    }, []);

    function logout() {
        auth.signOut()
            .then(() => {
                props.navigation.navigate('Login');
            })
            .catch(error => console.log(error));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi Perfil</Text>

            <Text style={styles.text}>Usuario: {username}</Text>
            <Text style={styles.text}>Email: {auth.currentUser.email}</Text>

            <Pressable style={styles.button} onPress={() => logout()}>
                <Text style={styles.buttonText}>Cerrar sesión</Text>
            </Pressable>

            <Text style={styles.subtitle}>Mis posteos</Text>

            <FlatList
                data={misPosts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Post data={item.data} id={item.id} />
                )}
            />
        </View>
    );
}

export default MiPerfil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#F5F7FA'
        },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4F46E5'
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#4F46E5',        
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
});