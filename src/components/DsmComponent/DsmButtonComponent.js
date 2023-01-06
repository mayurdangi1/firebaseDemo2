import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import dsmGlobalStyle from '../../assets/stylesheets/dsmStyles/dsmGlobalStyle'

const DsmButton = ({ onPress, disableValidate, title, btnSize, btnVariant, leftBtnIconSource, rightBtnIconSource, iconBtnSize, iconBtnSource, fabBtnSize,}) => {
  return (
    <TouchableOpacity
      disabled={disableValidate}
      onPress={onPress}
      style={[dsmGlobalStyle.dsmBtn,
      // Normal Buttons Sizes
      btnSize === "sm" && {
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
      btnSize === "lg" && {
        paddingHorizontal: 16,
        paddingVertical: 12,
      },
      // Icon Button Sizes
      iconBtnSize === "xsm" && {
        paddingHorizontal: 6,
        paddingVertical: 6,
      },
      iconBtnSize === "sm" && {
        paddingHorizontal: 8,
        paddingVertical: 8,
      },
      iconBtnSize === "md" && {
        paddingHorizontal: 10,
        paddingVertical: 10,
      },
      iconBtnSize === "lg" && {
        paddingHorizontal: 12,
        paddingVertical: 12,
      },
      // fab Buttons sizes
      fabBtnSize === "xsm" && {
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 9999
      },
      fabBtnSize === "sm" && {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 9999
      },
      fabBtnSize === "md" && {
        paddingHorizontal: 14,
        paddingVertical: 14,
        borderRadius: 999
      },
      fabBtnSize === "lg" && {
        paddingHorizontal: 14,
        paddingVertical: 14,
        borderRadius: 999
      },
      // Btn Variant with background
      btnVariant === "dsmBtnPrimary" && {
        backgroundColor: '#004AD7',
        borderColor: '#FAFAFA',
      },
      btnVariant === "dsmBtnDangerPrimary" && {
        backgroundColor: '#DA1414',
        borderColor: '#DA1414',
      },
      btnVariant === "dsmBtnSecondary" && {
        backgroundColor: '#EFEFEF',
        borderColor: '#003BAF',
      },
      btnVariant === "dsmBtnLink" && {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      btnVariant === "dsmBtnIconPrimary" && {
        backgroundColor: '#004AD7',
        borderColor: '#004AD7',
      },
      btnVariant === "dsmBtnIconSecondary" && {
        backgroundColor: '#EFEFEF',
        borderColor: '#004AD7',
      },
      btnVariant === "dsmBtnIconLink" && {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      btnVariant === "dsmBtnFab" && {
        backgroundColor: '#004AD7',
        borderColor: '#004AD7',
      },
      ]}>



      {leftBtnIconSource ?
        <Image source={leftBtnIconSource} style={{ marginRight: 8 }} /> : null
      }

      {iconBtnSource ?
        <Image source={iconBtnSource} /> : null
      }

      {/* Button title */}

      {title ? <Text style={[dsmGlobalStyle.dsmBtnText,
      // btn font sizes, for all size of buttons 
      btnSize === "sm" && { fontSize: 16, lineHeight: 24 },
      btnSize === "lg" && { fontSize: 20, lineHeight: 32 },
      // Btn Text color, for all buttons
      btnVariant === "dsmBtnPrimary" && { color: '#FAFAFA' },
      btnVariant === "dsmBtnDangerPrimary" && { color: '#FAFAFA' },
      btnVariant === "dsmBtnSecondary" && { color: '#003BAF' },
      btnVariant === "dsmBtnLink" && { color: '#003BAF' },
      btnVariant === "dsmBtnFab" && { color: '#E3E5E5' }
      ]}>{title}</Text> : null
      }


      {rightBtnIconSource ?
        <Image source={rightBtnIconSource} style={{ marginLeft: 8 }} /> : null
      }

    </TouchableOpacity>
  )
}

export default DsmButton