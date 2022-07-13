import { requireNativeComponent, View, Platform } from 'react-native';

const PointerInteractionView = Platform.OS === 'ios'
    ? requireNativeComponent('PointerInteraction')
    : View;

export { PointerInteractionView }