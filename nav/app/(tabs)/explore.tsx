import { View, Text, FlatList, StyleSheet } from 'react-native';

const cursos = [
  { id: '1', nome: 'Curso de React' },
  { id: '2', nome: 'Curso de JavaScript' },
  { id: '3', nome: 'Curso de Banco de Dados' },
];

export default function CursosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Cursos</Text>

      <FlatList
        data={cursos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nomeCurso}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#4e73df',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  nomeCurso: {
    color: '#fff',
    fontSize: 18,
  },
});
