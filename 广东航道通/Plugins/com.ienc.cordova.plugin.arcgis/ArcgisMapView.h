#import <Cordova/CDVPlugin.h>
#import <UIKit/UIKit.h>
#import <ArcGIS/ArcGIS.h>
#import "Utils.h"
@interface ArcgisMapView :CDVPlugin <AGSGeoViewTouchDelegate>
//变量
/**
 地图view变量
 */
@property (nonatomic, strong) AGSMapView *mapView;
@property (nonatomic, strong) AGSMap *basemap;
@property (nonatomic, strong) AGSSpatialReference *mapSpatialReference;
@property (nonatomic, strong) AGSArcGISTiledLayer *nightTiledLayerBaseMap;
@property (nonatomic, strong) AGSArcGISTiledLayer *tiledLayerBaseMap;
@property (nonatomic, strong) AGSArcGISVectorTiledLayer *vectorTiledLayer;
@property (nonatomic, strong) AGSArcGISVectorTiledLayer *nightVectorTiledLayer;
@property (nonatomic, strong) AGSArcGISVectorTiledLayer *vectorLabelLayer;
@property (nonatomic, strong) AGSArcGISVectorTiledLayer *vectorTargetLayer;//航标矢量服务
@property NSString *TAG;
//@property (nonatomic, strong) AGSBasemap *basemap;
@property (nonatomic, strong) AGSLocationDisplay *locationDisplay;
@property double mapScale ; //地图比例尺记录
@property (nonatomic, strong) AGSArcGISMapImageLayer *mMapImageLayer;//图幅
@property (nonatomic, strong) AGSArcGISMapImageLayer *beaconMapImageLayer;//航标
@property (nonatomic, strong) AGSArcGISMapImageLayer *labelMapImageLayer;//地名
@property Boolean mapViewLoad;//地图初始化定位缩放
//业务要素图层
@property (nonatomic, strong) AGSGraphicsOverlay *navigationOverlay;//航标要素图层    业务代码1
@property (nonatomic, strong) AGSGraphicsOverlay *waterStationOverlay;//水位站要素图层   业务代码2
@property (nonatomic, strong) AGSGraphicsOverlay *shipOverlay;//船舶要素图层   业务代码3
@property (nonatomic, strong) AGSGraphicsOverlay *regulationBuildOverlay;//整治建筑物要素图层   业务代码4
@property (nonatomic, strong) AGSGraphicsOverlay *waterDepthOverlay;//测水结果要素图层   业务代码5
@property (nonatomic, strong) AGSGraphicsOverlay *markOverlay;//标注要素图层
@property (nonatomic, strong) AGSGraphicsOverlay *weatherOverlay;//天气要素图层
@property (nonatomic, strong) AGSGraphicsOverlay *reportOverlay;//上报要素图层
@property (nonatomic, strong) AGSGraphicsOverlay *selectionOverlay;//选中符号等要素图层   业务代码6
@property (nonatomic, strong) AGSGraphicsOverlay *airworthinessOverlay;//适航水深
@property (nonatomic, strong) AGSGraphicsOverlay *sheetOverlay;//图幅图层
@property (nonatomic, strong) AGSGraphicsOverlay *maskOverlay;//图幅图层
@property (nonatomic, strong) AGSGraphicsOverlay *mGraphicsOverlay; //起点终点绘制图层
@property (nonatomic, strong) AGSGraphicsOverlay *afterGraphicsOverlay; //已驶过绘制图层
@property (nonatomic, strong) AGSGraphicsOverlay *routeGraphicsOverlay; //规划线路绘制图层
@property (nonatomic, strong) AGSGraphicsOverlay *guideGraphicsOverlay; //助航线路绘制图层
@property Boolean mapEnable;
@property NSInteger startLine;//23608333;//0x01683C0D;
@property NSInteger endLine;//23918740;//0x016CF894;
@property NSString *zdImg;//航标终端图片url
@property NSString *extentFrameImg;//选中矩形图片url
@property NSString *selectionLayer;//当前选中图层记录
@property double layerMinScale;  //业务图层显示比例尺配置
@property double positionScale;  //搜索定位比例尺配置
@property Boolean compassModeType;
@property double averageSpeed; // 前端输入平均速度 单位m/s
@property NSString *themeState;
//路径规划相关
@property (nonatomic, strong) AGSPictureMarkerSymbol *guideModelPictureSymbol;
@property (nonatomic, strong) AGSPictureMarkerSymbol *guideAnglePictureSymbol;
@property (nonatomic, strong) AGSPoint *mSourcePoint;
@property (nonatomic, strong) AGSPoint *mDestinationPoint;
@property Boolean guideBool;
@property (nonatomic, strong) AGSSimpleLineSymbol *mRouteSymbol; //路径规划符号配置
@property int mRouteWidth;
@property NSString *guideStartTime;
@property NSString *guideEndTime;
@property NSString *startImg;  //起点图片
@property NSString *endImg;  //终点图片
//助航相关
@property (nonatomic, strong) AGSGraphicsOverlay *cutRouteGraphicLayer; //当前定位
@property (nonatomic, strong) AGSGraphicsOverlay *guideModelGraphicLayer; //当前定位
@property (nonatomic, strong) AGSGraphicsOverlay *guideAngleGraphicLayer; //当前方向
@property NSString *guideModelType;//状态类型   //course 航向   // trueNorth  正北
@property NSString *guideModelSource; //助航模式来源    //simulation  模拟   //real  真实
@property Boolean guideMapMoveListener; //监听助航状态下地图拖动
@property Boolean guideCallback; //实时定位计算结果是否完成变量存储
@property (nonatomic, strong) AGSGraphicsOverlay *planGuideLayer; //当前点  到起点图层
//离线地图文件是否存在
@property Boolean isMapfile;
@property int isMapCount;
//当前定位坐标记录
@property double curPointX;
@property double curPointY;

@property (nonatomic, strong) NSTimer *timer;//定时器
@property Boolean isPause;//是否暂停
@property NSInteger currentSecond;//当前毫秒数
@property (nonatomic,strong)NSThread *timerThread;
@property (nonatomic,strong)NSThread *navMapThread;
@property (nonatomic,strong)NSThread *aisThread;//

/**
 插件初始化回调函数
 */
- (void)pluginInitialize;
-(void) clearWeatherGraphics:(double) scale;
-(NSDictionary*) getMapViewExtent;
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
