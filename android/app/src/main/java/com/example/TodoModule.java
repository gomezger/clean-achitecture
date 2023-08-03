package com.example;


import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class TodoModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    TodoModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "TodoModule";
    }


    @ReactMethod
    public void save(String title, String dateInTimestamp, String details, Promise promise) {
        promise.resolve(1);
    }


}
