# MatroidPublicApi.TemporalTaskApi

All URIs are relative to *https://192.168.86.46*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1MonitoringsMonitoringIdProcessClipsPost**](TemporalTaskApi.md#apiV1MonitoringsMonitoringIdProcessClipsPost) | **POST** /api/v1/monitorings/{monitoringId}/process-clips | Process existing stream clips with monitoring
[**apiV1StreamsStreamIdSampleStreamPost**](TemporalTaskApi.md#apiV1StreamsStreamIdSampleStreamPost) | **POST** /api/v1/streams/{streamId}/sample-stream | Sample frames from stream
[**apiV1StreamsStreamIdTemporalTaskPost**](TemporalTaskApi.md#apiV1StreamsStreamIdTemporalTaskPost) | **POST** /api/v1/streams/{streamId}/temporal-task | Run temporal task inference on a stream
[**apiV1StreamsStreamIdTemporalTasksGet**](TemporalTaskApi.md#apiV1StreamsStreamIdTemporalTasksGet) | **GET** /api/v1/streams/{streamId}/temporal-tasks | Get stream temporal tasks
[**apiV1TemporalTaskPost**](TemporalTaskApi.md#apiV1TemporalTaskPost) | **POST** /api/v1/temporal-task | Create temporal task
[**apiV1TemporalTasksGet**](TemporalTaskApi.md#apiV1TemporalTasksGet) | **GET** /api/v1/temporal-tasks | Get existing temporal tasks
[**apiV1TemporalTasksTaskIdDelete**](TemporalTaskApi.md#apiV1TemporalTasksTaskIdDelete) | **DELETE** /api/v1/temporal-tasks/{taskId} | Delete temporal task
[**apiV1TemporalTasksTaskIdGet**](TemporalTaskApi.md#apiV1TemporalTasksTaskIdGet) | **GET** /api/v1/temporal-tasks/{taskId} | Get temporal task details
[**apiV1TemporalTasksTaskIdKillPut**](TemporalTaskApi.md#apiV1TemporalTasksTaskIdKillPut) | **PUT** /api/v1/temporal-tasks/{taskId}/kill | Kill temporal task
[**apiV1TemporalTasksTaskIdPredsJsonGet**](TemporalTaskApi.md#apiV1TemporalTasksTaskIdPredsJsonGet) | **GET** /api/v1/temporal-tasks/{taskId}/preds.json | Get temporal task prediction results



## apiV1MonitoringsMonitoringIdProcessClipsPost

> ApiV1MonitoringsMonitoringIdProcessClipsPost200Response apiV1MonitoringsMonitoringIdProcessClipsPost(monitoringId, opts)

Process existing stream clips with monitoring

Run a monitoring on an existing stream recording. This will remove existing detections for the time range.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.TemporalTaskApi();
let monitoringId = "monitoringId_example"; // String | Unique ID of the monitoring to run on the stream
let opts = {
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | ISO 8601 start time for processing (e.g. 2021-04-12T22:53:17.902Z)
  'endTime': new Date("2013-10-20T19:20:30+01:00") // Date | ISO 8601 end time for processing (e.g. 2021-04-13T22:53:17.902Z)
};
apiInstance.apiV1MonitoringsMonitoringIdProcessClipsPost(monitoringId, opts, (error, data, response) => {
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
 **monitoringId** | **String**| Unique ID of the monitoring to run on the stream | 
 **startTime** | **Date**| ISO 8601 start time for processing (e.g. 2021-04-12T22:53:17.902Z) | [optional] 
 **endTime** | **Date**| ISO 8601 end time for processing (e.g. 2021-04-13T22:53:17.902Z) | [optional] 

### Return type

[**ApiV1MonitoringsMonitoringIdProcessClipsPost200Response**](ApiV1MonitoringsMonitoringIdProcessClipsPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1StreamsStreamIdSampleStreamPost

> ApiV1StreamsStreamIdSampleStreamPost200Response apiV1StreamsStreamIdSampleStreamPost(streamId, detectorId, label, startTime, endTime, opts)

Sample frames from stream

Sample frames from a stream and populate as training data for target detector. 

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.TemporalTaskApi();
let streamId = "streamId_example"; // String | Unique ID of the stream to sample from
let detectorId = "detectorId_example"; // String | ID of the detector to populate with sampled frames
let label = "label_example"; // String | Name of the label to populate with sampled frames
let startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Temporal task start time
let endTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Temporal task end time
let opts = {
  'fps': 1 // Number | Frames per second to sample the video at
};
apiInstance.apiV1StreamsStreamIdSampleStreamPost(streamId, detectorId, label, startTime, endTime, opts, (error, data, response) => {
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
 **streamId** | **String**| Unique ID of the stream to sample from | 
 **detectorId** | **String**| ID of the detector to populate with sampled frames | 
 **label** | **String**| Name of the label to populate with sampled frames | 
 **startTime** | **Date**| Temporal task start time | 
 **endTime** | **Date**| Temporal task end time | 
 **fps** | **Number**| Frames per second to sample the video at | [optional] [default to 1]

### Return type

[**ApiV1StreamsStreamIdSampleStreamPost200Response**](ApiV1StreamsStreamIdSampleStreamPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1StreamsStreamIdTemporalTaskPost

> ApiV1StreamsStreamIdTemporalTaskPost200Response apiV1StreamsStreamIdTemporalTaskPost(streamId, name, startTime, endTime, detectorId, opts)

Run temporal task inference on a stream

Localize actions in a stream using specified detectors and labels

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.TemporalTaskApi();
let streamId = "streamId_example"; // String | Unique ID of the stream to localize actions in
let name = "name_example"; // String | Name of the temporal task
let startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Temporal task start time
let endTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Temporal task end time
let detectorId = "detectorId_example"; // String | ID of the detector to use
let opts = {
  'labels': ["null"], // [String] | Array of labels to detect
  'detectionThresholds': [null] // [Number] | Array of detection thresholds for each label
};
apiInstance.apiV1StreamsStreamIdTemporalTaskPost(streamId, name, startTime, endTime, detectorId, opts, (error, data, response) => {
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
 **streamId** | **String**| Unique ID of the stream to localize actions in | 
 **name** | **String**| Name of the temporal task | 
 **startTime** | **Date**| Temporal task start time | 
 **endTime** | **Date**| Temporal task end time | 
 **detectorId** | **String**| ID of the detector to use | 
 **labels** | [**[String]**](String.md)| Array of labels to detect | [optional] 
 **detectionThresholds** | [**[Number]**](Number.md)| Array of detection thresholds for each label | [optional] 

### Return type

[**ApiV1StreamsStreamIdTemporalTaskPost200Response**](ApiV1StreamsStreamIdTemporalTaskPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1StreamsStreamIdTemporalTasksGet

> ApiV1StreamsStreamIdTemporalTasksGet200Response apiV1StreamsStreamIdTemporalTasksGet(streamId)

Get stream temporal tasks

Fetches all Temporal Tasks for a stream

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.TemporalTaskApi();
let streamId = "streamId_example"; // String | Unique ID of stream
apiInstance.apiV1StreamsStreamIdTemporalTasksGet(streamId, (error, data, response) => {
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

[**ApiV1StreamsStreamIdTemporalTasksGet200Response**](ApiV1StreamsStreamIdTemporalTasksGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1TemporalTaskPost

> ApiV1StreamsStreamIdTemporalTaskPost200Response apiV1TemporalTaskPost(name, opts)

Create temporal task

Localize actions in a video using specified detectors and labels

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.TemporalTaskApi();
let name = "name_example"; // String | Name of the temporal task
let opts = {
  'file': "/path/to/file", // File | Video file to process
  'url': "url_example", // String | URL of the video to process
  'videoId': "videoId_example", // String | ID of an existing video
  'detectorId': "detectorId_example", // String | ID of detector use for localization
  'labels': ["null"] // [String] | Array of labels to detect
};
apiInstance.apiV1TemporalTaskPost(name, opts, (error, data, response) => {
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
 **name** | **String**| Name of the temporal task | 
 **file** | **File**| Video file to process | [optional] 
 **url** | **String**| URL of the video to process | [optional] 
 **videoId** | **String**| ID of an existing video | [optional] 
 **detectorId** | **String**| ID of detector use for localization | [optional] 
 **labels** | [**[String]**](String.md)| Array of labels to detect | [optional] 

### Return type

[**ApiV1StreamsStreamIdTemporalTaskPost200Response**](ApiV1StreamsStreamIdTemporalTaskPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1TemporalTasksGet

> ApiV1TemporalTasksGet200Response apiV1TemporalTasksGet()

Get existing temporal tasks

Fetches all Temporal Tasks for a user

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.TemporalTaskApi();
apiInstance.apiV1TemporalTasksGet((error, data, response) => {
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

[**ApiV1TemporalTasksGet200Response**](ApiV1TemporalTasksGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1TemporalTasksTaskIdDelete

> ApiV1TemporalTasksTaskIdDelete200Response apiV1TemporalTasksTaskIdDelete(taskId)

Delete temporal task

Deletes an existing Temporal Task

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.TemporalTaskApi();
let taskId = "taskId_example"; // String | Unique ID of temporal task
apiInstance.apiV1TemporalTasksTaskIdDelete(taskId, (error, data, response) => {
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
 **taskId** | **String**| Unique ID of temporal task | 

### Return type

[**ApiV1TemporalTasksTaskIdDelete200Response**](ApiV1TemporalTasksTaskIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1TemporalTasksTaskIdGet

> ApiV1TemporalTasksTaskIdGet200Response apiV1TemporalTasksTaskIdGet(taskId)

Get temporal task details

Fetches details about an existing Temporal Task, e.g. one that was run on a video file input

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.TemporalTaskApi();
let taskId = "taskId_example"; // String | Unique ID of temporal task
apiInstance.apiV1TemporalTasksTaskIdGet(taskId, (error, data, response) => {
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
 **taskId** | **String**| Unique ID of temporal task | 

### Return type

[**ApiV1TemporalTasksTaskIdGet200Response**](ApiV1TemporalTasksTaskIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1TemporalTasksTaskIdKillPut

> ApiV1TemporalTasksTaskIdKillPut200Response apiV1TemporalTasksTaskIdKillPut(taskId)

Kill temporal task

Kills an existing temporal task

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.TemporalTaskApi();
let taskId = "taskId_example"; // String | Unique ID of temporal task
apiInstance.apiV1TemporalTasksTaskIdKillPut(taskId, (error, data, response) => {
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
 **taskId** | **String**| Unique ID of temporal task | 

### Return type

[**ApiV1TemporalTasksTaskIdKillPut200Response**](ApiV1TemporalTasksTaskIdKillPut200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1TemporalTasksTaskIdPredsJsonGet

> Object apiV1TemporalTasksTaskIdPredsJsonGet(taskId)

Get temporal task prediction results

Downloads an existing Temporal Task&#39;s predictions as JSON file stream

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.TemporalTaskApi();
let taskId = "taskId_example"; // String | ID of the temporal task
apiInstance.apiV1TemporalTasksTaskIdPredsJsonGet(taskId, (error, data, response) => {
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
 **taskId** | **String**| ID of the temporal task | 

### Return type

**Object**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

