import React from 'react'
import { Text } from 'react-native'
import dsmTypographyStyle from '../../assets/stylesheets/dsmStyles/dsmTypographyStyle'

const DsmLinkText = ({ onPress, linkText, size, textStyle }) => {
    return (
        <Text onPress={onPress} style={[dsmTypographyStyle.mDsmLinkText,
            size === "sm" && {
                fontSize: 12,
                lineHeight: 16,
            },
            size === "md" && {
                fontSize: 16,
                lineHeight: 24,
            },
            size === "lg" && {
                fontSize: 20,
                lineHeight: 32,
            },
            // Link Text Underline
            textStyle === "textUnderline" && {
                textDecorationLine: 'underline',
              },
        ]}>
            {linkText}
        </Text>
    )
}

export default DsmLinkText