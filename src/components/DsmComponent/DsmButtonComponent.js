import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import dsmGlobalStyle from "../../assets/stylesheets/dsmStyles/dsmGlobalStyle";
import DsmColor from "../../assets/stylesheets/dsmStyles/dsmColors";

const DsmButton = ({
  onPress,
  disableValidate,
  title,
  btnSize,
  btnVariant,
  leftBtnIconSource,
  rightBtnIconSource,
  iconBtnSize,
  iconBtnSource,
  fabBtnSize,
  style,
  btnMargin
}) => {
  return (
    <TouchableOpacity
      disabled={disableValidate}
      onPress={onPress}
      style={[
        dsmGlobalStyle.dsmBtn,
        // Button margins
        btnMargin === "leftMr" && {
          marginLeft: 8,
        },
        btnMargin === "rightMr" && {
          marginRight: 8,
        },
        btnMargin === "topMr" && {
          marginTop: 8,
        },
        btnMargin === "bottomMr" && {
          marginBottom: 8,
        },
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
          borderRadius: 9999,
        },
        fabBtnSize === "sm" && {
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 9999,
        },
        fabBtnSize === "md" && {
          paddingHorizontal: 14,
          paddingVertical: 14,
          borderRadius: 999,
        },
        fabBtnSize === "lg" && {
          paddingHorizontal: 14,
          paddingVertical: 14,
          borderRadius: 999,
        },
        // Btn Variant with background
        btnVariant === "dsmBtnPrimary" && {
          backgroundColor: DsmColor.primaryBase,
          borderColor: DsmColor.primaryBase,
        },
        btnVariant === "dsmBtnSecondary" && {
          backgroundColor: DsmColor.lightInkLightest,
          borderColor: DsmColor.primaryDarkest
        },
        btnVariant === "dsmBtnDangerPrimary" && {
          backgroundColor: DsmColor.errorsBase,
          borderColor: DsmColor.errorsBase
        },
        btnVariant === "dsmBtnLink" && {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        },
        btnVariant === "dsmBtnIconPrimary" && {
          backgroundColor: DsmColor.primaryBase,
          borderColor: DsmColor.primaryBase,
        },
        btnVariant === "dsmBtnIconSecondary" && {
          backgroundColor: DsmColor.lightInkLightest,
          borderColor: DsmColor.primaryBase,
        },
        btnVariant === "dsmBtnIconLink" && {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        },
        btnVariant === "dsmBtnFab" && {
          backgroundColor: DsmColor.primaryBase,
          borderColor: DsmColor.primaryBase,
        },
        ]}>
      {leftBtnIconSource ? (
        <Image source={leftBtnIconSource} style={{ marginRight: 8 }} />
      ) : null}

      {iconBtnSource ? <Image source={iconBtnSource} /> : null}

      {/* Button title */}

      {title ? (
        <Text
          style={[
            dsmGlobalStyle.dsmBtnText,
            // btn font sizes, for all size of buttons
            btnSize === "sm" && { fontSize: 16, lineHeight: 24 },
            btnSize === "lg" && { fontSize: 20, lineHeight: 32 },
            // Btn Text color, for all buttons
            btnVariant === "dsmBtnDangerPrimary" && { color: "#FAFAFA" },
            btnVariant === "dsmBtnPrimary" && { color: DsmColor.lightInkLightest },
            btnVariant === "dsmBtnSecondary" && { color: DsmColor.primaryDarkest },
            btnVariant === "dsmBtnLink" && { color: DsmColor.primaryDarkest },
            btnVariant === "dsmBtnFab" && { color: DsmColor.lightInkLight }
          ]}
        >
          {title}
        </Text>
      ) : null}

      {rightBtnIconSource ? (
        <Image source={rightBtnIconSource} style={{ marginLeft: 8 }} />
      ) : null}
    </TouchableOpacity>
  );
};

export default DsmButton;
