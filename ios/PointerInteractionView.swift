//
//  PointerInteractionView.swift
//  RNPointerInteractions
//
//  Created by Santi on 07/05/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import UIKit

class PointerInteractionView: UIView {
    
    private var _mode: String = "automatic"

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
          self._mode = newValue! as String;
        }
      }
      get {
        return nil;
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
        case "verticalBeam":
            return UIPointerStyle(shape: .verticalBeam(length: 1))
        case "highlight":
            return UIPointerStyle(effect: .highlight(.init(view: self)))
        //case "automatic":
        default:
            return UIPointerStyle(effect: .automatic(.init(view: self)))
        }
        
        //return UIPointerStyle(effect: .highlight(.init(view: self)))
        //return UIPointerStyle(shape: .verticalBeam(length: 1))
    }
}
