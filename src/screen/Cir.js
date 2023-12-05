import React, { useRef, useState } from 'react';
import { View, Animated, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CircularDrawer = () => {
  const [open, setOpen] = useState(false);
  const scaleAnimation = useRef(new Animated.Value(0)).current;

  const toggleDrawer1 = () => {
    const toValue = open ? 0 : 1;

    Animated.timing(scaleAnimation, {
      toValue,
      duration: 500,
      useNativeDriver: true
    }).start();

    setOpen(!open);
  };

  const drawerStyle = {
    transform: [{ scale: scaleAnimation }]
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer1}>
        <Text>Toggle Drawer</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.drawer, drawerStyle]}>
        {/* Content of the circular drawer */}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  drawer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CircularDrawer;
