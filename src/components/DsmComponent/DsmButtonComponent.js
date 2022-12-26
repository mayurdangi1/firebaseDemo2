import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import dsmButtonStyle from '../../assets/stylesheets/dsmStyles/dsmButtonStyle'

const DsmButton = ({ onPress, title, size, btnVariant,}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[dsmButtonStyle.dsmBtn, dsmButtonStyle.dsmBtnDefault,
    // Btn Size with Padding
    size === "sm" && {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    size === "lg" && {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    // Btn Name with background
    btnVariant === "dsmBtnPrimary" && {
      backgroundColor: '#004AD7',
      borderColor: '#004AD7',
    },
    btnVariant === "dsmBtnSecondary" && {
      backgroundColor: '#EFEFEF',
      borderColor: '#003BAF',
    },
    btnVariant === "dsmBtnLink" && {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    ]}>
      {/* Button title */}
      <Text style={[dsmButtonStyle.dsmBtnTitle,
      // btn font sizes, for all size of buttons 
      size === "sm" && { fontSize: 16, lineHeight: 24 },
      size === "lg" && { fontSize: 20, lineHeight: 32 },
      // Btn Text color, for all buttons
      btnVariant === "dsmBtnPrimary" && { color: '#FAFAFA' },
      btnVariant === "dsmBtnSecondary" && { color: '#003BAF' },
      btnVariant === "dsmBtnLink" && { color: '#003BAF' }
      ]}>{title}</Text>

    </TouchableOpacity>
  )
}

export default DsmButton