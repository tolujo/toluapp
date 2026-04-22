import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      
      <ThemedText type="title" style={styles.title}>
        🚀 Welcome
      </ThemedText>

      <ThemedText style={styles.subtitle}>
        This is your modal screen. You can customize it however you like.
      </ThemedText>

      <Link href="/" dismissTo style={styles.button}>
        <ThemedText type="link" style={styles.buttonText}>
          Go to Home
        </ThemedText>
      </Link>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  title: {
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 25,
  },

  button: {
    backgroundColor: '#0a84ff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
