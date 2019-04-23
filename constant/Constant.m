//
//  Constant.m
//  广东航道通
//
//  Created by wanger on 2019/4/19.
//

#import <Foundation/Foundation.h>
#import "Constant.h"

    //在线矢量切片服务
    NSString *const LOCALPATHDAYTIME = @"/gdhdt/map/gdhdt.vtpk";
    NSString *const LOCALPATHNIGHT=@"gdhdt/map/gdhdt_night.vtpk";
    NSString *const LOCALPATHTARGET = @"/gdhdt/map/gdhdt_target.vtpk";
    NSString *const PATHDAYTIME = @"http://14.23.108.204:10000/arcgis/rest/services/Hosted/gdhdt20190226/VectorTileServer";
    NSString *const PATHNIGHT = @"http://14.23.108.204:10000/arcgis/rest/services/Hosted/gdhdt_night20190226/VectorTileServer";
    NSString *const PATHTARGET = @"https://www.gdhdswzx.xyz:10001/arcgis/rest/services/Hosted/gdhdt_target/VectorTileServer";
    
    NSString *const NIGHTSTNIGHTSTYLEPATHYLEPATH = @"www/static/style/night.json.png";
    //在线动态服务地址
    NSString *const PATHLABEL = @"http://14.23.108.204:10000/arcgis/rest/services/gdhdt_label/MapServer";
    NSString *const TARGETINFOSERVICEURL = @"http://14.23.108.204:10000/arcgis/rest/services/targetQuery/MapServer";
    NSString *const TILEDLAYERSERVICEURL = @"http://14.23.108.204:10000/arcgis/rest/services/base/MapServer";
    NSString *const NIGHTTILEDLAYERSERVICEURL = @"http://14.23.108.204:10000/arcgis/rest/services/base_night/MapServer";
    NSString *const FRAMESSERVERPATH = @"http://14.23.108.204:10000/arcgis/rest/services/gdhdt_channel/MapServer";
    //业务编码配置
    NSString *const AIDSNAVIGATION_CODE = @"013007";//航标code
    NSString *const GAGE_CODE = @"013010";//水位站code
    NSString *const SHIP_CODE = @"013001";//船舶code
    NSString *const WEATHER_CODE = @"013011";//天气code
    NSString *const MARK_CODE = @"";//标注
    NSString *const REPORT_CODE = @"013019";//上报
    NSString *const BUILDING_CODE = @"";//建筑物code
    NSString *const WATER_TEST_RESULTS_CODE = @"";//测水结果code
    
    /**
     * NET常量
     */
    NSString *const WIFI = @"WIFI";
    NSString *const MOBILE_2G = @"2G";
    NSString *const MOBILE_3G = @"3G";
    NSString *const MOBILE_4G = @"4G";
    NSString *const MOBILE_5G = @"5G";
