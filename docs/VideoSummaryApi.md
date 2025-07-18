# MatroidPublicApi.VideoSummaryApi

All URIs are relative to *https://app.matroid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1StreamsStreamIdSummariesGet**](VideoSummaryApi.md#apiV1StreamsStreamIdSummariesGet) | **GET** /api/v1/streams/{streamId}/summaries | Get stream summaries
[**apiV1StreamsStreamIdSummarizePost**](VideoSummaryApi.md#apiV1StreamsStreamIdSummarizePost) | **POST** /api/v1/streams/{streamId}/summarize | Create stream summary
[**apiV1SummariesGet**](VideoSummaryApi.md#apiV1SummariesGet) | **GET** /api/v1/summaries | Get existing summaries
[**apiV1SummariesSummaryIdDelete**](VideoSummaryApi.md#apiV1SummariesSummaryIdDelete) | **DELETE** /api/v1/summaries/{summaryId} | Delete video summary
[**apiV1SummariesSummaryIdGet**](VideoSummaryApi.md#apiV1SummariesSummaryIdGet) | **GET** /api/v1/summaries/{summaryId} | Get video summary
[**apiV1SummariesSummaryIdTracksCsvGet**](VideoSummaryApi.md#apiV1SummariesSummaryIdTracksCsvGet) | **GET** /api/v1/summaries/{summaryId}/tracks.csv | Get video summary tracks CSV
[**apiV1SummariesSummaryIdVideoMp4Get**](VideoSummaryApi.md#apiV1SummariesSummaryIdVideoMp4Get) | **GET** /api/v1/summaries/{summaryId}/video.mp4 | Get video summary mp4 file



## apiV1StreamsStreamIdSummariesGet

> ApiV1StreamsStreamIdSummariesGet200Response apiV1StreamsStreamIdSummariesGet(streamId)

Get stream summaries

Fetches all summaries for a stream

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.VideoSummaryApi();
let streamId = "streamId_example"; // String | Unique ID of stream
apiInstance.apiV1StreamsStreamIdSummariesGet(streamId, (error, data, response) => {
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
 **streamId** | **String**| Unique ID of stream | 

### Return type

[**ApiV1StreamsStreamIdSummariesGet200Response**](ApiV1StreamsStreamIdSummariesGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1StreamsStreamIdSummarizePost

> ApiV1StreamsStreamIdSummarizePost200Response apiV1StreamsStreamIdSummarizePost(streamId, name, startTime, endTime, detectorId, opts)

Create stream summary

Creates a video summary from a stream

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.VideoSummaryApi();
let streamId = "streamId_example"; // String | Unique ID of the stream to summarize
let name = "name_example"; // String | Video summary name
let startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Video summary start time
let endTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Video summary end time
let detectorId = "detectorId_example"; // String | ID of the Localizer to be used
let opts = {
  'tracker': "tracker_example", // String | Version of the tracker to be used
  'reid': "reid_example", // String | Whether to use appearance for tracking
  'trackingOnly': "trackingOnly_example", // String | Whether to upload crops or just perform tracking
  'labels': ["null"], // [String] | List of human names of labels to be localized
  'fps': 3.4, // Number | Frames per second to process the Stream
  'mcLambda': 3.4, // Number | Weight tradeoff between appearance and motion features for matching
  'matchingDistance': 3.4, // Number | Distance threshold for matching
  'generateSummaryVideo': false, // Boolean | Whether to generate static video mp4 on backend
  'maxIouDist': 3.4, // Number | IOU distance threshold for matching
  'maxAge': 3.4, // Number | Max number of missed detections before deleting a track
  'nInit': 3.4, // Number | Number of frames to wait before assigning a track to a detection
  'nnBudget': 3.4, // Number | Number of feature vectors saved for each track
  'detectionThreshold': 3.4 // Number | Confidence threshold for detector
};
apiInstance.apiV1StreamsStreamIdSummarizePost(streamId, name, startTime, endTime, detectorId, opts, (error, data, response) => {
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
 **streamId** | **String**| Unique ID of the stream to summarize | 
 **name** | **String**| Video summary name | 
 **startTime** | **Date**| Video summary start time | 
 **endTime** | **Date**| Video summary end time | 
 **detectorId** | **String**| ID of the Localizer to be used | 
 **tracker** | **String**| Version of the tracker to be used | [optional] 
 **reid** | **String**| Whether to use appearance for tracking | [optional] 
 **trackingOnly** | **String**| Whether to upload crops or just perform tracking | [optional] 
 **labels** | [**[String]**](String.md)| List of human names of labels to be localized | [optional] 
 **fps** | **Number**| Frames per second to process the Stream | [optional] 
 **mcLambda** | **Number**| Weight tradeoff between appearance and motion features for matching | [optional] 
 **matchingDistance** | **Number**| Distance threshold for matching | [optional] 
 **generateSummaryVideo** | **Boolean**| Whether to generate static video mp4 on backend | [optional] [default to false]
 **maxIouDist** | **Number**| IOU distance threshold for matching | [optional] 
 **maxAge** | **Number**| Max number of missed detections before deleting a track | [optional] 
 **nInit** | **Number**| Number of frames to wait before assigning a track to a detection | [optional] 
 **nnBudget** | **Number**| Number of feature vectors saved for each track | [optional] 
 **detectionThreshold** | **Number**| Confidence threshold for detector | [optional] 

### Return type

[**ApiV1StreamsStreamIdSummarizePost200Response**](ApiV1StreamsStreamIdSummarizePost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1SummariesGet

> ApiV1SummariesGet200Response apiV1SummariesGet()

Get existing summaries

Fetches all summaries for a user

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.VideoSummaryApi();
apiInstance.apiV1SummariesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiV1SummariesGet200Response**](ApiV1SummariesGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1SummariesSummaryIdDelete

> ApiV1SummariesSummaryIdDelete200Response apiV1SummariesSummaryIdDelete(summaryId)

Delete video summary

Deletes an existing video summary

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.VideoSummaryApi();
let summaryId = "summaryId_example"; // String | Unique ID of video summary
apiInstance.apiV1SummariesSummaryIdDelete(summaryId, (error, data, response) => {
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
 **summaryId** | **String**| Unique ID of video summary | 

### Return type

[**ApiV1SummariesSummaryIdDelete200Response**](ApiV1SummariesSummaryIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1SummariesSummaryIdGet

> ApiV1SummariesSummaryIdGet200Response apiV1SummariesSummaryIdGet(summaryId)

Get video summary

Fetches an existing video summary

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.VideoSummaryApi();
let summaryId = "summaryId_example"; // String | Unique ID of video summary
apiInstance.apiV1SummariesSummaryIdGet(summaryId, (error, data, response) => {
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
 **summaryId** | **String**| Unique ID of video summary | 

### Return type

[**ApiV1SummariesSummaryIdGet200Response**](ApiV1SummariesSummaryIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1SummariesSummaryIdTracksCsvGet

> File apiV1SummariesSummaryIdTracksCsvGet(summaryId)

Get video summary tracks CSV

Downloads an existing video summary&#39;s tracks as CSV file stream

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.VideoSummaryApi();
let summaryId = "summaryId_example"; // String | ID of the video summary to get tracks for
apiInstance.apiV1SummariesSummaryIdTracksCsvGet(summaryId, (error, data, response) => {
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
 **summaryId** | **String**| ID of the video summary to get tracks for | 

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json


## apiV1SummariesSummaryIdVideoMp4Get

> File apiV1SummariesSummaryIdVideoMp4Get(summaryId)

Get video summary mp4 file

Downloads an existing video summary&#39;s mp4 file as a stream

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.VideoSummaryApi();
let summaryId = "summaryId_example"; // String | Unique ID of video summary
apiInstance.apiV1SummariesSummaryIdVideoMp4Get(summaryId, (error, data, response) => {
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
 **summaryId** | **String**| Unique ID of video summary | 

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: video/mp4

