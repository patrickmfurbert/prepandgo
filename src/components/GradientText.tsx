import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface GradientTextProps {
  text: string;
  style?: object;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  style = {},
  colors = ['#667eea', '#764ba2'],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
}) => {
  return (
    <View style={[styles.container, { marginBottom: 90, marginTop: -50 }]}>
      <MaskedView
        style={{ flex: 1 }}
        maskElement={
          <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[styles.text, style]}>
              {text}
            </Text>
          </View>
        }
      >
        <LinearGradient
          colors={colors}
          start={start}
          end={end}
          style={{ flex: 1}}
        >
          <Text style={[styles.text, style, { opacity: 0 }]}>
            {text}
          </Text>
        </LinearGradient>
      </MaskedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  text: {
    fontWeight: 'bold',
    textShadowRadius: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 },
  }
});

export default GradientText;