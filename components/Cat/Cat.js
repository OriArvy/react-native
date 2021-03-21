import React from 'react';
import { View, Image, Text, TouchableOpacity, Pressable } from 'react-native';

const Cat = ({id, title, image}) => {
  return (
    <Pressable >
      <TouchableOpacity
        activeOpacity={0.5}
      >
        <View>
          <Image source={image} style={{ height: 300, width: 300 }} />
          <Text style={{fontSize: 24}}>{title}</Text>
        </View>
      </TouchableOpacity>
    </Pressable>
  );
};

export default Cat;