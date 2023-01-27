package com.mewurkmobile;

import android.media.MediaPlayer;
import android.media.PlaybackParams;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.microsoft.azure.sdk.iot.device.DeviceClient;
import com.microsoft.azure.sdk.iot.device.IotHubClientProtocol;
import com.microsoft.azure.sdk.iot.device.exceptions.IotHubClientException;

public class IotConnectionDeviceModule extends ReactContextBaseJavaModule {
    DeviceClient client = null;

    IotConnectionDeviceModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "IotConnectionDeviceModule";
    }

    @ReactMethod
    public void openDeviceConnection(String connString, String protocolstr) throws IotHubClientException {
        IotHubClientProtocol protocol = IotHubClientProtocol.valueOf(protocolstr);
        client = new DeviceClient(connString, protocol);
        client.open(false);
    }

    @ReactMethod
    public void closeDeviceConnection() {
        if (client != null) {
            client.close();
        }
    }

}
