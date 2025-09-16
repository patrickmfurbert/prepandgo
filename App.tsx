/**
 * PrEPAndGo App
 * 
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from './src/components/GradientText';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <GradientText 
            text="PrEP & Go" 
            style={styles.appTitle}
            colors={['#5e72e4', '#8e44ad']} 
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />

          <View style={styles.lastCycle}>
            <Text style={styles.lastCycleText}>Last Consumption: Jan 8, 8:30 PM</Text>
          </View>

          <LinearGradient
            colors={['#667eea', '#764ba2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.mainButtonContainer}
          >
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.mainButtonText}>Start On Demand Cycle</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#667eea', '#764ba2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.mainButtonContainer}
          >
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.mainButtonText}>Start Daily Cycle</Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Settings</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  appTitle: {
    fontSize: 75,
    fontWeight: '900',
    marginBottom: 0,
    letterSpacing: -2.5,
  },
  lastCycle: {
    backgroundColor: '#f7fafc',
    padding: 15,
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 30,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  lastCycleText: {
    color: '#718096',
    fontSize: 16,
  },
  mainButtonContainer: {
    borderRadius: 25,
    marginVertical: 10,
    width: '100%',
    maxWidth: 280,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  buttonTouchable: {
    width: '100%',
    padding: 18,
    alignItems: 'center',
  },
  mainButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#667eea',
    borderRadius: 20,
    padding: 12,
    marginTop: 10,
    width: '100%',
    maxWidth: 280,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#667eea',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;