import { requireNativeComponent, View, Platform } from 'react-native';

const PointerInteractionView = Platform.OS === 'ios'
    ? requireNativeComponent('PointerInteraction')
    : View;

PointerInteractionView.defaultProps = {
    ...View.defaultProps,
    pointerMode: 'automatic',
    hoverShadow: true,
    hoverTint: true,
    hoverScale: true
}

export { PointerInteractionView }