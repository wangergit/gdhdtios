#import "ArcgisMapView.h"
#import "Constant.h"
#import <Cordova/CDVPluginResult.h>
#import <ArcGIS/ArcGIS.h>

//变量
AGSSpatialReference *mapSpatialReference;
AGSArcGISTiledLayer *nightTiledLayerBaseMap;
AGSArcGISTiledLayer *tiledLayerBaseMap;
AGSArcGISVectorTiledLayer *vectorTiledLayer;
AGSArcGISVectorTiledLayer *nightVectorTiledLayer;
AGSArcGISVectorTiledLayer *vectorLabelLayer;
AGSArcGISVectorTiledLayer *vectorTargetLayer;//航标矢量服务
NSString *TAG = @"ArcgisMapView";
AGSBasemap *basemap;
AGSLocationDisplay *locationDisplay;
double mapScale = 0.0; //地图比例尺记录
AGSArcGISMapImageLayer *mMapImageLayer;//图幅
AGSArcGISMapImageLayer *beaconMapImageLayer;//航标
AGSArcGISMapImageLayer *labelMapImageLayer;//地名
Boolean mapViewLoad = false;//地图初始化定位缩放
//业务要素图层
AGSGraphicsOverlay *navigationOverlay;//航标要素图层    业务代码1
AGSGraphicsOverlay *waterStationOverlay;//水位站要素图层   业务代码2
AGSGraphicsOverlay *shipOverlay;//船舶要素图层   业务代码3
AGSGraphicsOverlay *regulationBuildOverlay;//整治建筑物要素图层   业务代码4
AGSGraphicsOverlay *waterDepthOverlay;//测水结果要素图层   业务代码5
AGSGraphicsOverlay *markOverlay;//标注要素图层
AGSGraphicsOverlay *weatherOverlay;//天气要素图层
AGSGraphicsOverlay *reportOverlay;//上报要素图层
AGSGraphicsOverlay *selectionOverlay;//选中符号等要素图层   业务代码6
AGSGraphicsOverlay *airworthinessOverlay;//适航水深
AGSGraphicsOverlay *sheetOverlay;//图幅图层
AGSGraphicsOverlay *maskOverlay;//图幅图层
AGSGraphicsOverlay *mGraphicsOverlay; //起点终点绘制图层
AGSGraphicsOverlay *afterGraphicsOverlay; //已驶过绘制图层
AGSGraphicsOverlay *routeGraphicsOverlay; //规划线路绘制图层
AGSGraphicsOverlay *guideGraphicsOverlay; //助航线路绘制图层
Boolean mapEnable = true;
int startLine = 22200262;//23608333;//0x01683C0D;
int endLine = 22209546;//23918740;//0x016CF894;
NSString *zdImg = @"www/static/image/symbol/zd.png";//航标终端图片url
NSString *extentFrameImg = @"www/static/image/symbol/extentFrame.png";//选中矩形图片url
NSString *selectionLayer = @"";//当前选中图层记录
double layerMinScale = 32500.00;  //业务图层显示比例尺配置
double positionScale = 1800.00;  //搜索定位比例尺配置
Boolean compassModeType = false;
double averageSpeed; // 前端输入平均速度 单位m/s
//路径规划相关
AGSPictureMarkerSymbol *guideModelPictureSymbol;
AGSPictureMarkerSymbol *guideAnglePictureSymbol;
AGSPoint *mSourcePoint;
AGSPoint *mDestinationPoint;
Boolean guideBool = false;
AGSSimpleLineSymbol *mRouteSymbol; //路径规划符号配置
int mRouteWidth = 50;
NSString *guideStartTime = @"";
NSString *guideEndTime = @"";
NSString *startImg = @"www/static/image/symbol/node.png";  //起点图片
NSString *endImg = @"www/static/image/symbol/marker-end.png";  //终点图片
//助航相关
AGSGraphicsOverlay *cutRouteGraphicLayer; //当前定位
AGSGraphicsOverlay *guideModelGraphicLayer; //当前定位
AGSGraphicsOverlay *guideAngleGraphicLayer; //当前方向
NSString *guideModelType = @"course";//状态类型   //course 航向   // trueNorth  正北
NSString *guideModelSource = @""; //助航模式来源    //simulation  模拟   //real  真实
Boolean guideMapMoveListener = false; //监听助航状态下地图拖动
Boolean guideCallback = true; //实时定位计算结果是否完成变量存储
AGSGraphicsOverlay *planGuideLayer; //当前点  到起点图层
//离线地图文件是否存在
Boolean isMapfile = false;
int isMapCount = 0;
//当前定位坐标记录
double curPointX = 0.0;
double curPointY = 0.0;



//@interface ViewController : UIViewController <AGSMapViewTouchDelegate>


// arcgis ios 原生实现类
@implementation ArcgisMapView


/**
 插件初始化回调函数
 */
- (void)pluginInitialize{
    [self initMap];
    
    //webiew 背景设为透明
    [self.webView setOpaque:NO];
    
    // 将地图添加到最底层
    [self.viewController.view insertSubview:self.mapView atIndex:0];
    //[self.viewController.view addSubview:self.mapView];
}

/**
 地图初始化
 */
- (void)initMap{
    mapSpatialReference = [AGSSpatialReference WGS84];//全局空间参考
    CGSize viewportSize = [UIApplication sharedApplication].delegate.window.bounds.size;//屏幕大小
    self.mapView= [[AGSMapView alloc] initWithFrame: CGRectMake(0, 0, viewportSize.width, viewportSize.height)];// 新建mapview
    
    self.mapView.touchDelegate = self;
    
    tiledLayerBaseMap = [[AGSArcGISTiledLayer alloc] initWithURL:[NSURL URLWithString:TILEDLAYERSERVICEURL]];
    [tiledLayerBaseMap setName:@""];
    
    self.basemap = [[AGSMap alloc] initWithBasemap:[[AGSBasemap alloc] initWithBaseLayer:tiledLayerBaseMap]];
    self.mapView.map = self.basemap;
    
    vectorTiledLayer = [[AGSArcGISVectorTiledLayer alloc] initWithURL:[NSURL URLWithString:PATHDAYTIME]];
    [vectorTiledLayer setName:@"basemap"];
    [self.mapView.map.basemap.baseLayers insertObject:vectorTiledLayer atIndex:1];
    
    vectorTargetLayer = [[AGSArcGISVectorTiledLayer alloc] initWithURL:[NSURL URLWithString:PATHTARGET]];
    [vectorTargetLayer setName:@"target"];
    [self.mapView.map.basemap.baseLayers insertObject:vectorTargetLayer atIndex:2];
    
    
    mMapImageLayer = [[AGSArcGISMapImageLayer alloc] initWithURL:[NSURL URLWithString:FRAMESSERVERPATH]];
    //[mMapImageLayer setVisible:false];
    [self.mapView.map.basemap.baseLayers insertObject:mMapImageLayer atIndex:3];
    //[self.mapView.map.operationalLayers insertObject:mMapImageLayer atIndex:0];
    
    labelMapImageLayer = [[AGSArcGISMapImageLayer alloc] initWithURL:[NSURL URLWithString:PATHLABEL]];
    [labelMapImageLayer setVisible:false];
    [labelMapImageLayer setMinScale:layerMinScale];
    [self.mapView.map.basemap.baseLayers insertObject:labelMapImageLayer atIndex:4];
    
    beaconMapImageLayer = [[AGSArcGISMapImageLayer alloc] initWithURL:[NSURL URLWithString:TARGETINFOSERVICEURL]];
    [beaconMapImageLayer setOpacity:0.01f];
    [beaconMapImageLayer setMinScale:32500];
    [self.mapView.map.basemap.baseLayers insertObject:beaconMapImageLayer atIndex:5];
    
    airworthinessOverlay = [[AGSGraphicsOverlay alloc] init];//适航水深
    [airworthinessOverlay setMinScale:50000];
    [airworthinessOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:airworthinessOverlay atIndex:0];
    
    maskOverlay = [[AGSGraphicsOverlay alloc] init];
    [maskOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:maskOverlay atIndex:1];

    planGuideLayer = [[AGSGraphicsOverlay alloc] init];
    [self.mapView.graphicsOverlays insertObject:planGuideLayer atIndex:2 ];

    cutRouteGraphicLayer = [[AGSGraphicsOverlay alloc] init];
    [self.mapView.graphicsOverlays insertObject:cutRouteGraphicLayer atIndex:3 ];

    selectionOverlay = [[AGSGraphicsOverlay alloc] init];//选中图层
    [selectionOverlay setMinScale:layerMinScale];
    [self.mapView.graphicsOverlays insertObject:selectionOverlay atIndex:4];
    
    navigationOverlay = [[AGSGraphicsOverlay alloc] init];//航标要素图层
    [navigationOverlay setMinScale:layerMinScale];
    [navigationOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:navigationOverlay atIndex:5];

    waterStationOverlay = [[AGSGraphicsOverlay alloc] init];//水位站要素图层
    [waterStationOverlay setMinScale:layerMinScale];
    [waterStationOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:waterStationOverlay atIndex:6];

    shipOverlay = [[AGSGraphicsOverlay alloc] init];//船舶要素图层
    [shipOverlay setMinScale:layerMinScale];
    [shipOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:shipOverlay atIndex:7];

    reportOverlay = [[AGSGraphicsOverlay alloc] init];//上报要素图层
    [reportOverlay setMinScale:layerMinScale];
    [reportOverlay setVisible:true];
    [self.mapView.graphicsOverlays insertObject:reportOverlay atIndex:8];

    regulationBuildOverlay = [[AGSGraphicsOverlay alloc] init];//整治建筑物要素图层
    [regulationBuildOverlay setMinScale:layerMinScale];
    [regulationBuildOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:regulationBuildOverlay atIndex:9];

    waterDepthOverlay = [[AGSGraphicsOverlay alloc] init];//测水要素图层
    [self.mapView.graphicsOverlays insertObject:waterDepthOverlay atIndex:10];

    markOverlay = [[AGSGraphicsOverlay alloc] init];//标注要素图层
    [markOverlay setMinScale:layerMinScale];
    [markOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:markOverlay atIndex:11];

    routeGraphicsOverlay = [[AGSGraphicsOverlay alloc] init];//路径规划线路图层
    [self.mapView.graphicsOverlays insertObject:routeGraphicsOverlay atIndex:12];

    afterGraphicsOverlay = [[AGSGraphicsOverlay alloc] init];//已驶过线路图层
    [self.mapView.graphicsOverlays insertObject:afterGraphicsOverlay atIndex:13];

    guideGraphicsOverlay = [[AGSGraphicsOverlay alloc] init];//助航重点连线绘制图层
    [self.mapView.graphicsOverlays insertObject:guideGraphicsOverlay atIndex:14];

    mGraphicsOverlay = [[AGSGraphicsOverlay alloc] init];//路径规划图标图层
    [self.mapView.graphicsOverlays insertObject:mGraphicsOverlay atIndex:15];

    weatherOverlay = [[AGSGraphicsOverlay alloc] init];//天气图层
    //[weatherOverlay setMinScale:layerMinScale];
    [weatherOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:weatherOverlay atIndex:16];

    sheetOverlay = [[AGSGraphicsOverlay alloc] init];
    [sheetOverlay setMinScale:layerMinScale];
    [self.mapView.graphicsOverlays insertObject:sheetOverlay atIndex:17];

    //助航
    guideModelGraphicLayer = [[AGSGraphicsOverlay alloc] init];
    [self.mapView.graphicsOverlays insertObject:guideModelGraphicLayer atIndex:18];

    guideAngleGraphicLayer = [[AGSGraphicsOverlay alloc] init];
    [self.mapView.graphicsOverlays insertObject:guideAngleGraphicLayer atIndex:19];

    mRouteSymbol = [[AGSSimpleLineSymbol alloc] initWithStyle:AGSSimpleLineSymbolStyleSolid color:[UIColor colorWithRed:34 green:139 blue:34 alpha:1.0] width:9.0];

    //UIImage *image = [UIImage imageWithContentsOfFile: @"www/static/image/symbol/navigation_my_position.png"];
    guideModelPictureSymbol  = [AGSPictureMarkerSymbol pictureMarkerSymbolWithURL:[NSURL URLWithString:@"www/static/image/symbol/navigation_my_position.png"]];
    [guideModelPictureSymbol loadWithCompletion:^(NSError * _Nullable error) {
        [guideModelPictureSymbol setHeight:50];
        [guideModelPictureSymbol setWidth:50];
        guideAnglePictureSymbol  = [AGSPictureMarkerSymbol pictureMarkerSymbolWithURL:[NSURL URLWithString:@"www/static/image/symbol/navigation_direction.png"]];
        [guideAnglePictureSymbol loadWithCompletion:^(NSError * _Nullable error) {
            [guideAnglePictureSymbol setHeight:70];
            [guideAnglePictureSymbol setWidth:70];
        }];
    }];

   
    //网格
    AGSBackgroundGrid* grid=[AGSBackgroundGrid new];
    grid.color=[ArcgisMapView colorWithRGB:0xF4F3F0 alpha:1];
    grid.gridLineColor=[ArcgisMapView colorWithRGB:0x000000 alpha:0];
    
    [self.mapView setBackgroundGrid:grid];
    [self.mapView setAttributionTextVisible:false];
    
    //[self.mapView setViewpoint:[[AGSViewpoint alloc] initWithCenter:[[AGSPoint alloc] initWithX:113.596 y:22.92 spatialReference:mapSpatialReference] scale:32500]];//设置地图中心点
}


/**
 十六进制数值转换为UIColor

 @param hex 十六进制数值转
 @param alpha 透明度
 @return <#return value description#>
 */
+(UIColor*)colorWithRGB:(NSUInteger)hex alpha:(CGFloat)alpha
{
    float r, g, b, a;
    a = alpha;
    b = hex & 0x0000FF;
    hex = hex >> 8;
    g = hex & 0x0000FF;
    hex = hex >> 8;
    r = hex;
    
    return [UIColor colorWithRed:r/255.0f
                           green:g/255.0f
                            blue:b/255.0f
                           alpha:a];
}

/**
 获取版本
 @param command command description
 */
- (void)getVersion:(CDVInvokedUrlCommand*)command
{
    NSString* callbackId = command.callbackId;
    NSString* version = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:version];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}


/**
 地图重新加载
 
 @param command command description
 */
- (void)reload:(CDVInvokedUrlCommand*)command
{
   
    [self.basemap retryLoadWithCompletion:^(NSError * _Nullable error) {
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:error ==NULL?CDVCommandStatus_OK:CDVCommandStatus_ERROR ];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}

/**
 获取放缩
 
 @param command command description
 */
- (void)getScale:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDouble:[self.mapView mapScale]];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

/**
 放缩
 @param command command description
 */
- (void)zoom:(CDVInvokedUrlCommand*)command
{
    @try{
        NSString* scale=[command.arguments objectAtIndex:0];
        
        [self.mapView setViewpointScale:[scale doubleValue] completion:false];
    } @catch (NSException *exception) {}
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
/**
 缩小
 @param command command description
 */
- (void)zoomIn:(CDVInvokedUrlCommand*)command
{
    @try{
        [self.mapView setViewpointScale:[self.mapView mapScale]* 0.5 completion:false];
    } @catch (NSException *exception) {}

    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

/**
 缩大
 
 @param command command description
 */
- (void)zoomOut:(CDVInvokedUrlCommand*)command
{
    @try{
        [self.mapView setViewpointScale:[self.mapView mapScale]*2 completion:false];
    } @catch (NSException *exception) {}
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)getAppName : (CDVInvokedUrlCommand *)command
{
    NSString * callbackId = command.callbackId;
    NSString * version =[[[NSBundle mainBundle]infoDictionary]objectForKey :@"CFBundleDisplayName"];
    CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : version];
    [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
}

- (void)getPackageName:(CDVInvokedUrlCommand*)command
{
    NSString* callbackId = command.callbackId;
    NSString* packageName = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleIdentifier"];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:packageName];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}

- (void)getVersionNumber:(CDVInvokedUrlCommand*)command
{
    NSString* callbackId = command.callbackId;
    NSString* version = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
    if (version == nil) {
      NSLog(@"CFBundleShortVersionString was nil, attempting CFBundleVersion");
      version = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"];
      if (version == nil) {
        NSLog(@"CFBundleVersion was also nil, giving up");
        // not calling error callback here to maintain backward compatibility
      }
    }

    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:version];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}
/**
 * 定位到地图上的点,同时设置放缩
 */
-(void) centerAt:(CDVInvokedUrlCommand*)command{
    double x = [[command.arguments objectAtIndex:0] doubleValue];
    double y = [[command.arguments objectAtIndex:1] doubleValue];
    NSString *sool;
    @try {
        sool = [command.arguments objectAtIndex:2];
    } @catch (NSException *exception) {
        sool = @"";
    } @finally {
        sool = @"";
    }
    if(sool == @"" || sool == nil || sool == NULL){
        [self centerTo:x :y :10000 :true :command];
    }else{
        [self centerTo:x :y :10000 :false :command];
    }
}
/**
 * 定位到地图上的点及级别
 * @param x
 * @param y
 * @param scale
 * @param selection
 * @param callbackContext
 */
-(void) centerTo:(double) x :(double) y :(double) scale :(Boolean) selection :(CDVInvokedUrlCommand*)command{
    NSString * callbackId = command.callbackId;
    
    //判断当前坐标是否在视图范围
    //Envelope extent = mapView.getVisibleArea().getExtent();
    AGSEnvelope *extent = [tiledLayerBaseMap fullExtent];
    if (x < [extent xMin] || x > [extent xMax] || y < [extent yMin] || y > [extent yMax]) {
        //callbackContext.error("当前坐标不在视图范围");
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_ERROR messageAsString : @"当前坐标不在视图范围"];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
        return;
    }
    AGSPoint *point = [[AGSPoint alloc] initWithX:x y:y spatialReference:mapSpatialReference];
    [self.mapView setViewpointCenter:point scale:scale completion:false];
    @try {
//        NSMutableDictionary *m ;
//        if ((int) scale != 0) {
//            [self.mapView setViewpointScale:scale completion:false];
//            [self.mapView setViewpointCenter:point scale:scale completion:false];
//            //mhandle.removeCallbacks(timeRunable);
//            //mhandle.postDelayed(timeRunable, 1000);
//            if (selection) {
//                [m setObject:@"" forKey:@"x"];
//                Map<String, Double> my = new HashMap<>();
//                my.put("x", x);
//                my.put("y", y);
//                my.put("a", 0.0);
//                my.put("w", 45.0);
//                my.put("h", 45.0);
//                my.put("offsetY", 5.0);
//                setExtentFrame(my, selectionOverlay, false);
//            }
//            if (callbackContext != null) {
//                callbackContext.success();
//                listenableFuture.removeDoneListener(this);
//            }
//        } else {
//            ListenableFuture<Boolean> listenableFuture = mapView.setViewpointCenterAsync(point);
//            listenableFuture.addDoneListener(new Runnable() {
//                @Override
//                public void run() {
//                    mhandle.removeCallbacks(timeRunable);
//                    mhandle.postDelayed(timeRunable, 1000);
//                    if (selection) {
//                        Map<String, Double> my = new HashMap<>();
//                        my.put("x", x);
//                        my.put("y", y);
//                        my.put("a", 0.0);
//                        my.put("w", 45.0);
//                        my.put("h", 45.0);
//                        my.put("offsetY", 5.0);
//                        setExtentFrame(my, selectionOverlay, false);
//                    }
//                    if (callbackContext != null) {
//                        callbackContext.success();
//                        listenableFuture.removeDoneListener(this);
//                    }
//                }
//            });
//        }
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @""];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
    } @catch (NSException *exception) {
        
    } @finally {
        
    }
}

/**
 * 设置是否可可以操控
 *
 * @param bool
 */
-(void) setEnable:(CDVInvokedUrlCommand*)command{
    mapEnable = false;
    NSString * callbackId = command.callbackId;
    CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @""];
    [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
}

- (void)mapView:(AGSMapView *)mapView didTapAtPoint:(CGPoint)screen mapPoint:(nonnull
                                                                              AGSPoint *)mappoint features:(NSDictionary *)features {
    NSLog(@"User tapped on the map at %f,%f", mappoint.x, mappoint.y);
}
@end



