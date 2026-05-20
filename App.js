import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';

const events = [
  {
    id: '1',
    name: 'Cocoa Night',
    date: 'May 20, 2026',
    location: 'Laie, Hawaii',
    image: './assets/cocoa.jpg',
  },
  {
    id: '2',
    name: 'Lei Making Workshop',
    date: 'May 21, 2026',
    location: 'Student Center',
    image: './assets/lei.jpg',
  },
  {
    id: '3',
    name: 'Daily Stop & Serve',
    date: 'May 22, 2026',
    location: 'Auditorium',
    image: './assets/stop_serve.jpg',
  },
];

function EventCard({ event }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: event.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{event.name}</Text>
      <Text style={styles.cardText}>{event.date}</Text>
      <Text style={styles.cardText}>{event.location}</Text>
    </View>
  );
}

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.title}>Kakou Events</Text>
        <Text style={styles.subtitle}>
          Events
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>

        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <EventCard event={item} />}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f3ea',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7a1f1f',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
    lineHeight: 22,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
  },
  cardImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 15,
    color: '#555',
    marginBottom: 4,
  },
});