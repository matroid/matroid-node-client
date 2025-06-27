# MatroidPublicApi.VideosApi

All URIs are relative to *https://app.matroid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DetectorsDetectorIdClassifyVideoPost**](VideosApi.md#apiV1DetectorsDetectorIdClassifyVideoPost) | **POST** /api/v1/detectors/{detectorId}/classify_video | Classify video
[**apiV1VideosVideoIdGet**](VideosApi.md#apiV1VideosVideoIdGet) | **GET** /api/v1/videos/{videoId} | Get video results



## apiV1DetectorsDetectorIdClassifyVideoPost

> ApiV1DetectorsDetectorIdClassifyVideoPost200Response apiV1DetectorsDetectorIdClassifyVideoPost(detectorId, opts)

Classify video

Asynchronously classifies a video using a detector. The classification results can be retrieved using the Get Video Results endpoint.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.VideosApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector with which to classify
let opts = {
  'url': "url_example", // String | URL of a supported video (e.g. Youtube video)
  'videoId': "videoId_example", // String | URL and videoId can both be supplied to skip downloading an existing video
  'file': "/path/to/file", // File | Video file (alternative to url)
  'fps': 1, // Number | Number of frames per second
  'annotationThresholds': {key: null}, // {String: Number} | Mapping of label names to confidence thresholds
  'forceReclassify': true, // Boolean | Whether to force reclassification of the video
  'taskId': "taskId_example" // String | Whether to include task ID in response
};
apiInstance.apiV1DetectorsDetectorIdClassifyVideoPost(detectorId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detectorId** | **String**| Unique ID of the detector with which to classify | 
 **url** | **String**| URL of a supported video (e.g. Youtube video) | [optional] 
 **videoId** | **String**| URL and videoId can both be supplied to skip downloading an existing video | [optional] 
 **file** | **File**| Video file (alternative to url) | [optional] 
 **fps** | **Number**| Number of frames per second | [optional] [default to 1]
 **annotationThresholds** | [**{String: Number}**](Object.md)| Mapping of label names to confidence thresholds | [optional] 
 **forceReclassify** | **Boolean**| Whether to force reclassification of the video | [optional] 
 **taskId** | **String**| Whether to include task ID in response | [optional] 

### Return type

[**ApiV1DetectorsDetectorIdClassifyVideoPost200Response**](ApiV1DetectorsDetectorIdClassifyVideoPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1VideosVideoIdGet

> ApiV1VideosVideoIdGet200Response apiV1VideosVideoIdGet(videoId, opts)

Get video results

Retrieves classification progress and results for a video.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.VideosApi();
let videoId = "videoId_example"; // String | Unique ID of the video to retrieve results for
let opts = {
  'threshold': 3.4, // Number | Minimum confidence for returned detections
  'format': "'json'", // String | Format of the results
  'annotations': true // Boolean | Whether to include annotations in the response
};
apiInstance.apiV1VideosVideoIdGet(videoId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| Unique ID of the video to retrieve results for | 
 **threshold** | **Number**| Minimum confidence for returned detections | [optional] 
 **format** | **String**| Format of the results | [optional] [default to &#39;json&#39;]
 **annotations** | **Boolean**| Whether to include annotations in the response | [optional] 

### Return type

[**ApiV1VideosVideoIdGet200Response**](ApiV1VideosVideoIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv

