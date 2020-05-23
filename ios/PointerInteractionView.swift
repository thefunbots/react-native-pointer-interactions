//
//  PointerInteractionView.swift
//  RNPointerInteractions
//
//  Created by Santi on 07/05/2020.
//

import Foundation
import UIKit

class PointerInteractionView: UIView {
    
    private var _mode: String = "automatic"
    private var _beamLength: CGFloat = CGFloat(1)

    override init(frame: CGRect) {
        super.init(frame: frame)

        if #available(iOS 13.4, *) {
            enablePointerInteraction()
        }
    }

    override func layoutSubviews() {
        super.layoutSubviews()
    }
  
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        if #available(iOS 13.4, *) {
            enablePointerInteraction()
        }
    }
    
    @objc var pointerMode: NSString? {
        set {
            if newValue != nil {
                self._mode = newValue! as String
            }
        }
        get {
            return nil
        }
    }
    
    @objc var beamLength: NSNumber? {
        set {
            if newValue != nil {
                self._beamLength = CGFloat(truncating: newValue! as NSNumber)
            }
        }
        get {
            return nil
        }
    }
}

@available(iOS 13.4, *)
extension PointerInteractionView: UIPointerInteractionDelegate {

    func enablePointerInteraction() {
        self.addInteraction(UIPointerInteraction(delegate: self))
    }

    func pointerInteraction(_ interaction: UIPointerInteraction, regionFor request: UIPointerRegionRequest, defaultRegion: UIPointerRegion) -> UIPointerRegion? {
        return defaultRegion
    }

    func pointerInteraction(_ interaction: UIPointerInteraction, styleFor region: UIPointerRegion) -> UIPointerStyle? {
        switch self._mode {
        case "horizontalBeam":
            return UIPointerStyle(shape: .horizontalBeam(length: self._beamLength))
        case "verticalBeam":
            return UIPointerStyle(shape: .verticalBeam(length: self._beamLength))
        case "highlight":
            return UIPointerStyle(effect: .highlight(.init(view: self)))
        case "lift":
            return UIPointerStyle(effect: .lift(.init(view: self)))
        case "hover":
            return UIPointerStyle(effect: .hover(.init(view: self)))
        default:
            return UIPointerStyle(effect: .automatic(.init(view: self)))
        }
    }
}
