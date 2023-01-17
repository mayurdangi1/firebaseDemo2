import { StyleSheet, Dimensions } from "react-native";
import DsmColor from "./dsmColors";

const dsmTypographyStyle = StyleSheet.create({
    // Title Text
    mDsmTitle2:{
        fontWeight: '600',
        fontSize: 24,
        lineHeight : 36,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter'
    },
    mDsmTitle3Bold:{
        fontWeight: '700',
        fontSize: 20,
        lineHeight : 32,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter'
    },
    mDsmTitle3Normal:{
        fontWeight: '400',
        fontSize: 20,
        lineHeight : 32,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter'
    },
    // Title Primary start
    mDsmTitle3PrimaryBold:{
        fontWeight: '700',
        fontSize: 20,
        lineHeight : 32,
        fontStyle : 'normal',
        color: DsmColor.primaryDarkest,
        fontFamily:'Inter'
    },
    mDsmTitle3PrimarySemiBold:{
        fontWeight: '500',
        fontSize: 20,
        lineHeight : 32,
        fontStyle : 'normal',
        color: DsmColor.primaryDarkest,
        fontFamily:'Inter'
    },
    mDsmTitle3PrimaryNormal:{
        fontWeight: '400',
        fontSize: 20,
        lineHeight : 32,
        fontStyle : 'normal',
        color: DsmColor.primaryDarkest,
        fontFamily:'Inter'
    },
    // Title Primary end
    // Large Text
    mDsmLargeBold:{
        fontWeight: '700',
        fontSize: 18,
        lineHeight : 24,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter',
    },
    mDsmLargeSemiBold:{
        fontWeight: '500',
        fontSize: 18,
        lineHeight : 24,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter',
    },
    mDsmLargeNormal:{
        fontWeight: '400',
        fontSize: 18,
        lineHeight : 24,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter',
    },
    mDsmLargeUnderlineBold:{
        fontWeight: '700',
        fontSize: 18,
        lineHeight : 24,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: DsmColor.darkInkDarkest
    },
    mDsmLargeUnderlineSemiBold:{
        fontWeight: '500',
        fontSize: 18,
        lineHeight : 24,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: DsmColor.darkInkDarkest
    },
    mDsmLargeUnderlineNormal:{
        fontWeight: '400',
        fontSize: 18,
        lineHeight : 24,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: DsmColor.darkInkDarkest
    },
    // Medium Text
    mDsmMediumBold:{
        fontWeight: '700',
        fontSize: 16,
        lineHeight : 24,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter',
    },
    mDsmMediumSemiBold:{
        fontWeight: '500',
        fontSize: 16,
        lineHeight : 24,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter',
    },
    mDsmMediumNormal:{
        fontWeight: '400',
        fontSize: 16,
        lineHeight : 24,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter',
    },
    mDsmMediumUnderlineBold:{
        fontWeight: '700',
        fontSize: 16,
        lineHeight : 24,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: DsmColor.darkInkDarkest
    },
    mDsmMediumUnderlineSemiBold:{
        fontWeight: '500',
        fontSize: 16,
        lineHeight : 24,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: DsmColor.darkInkDarkest
    },
    mDsmMediumUnderlineNormal:{
        fontWeight: '400',
        fontSize: 16,
        lineHeight : 24,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter',
        textDecorationLine: 'underline',
        textDecorationColor: DsmColor.darkInkDarkest
    },
    // Small Text
    mDsmSmallBold:{
        fontWeight: '700',
        fontSize: 14,
        lineHeight : 20,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter'
    },
    mDsmSmallSemiBold:{
        fontWeight: '500',
        fontSize: 14,
        lineHeight : 20,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter'
    },
    mDsmSmallNormal:{
        fontWeight: '400',
        fontSize: 14,
        lineHeight : 20,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter'
    },
    // Tiny Text
    mDsmTinyBold:{
        fontWeight: '700',
        fontSize: 12,
        lineHeight : 16,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter'
    },
    mDsmTinySemiBold:{
        fontWeight: '500',
        fontSize: 12,
        lineHeight : 16,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter'
    },
    mDsmTinyNormal:{
        fontWeight: '400',
        fontSize: 12,
        lineHeight : 16,
        fontStyle : 'normal',
        color: DsmColor.darkInkDarkest,
        fontFamily:'Inter'
    },
    // error Msg
    mDsmDangerTextLarge:{
        color: DsmColor.errorsText,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        fontStyle : 'normal',
        fontFamily:'Inter'
    },
    mDsmDangerTextMedium:{
        color: DsmColor.errorsText,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        fontStyle : 'normal',
        fontFamily:'Inter'
    },
    // Link Text Style
    mDsmLinkText: {
        color: DsmColor.primaryBase,
        fontStyle : 'normal',
        fontFamily:'Inter',
        textDecorationColor: DsmColor.primaryBase
    }
})

export default dsmTypographyStyle