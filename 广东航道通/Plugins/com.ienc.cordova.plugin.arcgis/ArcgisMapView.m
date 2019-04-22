#import "ArcgisMapView.h"
#import "Constant.h"
//#import "NSDictionary22.h"
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
    
    //UIImage *image = [UIImage imageWithContentsOfFile: @"www/static/image/symbol/navigation_my_position.png"];
    self.guideModelPictureSymbol  = [AGSPictureMarkerSymbol pictureMarkerSymbolWithURL:[NSURL URLWithString:@"www/static/image/symbol/navigation_my_position.png"]];
    [self.guideModelPictureSymbol loadWithCompletion:^(NSError * _Nullable error) {
        [self.guideModelPictureSymbol setHeight:50];
        [self.guideModelPictureSymbol setWidth:50];
        self.guideAnglePictureSymbol  = [AGSPictureMarkerSymbol pictureMarkerSymbolWithURL:[NSURL URLWithString:@"www/static/image/symbol/navigation_direction.png"]];
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
    AGSEnvelope *extent = [self.tiledLayerBaseMap fullExtent];
    if (x < [extent xMin] || x > [extent xMax] || y < [extent yMin] || y > [extent yMax]) {
        //callbackContext.error("当前坐标不在视图范围");
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_ERROR messageAsString : @"当前坐标不在视图范围"];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
        return;
    }
    AGSPoint *point = [[AGSPoint alloc] initWithX:x y:y spatialReference:self.mapSpatialReference];
    [self.mapView setViewpointCenter:point scale:scale completion:false];
    @try {
        NSMutableDictionary *m ;
        if ((int) scale != 0) {
            //[self.mapView setViewpointScale:scale completion:false];
            [self.mapView setViewpointCenter:point scale:scale completion:false];
            //mhandle.removeCallbacks(timeRunable);
            //mhandle.postDelayed(timeRunable, 1000);
            if (selection) {
                //                NSDictionary *newDictionary=@{@"x":@1,@"age":@29};
                //
                //                NSDictionary *obj = [[NSDictionary alloc] initWithObjectsAndKeys:@x, @"key1", @"value2", @"key2",nil];
                //                [m setObject:@x forKey:@"x"];
                //                [NSMutableDictionary alloc] ini
                //                my.put("x", x);
                //                my.put("y", y);
                //                my.put("a", 0.0);
                //                my.put("w", 45.0);
                //                my.put("h", 45.0);
                //                my.put("offsetY", 5.0);
                //                [self setExtentFrame:m :selectionOverlay :false];
            }
            //            if (callbackContext != null) {
            //                callbackContext.success();
            //                listenableFuture.removeDoneListener(this);
            //            }
        } else {
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
        }
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @""];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
    } @catch (NSException *exception) {
        
    }
}

/**
 * 设置是否可可以操控
 * @param bool
 */
-(void) setEnable:(CDVInvokedUrlCommand*)command{
    BOOL *enable = [[command.arguments objectAtIndex:0] boolValue];
    self.mapEnable = enable;
    //[self.webView setUserInteractionEnabled:!enable];
    NSString * callbackId = command.callbackId;
    CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @""];
    [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
}

- (void)mapView:(AGSMapView *)mapView didTapAtPoint:(CGPoint)screen mapPoint:(nonnull
                                                                              AGSPoint *)mappoint features:(NSDictionary *)features {
    NSLog(@"User tapped on the map at %f,%f", mappoint.x, mappoint.y);
}

/**
 * 添加选中的矩形框符号
 *
 * @param params
 * @param layer
 */
//- (void) setExtentFrame(Map<String, Double> params, GraphicsOverlay layer, Boolean center) {
//    try {
//        layer.getGraphics().clear();
//        if (!layer.isVisible()) {
//            layer.setVisible(true);
//        }
//        //添加图片要素
//        PictureMarkerSymbol tempSymol = null;
//        try {
//            InputStream is = this.cordova.getActivity().getAssets().open(extentFrameImg.toString());
//            BitmapDrawable drawable = (BitmapDrawable) BitmapDrawable.createFromStream(is, null);
//            tempSymol = new PictureMarkerSymbol(drawable);
//        } catch (Exception e) {
//        }
//
//        final PictureMarkerSymbol campsiteSymbol = tempSymol;
//        campsiteSymbol.setHeight(params.get("h").intValue());
//        campsiteSymbol.setWidth(params.get("w").intValue());
//        campsiteSymbol.setAngle(params.get("a").intValue());//角度
//        campsiteSymbol.setOffsetY(Float.valueOf(params.get("offsetY").toString()));
//        campsiteSymbol.loadAsync();
//        campsiteSymbol.addDoneLoadingListener(new Runnable() {
//            @Override
//            public void run() {
//                Point campsitePoint = new Point(params.get("x"), params.get("y"), ArcgisUtils.getSpatialReferences());
//                Graphic campsiteGraphic = new Graphic(campsitePoint, campsiteSymbol);
//                layer.getGraphics().add(campsiteGraphic);
//                if (center) {
//                    centerTo(params.get("x"), params.get("y"), mapView.getMapScale(), false, null);
//                }
//            }
//        });
//    } catch (Exception e) {
//        e.printStackTrace();
//    }
//}

/**
 * 换主题模式 白天黑夜两个层只保留一个，一个加载成功后把另一个删除
 *
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
            [self.mapView.backgroundGrid setColor:[ArcgisMapView colorWithRGB:0xF4F3F0 alpha:1]];
            //[self setEnable:true];
            //mapView.getBackgroundGrid().setColor(Color.TRANSPARENT);
        } else if([theme isEqualToString:@"light"]) {
            [self.tiledLayerBaseMap setVisible:true];
            if (self.nightTiledLayerBaseMap != NULL) {
                [self.nightTiledLayerBaseMap setVisible:false];
            }
            [self.mapView.map.basemap.baseLayers removeObjectAtIndex:index];
            [self.mapView.map.basemap.baseLayers insertObject:self.vectorTiledLayer atIndex:index];
            //mapView.getBackgroundGrid().setColor(Color.parseColor("#F4F3F0"));
            //[self setEnable:true];
        }
        NSString * callbackId = command.callbackId;
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @""];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
    } @catch(NSException *exception){
        NSLog(@"changeTheme  ERROR!");
        NSString * callbackId = command.callbackId;
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_ERROR messageAsString : @""];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
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
        BOOL *visible = [[command.arguments objectAtIndex:0] boolValue];
        if (self.tiledLayerBaseMap == NULL) {
            self.tiledLayerBaseMap = [[AGSArcGISTiledLayer alloc] initWithURL:[NSURL URLWithString:TILEDLAYERSERVICEURL]];
            [self.mapView.map.basemap.baseLayers insertObject:self.tiledLayerBaseMap atIndex:0];
        }
        if ([self.themeState isEqualToString:@"light"]) {
            [self.tiledLayerBaseMap setVisible:visible];
        } else {
            [self.nightTiledLayerBaseMap setVisible:visible];
        }
        NSString * callbackId = command.callbackId;
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @"changeTieldLayerVisible OK"];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
    } @catch (NSException *exception) {
        NSLog(@"changeTieldLayerVisible  ERROR!");
        NSString * callbackId = command.callbackId;
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_ERROR messageAsString : @""];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
    }
}

/**
 * 控制航道图显示与隐藏
 * @param visible
 * @param callbackContext
 */
-(void) changeChartLayerVisible:(CDVInvokedUrlCommand*)command {
    @try {
        BOOL *visible = [[command.arguments objectAtIndex:0] boolValue];
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
        NSString * callbackId = command.callbackId;
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @"changeChartLayerVisible OK"];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
    } @catch (NSException *exception) {
        NSLog(@"changeChartLayerVisible  ERROR!");
        NSString * callbackId = command.callbackId;
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_ERROR messageAsString : @"changeChartLayerVisible  ERROR"];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
    }
}

/**
 * 控制图幅图层的显示与隐藏
 * @param visible boolean
 */
-(void) changeFramesServerState:(CDVInvokedUrlCommand*)command {
    @try {
        BOOL *visible = [[command.arguments objectAtIndex:0] boolValue];
        if (self.mMapImageLayer == NULL) return;
        [self.mMapImageLayer setVisible:visible];
        NSString * callbackId = command.callbackId;
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : @"changeFramesServerState OK"];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
    } @catch (NSException *exception)  {
        NSLog(@"changeFramesServerState  ERROR!");
        NSString * callbackId = command.callbackId;
        CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_ERROR messageAsString : @""];
        [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
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
    [self convertToJsonData :centerPoint];
    //    Map<String, Double> map = new HashMap<>();
    //    try {
    //        Double x = mapView.getVisibleArea().getExtent().getCenter().getX();
    //        Double y = mapView.getVisibleArea().getExtent().getCenter().getY();
    //        map.put("x", x);
    //        map.put("y", y);
    //        JSONObject object = new JSONObject(map);
    //        callbackContext.success(object.toString());
    //    } catch (Exception e) {
    //        e.printStackTrace();
    //    }
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
    if(err)
    {
        NSLog(@"json解析失败：%@",err);
        return nil;
    }
    return dic;
}
@end



