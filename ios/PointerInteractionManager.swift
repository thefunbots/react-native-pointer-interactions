//
//  PointerInteractionManager.swift
//  RNPointerInteractions
//
//  Created by Santi on 07/05/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
@objc(PointerInteractionManager)
class PointerInteractionManager : RCTViewManager {
  override func view() -> UIView! {
    return PointerInteractionView();
  }
}
