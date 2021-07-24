import React, { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

const duration = 1000

export default function LoadingPulse(props) {

  const animation = useRef(new Animated.Value(0.3)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 0.7,
          duration,
          useNativeDriver: false
        }),
        Animated.timing(animation, {
          toValue: 0.3,
          duration,
          useNativeDriver: false
        })
      ])
    ).start()
  }, [animation])

  return (
    <Animated.View
      style={{
        height: 10,
        width: 200,
        borderRadius: 3,
        backgroundColor: 'rgba(128, 128, 128, 1)',
        ...props.style,
        opacity: animation,
      }}
    >
      {props.children}
    </Animated.View>
  );
}
