import { View, Text, StyleSheet } from 'react-native';

function Comentarios(props) {
    const { id } = props.route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Comentarios</Text>
            <Text>Posteo ID: {id}</Text>
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
    }
});