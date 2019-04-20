#import <Cordova/CDVPlugin.h>
#import <UIKit/UIKit.h>
#import <ArcGIS/ArcGIS.h>
@interface ArcgisMapView : CDVPlugin

/**
 地图view变量
 */
@property (nonatomic, strong) AGSMapView *mapView;
@property (nonatomic, strong) AGSMap *basemap;

/**
 插件初始化回调函数
 */
- (void)pluginInitialize;

/**
 获取版本
 
 @param command <#command description#>
 */
- (void)getVersion:(CDVInvokedUrlCommand*)command;

/**
 地图重新加载
 
 @param command command description
 */
- (void)reload:(CDVInvokedUrlCommand*)command;

- (void)getAppName:(CDVInvokedUrlCommand*)command;

- (void)getPackageName:(CDVInvokedUrlCommand*)command;

- (void)getVersionNumber:(CDVInvokedUrlCommand*)command;

- (void)centerAt:(CDVInvokedUrlCommand*)command;

@end
