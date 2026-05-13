import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>Kākou</Text>
          <Text style={styles.tagline}>All of us, together</Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>K</Text>
        </View>
      </View>

      <View style={styles.hero}>
        <Text style={styles.eyebrow}>Upcoming event</Text>
        <Text style={styles.heroTitle}>Community Leadership Summit</Text>
        <Text style={styles.heroText}>
          A welcoming event space for schedules, speakers, resources, and live
          updates, designed to keep everyone connected.
        </Text>

        <View style={styles.eventMeta}>
          <Text style={styles.metaItem}>Apr 21-24, 2026</Text>
          <Text style={styles.metaDot}>•</Text>
          <Text style={styles.metaItem}>Laie, Hawaii</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Event Dashboard</Text>
        <Text style={styles.sectionSubtext}>
          Everything participants need before, during, and after the event.
        </Text>
      </View>

      <View style={styles.quickGrid}>
        <View style={styles.quickCard}>
          <Text style={styles.quickIcon}>Calendar</Text>
          <Text style={styles.quickTitle}>Agenda</Text>
          <Text style={styles.quickText}>Sessions, tracks, and reminders</Text>
        </View>

        <View style={styles.quickCard}>
          <Text style={styles.quickIcon}>People</Text>
          <Text style={styles.quickTitle}>Speakers</Text>
          <Text style={styles.quickText}>Profiles, topics, and bios</Text>
        </View>

        <View style={styles.quickCard}>
          <Text style={styles.quickIcon}>Files</Text>
          <Text style={styles.quickTitle}>Resources</Text>
          <Text style={styles.quickText}>Slides, maps, handouts, and notes</Text>
        </View>

        <View style={styles.quickCard}>
          <Text style={styles.quickIcon}>Live</Text>
          <Text style={styles.quickTitle}>Updates</Text>
          <Text style={styles.quickText}>Announcements and event changes</Text>
        </View>
      </View>

      <View style={styles.panel}>
        <View>
          <Text style={styles.panelLabel}>Today</Text>
          <Text style={styles.panelTitle}>Schedule Snapshot</Text>
        </View>

        <View style={styles.scheduleItem}>
          <Text style={styles.scheduleTime}>9:00 AM</Text>
          <View style={styles.scheduleContent}>
            <Text style={styles.scheduleTitle}>Opening Session</Text>
            <Text style={styles.scheduleRoom}>Main Hall</Text>
          </View>
        </View>

        <View style={styles.scheduleItem}>
          <Text style={styles.scheduleTime}>10:30 AM</Text>
          <View style={styles.scheduleContent}>
            <Text style={styles.scheduleTitle}>Keynote Speaker</Text>
            <Text style={styles.scheduleRoom}>Auditorium</Text>
          </View>
        </View>

        <View style={styles.scheduleItem}>
          <Text style={styles.scheduleTime}>1:00 PM</Text>
          <View style={styles.scheduleContent}>
            <Text style={styles.scheduleTitle}>Panel Discussion</Text>
            <Text style={styles.scheduleRoom}>Conference Room A</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const colors = {
  red: '#8f1d1d',
  redDark: '#5f1414',
  gold: '#d8ad45',
  goldLight: '#fff4d8',
  black: '#171717',
  muted: '#6f6762',
  cream: '#f7f3ea',
  white: '#ffffff',
  border: '#e5d8c4',
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  content: {
    padding: 22,
    paddingTop: 58,
    paddingBottom: 36,
  },
  header: {
    marginBottom: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: colors.black,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 0,
  },
  tagline: {
    color: colors.muted,
    fontSize: 15,
    marginTop: 4,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.red,
    borderWidth: 2,
    borderColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '800',
  },
  hero: {
    backgroundColor: colors.red,
    borderRadius: 26,
    padding: 26,
    marginBottom: 28,
  },
  eyebrow: {
    alignSelf: 'flex-start',
    backgroundColor: colors.gold,
    color: colors.black,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    marginBottom: 18,
  },
  heroTitle: {
    color: colors.white,
    fontSize: 36,
    lineHeight: 41,
    fontWeight: '900',
    marginBottom: 14,
  },
  heroText: {
    color: '#f8e9e4',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 22,
  },
  eventMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  metaItem: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  metaDot: {
    color: colors.gold,
    fontSize: 18,
    fontWeight: '900',
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '900',
  },
  sectionSubtext: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 6,
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginBottom: 22,
  },
  quickCard: {
    width: '47%',
    minHeight: 150,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'space-between',
  },
  quickIcon: {
    alignSelf: 'flex-start',
    backgroundColor: colors.goldLight,
    color: colors.redDark,
    fontSize: 12,
    fontWeight: '900',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginBottom: 18,
  },
  quickTitle: {
    color: colors.redDark,
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 6,
  },
  quickText: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
  },
  panel: {
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  panelLabel: {
    color: colors.red,
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  panelTitle: {
    color: colors.black,
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 18,
  },
  scheduleItem: {
    flexDirection: 'row',
    gap: 14,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: '#eee5d8',
  },
  scheduleTime: {
    width: 76,
    color: colors.redDark,
    fontSize: 14,
    fontWeight: '800',
  },
  scheduleContent: {
    flex: 1,
  },
  scheduleTitle: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '800',
  },
  scheduleRoom: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 3,
  },
});
