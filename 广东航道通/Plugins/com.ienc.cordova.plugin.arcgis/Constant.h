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


/**
 * NET常量
 */
NSString *WIFI = @"WIFI";
NSString *MOBILE_2G = @"2G";
NSString *MOBILE_3G = @"3G";
NSString *MOBILE_4G = @"4G";
NSString *MOBILE_5G = @"5G";

//
//#import "NSDictionaryReadAdditions.h"

//typedef NS_ENUM(NSUInteger, PODTYPE)
//{
//    PT_UNKNOWN = -1,
//    PT_INT = 0,
//    PT_FLOAT,
//    PT_DOUBLE,
//    PT_BOOL,
//    PT_INT64,
//    PT_STRING,
//    PT_ARRAY,
//};
//
//@implementation NSDictionary (ReadAdditions)
//
//-(PODTYPE)getPodType:(id)obj
//{
//    if([obj isKindOfClass:[NSNumber class]])
//    {
//        const char * pObjCType = [((NSNumber*)obj) objCType];
//        if (strcmp(pObjCType, @encode(BOOL)) == 0)
//        {
//            return PT_BOOL;
//        }
//        if (strcmp(pObjCType, @encode(int)) == 0)
//        {
//            return PT_INT;
//        }
//        if (strcmp(pObjCType, @encode(float)) == 0)
//        {
//            return PT_FLOAT;
//        }
//        if (strcmp(pObjCType, @encode(double)) == 0)
//        {
//            return PT_DOUBLE;
//        }
//    }
//    return PT_UNKNOWN;
//}
//-(BOOL)isPodIntObj:(id)obj
//{
//    if (nil == obj)
//        return NO;
//    if([obj isKindOfClass:[NSNumber class]])
//    {
//        const char * pObjCType = [((NSNumber*)obj) objCType];
//        if (strcmp(pObjCType, @encode(int)) == 0)
//        {
//            return YES;
//        }
//    }
//    return NO;
//}
//-(BOOL)isPodBoolObj:(id)obj
//{
//    if (nil == obj)
//        return NO;
//    if([obj isKindOfClass:[NSNumber class]])
//    {
//        const char * pObjCType = [((NSNumber*)obj) objCType];
//        if (strcmp(pObjCType, @encode(BOOL)) == 0)
//        {
//            return YES;
//        }
//    }
//    return NO;
//}
//-(BOOL)isPodFloatObj:(id)obj
//{
//    if (nil == obj)
//        return NO;
//    if([obj isKindOfClass:[NSNumber class]])
//    {
//        const char * pObjCType = [((NSNumber*)obj) objCType];
//        if (strcmp(pObjCType, @encode(float)) == 0)
//        {
//            return YES;
//        }
//    }
//    return NO;
//}
//-(BOOL)isPodInt64Obj:(id)obj
//{
//    if (nil == obj)
//        return NO;
//    if([obj isKindOfClass:[NSNumber class]])
//    {
//        const char * pObjCType = [((NSNumber*)obj) objCType];
//        if (strcmp(pObjCType, @encode(long long)) == 0)
//        {
//            return YES;
//        }
//    }
//    return NO;
//}
//-(BOOL)isNSTypeObj:(id)obj andType:(Class)objClass
//{
//    if (nil == obj || nil == objClass)
//        return NO;
//    if ([obj isMemberOfClass:objClass])
//    {
//        return YES;
//    }
//    return NO;
//}
//
//- (BOOL)getBoolValueForKey:(NSString *)key defaultValue:(BOOL)defaultValue {
//    id obj = [self getValueForKey:key defaultValue:nil];
//    if (nil == obj)
//    {
//        return defaultValue;
//    }
//    if ([self isPodBoolObj:obj])
//        return [obj boolValue];
//    else
//    {
//        NSLog(@"警告[%s],数据对象类型不符:%@",__FUNCTION__, key);
//    }
//    return defaultValue;
//}
//
//- (NSInteger)getIntValueForKey:(NSString *)key defaultValue:(NSInteger)defaultValue {
//    id obj = [self getValueForKey:key defaultValue:nil];
//    if (nil == obj)
//    {
//        return defaultValue;
//    }
//    if ([self isPodIntObj:obj])
//        return [obj integerValue];
//    else
//    {
//        NSLog(@"警告[%s],数据对象类型不符:%@",__FUNCTION__, key);
//    }
//    return defaultValue;
//}
//- (float)getFloatValueForKey:(NSString *)key defaultValue:(float)defaultValue
//{
//    id obj = [self getValueForKey:key defaultValue:nil];
//    if (nil == obj)
//    {
//        return defaultValue;
//    }
//    if ([self isPodFloatObj:obj])
//        return [obj floatValue];
//    else
//    {
//        NSLog(@"警告[%s],数据对象类型不符:%@",__FUNCTION__, key);
//    }
//    return defaultValue;
//}
//
//- (time_t)getTimeValueForKey:(NSString *)key defaultValue:(time_t)defaultValue {
//    NSString *stringTime   = [self objectForKey:key];
//    if ((id)stringTime == [NSNull null]) {
//        stringTime = @"";
//    }
//    struct tm created;
//    time_t now;
//    time(&now);
//
//    if (stringTime) {
//        if (strptime([stringTime UTF8String], "%a %b %d %H:%M:%S %z %Y", &created) == NULL) {
//            strptime([stringTime UTF8String], "%a, %d %b %Y %H:%M:%S %z", &created);
//        }
//        return mktime(&created);
//    }
//    return defaultValue;
//}
//
//- (long long)getLongLongValueValueForKey:(NSString *)key defaultValue:(long long)defaultValue {
//    id obj = [self getValueForKey:key defaultValue:nil];
//    if (nil == obj)
//    {
//        return defaultValue;
//    }
//    if ([self isPodInt64Obj:obj])
//        return [obj longLongValue];
//    else
//    {
//        NSLog(@"警告[%s],数据对象类型不符:%@",__FUNCTION__, key);
//    }
//    return defaultValue;
//}
//
//- (NSString *)getStringValueForKey:(NSString *)key defaultValue:(NSString *)defaultValue
//{
//    id obj = [self getValueForKey:key defaultValue:nil];
//    if (nil == obj)
//    {
//        return defaultValue;
//    }
//    if ([self isNSTypeObj:obj andType:[NSString class]])
//        return obj;
//    else
//    {
//        NSLog(@"警告[%s],数据对象类型不符:%@",__FUNCTION__, key);
//    }
//    return defaultValue;
//
//    return [self objectForKey:key] == nil || [self objectForKey:key] == [NSNull null] ? defaultValue : [self objectForKey:key];
//}
//
//-(id)getValueForKey:(NSString*)key defaultValue:(id)defaultValue
//{
//    return [self objectForKey:key] == nil || [self objectForKey:key] == [NSNull null]
//    ? defaultValue : [self objectForKey:key];
//}
//-(CGPoint)getPointForKey:(NSString*)xKey yKey:(NSString*)yKey  defaultValue:(CGPoint)defaultValue
//{
//    CGPoint tmp = CGPointZero;
//    tmp.x = [self getFloatValueForKey:xKey defaultValue:defaultValue.x];
//    tmp.y = [self getFloatValueForKey:yKey defaultValue:defaultValue.y];
//    return tmp;
//}
//@end
