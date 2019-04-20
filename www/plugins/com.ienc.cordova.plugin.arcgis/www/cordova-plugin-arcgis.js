cordova.define("com.ienc.cordova.plugin.arcgis.cordova-plugin-arcgis", function(require, exports, module) {
var exec = require('cordova/exec');
module.exports = {
    reload :function (successCallback,errorCallback) {
        exec(successCallback,errorCallback, 'Arcgis', 'reload', []);
    },
    setEnable :function (enable,successCallback,errorCallback) {
        exec(successCallback,errorCallback, 'Arcgis', 'setEnable', [enable]);
    },
    setVisibility :function (visibility,successCallback,errorCallback) {
        exec(successCallback,errorCallback, 'Arcgis', 'setVisibility', [visibility]);
    },
    zoom :function (scale,successCallback,errorCallback) {
        exec(successCallback,errorCallback, 'Arcgis', 'zoom', [scale]);
    },
    zoomIn :function (successCallback,errorCallback) {
        exec(successCallback,errorCallback, 'Arcgis', 'zoomIn', []);
    },
    zoomOut :function (successCallback,errorCallback) {
        exec(successCallback,errorCallback, 'Arcgis', 'zoomOut', []);
    },
    opengps :function (successCallback,errorCallback) {
        exec(successCallback,errorCallback, 'Arcgis', 'opengps', []);
    },
    isopengps :function (successCallback,errorCallback) {
        exec(successCallback, errorCallback,'Arcgis', 'isopengps', []);
    },
    location :function (successCallback,errorCallback) {
        exec(successCallback, errorCallback,'Arcgis', 'location', []);
    },
    getScale :function (successCallback,errorCallback) {
        exec(successCallback,errorCallback,'Arcgis', 'getScale', []);
    },
    setScale :function (scale,successCallback,errorCallback) {
        exec(successCallback,errorCallback,'Arcgis', 'setScale', [scale]);
    },
    centerAt:function (x,y,successCallback,errorCallback,scale) {
        if(scale){
            exec(successCallback,errorCallback,'Arcgis', 'centerAt', [x,y,scale]);
        }else{
            exec(successCallback,errorCallback,'Arcgis', 'centerAt', [x,y]);
        }
    },
    screenToLocation:function (x,y,successCallback,errorCallback) {
        exec(successCallback,errorCallback,'Arcgis', 'screenToLocation', [x,y]);
    },
    locationToScreen:function (x,y,successCallback,errorCallback) {
        exec(successCallback,errorCallback,'Arcgis', 'locationToScreen', [x,y]);
    },
    changeTheme:function (theme,successCallback,errorCallback) {
        exec(successCallback, errorCallback,'Arcgis', 'changeTheme', [theme]);
    },
    getCentralPoint:function (successCallback,errorCallback) {
        exec(successCallback, errorCallback,'Arcgis', 'getCentralPoint', []);
    },
    getStyle:function (successCallback,errorCallback) {
        exec(successCallback,errorCallback,'Arcgis', 'getStyle', []);
    },
    setStyle:function (style,successCallback,errorCallback) {
        exec(successCallback,errorCallback,'Arcgis', 'setStyle', [style]);
    },
    listInfos:function (data,successCallback,errorCallback) {
            exec(successCallback,errorCallback,'Arcgis', 'listInfos', data);
    },
    setAirworthiness:function(data,successCallback,errorCallback){
        exec(successCallback, errorCallback,'Arcgis', 'setAirworthiness', data);
    },
    clearAirworthiness:function(data,successCallback,errorCallback){
        exec(successCallback, errorCallback,'Arcgis', 'clearAirworthiness', data);
    },
    hideLayers:function(layersArray,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis', 'hideLayers', layersArray);
    },
    showLayers:function(layersArray,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis', 'showLayers', layersArray);
    },
    sendClickItems:function(type,item){
        console.log(type)
        console.dir(item)
    },
    positioningElement:function(id,type,items,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis', 'positioningElement', [id,type,items]);
    },
    pathPlanning:function(startPoint,endPoint,successCallback,errorCallback){
        //exec(successCallback, null,'Arcgis', 'pathPlanning', [startPoint,endPoint]);
        exec(successCallback, null,'Arcgis', 'pathPlanning', [startPoint,endPoint]);
    },
    changeRoute:function(routeId,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis', 'changeRoute', [routeId]);
    },
    navigationStarting:function(routeId,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis', 'startGuide', [routeId]);
    },
    changeNavigationType:function(type,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis', 'changeNavigationType', [type]);
    },
    realGuide:function(routeId,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis', 'realGuide', [routeId]);
    },
    remainLength:function(length,successCallback,errorCallback){
        console.log("导航剩余" + length + "米");
    },
    speak:function(message,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis', 'speak', [message]);
    },
    setSpeaker:function(who,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis', 'setSpeaker', [who]);
    },
    truenorth:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis', 'truenorth', []);
    },
    compassMode:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis', 'compassMode', []);
    },
    changeFramesServerState:function(visibility,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','changeFramesServerState',[visibility]);
    },
    getMapExtent:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','getMapExtent',[]);
    },
    share:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','share',[]);
    },
    clearHistory:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','clearHistory',[]);
    },
    changeTieldLayerVisible:function(visibility,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','changeTieldLayerVisible',[visibility]);
    },
    changeChartLayerVisible:function(visibility,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','changeChartLayerVisible',[visibility]);
    },
    saveFile:function(version,file,successCallback,errorCallback){
         exec(successCallback,errorCallback,'Arcgis','saveFile',[version,file]);
    },
    getVersion:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','getVersion',[]);
    },
    cancelPathPlanning:function(routeId,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','cancelPathPlanning',[routeId]);
    },
    downloadFile:function(url,path,successCallback,errorCallback){
         exec(successCallback,errorCallback,'Arcgis','downloadFile',[url,path]);
    },
    downloadFilePause:function(downloadId){
      exec(null,null,'Arcgis','downloadFilePause',[downloadId]);
    },
    downloadFileClear:function(downloadId,path){
       exec(null,null,'Arcgis','downloadFileClear',[downloadId,path]);
    },
    downloadFileSatus:function(downloadId,path,successCallback){
        exec(successCallback,null,'Arcgis','downloadFileSatus',[downloadId,path]);
    },
    stopBroadcast:function(data,successCallback,errorCallback){
        exec(successCallback,null,'Arcgis','stopBroadcast',[data]);
    },
    pauseBroadcast:function(data,successCallback,errorCallback){
        exec(successCallback,null,'Arcgis','pauseBroadcast',[data]);
    },
    resumeBroadcast:function(data,successCallback,errorCallback){
        exec(successCallback,null,'Arcgis','resumeBroadcast',[data]);
    },
    getAppCache :function (successCallback,errorCallback) { //应用缓存
        exec(successCallback,errorCallback,'Arcgis', 'getAppCache', []);
    },
    installationApkfile :function (filepath,successCallback,errorCallback) { //应用缓存
        exec(successCallback,errorCallback,'Arcgis', 'installationApkfile', [filepath]);
    },
    registerNetReceiver:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','registerNetReceiver',[]);
    },
    observeWifiSwitch:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','observeWifiSwitch',[]);
    },
    getScreenBrightness:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','getScreenBrightness',[]);
    },
    setFinishMask:function(routrId,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','setFinishMask',[routrId]);
    },
    clearMask:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','clearMask',[]);
    },
    getLength:function(x,y,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','getLength',[x,y]);
    },
    getSelectCenter:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','getSelectCenter',[]);
    },
    refreshMapLayers:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','refreshMapLayers',[]);
    },
    callPhone:function(call,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','callPhone',[call]);
    },
    getLocalVectorFileInfo:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','getLocalVectorFileInfo',[]);
    },
    getBridgeClearanceHeight:function(bridgeClearanceHeight,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','getBridgeClearanceHeight',[bridgeClearanceHeight]);
    },
    setTargetInfo:function(height,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','setTargetInfo',[height]);
    },
    getGaugingStation:function(data,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','getGaugingStation'[data]);
    },
    toNetWorkSetting:function(successCallback,errorCallback){
    	exec(successCallback,errorCallback,'Arcgis','toNetWorkSetting',[]);
    },
	disposeMapScale:function(successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','disposeMapScale',[]);
    },
    emptyLayer:function(layerId,successCallback,errorCallback){
        exec(successCallback,errorCallback,'Arcgis','emptyLayer',[layerId]);
    }
}

});
