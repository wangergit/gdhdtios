#import "ArcgisMapView.h"
#import "Constant.h"
#import <Cordova/CDVPluginResult.h>
#import <ArcGIS/ArcGIS.h>



//@interface ViewController : UIViewController <AGSMapViewTouchDelegate>

// arcgis ios 原生实现类
@implementation ArcgisMapView


/**
 插件初始化回调函数
 */
- (void)pluginInitialize{
    [self.webView setUserInteractionEnabled:YES];
    self.TAG = @"ArcgisMapView";
    self.themeState = @"light";
    self.mapScale = 0.0;
    self.mapViewLoad = false;
    self.mapEnable = true;
    self.startLine = 22200262;
    self.endLine = 22209546;
    self.zdImg = @"www/static/image/symbol/zd.png";
    self.extentFrameImg = @"www/static/image/symbol/extentFrame.png";
    self.selectionLayer = @"";
    self.positionScale = 1800.00;
    self.layerMinScale = 32500.00;
    self.compassModeType = false;
    self.guideBool = false;
    self.mRouteWidth = 50;
    self.guideStartTime = @"";
    self.guideEndTime = @"";
    self.startImg = @"www/static/image/symbol/node.png";
    self.endImg = @"www/static/image/symbol/marker-end.png";
    self.guideModelType = @"course";
    self.guideModelSource = @"";
    self.guideMapMoveListener = false;
    self.guideCallback = true;
    self.isMapfile = false;
    self.isMapCount = 0;
    self.curPointX = 0.0;
    self.curPointY = 0.0;
    self.isPause = false;
    self.currentSecond = 0.0;
    //self.timer =
    
    [self initMap];
    
    //webiew 背景设为透明
    [self.webView setOpaque:NO];
    
    // 将地图添加到最底层
    [self.viewController.view insertSubview:self.mapView atIndex:0];
    //[self.viewController.view addSubview:self.mapView];
    [self.mapView setUserInteractionEnabled:YES];
    //初始化线程
    self.timerThread = [[NSThread alloc]initWithTarget:self selector:@selector(threadRun) object:nil];
    
}

-(void)initTimer
{
    if(self.timer){
        [self.timer invalidate];
        self.timer =nil;
    }
    //时间间隔
    NSTimeInterval timeInterval =1.0 ;
    //定时器    repeats 表示是否需要重复，NO为只重复一次
    self.timer = [NSTimer scheduledTimerWithTimeInterval:timeInterval target:self selector:@selector(timer_callback) userInfo:nil repeats:YES];
}

- (void)addTimer
{
    if(!self.timer)
        self.timer = [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(timer_callback) userInfo:nil repeats:YES];
    [[NSRunLoop mainRunLoop] addTimer:self.timer forMode:NSRunLoopCommonModes];
}

-(void)removeTimer
{
    [self.timer invalidate];
    self.timer =nil;
}
//关闭定时器
-(void)pauseTimer
{
    [self.timer setFireDate:[NSDate distantFuture]];
}

//开启定时器
-(void)startTimer
{
    [self.timer setFireDate:[NSDate distantPast]];
}
//定时器执行函数
- (void)timer_callback:(NSTimer *)tempTimer {

    
}
//新线程
- (void)threadRun
{
    if (!self.isPause)
    {
        @try{
            self.currentSecond = self.currentSecond + 1000;
            if (self.currentSecond == 1000) {
                NSDictionary *extent = [self getMapViewExten];
                NSString *minx = [extent valueForKey:@"minx"];
                NSString *maxx = [extent valueForKey:@"maxx"];;
                NSString *miny = [extent valueForKey:@"miny"];;
                NSString *maxy = [extent valueForKey:@"maxy"];
                Boolean scale = self.mapView.mapScale <= self.layerMinScale;
                UIWebView *uiWebView = (UIWebView*)self.webView;
                if (scale) {
                    //水位站
                    if (self.waterStationOverlay.isVisible) {
                        //[self performSelectorOnMainThread:@selector(refreshTableView) withObject:nil waitUntilDone:YES];
                        NSString *js = [@"javascript:window.$types.map.search.water('" stringByAppendingFormat:@"%@,%@,%@,%@,%@,%@,%@,%@",minx,@"', '",miny,@"', '",maxx,@"', '",maxy,@"')"];
                        [uiWebView stringByEvaluatingJavaScriptFromString:js ];
                        //webView.loadUrl("javascript:window.$types.map.search.water('" + minx + "', '" + miny + "', '" + maxx + "', '" + maxy + "')");
                    }
                    //标注
                    if (self.markOverlay.isVisible) {
                        NSString *js = [@"javascript:window.$types.map.search.label('" stringByAppendingFormat:@"%@,%@,%@,%@,%@,%@,%@,%@",minx,@"', '",miny,@"', '",maxx,@"', '",maxy,@"')"];
                        [uiWebView stringByEvaluatingJavaScriptFromString:js ];
                        //webView.loadUrl("javascript:window.$types.map.search.label('" + minx + "', '" + miny + "', '" + maxx + "', '" + maxy + "')");
                    }
                    //船舶
                    if (self.shipOverlay.isVisible) {
                        NSString *js = [@"javascript:window.$types.map.search.boat('" stringByAppendingFormat:@"%@,%@,%@,%@,%@,%@,%@,%@",minx,@"', '",miny,@"', '",maxx,@"', '",maxy,@"')"];
                        [uiWebView stringByEvaluatingJavaScriptFromString:js ];
                        //webView.loadUrl("javascript:window.$types.map.search.boat('" + minx + "', '" + miny + "', '" + maxx + "', '" + maxy + "')");
                    }
                    //上报
                    if (self.reportOverlay.isVisible) {
                        NSString *js = [@"javascript:window.$types.map.search.report('" stringByAppendingFormat:@"%@,%@,%@,%@,%@,%@,%@,%@",minx,@"', '",miny,@"', '",maxx,@"', '",maxy,@"')"];
                        [uiWebView stringByEvaluatingJavaScriptFromString:js ];
                        //webView.loadUrl("javascript:window.$types.map.search.report('" + minx + "', '" + miny + "', '" + maxx + "', '" + maxy + "')");
                    }
                }
                if (self.mapView.mapScale <= 50000 && self.airworthinessOverlay.isVisible) {
                    NSString *js = [@"javascript:window.$types.map.search.depth('" stringByAppendingFormat:@"%@,%@,%@,%@,%@,%@,%@,%@",minx,@"', '",miny,@"', '",maxx,@"', '",maxy,@",'true')"];
                    [uiWebView stringByEvaluatingJavaScriptFromString:js ];
                    //webView.loadUrl("javascript:window.$types.map.search.depth('" + minx + "', '" + miny + "', '" + maxx + "', '" + maxy + "' , '" + true + "')");
                }
                //天气请求
                if (self.weatherOverlay.isVisible) {
                    NSString *scale = [NSString stringWithFormat:@"%f",self.mapView.mapScale];
                    NSString *js = [@"javascript:window.$types.map.search.weather('" stringByAppendingFormat:@"%@,%@,%@,%@,%@,%@,%@,%@,%@,%@",minx,@"', '",miny,@"', '",maxx,@"', '",maxy,@"', '",scale,@",'true')"];
                    [uiWebView stringByEvaluatingJavaScriptFromString:js ];
                    //webView.loadUrl("javascript:window.$types.map.search.weather('" + minx + "', '" + miny + "', '" + maxx + "', '" + maxy + "' ," + mapView.getMapScale() + ")");
                }
                //地图选点接口触发
                NSString *js =@"javascript:if(window.$types.map.selection.move){window.$types.map.selection.move()}";
                [uiWebView stringByEvaluatingJavaScriptFromString:js ];
                //webView.loadUrl("javascript:if(window.$types.map.selection.move){window.$types.map.selection.move()}");
                
                self.isPause = false;
                self.currentSecond = 0;
            }
        }@catch (NSException *exception) {}
    }
    
}
-(void) refreshMapLayers
{
    @try{
        NSDictionary *extent = [self getMapViewExten];
        NSString *minx = [extent valueForKey:@"minx"];
        NSString *maxx = [extent valueForKey:@"maxx"];;
        NSString *miny = [extent valueForKey:@"miny"];;
        NSString *maxy = [extent valueForKey:@"maxy"];
        Boolean scale = self.mapView.mapScale <= self.layerMinScale;
        UIWebView *uiWebView = (UIWebView*)self.webView;
        if (scale) {
            //标注
            if (self.markOverlay.isVisible) {
                NSString *js = [@"javascript:window.$types.map.search.label('" stringByAppendingFormat:@"%@,%@,%@,%@,%@,%@,%@,%@",minx,@"', '",miny,@"', '",maxx,@"', '",maxy,@"')"];
                [uiWebView stringByEvaluatingJavaScriptFromString:js ];
            }
            //船舶
            //if (self.shipOverlay.isVisible) {
                //NSString *js = [@"javascript:window.$types.map.search.boat('" stringByAppendingFormat:@"%@,%@,%@,%@,%@,%@,%@,%@",minx,@"', '",miny,@"', '",maxx,@"', '",maxy,@"')"];
                //[uiWebView stringByEvaluatingJavaScriptFromString:js ];
            
            //}
            //上报
            if (self.reportOverlay.isVisible) {
                NSString *js = [@"javascript:window.$types.map.search.report('" stringByAppendingFormat:@"%@,%@,%@,%@,%@,%@,%@,%@",minx,@"', '",miny,@"', '",maxx,@"', '",maxy,@"')"];
                [uiWebView stringByEvaluatingJavaScriptFromString:js ];
            }
            
        }
    }@catch (NSException *exception) {}
}
/**
 * 根据比例尺清除天气要素
 *
 * @param scale
 */
-(void) clearWeatherGraphics:(double) scale
{
    if (scale >= 1000000) {
        if (self.mapScale < 1000000) {
            [self.weatherOverlay.graphics removeAllObjects];
        }
    } else {
        if (self.mapScale > 1000000) {
            [self.weatherOverlay.graphics removeAllObjects];
        }
    }
    self.mapScale = scale;
}


/**
 地图初始化
 */
- (void)initMap{
    self.mapSpatialReference = [AGSSpatialReference WGS84];//全局空间参考
    CGSize viewportSize = [UIApplication sharedApplication].delegate.window.bounds.size;//屏幕大小
    self.mapView= [[AGSMapView alloc] initWithFrame: CGRectMake(0, 0, viewportSize.width, viewportSize.height)];// 新建mapview
    
    //self.mapView.touchDelegate = self;
    
    self.tiledLayerBaseMap = [[AGSArcGISTiledLayer alloc] initWithURL:[NSURL URLWithString:TILEDLAYERSERVICEURL]];
    [self.tiledLayerBaseMap setName:@""];
    
    self.basemap = [[AGSMap alloc] initWithBasemap:[[AGSBasemap alloc] initWithBaseLayer:self.tiledLayerBaseMap]];
    self.mapView.map = self.basemap;
    
    self.vectorTiledLayer = [[AGSArcGISVectorTiledLayer alloc] initWithURL:[NSURL URLWithString:PATHDAYTIME]];
    [self.vectorTiledLayer setName:@"basemap"];
    [self.mapView.map.basemap.baseLayers insertObject:self.vectorTiledLayer atIndex:1];
    
    self.vectorTargetLayer = [[AGSArcGISVectorTiledLayer alloc] initWithURL:[NSURL URLWithString:PATHTARGET]];
    [self.vectorTargetLayer setName:@"target"];
    [self.mapView.map.basemap.baseLayers insertObject:self.vectorTargetLayer atIndex:2];
    
    self.mMapImageLayer = [[AGSArcGISMapImageLayer alloc] initWithURL:[NSURL URLWithString:FRAMESSERVERPATH]];
    //[mMapImageLayer setVisible:false];
    [self.mapView.map.basemap.baseLayers insertObject:self.mMapImageLayer atIndex:3];
    //[self.mapView.map.operationalLayers insertObject:mMapImageLayer atIndex:0];
    
    self.labelMapImageLayer = [[AGSArcGISMapImageLayer alloc] initWithURL:[NSURL URLWithString:PATHLABEL]];
    [self.labelMapImageLayer setVisible:false];
    [self.labelMapImageLayer setMinScale:self.layerMinScale];
    [self.mapView.map.basemap.baseLayers insertObject:self.labelMapImageLayer atIndex:4];
    
    self.beaconMapImageLayer = [[AGSArcGISMapImageLayer alloc] initWithURL:[NSURL URLWithString:TARGETINFOSERVICEURL]];
    [self.beaconMapImageLayer setOpacity:0.01f];
    [self.beaconMapImageLayer setMinScale:32500];
    [self.mapView.map.basemap.baseLayers insertObject:self.beaconMapImageLayer atIndex:5];
    
    self.airworthinessOverlay = [[AGSGraphicsOverlay alloc] init];//适航水深
    [self.airworthinessOverlay setMinScale:50000];
    [self.airworthinessOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:self.airworthinessOverlay atIndex:0];
    
    self.maskOverlay = [[AGSGraphicsOverlay alloc] init];
    [self.maskOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:self.maskOverlay atIndex:1];
    
    self.planGuideLayer = [[AGSGraphicsOverlay alloc] init];
    [self.mapView.graphicsOverlays insertObject:self.planGuideLayer atIndex:2 ];
    
    self.cutRouteGraphicLayer = [[AGSGraphicsOverlay alloc] init];
    [self.mapView.graphicsOverlays insertObject:self.cutRouteGraphicLayer atIndex:3 ];
    
    self.selectionOverlay = [[AGSGraphicsOverlay alloc] init];//选中图层
    [self.selectionOverlay setMinScale:self.layerMinScale];
    [self.mapView.graphicsOverlays insertObject:self.selectionOverlay atIndex:4];
    
    self.navigationOverlay = [[AGSGraphicsOverlay alloc] init];//航标要素图层
    [self.navigationOverlay setMinScale:self.layerMinScale];
    [self.navigationOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:self.navigationOverlay atIndex:5];
    
    self.waterStationOverlay = [[AGSGraphicsOverlay alloc] init];//水位站要素图层
    [self.waterStationOverlay setMinScale:self.layerMinScale];
    [self.waterStationOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:self.waterStationOverlay atIndex:6];
    
    self.shipOverlay = [[AGSGraphicsOverlay alloc] init];//船舶要素图层
    [self.shipOverlay setMinScale:self.layerMinScale];
    [self.shipOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:self.shipOverlay atIndex:7];
    
    self.reportOverlay = [[AGSGraphicsOverlay alloc] init];//上报要素图层
    [self.reportOverlay setMinScale:self.layerMinScale];
    [self.reportOverlay setVisible:true];
    [self.mapView.graphicsOverlays insertObject:self.reportOverlay atIndex:8];
    
    self.regulationBuildOverlay = [[AGSGraphicsOverlay alloc] init];//整治建筑物要素图层
    [self.regulationBuildOverlay setMinScale:self.layerMinScale];
    [self.regulationBuildOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:self.regulationBuildOverlay atIndex:9];
    
    self.waterDepthOverlay = [[AGSGraphicsOverlay alloc] init];//测水要素图层
    [self.mapView.graphicsOverlays insertObject:self.waterDepthOverlay atIndex:10];
    
    self.markOverlay = [[AGSGraphicsOverlay alloc] init];//标注要素图层
    [self.markOverlay setMinScale:self.layerMinScale];
    [self.markOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:self.markOverlay atIndex:11];
    
    self.routeGraphicsOverlay = [[AGSGraphicsOverlay alloc] init];//路径规划线路图层
    [self.mapView.graphicsOverlays insertObject:self.routeGraphicsOverlay atIndex:12];
    
    self.afterGraphicsOverlay = [[AGSGraphicsOverlay alloc] init];//已驶过线路图层
    [self.mapView.graphicsOverlays insertObject:self.afterGraphicsOverlay atIndex:13];
    
    self.guideGraphicsOverlay = [[AGSGraphicsOverlay alloc] init];//助航重点连线绘制图层
    [self.mapView.graphicsOverlays insertObject:self.guideGraphicsOverlay atIndex:14];
    
    self.mGraphicsOverlay = [[AGSGraphicsOverlay alloc] init];//路径规划图标图层
    [self.mapView.graphicsOverlays insertObject:self.mGraphicsOverlay atIndex:15];
    
    self.weatherOverlay = [[AGSGraphicsOverlay alloc] init];//天气图层
    //[weatherOverlay setMinScale:layerMinScale];
    [self.weatherOverlay setVisible:false];
    [self.mapView.graphicsOverlays insertObject:self.weatherOverlay atIndex:16];
    
    self.sheetOverlay = [[AGSGraphicsOverlay alloc] init];
    [self.sheetOverlay setMinScale:self.layerMinScale];
    [self.mapView.graphicsOverlays insertObject:self.sheetOverlay atIndex:17];
    
    //助航
    self.guideModelGraphicLayer = [[AGSGraphicsOverlay alloc] init];
    [self.mapView.graphicsOverlays insertObject:self.guideModelGraphicLayer atIndex:18];
    
    self.guideAngleGraphicLayer = [[AGSGraphicsOverlay alloc] init];
    [self.mapView.graphicsOverlays insertObject:self.guideAngleGraphicLayer atIndex:19];
    
    self.mRouteSymbol = [[AGSSimpleLineSymbol alloc] initWithStyle:AGSSimpleLineSymbolStyleSolid color:[UIColor colorWithRed:34 green:139 blue:34 alpha:1.0] width:9.0];
    
    NSString *filePath = [[NSBundle mainBundle] pathForResource:@"www/static/image/symbol/navigation_my_position.png" ofType:nil];
    UIImage* image = [[UIImage alloc] initWithContentsOfFile:filePath];
    self.guideModelPictureSymbol  = [AGSPictureMarkerSymbol pictureMarkerSymbolWithImage:image];
    [self.guideModelPictureSymbol loadWithCompletion:^(NSError * _Nullable error) {
        [self.guideModelPictureSymbol setHeight:50];
        [self.guideModelPictureSymbol setWidth:50];
        NSString *filePath1 = [[NSBundle mainBundle] pathForResource:@"www/static/image/symbol/navigation_direction.png" ofType:nil];
        UIImage* image1 = [[UIImage alloc] initWithContentsOfFile:filePath1];
        self.guideAnglePictureSymbol  = [AGSPictureMarkerSymbol pictureMarkerSymbolWithImage:image1];
        [self.guideAnglePictureSymbol loadWithCompletion:^(NSError * _Nullable error) {
            [self.guideAnglePictureSymbol setHeight:70];
            [self.guideAnglePictureSymbol setWidth:70];
        }];
    }];
    
    //网格
    AGSBackgroundGrid* grid=[AGSBackgroundGrid new];
    grid.color=[ArcgisMapView colorWithRGB:0xF4F3F0 alpha:1];
    grid.gridLineColor=[ArcgisMapView colorWithRGB:0x000000 alpha:0];
    [self.mapView setBackgroundGrid:grid];
    [self.mapView setAttributionTextVisible:false];
    //[self.mapView setViewpoint:[[AGSViewpoint alloc] initWithCenter:[[AGSPoint alloc] initWithX:113.596 y:22.92 spatialReference:self.mapSpatialReference] scale:32500]];//设置地图中心点
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
 设置放缩
 @param command command description
 */
-(void) setScale:(CDVInvokedUrlCommand*)command{
    [self.mapView setViewpointScale:[[command.arguments objectAtIndex:0] boolValue] completion:false];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"setScale"];
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
    NSString * version =[[[NSBundle mainBundle]infoDictionary]objectForKey :@"CFBundleDisplayName"];
    CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : version];
    [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
}

- (void)getPackageName:(CDVInvokedUrlCommand*)command
{
    NSString* packageName = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleIdentifier"];
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:packageName];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)getVersionNumber:(CDVInvokedUrlCommand*)command
{
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
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
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
 * 屏幕点转成地图上的点
 * @param x
 * @param y
 * @return
 */
-(void) screenToLocation:(CDVInvokedUrlCommand*)command
{
    double x = [[command.arguments objectAtIndex:0] doubleValue];
    double y = [[command.arguments objectAtIndex:1] doubleValue];
    CGPoint screenP = CGPointMake(x,y);
    AGSPoint *mapP = [self.mapView screenToLocation:screenP];
    NSDictionary *par = [[NSDictionary alloc] initWithObjectsAndKeys:[NSNumber numberWithDouble:mapP.x],@"x",[NSNumber numberWithDouble:mapP.y],@"y", nil];
    CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsDictionary:par];
    [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
}

/**
 * 地图上的点转成屏幕点
 * @param x
 * @param y
 * @return
 */
-(void) locationToScreen:(CDVInvokedUrlCommand*)command
{
    double x = [[command.arguments objectAtIndex:0] doubleValue];
    double y = [[command.arguments objectAtIndex:1] doubleValue];
    AGSPoint *mapPoint = [AGSPoint pointWithX:x y:y spatialReference:self.mapView.spatialReference];
    CGPoint screenP = [self.mapView locationToScreen:mapPoint];
    NSDictionary *par = [[NSDictionary alloc] initWithObjectsAndKeys:[NSNumber numberWithDouble:screenP.x],@"x",[NSNumber numberWithDouble:screenP.y],@"y", nil];
    CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsDictionary:par];
    [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
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
    //判断当前坐标是否在视图范围
    AGSEnvelope *extent = [self.tiledLayerBaseMap fullExtent];
    if (x < [extent xMin] || x > [extent xMax] || y < [extent yMin] || y > [extent yMax]) {
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_ERROR messageAsString : @"当前坐标不在视图范围"];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
        return;
    }
    NSNumber *xP = [NSNumber numberWithDouble:x];
    NSNumber *yP = [NSNumber numberWithDouble:y];
    NSNumber *a = [NSNumber numberWithDouble:0.0];
    NSNumber *w = [NSNumber numberWithDouble:45.0];
    NSNumber *h = [NSNumber numberWithDouble:45.0];
    NSNumber *offsetY = [NSNumber numberWithDouble:5.0];
    AGSPoint *point = [[AGSPoint alloc] initWithX:x y:y spatialReference:self.mapSpatialReference];
    @try {
        if ((int) scale != 0) {
            [self.mapView setViewpointScale:scale completion:false];
            [self.mapView setViewpointCenter:point scale:scale completion:false];
            if (selection) {
                NSDictionary *centerParam = [[NSDictionary alloc] initWithObjectsAndKeys:xP,@"x",yP,@"y",a,@"a",w,@"w",h,@"h",offsetY,@"offsetY", nil];
                [self setExtentFrame:centerParam :self.selectionOverlay :false];
            }
        } else {
            [self.mapView setViewpointCenter:point completion:false];
            if (selection) {
                NSDictionary *centerParam = [[NSDictionary alloc] initWithObjectsAndKeys:xP,@"x",yP,@"y",a,@"a",w,@"w",h,@"h",offsetY,@"offsetY", nil];
                [self setExtentFrame:centerParam :self.selectionOverlay :false];
            }
        }
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @""];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
    } @catch (NSException *exception) {
        
    }
}

/**
 * 添加选中的矩形框符号
 * @param params
 * @param layer
 */
-(void)setExtentFrame:(NSDictionary*)centerItem :(AGSGraphicsOverlay*)layer :(Boolean*)center{
    @try {
        [layer.graphics removeAllObjects];
        if (![layer isVisible]) {
            [layer setVisible:true];
        }
        NSString *filePath = [[NSBundle mainBundle] pathForResource:self.extentFrameImg ofType:nil];
        UIImage* image = [[UIImage alloc] initWithContentsOfFile:filePath];
        AGSPictureMarkerSymbol *tempSymol  = [AGSPictureMarkerSymbol pictureMarkerSymbolWithImage:image];
        [tempSymol loadWithCompletion:^(NSError * _Nullable error) {
            [tempSymol setHeight:[[centerItem objectForKey:@"h"] doubleValue]];
            [tempSymol setWidth:[[centerItem objectForKey:@"w"] doubleValue]];
            [tempSymol setAngle:[[centerItem objectForKey:@"a"] doubleValue]];
            [tempSymol setOffsetY:[[centerItem objectForKey:@"offsetY"] doubleValue]];
            
            AGSPoint *tcampsitePoint = [[AGSPoint alloc] initWithX:[[centerItem objectForKey:@"x"] doubleValue] y:[[centerItem objectForKey:@"y"] doubleValue] spatialReference:self.mapSpatialReference];
            NSDictionary *s ;
            AGSGraphic *campsiteGraphic = [[AGSGraphic alloc] initWithGeometry:tcampsitePoint symbol:tempSymol attributes:s];
            [layer.graphics insertObject:campsiteGraphic atIndex:0];
            if (center) {
                [self centerTo:[[centerItem objectForKey:@"x"] doubleValue] :[[centerItem objectForKey:@"y"] doubleValue] :self.mapView.mapScale :false :NULL];
            }
        }];
    } @catch (NSException *Exception) {
        //[Exception out];
    }
}

/**
 * 设置是否可可以操控
 * @param bool
 */
-(void) setEnable:(CDVInvokedUrlCommand*)command{
    BOOL enable = [[command.arguments objectAtIndex:0] boolValue];
    self.mapEnable = enable;
    //[self.webView setUserInteractionEnabled:!enable];
    CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @""];
    [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
}

- (void)mapView:(AGSMapView *)mapView didTapAtPoint:(CGPoint)screen mapPoint:(nonnull
                                                                              AGSPoint *)mappoint features:(NSDictionary *)features {
    NSLog(@"User tapped on the map at %f,%f", mappoint.x, mappoint.y);
}

/**
 * 换主题模式 白天黑夜两个层只保留一个，一个加载成功后把另一个删除
 * @param theme
 * @param callbackContext
 */
-(void) changeTheme:(CDVInvokedUrlCommand*)command{
    NSString *theme = [command.arguments objectAtIndex:0];
    @try {
        int index = [self getVectorTiledLayerIndex];
        self.themeState = theme;
        
        if ([theme isEqualToString:@"dark"]) {
            if (self.nightTiledLayerBaseMap == NULL) {
                self.nightTiledLayerBaseMap = [[AGSArcGISTiledLayer alloc] initWithURL:[NSURL URLWithString:NIGHTTILEDLAYERSERVICEURL]];
                [self.nightTiledLayerBaseMap setVisible:false];
                [self.mapView.map.basemap.baseLayers insertObject:self.nightTiledLayerBaseMap atIndex:1];
                index = [self getVectorTiledLayerIndex];
            }
            if (self.nightVectorTiledLayer == NULL) {
                self.nightVectorTiledLayer = [[AGSArcGISVectorTiledLayer alloc] initWithURL:[NSURL URLWithString:PATHNIGHT]];
                [self.nightVectorTiledLayer setName:@"basemap_night"];
            }
            [self.nightTiledLayerBaseMap setVisible:true];
            [self.tiledLayerBaseMap setVisible:false];
            //basemap添加一个黑夜图层
            [self.mapView.map.basemap.baseLayers removeObjectAtIndex:index];
            [self.mapView.map.basemap.baseLayers insertObject:self.nightVectorTiledLayer atIndex:index];
            [self.mapView.backgroundGrid setColor:[ArcgisMapView colorWithRGB:0x44423E alpha:1]];
            //[self setEnable:true];
            //mapView.getBackgroundGrid().setColor(Color.TRANSPARENT);
        } else if([theme isEqualToString:@"light"]) {
            [self.tiledLayerBaseMap setVisible:true];
            if (self.nightTiledLayerBaseMap != NULL) {
                [self.nightTiledLayerBaseMap setVisible:false];
            }
            [self.mapView.map.basemap.baseLayers removeObjectAtIndex:index];
            [self.mapView.map.basemap.baseLayers insertObject:self.vectorTiledLayer atIndex:index];
            [self.mapView.backgroundGrid setColor:[ArcgisMapView colorWithRGB:0xF4F3F0 alpha:1]];
            //[self setEnable:true];
        }
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @""];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
    } @catch(NSException *exception){
        NSLog(@"changeTheme  ERROR!");
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_ERROR messageAsString : @""];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
    }
}

/**
 * 获取矢量切片的index
 * @return
 */
-(int) getVectorTiledLayerIndex{
    @try {
        for (int i = 0; i < self.mapView.map.basemap.baseLayers.count ; i++) {
            AGSLayer *layer = [self.mapView.map.basemap.baseLayers objectAtIndex:i];
            if ([layer.name rangeOfString:@"basemap"].length > 0) {
                return i;
            }
        }
    } @catch (NSException *exception){
        NSLog(@"getVectorTiledLayerIndex  ERROR!");
    }
    return 1;
}

/**
 * 控制在线陆地图层显示与隐藏
 * @param visible
 * @param callbackContext
 */
-(void) changeTieldLayerVisible:(CDVInvokedUrlCommand*)command {
    @try {
        BOOL visible = [[command.arguments objectAtIndex:0] boolValue];
        if (self.tiledLayerBaseMap == NULL) {
            self.tiledLayerBaseMap = [[AGSArcGISTiledLayer alloc] initWithURL:[NSURL URLWithString:TILEDLAYERSERVICEURL]];
            [self.mapView.map.basemap.baseLayers insertObject:self.tiledLayerBaseMap atIndex:0];
        }
        if ([self.themeState isEqualToString:@"light"]) {
            [self.tiledLayerBaseMap setVisible:visible];
        } else {
            [self.nightTiledLayerBaseMap setVisible:visible];
        }
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @"changeTieldLayerVisible OK"];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
    } @catch (NSException *exception) {
        NSLog(@"changeTieldLayerVisible  ERROR!");
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_ERROR messageAsString : @""];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
    }
}

/**
 * 控制航道图显示与隐藏
 * @param visible
 * @param callbackContext
 */
-(void) changeChartLayerVisible:(CDVInvokedUrlCommand*)command {
    @try {
        BOOL visible = [[command.arguments objectAtIndex:0] boolValue];
        if ([self.themeState isEqualToString:@"light"]) {
            if (self.vectorTiledLayer != NULL) {
                [self.vectorTiledLayer setVisible:visible];
            }
        } else {
            if (self.nightVectorTiledLayer != NULL) {
                [self.nightVectorTiledLayer setVisible:visible];
            }
        }
        if (self.labelMapImageLayer != NULL) {
            [self.labelMapImageLayer setVisible:visible];
        }
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @"changeChartLayerVisible OK"];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
    } @catch (NSException *exception) {
        NSLog(@"changeChartLayerVisible  ERROR!");
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_ERROR messageAsString : @"changeChartLayerVisible  ERROR"];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
    }
}

/**
 * 控制图幅图层的显示与隐藏
 * @param visible boolean
 */
-(void) changeFramesServerState:(CDVInvokedUrlCommand*)command {
    @try {
        BOOL visible = [[command.arguments objectAtIndex:0] boolValue];
        if (self.mMapImageLayer == NULL) return;
        [self.mMapImageLayer setVisible:visible];
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @"changeFramesServerState OK"];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
    } @catch (NSException *exception)  {
        NSLog(@"changeFramesServerState  ERROR!");
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_ERROR messageAsString : @""];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
    }
}

/***
 * 获取地图中心点经纬度
 * @param callbackContext
 */
-(void)getCentralPoint:(CDVInvokedUrlCommand*)command{
    AGSEnvelope *extent = [self.mapView.visibleArea extent];
    NSNumber *x = [NSNumber numberWithDouble:[[extent center] x]];
    NSNumber *y = [NSNumber numberWithDouble:[[extent center] y]];
    NSDictionary *centerPoint = [[NSDictionary alloc] initWithObjectsAndKeys:x,@"x",y,@"y", nil];
    CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : [self convertToJsonData :centerPoint]];
    [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
}

-(NSString *)convertToJsonData:(NSDictionary *)dict{
    NSError *error;
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:dict options:NSJSONWritingPrettyPrinted error:&error];
    NSString *jsonString;
    if (!jsonData) {
        NSLog(@"%@",error);
    }else{
        jsonString = [[NSString alloc]initWithData:jsonData encoding:NSUTF8StringEncoding];
    }
    NSMutableString *mutStr = [NSMutableString stringWithString:jsonString];
    NSRange range = {0,jsonString.length};
    //去掉字符串中的空格
    [mutStr replaceOccurrencesOfString:@" " withString:@"" options:NSLiteralSearch range:range];
    NSRange range2 = {0,mutStr.length};
    //去掉字符串中的换行符
    [mutStr replaceOccurrencesOfString:@"\n" withString:@"" options:NSLiteralSearch range:range2];
    return mutStr;
}

- (NSDictionary *)dictionaryWithJsonString:(NSString *)jsonString
{
    if (jsonString == nil) {
        return nil;
    }
    NSData *jsonData = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
    NSError *err;
    NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData
                                                        options:NSJSONReadingMutableContainers
                                                          error:&err];
    if(err){
        NSLog(@"json解析失败：%@",err);
        return nil;
    }
    return dic;
}
/**
 跳转到网络设置
 */
- (void)toNetWorkSetting:(CDVInvokedUrlCommand*)command
{
    @try{
        //[self.mapView setViewpointScale:[self.mapView mapScale]* 0.5 completion:false];
        //cordova.getActivity().startActivity(new Intent(Settings.ACTION_WIRELESS_SETTINGS));
        
    } @catch (NSException *exception) {}
    
    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

/**
 * 地图缩放事件处理
 * @param scale
 */
- (void) disposeMapScale:(double) scale
{
    //Double curScale = scale / 1000;
    NSString *scaleText = @"";
    double percentage = 0.0;
    if(scale > 0 && scale <= 100){
        scaleText = @"100米";
        percentage = scale / 100;
    }else if(scale > 100 && scale <= 200){
        scaleText = @"200米";
        percentage = (scale - 100) / 100;
    }else if(scale > 200 && scale <= 500){
        scaleText = @"500米";
        percentage = (scale - 200) / (500 - 200);
    }else if(scale > 500 && scale <= 1000){
        scaleText = @"1公里";
        percentage = (scale - 500) / (1000 - 500);
    }else if(scale > 1000 && scale <= 2000){
        scaleText = @"2公里";
        percentage = (scale - 1000) / (2000 - 1000);
    }else if(scale > 2000 && scale <= 5000){
        scaleText = @"5公里";
        percentage = (scale - 2000) / (5000 - 2000);
    }else if(scale > 5000 && scale <= 10000){
        scaleText = @"10公里";
        percentage = (scale - 5000) / (10000 - 5000);
    }else if(scale > 10000 && scale <= 20000){
        scaleText = @"20公里";
        percentage = (scale - 10000) / (20000 - 10000);
    }else if(scale > 20000 && scale <= 50000){
        scaleText = @"50公里";
        percentage = (scale - 20000) / (50000 - 20000);
    }else if(scale > 50000 && scale <= 100000){
        scaleText = @"100公里";
        percentage = (scale - 50000) / (100000 - 50000);
    }else if(scale > 100000 && scale <= 200000){
        scaleText = @"200公里";
        percentage = (scale - 100000) / (200000 - 100000);
    }else if(scale > 200000 && scale <= 500000){
        scaleText = @"500公里";
        percentage = (scale - 200000) / (500000 - 200000);
    }else if(scale > 500000 && scale <= 1000000){
        scaleText = @"1000公里";
        percentage = (scale - 500000) / (1000000 - 500000);
    }else if(scale > 1000000 && scale <= 2000000){
        scaleText = @"2000公里";
        percentage = (scale - 1000000) / (2000000 - 1000000);
    }else if(scale > 2000000 && scale <= 5000000){
        scaleText = @"5000公里";
        percentage = (scale - 2000000) / (5000000 - 2000000);
    }else if(scale > 5000000 && scale <= 10000000){
        scaleText = @"10000公里";
        percentage = (scale - 5000000) / (10000000 - 5000000);
    }else if(scale > 10000000 && scale <= 20000000){
        scaleText = @"20000公里";
        percentage = (scale - 10000000) / (20000000 - 10000000);
    }else if(scale > 20000000 && scale <= 50000000){
        scaleText = @"50000公里";
        percentage = (scale - 20000000) / (50000000 - 20000000);
    }else if(scale > 50000000 && scale <= 100000000){
        scaleText = @"100000公里";
        percentage = (scale - 50000000) / (100000000 - 50000000);
    }else if(scale > 100000000 && scale <= 200000000){
        scaleText = @"200000公里";
        percentage = (scale - 100000000) / (200000000 - 100000000);
    }
    
    //比例尺显示
    NSString *finalScaleText = scaleText;
    double finalPercentage = percentage * 100;
    NSString *sFinalPercentage = [NSString stringWithFormat:@"%f",finalPercentage];
    UIWebView *uiWebView = (UIWebView*)self.webView;
    
    [uiWebView  stringByEvaluatingJavaScriptFromString:@"javascript:window.$types.map.scale.toggleVisible(true)"];
    
    //[uiWebView stringByEvaluatingJavaScriptFromString:@"javascript:window.$types.map.scale.toggleVisible(true)"];
    NSString *js = [@"javascript:window.$types.map.scale.transfer('" stringByAppendingFormat:@"%@,%@,%@,%@",finalScaleText,@"', '",sFinalPercentage,@"')"];
    [uiWebView stringByEvaluatingJavaScriptFromString:js ];
    
}
/**
 * 航标图层点击查询
 * @param identifyLayerResults
 */
-(void) handleIdentifyResult:(AGSIdentifyLayerResult*) identifyLayerResults
{
    @try {
        if(identifyLayerResults == [NSNull null]){
            [self.selectionOverlay.graphics removeAllObjects];
        }
        
    }@catch (NSException *exception){}
}


-(void)refreshUI:(NSString*)js
{
    
}


/**
 * 获取坐标点与当位置的 距离
 * @param x
 * @param y
 * @return
 */
-(double)  getLength:(double) x :(double)y
{
    double length = 0.0;
    @try {
        if (self.curPointX == 0 && self.curPointY == 0) {//未开启定位直接返回0处理
            return length;
        }
        AGSPolylineBuilder *polylineBuilder = [[AGSPolylineBuilder
                                                  alloc]initWithSpatialReference:[AGSSpatialReference WGS84]];
        [polylineBuilder addPointWithX:x y:y];
        [polylineBuilder addPointWithX:self.curPointX y:self.curPointY];
        AGSPolyline *boatRoute = [polylineBuilder toGeometry];
        AGSGeodeticCurveType geodeticCurveType = AGSGeodeticCurveTypeGeodesic;
        AGSLinearUnit *unit =[AGSLinearUnit meters];
        //[[AGSGeometryEngine geodeticLengthOfGeometry:<#(nonnull AGSGeometry *)#> lengthUnit:(nonnull AGSLinearUnit *) curveType:[AGSGeodeticCurveType AGSGeodeticCurveTypeGeodesic]];
        length = [AGSGeometryEngine geodeticLengthOfGeometry:boatRoute lengthUnit:unit curveType:geodeticCurveType];
        //lengthGeodetic(boatRoute, new LinearUnit(LinearUnitId.METERS), GeodeticCurveType.GEODESIC);
        return length;
    }
    @catch (NSException *exception){}
}

//地图设置显示隐藏
-(void) setVisibility:(CDVInvokedUrlCommand*)command{
    BOOL hidden = [[command.arguments objectAtIndex:0] boolValue];
    [self.mapView setHidden:!hidden];
    CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @""];
    [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
}

//获取地图当前范围参数
-(NSDictionary*) getMapViewExten
{
    NSNumber *minX = [NSNumber numberWithDouble: self.mapView.visibleArea.extent.xMin];
    NSNumber *maxX = [NSNumber numberWithDouble: self.mapView.visibleArea.extent.xMax];
    NSNumber *minY = [NSNumber numberWithDouble: self.mapView.visibleArea.extent.yMin];
    NSNumber *maxY = [NSNumber numberWithDouble: self.mapView.visibleArea.extent.yMax];
    NSDictionary *mapExtentDic = [[NSDictionary alloc]initWithObjectsAndKeys:minX,@"minx",minY,@"miny",maxX,@"maxx",maxY,@"maxy",nil];
    return mapExtentDic;
}

/**
 * 路径规划中  地图选点的定位接口
 * @param callbackContext
 */
-(void) getSelectCenter:(CDVInvokedUrlCommand *) command{
    @try {
        AGSEnvelope *extent = [self.mapView.visibleArea extent];
        double x = [[extent center] x];
        double y = [[extent center] y];
        double centerY = [[extent center] y];
        double miny = extent.yMin;
        double many = extent.yMax;
        centerY = centerY - (many - miny) * 0.09;
        AGSPoint *point = [[AGSPoint alloc] initWithX:x y:y spatialReference:[self.mapView spatialReference]];
        [self.mapView setViewpointCenter:point scale:[self.mapView mapScale] completion:false];
        NSDictionary *centerPoint = [[NSDictionary alloc] initWithObjectsAndKeys:[NSNumber numberWithDouble:x],@"x",[NSNumber numberWithDouble:centerY],@"y", nil];
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : [self convertToJsonData :centerPoint]];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
    } @catch (NSException *e) {
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_ERROR messageAsString : @""];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
    }
}

/**
 * 切换助航视角状态
 * @param string
 * @param callbackContext
 */
-(void) changeNavigationType:(CDVInvokedUrlCommand*)command{
    self.guideModelType = [[command.arguments objectAtIndex:0] stringValue];
    CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @"changeNavigationType"];
    [self.commandDelegate sendPluginResult : pluginResult callbackId : command.callbackId];
}

@end



