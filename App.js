import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const StudentInfo = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerLabel}>STUDENT</Text>
      <Text style={styles.headerName}>{props.name}</Text>
      <Text style={styles.headerId}>Student ID: {props.id}</Text>
    </View>
  );
};

const Welcome = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>
        Welcome to <Text style={styles.code}>{props.code}</Text> - {props.name}
      </Text>
    </View>
  );
};

class ModuleInfo extends Component {
  render() {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>These are my modules this semester:</Text>
        <Welcome code="C346" name="Mobile App Development" />
        <Welcome code="C105" name="Introduction to Programming" />
        <Welcome code="C337" name="Immersive Technologies" />
      </View>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <StudentInfo name="NELSON" id="24039810" />
      <ModuleInfo />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
  },
  header: {
    backgroundColor: '#0F4C81',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerLabel: {
    color: '#A9C7E3',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.5,
  },
  headerName: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
    marginTop: 4,
  },
  headerId: {
    color: '#DCE8F4',
    fontSize: 15,
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#0F4C81',
    boxShadow: '0 2px 6px rgba(16, 24, 40, 0.08)',
  },
  cardText: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
  },
  code: {
    fontWeight: '700',
    color: '#0F4C81',
  },
});
