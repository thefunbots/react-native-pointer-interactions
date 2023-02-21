import React from "react";
import { ViewProps } from 'react-native';

export declare type PointerInteractionViewProps = {
  pointerMode?: 'automatic' | 'lift' | 'highlight' | 'hover' | 'verticalBeam' | 'horizontalBeam';
  beamLength?: number;
  hoverTint?: boolean;
  hoverShadow?: boolean;
  hoverScale?: boolean;
} & ViewProps;

export declare class PointerInteractionView extends React.Component<PointerInteractionViewProps>{}
