import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';

const events = [
  {
    id: '1',
    name: 'Cocoa Night',
    date: 'May 20, 2026',
    location: 'Laie, Hawaii',
    image: 'cocoa.jpg',
  },
  {
    id: '2',
    name: 'Lei Making Workshop',
    date: 'May 21, 2026',
    location: 'Student Center',
    image: 'lei.jpg',
  },
  {
    id: '3',
    name: 'Daily Stop & Serve',
    date: 'May 22, 2026',
    location: 'Auditorium',
    image: 'stop_serve.jpg',
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
          Week 1 React Native practice app with hardcoded event data.
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