//本地离线地图å
//NSString *LOCALPATHDAYTIME = @Environment.getExternalStorageDirectory() + "/gdhdt/map/gdhdt.vtpk";
//NSString *LOCALPATHNIGHT = @Environment.getExternalStorageDirectory() + "/gdhdt/map/gdhdt_night.vtpk";
//NSString *LOCALPATHTARGET = @Environment.getExternalStorageDirectory() + "/gdhdt/map/gdhdt_target.vtpk";
//在线矢量切片服务
NSString *PATHDAYTIME = @"http://14.23.108.204:10000/arcgis/rest/services/Hosted/gdhdt20190226/VectorTileServer";
NSString *PATHNIGHT = @"http://14.23.108.204:10000/arcgis/rest/services/Hosted/gdhdt_night20190226/VectorTileServer";
NSString *PATHTARGET = @"https://www.gdhdswzx.xyz:10001/arcgis/rest/services/Hosted/gdhdt_target/VectorTileServer";

NSString *NIGHTSTNIGHTSTYLEPATHYLEPATH = @"www/static/style/night.json.png";
//在线动态服务地址
NSString *PATHLABEL = @"http://14.23.108.204:10000/arcgis/rest/services/gdhdt_label/MapServer";
NSString *TARGETINFOSERVICEURL = @"http://14.23.108.204:10000/arcgis/rest/services/targetQuery/MapServer";
NSString *TILEDLAYERSERVICEURL = @"http://14.23.108.204:10000/arcgis/rest/services/base/MapServer";
NSString *NIGHTTILEDLAYERSERVICEURL = @"http://14.23.108.204:10000/arcgis/rest/services/base_night/MapServer";
NSString *FRAMESSERVERPATH = @"http://14.23.108.204:10000/arcgis/rest/services/gdhdt_channel/MapServer";
//业务编码配置
NSString *AIDSNAVIGATION_CODE = @"013007";//航标code
NSString *GAGE_CODE = @"013010";//水位站code
NSString *SHIP_CODE = @"013001";//船舶code
NSString *WEATHER_CODE = @"013011";//天气code
NSString *MARK_CODE = @"001001";//标注
NSString *REPORT_CODE = @"013019";//上报
NSString *BUILDING_CODE = @"";//建筑物code
NSString *WATER_TEST_RESULTS_CODE = @"";//测水结果code

NSString *themeState = @"light"; // dark

/**
 * NET常量
 */
NSString *WIFI = @"WIFI";
NSString *MOBILE_2G = @"2G";
NSString *MOBILE_3G = @"3G";
NSString *MOBILE_4G = @"4G";
NSString *MOBILE_5G = @"5G";


