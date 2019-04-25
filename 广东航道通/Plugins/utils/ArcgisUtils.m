//
//  ArcgisUtils.m
//  广东航道通
//
//  Created by zhaowanfeng on 2019/4/22.
//
#import "ArcgisUtils.h"
@implementation ArcgisUtils

+(AGSSpatialReference*) getSpatialReferences
{
    return [AGSSpatialReference WGS84];
}
@end



