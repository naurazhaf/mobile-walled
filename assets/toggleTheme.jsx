import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { G, Circle, Path, ClipPath, Defs } from 'react-native-svg';

export default function ThemeToggleButton({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.themeToggle}
      onPress={onPress}
      accessibilityLabel="Toggle theme"
    >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="32"
        height="32"
        fill="currentColor"
        strokeLinecap="round"
        viewBox="0 0 32 32"
      >
        <Defs>
          <ClipPath id="theme-toggle__classic__cutout">
            <Path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
          </ClipPath>
        </Defs>
        <G clipPath="url(#theme-toggle__classic__cutout)">
          <Circle cx="16" cy="16" r="9.34" />
          <G stroke="currentColor" strokeWidth="1.5">
            <Path d="M16 5.5v-4" />
            <Path d="M16 30.5v-4" />
            <Path d="M1.5 16h4" />
            <Path d="M26.5 16h4" />
            <Path d="m23.4 8.6 2.8-2.8" />
            <Path d="m5.7 26.3 2.9-2.9" />
            <Path d="m5.8 5.8 2.8 2.8" />
            <Path d="m23.4 23.4 2.9 2.9" />
          </G>
        </G>
      </Svg>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  themeToggle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});
