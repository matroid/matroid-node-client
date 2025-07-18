# MatroidPublicApi.MonitoringsApi

All URIs are relative to *https://192.168.86.46*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1MonitoringsBatchPut**](MonitoringsApi.md#apiV1MonitoringsBatchPut) | **PUT** /api/v1/monitorings/batch | Bulk update monitorings
[**apiV1MonitoringsGet**](MonitoringsApi.md#apiV1MonitoringsGet) | **GET** /api/v1/monitorings | Search monitorings
[**apiV1MonitoringsMonitoringIdDelete**](MonitoringsApi.md#apiV1MonitoringsMonitoringIdDelete) | **DELETE** /api/v1/monitorings/{monitoringId} | Delete a monitoring
[**apiV1MonitoringsMonitoringIdGet**](MonitoringsApi.md#apiV1MonitoringsMonitoringIdGet) | **GET** /api/v1/monitorings/{monitoringId} | Get monitoring results
[**apiV1MonitoringsMonitoringIdKillPost**](MonitoringsApi.md#apiV1MonitoringsMonitoringIdKillPost) | **POST** /api/v1/monitorings/{monitoringId}/kill | Kill a monitoring
[**apiV1MonitoringsMonitoringIdPut**](MonitoringsApi.md#apiV1MonitoringsMonitoringIdPut) | **PUT** /api/v1/monitorings/{monitoringId} | Update a monitoring
[**apiV1MonitoringsMonitoringIdWatchGet**](MonitoringsApi.md#apiV1MonitoringsMonitoringIdWatchGet) | **GET** /api/v1/monitorings/{monitoringId}/watch | Watch for new detections
[**apiV1StreamsStreamIdMonitorDetectorIdPost**](MonitoringsApi.md#apiV1StreamsStreamIdMonitorDetectorIdPost) | **POST** /api/v1/streams/{streamId}/monitor/{detectorId} | Create a monitoring on a stream



## apiV1MonitoringsBatchPut

> ApiV1MonitoringsBatchPut200Response apiV1MonitoringsBatchPut(apiV1MonitoringsBatchPutRequest)

Bulk update monitorings

Updates settings on multiple monitorings. Currently, only thresholds, notification alert sounds, and registered endpoints can be updated using this api. If you have a need to expose other settings via this endpoint, please contact solutions@matroid.com.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.MonitoringsApi();
let apiV1MonitoringsBatchPutRequest = new MatroidPublicApi.ApiV1MonitoringsBatchPutRequest(); // ApiV1MonitoringsBatchPutRequest | 
apiInstance.apiV1MonitoringsBatchPut(apiV1MonitoringsBatchPutRequest, (error, data, response) => {
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
 **apiV1MonitoringsBatchPutRequest** | [**ApiV1MonitoringsBatchPutRequest**](ApiV1MonitoringsBatchPutRequest.md)|  | 

### Return type

[**ApiV1MonitoringsBatchPut200Response**](ApiV1MonitoringsBatchPut200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV1MonitoringsGet

> [ApiV1MonitoringsGet200ResponseInner] apiV1MonitoringsGet(opts)

Search monitorings

Returns monitorings that match the specified query parameters

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.MonitoringsApi();
let opts = {
  'streamId': "streamId_example", // String | Unique ID of the stream
  'monitoringId': "monitoringId_example", // String | Unique ID of the monitoring
  'detectorId': "detectorId_example", // String | Unique ID of the detector
  'name': "name_example", // String | Name of the monitoring
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Queries for monitorings that begin after startTime
  'endTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Queries for monitorings that begin before endTime
  'state': "state_example" // String | Filter monitorings by state
};
apiInstance.apiV1MonitoringsGet(opts, (error, data, response) => {
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
 **streamId** | **String**| Unique ID of the stream | [optional] 
 **monitoringId** | **String**| Unique ID of the monitoring | [optional] 
 **detectorId** | **String**| Unique ID of the detector | [optional] 
 **name** | **String**| Name of the monitoring | [optional] 
 **startTime** | **Date**| Queries for monitorings that begin after startTime | [optional] 
 **endTime** | **Date**| Queries for monitorings that begin before endTime | [optional] 
 **state** | **String**| Filter monitorings by state | [optional] 

### Return type

[**[ApiV1MonitoringsGet200ResponseInner]**](ApiV1MonitoringsGet200ResponseInner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1MonitoringsMonitoringIdDelete

> ApiV1MonitoringsMonitoringIdDelete200Response apiV1MonitoringsMonitoringIdDelete(monitoringId)

Delete a monitoring

Deletes a monitoring and all associated resources including feed tasks and collections

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.MonitoringsApi();
let monitoringId = "monitoringId_example"; // String | Unique ID of the monitoring to delete
apiInstance.apiV1MonitoringsMonitoringIdDelete(monitoringId, (error, data, response) => {
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
 **monitoringId** | **String**| Unique ID of the monitoring to delete | 

### Return type

[**ApiV1MonitoringsMonitoringIdDelete200Response**](ApiV1MonitoringsMonitoringIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1MonitoringsMonitoringIdGet

> [ApiV1MonitoringsMonitoringIdGet200ResponseInner] apiV1MonitoringsMonitoringIdGet(monitoringId, opts)

Get monitoring results

Retrieves results for a monitoring in the specified format

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.MonitoringsApi();
let monitoringId = "monitoringId_example"; // String | Unique ID of the monitoring
let opts = {
  'format': "'json'", // String | Format of the results
  'statusOnly': false, // Boolean | Whether to return the general status of the monitoring (instead of detailed prediction data)
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Start of the time range to download prediction data for. Only used when statusOnly is false
  'endTime': new Date("2013-10-20T19:20:30+01:00") // Date | End of the time range to download prediction data for. Only used when statusOnly is false
};
apiInstance.apiV1MonitoringsMonitoringIdGet(monitoringId, opts, (error, data, response) => {
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
 **monitoringId** | **String**| Unique ID of the monitoring | 
 **format** | **String**| Format of the results | [optional] [default to &#39;json&#39;]
 **statusOnly** | **Boolean**| Whether to return the general status of the monitoring (instead of detailed prediction data) | [optional] [default to false]
 **startTime** | **Date**| Start of the time range to download prediction data for. Only used when statusOnly is false | [optional] 
 **endTime** | **Date**| End of the time range to download prediction data for. Only used when statusOnly is false | [optional] 

### Return type

[**[ApiV1MonitoringsMonitoringIdGet200ResponseInner]**](ApiV1MonitoringsMonitoringIdGet200ResponseInner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv, text/plain


## apiV1MonitoringsMonitoringIdKillPost

> ApiV1MonitoringsMonitoringIdKillPost200Response apiV1MonitoringsMonitoringIdKillPost(monitoringId)

Kill a monitoring

Stops a monitoring task and its associated processes

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.MonitoringsApi();
let monitoringId = "monitoringId_example"; // String | Unique ID of the monitoring to kill
apiInstance.apiV1MonitoringsMonitoringIdKillPost(monitoringId, (error, data, response) => {
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
 **monitoringId** | **String**| Unique ID of the monitoring to kill | 

### Return type

[**ApiV1MonitoringsMonitoringIdKillPost200Response**](ApiV1MonitoringsMonitoringIdKillPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1MonitoringsMonitoringIdPut

> ApiV1MonitoringsMonitoringIdPut200Response apiV1MonitoringsMonitoringIdPut(monitoringId, apiV1MonitoringsMonitoringIdPutRequest)

Update a monitoring

Update an existing monitoring with new parameters

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.MonitoringsApi();
let monitoringId = "monitoringId_example"; // String | Unique ID of the monitoring to update
let apiV1MonitoringsMonitoringIdPutRequest = new MatroidPublicApi.ApiV1MonitoringsMonitoringIdPutRequest(); // ApiV1MonitoringsMonitoringIdPutRequest | 
apiInstance.apiV1MonitoringsMonitoringIdPut(monitoringId, apiV1MonitoringsMonitoringIdPutRequest, (error, data, response) => {
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
 **monitoringId** | **String**| Unique ID of the monitoring to update | 
 **apiV1MonitoringsMonitoringIdPutRequest** | [**ApiV1MonitoringsMonitoringIdPutRequest**](ApiV1MonitoringsMonitoringIdPutRequest.md)|  | 

### Return type

[**ApiV1MonitoringsMonitoringIdPut200Response**](ApiV1MonitoringsMonitoringIdPut200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV1MonitoringsMonitoringIdWatchGet

> ApiV1MonitoringsMonitoringIdWatchGet200Response apiV1MonitoringsMonitoringIdWatchGet(monitoringId)

Watch for new detections

Streams new detection results from this monitoring live as they occur. Detections are streamed using Server-sent events, which are effectively long-lived HTTP requests, where detection results are written out as they occur. This can be an alternative to setting up a web API endpoint for your monitoring. NOTE: If not using our API libraries, be sure to restart the connection when it closes and disable any buffering to ensure you get results live. Our API libraries take care of this automatically.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.MonitoringsApi();
let monitoringId = "monitoringId_example"; // String | Unique ID of the monitoring
apiInstance.apiV1MonitoringsMonitoringIdWatchGet(monitoringId, (error, data, response) => {
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
 **monitoringId** | **String**| Unique ID of the monitoring | 

### Return type

[**ApiV1MonitoringsMonitoringIdWatchGet200Response**](ApiV1MonitoringsMonitoringIdWatchGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream, application/json


## apiV1StreamsStreamIdMonitorDetectorIdPost

> ApiV1StreamsStreamIdMonitorDetectorIdPost200Response apiV1StreamsStreamIdMonitorDetectorIdPost(streamId, detectorId, apiV1StreamsStreamIdMonitorDetectorIdPostRequest)

Create a monitoring on a stream

Creates a monitoring task on a stream using a specified detector with configurable thresholds, scheduling, and notification settings

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.MonitoringsApi();
let streamId = "streamId_example"; // String | Unique ID of the stream to monitor
let detectorId = "detectorId_example"; // String | Unique ID of the detector with which to classify
let apiV1StreamsStreamIdMonitorDetectorIdPostRequest = new MatroidPublicApi.ApiV1StreamsStreamIdMonitorDetectorIdPostRequest(); // ApiV1StreamsStreamIdMonitorDetectorIdPostRequest | 
apiInstance.apiV1StreamsStreamIdMonitorDetectorIdPost(streamId, detectorId, apiV1StreamsStreamIdMonitorDetectorIdPostRequest, (error, data, response) => {
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
 **streamId** | **String**| Unique ID of the stream to monitor | 
 **detectorId** | **String**| Unique ID of the detector with which to classify | 
 **apiV1StreamsStreamIdMonitorDetectorIdPostRequest** | [**ApiV1StreamsStreamIdMonitorDetectorIdPostRequest**](ApiV1StreamsStreamIdMonitorDetectorIdPostRequest.md)|  | 

### Return type

[**ApiV1StreamsStreamIdMonitorDetectorIdPost200Response**](ApiV1StreamsStreamIdMonitorDetectorIdPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

