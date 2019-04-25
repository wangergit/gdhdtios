//
//  Utils.m
//  广东航道通
//
//  Created by wanger on 2019/4/24.
//

#import <Foundation/Foundation.h>
#import "Utils.h"

@implementation Utils
+(NSString *)jsonStrConvertByObject:(NSMutableDictionary *)dict
{
    //whether a given object can be converted to JSON data.
    if ([NSJSONSerialization isValidJSONObject:dict]) {
        NSError *error;
        NSData *data = [NSJSONSerialization dataWithJSONObject:dict options:NSJSONWritingPrettyPrinted error:&error];
        NSString *resultStr = [[NSString alloc]initWithData:data encoding:NSUTF8StringEncoding];
        return resultStr;
    }else{
        return nil;
    }
}
//判断字符串是否为空
+(BOOL) isBlankString:(NSString *)string {
    if (string == nil || string == NULL) {
        return YES;
    }
    if ([string isKindOfClass:[NSNull class]]){
        return YES;
    }
    if ([[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet]] length]==0) {
        return YES;
    }
    return NO;
}

@end
