
<p align="center">
  <img height="150" src="assets/logo.svg" />
  <h1 align="center">React Native Pointer Interactions</h1>
  <h3 align="center">Expose iPad mouse & track pads interactions to React Native.</h3>
</p>

## Getting started

### Mostly automatic installation

**1. Install the library**

```bash
npm install react-native-pointer-interactions --save
```

**2. (Optional) Install react-native-swift**

If you are not already using any other swift based modules in your app, install and run react-native-swift to configure your iOS project to support swift.

### Install react-native-swift

```bash
npm install --save react-native-swift
```

After installing it, you will need to link it. **Requires project to use Swift 5.0 and iOS SDK 13.4+**

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-pointer-interactions` and add `RNPointerInteractions.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNPointerInteractions.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

## Setup

Add this to the Info plists

```xml
<key>UIApplicationSupportsIndirectInputEvents</key>
<true/>
```
