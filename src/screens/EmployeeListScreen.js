import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { NativeBaseProvider } from "native-base";
import { clock } from "../assets/index";
import dsmTypographyStyle from "../assets/stylesheets/dsmStyles/dsmTypographyStyle";
import externalStyles from "../assets/stylesheets/externalStyle";

const EmployeeListScreen = () => {
  return (
    <NativeBaseProvider>
      <View style={externalStyles.setttingsEmplistContainer}>
        <View style={externalStyles.settingsEmpListSearchBox}>
          <TextInput
            placeholder="Enter Email / Mobile Number"
            style={externalStyles.Settingsinput}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={externalStyles.settingsEmpListHeader}>
          <Text style={dsmTypographyStyle.mDsmMediumSemiBold}>
            Employee Name
          </Text>
          <Text style={externalStyles.settingsEmpLastUpdatedText}>
            Updated On
          </Text>
        </View>
        <ScrollView>
          <View style={externalStyles.settingsEmpData}>
            <View style={externalStyles.settingsEmpDetails}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                <View style={{ marginLeft: 12 }}>
                  <Text style={dsmTypographyStyle.mDsmMediumNormal}>
                    John Doe
                  </Text>
                  <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={clock} style={{ marginRight: 4 }} />
                <Text style={dsmTypographyStyle.mDsmTinyNormal}>
                  10:00am, 22 Sep
                </Text>
              </View>
            </View>
            <View style={externalStyles.settingsEmpDetails}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                <View style={{ marginLeft: 12 }}>
                  <Text style={dsmTypographyStyle.mDsmMediumNormal}>
                    John Doe
                  </Text>
                  <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={clock} style={{ marginRight: 4 }} />
                <Text style={dsmTypographyStyle.mDsmTinyNormal}>
                  10:00am, 22 Sep
                </Text>
              </View>
            </View>
            <View style={externalStyles.settingsEmpDetails}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={externalStyles.settingsEmpNameFirstText}>M</Text>
                <View style={{ marginLeft: 12 }}>
                  <Text style={dsmTypographyStyle.mDsmMediumNormal}>
                    John Doe
                  </Text>
                  <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={clock} style={{ marginRight: 4 }} />
                <Text style={dsmTypographyStyle.mDsmTinyNormal}>
                  10:00am, 22 Sep
                </Text>
              </View>
            </View>
            <View style={externalStyles.settingsEmpDetails}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                <View style={{ marginLeft: 12 }}>
                  <Text style={dsmTypographyStyle.mDsmMediumNormal}>
                    John Doe
                  </Text>
                  <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={clock} style={{ marginRight: 4 }} />
                <Text style={dsmTypographyStyle.mDsmTinyNormal}>
                  10:00am, 22 Sep
                </Text>
              </View>
            </View>
            <View style={externalStyles.settingsEmpDetails}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={externalStyles.settingsEmpNameFirstText}>R</Text>
                <View style={{ marginLeft: 12 }}>
                  <Text style={dsmTypographyStyle.mDsmMediumNormal}>
                    John Doe
                  </Text>
                  <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={clock} style={{ marginRight: 4 }} />
                <Text style={dsmTypographyStyle.mDsmTinyNormal}>
                  10:00am, 22 Sep
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

export default EmployeeListScreen;
