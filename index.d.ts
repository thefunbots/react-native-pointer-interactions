import React from "react";

export declare type PointerInteractionViewProps = {
  pointerMode?: 'automatic' | 'lift' | 'highlight' | 'hover' | 'verticalBeam' | 'horizontalBeam';
  beamLength?: number
};
export declare class PointerInteractionView extends React.Component<PointerInteractionViewProps>{}
