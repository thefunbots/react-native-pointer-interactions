
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif
#import <React/RCTViewManager.h>

@interface RNPointerInteractions : RCTViewManager
    @property (nonatomic, assign) NSString *pointerMode;
@end
  
