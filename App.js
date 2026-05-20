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