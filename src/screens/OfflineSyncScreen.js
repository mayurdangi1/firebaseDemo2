import React from "react";
import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { NativeBaseProvider } from "native-base";
import { offline_sync_download, selected_date, clock } from "../assets/index";
import externalStyles from "../assets/stylesheets/externalStyle";
import dsmTypographyStyle from "../assets/stylesheets/dsmStyles/dsmTypographyStyle";

const OfflineSyncScreen = () => {
  return (
    <NativeBaseProvider>
      <View style={externalStyles.offSyncContainer}>
        <View style={externalStyles.offSyncSearchDataBox}>
          <View style={externalStyles.offSyncSelectInput}>
            <TextInput
              placeholder="Combo Box"
              style={externalStyles.Settingsinput}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={externalStyles.offSyncSelectInput}>
            <TextInput
              placeholder="Select Date"
              style={externalStyles.Settingsinput}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <Image source={offline_sync_download} />
        </View>

        <ScrollView>
          <View style={externalStyles.offSyncDateCard}>
            <View style={externalStyles.offSyncDateCardHeader}>
              <Image source={selected_date} style={{ marginRight: 4 }} />
              <Text style={dsmTypographyStyle.mDsmMediumSemiBold}>
                13 October 2022
              </Text>
            </View>
            <View style={externalStyles.offSyncDateCardEmpDetails}>
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
                <Text style={externalStyles.inText}>In</Text>
                <Image source={clock} style={{ marginRight: 4 }} />
                <Text style={dsmTypographyStyle.mDsmTinyNormal}>
                  10:00am, 22 Sep
                </Text>
              </View>
            </View>
          </View>
          <View style={externalStyles.offSyncDateCard}>
            <View style={externalStyles.offSyncDateCardHeader}>
              <Image source={selected_date} style={{ marginRight: 4 }} />
              <Text style={dsmTypographyStyle.mDsmMediumSemiBold}>
                14 October 2022
              </Text>
            </View>
            <View style={externalStyles.offSyncDateCardEmpDetails}>
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
                <Text style={externalStyles.outText}>Out</Text>
                <Image source={clock} style={{ marginRight: 4 }} />
                <Text style={dsmTypographyStyle.mDsmTinyNormal}>
                  10:00am, 22 Sep
                </Text>
              </View>
            </View>
            <View style={externalStyles.offSyncDateCardEmpDetails}>
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
                <Text style={externalStyles.inText}>In</Text>
                <Image source={clock} style={{ marginRight: 4 }} />
                <Text style={dsmTypographyStyle.mDsmMediumSemiBold}>
                  10:00am, 22 Sep
                </Text>
              </View>
            </View>
            <View style={externalStyles.offSyncDateCardEmpDetails}>
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
                <Text style={externalStyles.inText}>In</Text>
                <Image source={clock} style={{ marginRight: 4 }} />
                <Text style={dsmTypographyStyle.mDsmTinyNormal}>
                  10:00am, 22 Sep
                </Text>
              </View>
            </View>
          </View>

          <View style={externalStyles.offSyncDateCard}>
            <View style={externalStyles.offSyncDateCardHeader}>
              <Image source={selected_date} style={{ marginRight: 4 }} />
              <Text style={dsmTypographyStyle.mDsmMediumSemiBold}>
                15 October 2022
              </Text>
            </View>
            <View style={externalStyles.offSyncDateCardEmpDetails}>
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
                <Text style={externalStyles.outText}>Out</Text>
                <Image source={clock} style={{ marginRight: 4 }} />
                <Text style={dsmTypographyStyle.mDsmTinyNormal}>
                  10:00am, 22 Sep
                </Text>
              </View>
            </View>
            <View style={externalStyles.offSyncDateCardEmpDetails}>
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
                <Text style={externalStyles.inText}>In</Text>
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

export default OfflineSyncScreen;
