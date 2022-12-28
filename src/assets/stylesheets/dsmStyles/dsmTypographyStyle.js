import { StyleSheet, Dimensions } from "react-native";

const dsmTypographyStyle = StyleSheet.create({
    mDsmTitle1:{
        fontWeight: '600',
        fontSize: 28,
        lineHeight : 56,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmTitle2:{
        fontWeight: '600',
        fontSize: 24,
        lineHeight : 36,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmTitle3Bold:{
        fontWeight: '700',
        fontSize: 20,
        lineHeight : 32,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmTitle3Normal:{
        fontWeight: '400',
        fontSize: 20,
        lineHeight : 32,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmTitle3UnderlineBold:{
        fontWeight: '700',
        fontSize: 20,
        lineHeight : 32,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: '#090A0A'
    },
    mDsmTitle3UnderlineNormal:{
        fontWeight: '500',
        fontSize: 20,
        lineHeight : 32,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: '#090A0A'
    },
    mDsmLargeBold:{
        fontWeight: '700',
        fontSize: 18,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
    },
    mDsmLargeSemiBold:{
        fontWeight: '500',
        fontSize: 18,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
    },
    mDsmLargeNormal:{
        fontWeight: '500',
        fontSize: 18,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
    },
    mDsmLargeUnderlineBold:{
        fontWeight: '700',
        fontSize: 18,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: '#090A0A'
    },
    mDsmLargeUnderlineSemiBold:{
        fontWeight: '500',
        fontSize: 18,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: '#090A0A'
    },
    mDsmLargeUnderlineNormal:{
        fontWeight: '400',
        fontSize: 18,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: '#090A0A'
    },
    mDsmLargeShrunkBold:{
        fontWeight: '700',
        fontSize: 18,
        lineHeight : 20,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmLargeShrunkSemiBold:{
        fontWeight: '500',
        fontSize: 18,
        lineHeight : 20,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmLargeShrunkNormal:{
        fontWeight: '400',
        fontSize: 20,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
    },
    mDsmMediumBold:{
        fontWeight: '700',
        fontSize: 16,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
    },
    mDsmMediumSemiBold:{
        fontWeight: '500',
        fontSize: 16,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
    },
    mDsmMediumNormal:{
        fontWeight: '400',
        fontSize: 16,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
    },
    mDsmMediumUnderlineBold:{
        fontWeight: '700',
        fontSize: 16,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: '#090A0A'
    },
    mDsmMediumUnderlineSemiBold:{
        fontWeight: '500',
        fontSize: 16,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: '#090A0A'
    },
    mDsmMediumUnderlineNormal:{
        fontWeight: '400',
        fontSize: 16,
        lineHeight : 24,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: '#090A0A'
    },
    mDsmMediumShrunkBold:{
        fontWeight: '700',
        fontSize: 16,
        lineHeight : 20,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmMediumShrunkSemiBold:{
        fontWeight: '500',
        fontSize: 16,
        lineHeight : 20,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmMediumShrunkNormal:{
        fontWeight: '400',
        fontSize: 16,
        lineHeight : 20,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmSmallBold:{
        fontWeight: '700',
        fontSize: 14,
        lineHeight : 20,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmSmallSemiBold:{
        fontWeight: '500',
        fontSize: 14,
        lineHeight : 20,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmSmallNormal:{
        fontWeight: '400',
        fontSize: 14,
        lineHeight : 20,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmSmallShrunkBold:{
        fontWeight: '700',
        fontSize: 14,
        lineHeight : 16,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmSmallShrunkSemiBold:{
        fontWeight: '500',
        fontSize: 14,
        lineHeight : 16,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmSmallShrunkNormal:{
        fontWeight: '400',
        fontSize: 14,
        lineHeight : 16,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmTinyBold:{
        fontWeight: '700',
        fontSize: 12,
        lineHeight : 16,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmTinySemiBold:{
        fontWeight: '500',
        fontSize: 12,
        lineHeight : 16,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    mDsmTinyNormal:{
        fontWeight: '400',
        fontSize: 12,
        lineHeight : 16,
        fontStyle : 'normal',
        color: '#090A0A',
        fontFamily:'Inter'
    },
    
})

export default dsmTypographyStyle