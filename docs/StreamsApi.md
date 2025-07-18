# MatroidPublicApi.StreamsApi

All URIs are relative to *https://app.matroid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1FrameRecordingsTaskIdDownloadGet**](StreamsApi.md#apiV1FrameRecordingsTaskIdDownloadGet) | **GET** /api/v1/frame-recordings/{taskId}/download | Download frame recording
[**apiV1StreamsBatchPost**](StreamsApi.md#apiV1StreamsBatchPost) | **POST** /api/v1/streams/batch | Batch create streams
[**apiV1StreamsGet**](StreamsApi.md#apiV1StreamsGet) | **GET** /api/v1/streams | Search streams
[**apiV1StreamsPost**](StreamsApi.md#apiV1StreamsPost) | **POST** /api/v1/streams | Create stream
[**apiV1StreamsStreamIdClipsDateClipIdGet**](StreamsApi.md#apiV1StreamsStreamIdClipsDateClipIdGet) | **GET** /api/v1/streams/{streamId}/clips/{date}/{clipId} | Get recording clip
[**apiV1StreamsStreamIdClipsGet**](StreamsApi.md#apiV1StreamsStreamIdClipsGet) | **GET** /api/v1/streams/{streamId}/clips | Find recording clips
[**apiV1StreamsStreamIdDelete**](StreamsApi.md#apiV1StreamsStreamIdDelete) | **DELETE** /api/v1/streams/{streamId} | Delete a stream
[**apiV1StreamsStreamIdPushImagePost**](StreamsApi.md#apiV1StreamsStreamIdPushImagePost) | **POST** /api/v1/streams/{streamId}/push_image | Push image to stream
[**apiV1StreamsStreamIdPushVideoPost**](StreamsApi.md#apiV1StreamsStreamIdPushVideoPost) | **POST** /api/v1/streams/{streamId}/push_video | Push video file to stream
[**apiV1StreamsStreamIdPut**](StreamsApi.md#apiV1StreamsStreamIdPut) | **PUT** /api/v1/streams/{streamId} | Update a stream



## apiV1FrameRecordingsTaskIdDownloadGet

> File apiV1FrameRecordingsTaskIdDownloadGet(taskId)

Download frame recording

Downloads a frame recording&#39;s frames as a zip file.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.StreamsApi();
let taskId = "taskId_example"; // String | Unique ID of the frame recording task
apiInstance.apiV1FrameRecordingsTaskIdDownloadGet(taskId, (error, data, response) => {
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
 **taskId** | **String**| Unique ID of the frame recording task | 

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip


## apiV1StreamsBatchPost

> {String: ApiV1StreamsBatchPost200ResponseValue} apiV1StreamsBatchPost(opts)

Batch create streams

Creates a batch of streams &amp; monitorings

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.StreamsApi();
let opts = {
  'file': "/path/to/file" // File | JSON file containing stream and monitoring configurations
};
apiInstance.apiV1StreamsBatchPost(opts, (error, data, response) => {
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
 **file** | **File**| JSON file containing stream and monitoring configurations | [optional] 

### Return type

[**{String: ApiV1StreamsBatchPost200ResponseValue}**](ApiV1StreamsBatchPost200ResponseValue.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/json
- **Accept**: application/json


## apiV1StreamsGet

> [ApiV1StreamsGet200ResponseInner] apiV1StreamsGet(opts)

Search streams

Returns streams that match the specified query parameters

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.StreamsApi();
let opts = {
  'streamId': "streamId_example", // String | Unique ID of the stream
  'name': "name_example", // String | Name of the stream
  'permission': "'all'", // String | Filter streams by permission level
  'recordingEnabled': true // Boolean | Filter streams with recording enabled
};
apiInstance.apiV1StreamsGet(opts, (error, data, response) => {
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
 **name** | **String**| Name of the stream | [optional] 
 **permission** | **String**| Filter streams by permission level | [optional] [default to &#39;all&#39;]
 **recordingEnabled** | **Boolean**| Filter streams with recording enabled | [optional] 

### Return type

[**[ApiV1StreamsGet200ResponseInner]**](ApiV1StreamsGet200ResponseInner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1StreamsPost

> ApiV1StreamsPost200Response apiV1StreamsPost(apiV1StreamsPostRequest)

Create stream

Registers a stream.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.StreamsApi();
let apiV1StreamsPostRequest = new MatroidPublicApi.ApiV1StreamsPostRequest(); // ApiV1StreamsPostRequest | 
apiInstance.apiV1StreamsPost(apiV1StreamsPostRequest, (error, data, response) => {
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
 **apiV1StreamsPostRequest** | [**ApiV1StreamsPostRequest**](ApiV1StreamsPostRequest.md)|  | 

### Return type

[**ApiV1StreamsPost200Response**](ApiV1StreamsPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV1StreamsStreamIdClipsDateClipIdGet

> File apiV1StreamsStreamIdClipsDateClipIdGet(streamId, date, clipId)

Get recording clip

Retrieves a clip video file from the recording

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.StreamsApi();
let streamId = "streamId_example"; // String | Unique ID of the stream
let date = "date_example"; // String | Date in YYYYMMDD format
let clipId = "clipId_example"; // String | ID of the clip to retrieve
apiInstance.apiV1StreamsStreamIdClipsDateClipIdGet(streamId, date, clipId, (error, data, response) => {
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
 **streamId** | **String**| Unique ID of the stream | 
 **date** | **String**| Date in YYYYMMDD format | 
 **clipId** | **String**| ID of the clip to retrieve | 

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: video/mp2t, application/json


## apiV1StreamsStreamIdClipsGet

> ApiV1StreamsStreamIdClipsGet200Response apiV1StreamsStreamIdClipsGet(streamId, startTime, endTime, opts)

Find recording clips

Returns links to recording clips around your query

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.StreamsApi();
let streamId = "streamId_example"; // String | Unique ID of the stream
let startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Exclude clips that end before this timestamp
let endTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Exclude clips that start after this timestamp. endTime cannot be more than 1 hour greater than startTime
let opts = {
  'format': "'json'" // String | Response format
};
apiInstance.apiV1StreamsStreamIdClipsGet(streamId, startTime, endTime, opts, (error, data, response) => {
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
 **streamId** | **String**| Unique ID of the stream | 
 **startTime** | **Date**| Exclude clips that end before this timestamp | 
 **endTime** | **Date**| Exclude clips that start after this timestamp. endTime cannot be more than 1 hour greater than startTime | 
 **format** | **String**| Response format | [optional] [default to &#39;json&#39;]

### Return type

[**ApiV1StreamsStreamIdClipsGet200Response**](ApiV1StreamsStreamIdClipsGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-mpegURL


## apiV1StreamsStreamIdDelete

> ApiV1StreamsStreamIdDelete200Response apiV1StreamsStreamIdDelete(streamId)

Delete a stream

Deletes a stream and all associated resources including feed tasks, collections, and S3 content

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.StreamsApi();
let streamId = "streamId_example"; // String | Unique ID of the stream to delete
apiInstance.apiV1StreamsStreamIdDelete(streamId, (error, data, response) => {
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
 **streamId** | **String**| Unique ID of the stream to delete | 

### Return type

[**ApiV1StreamsStreamIdDelete200Response**](ApiV1StreamsStreamIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1StreamsStreamIdPushImagePost

> ApiV1StreamsStreamIdPushImagePost200Response apiV1StreamsStreamIdPushImagePost(streamId, file, opts)

Push image to stream

For ApiImagePush streams, this pushes a new image into the stream. You can optionally specify a timestamp to associate with this image.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.StreamsApi();
let streamId = "streamId_example"; // String | Unique ID of the stream
let file = null; // Object | Image file to upload
let opts = {
  'timestamp': new Date("2013-10-20T19:20:30+01:00"), // Date | ISO date/time to associate with this image
  'metadata': "metadata_example" // String | Stringified JSON object of metadata associated with a detection
};
apiInstance.apiV1StreamsStreamIdPushImagePost(streamId, file, opts, (error, data, response) => {
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
 **streamId** | **String**| Unique ID of the stream | 
 **file** | [**Object**](Object.md)| Image file to upload | 
 **timestamp** | **Date**| ISO date/time to associate with this image | [optional] 
 **metadata** | **String**| Stringified JSON object of metadata associated with a detection | [optional] 

### Return type

[**ApiV1StreamsStreamIdPushImagePost200Response**](ApiV1StreamsStreamIdPushImagePost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1StreamsStreamIdPushVideoPost

> ApiV1StreamsStreamIdPushVideoPost200Response apiV1StreamsStreamIdPushVideoPost(streamId, file, startTime)

Push video file to stream

Inserts a video clip into this stream&#39;s history at a particular timestamp. The clip will be available to view in the recording player starting at that timestamp.  If multiple clips are uploaded for the same time period, the overlapping sections will be overwritten.  Uploaded clips are subject to stream retention settings.  Most common video container and encoding formats are supported. H264 is the preferred video encoding format. Videos using other encodings are automatically re-encoded to H264, to support HLS browser playback.  Maximum file size is 1GB in cloud, and unlimited for onprem. 

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.StreamsApi();
let streamId = "streamId_example"; // String | Unique ID of the stream
let file = null; // Object | Video file to upload
let startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | ISO date/time associated with the start of this video
apiInstance.apiV1StreamsStreamIdPushVideoPost(streamId, file, startTime, (error, data, response) => {
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
 **streamId** | **String**| Unique ID of the stream | 
 **file** | [**Object**](Object.md)| Video file to upload | 
 **startTime** | **Date**| ISO date/time associated with the start of this video | 

### Return type

[**ApiV1StreamsStreamIdPushVideoPost200Response**](ApiV1StreamsStreamIdPushVideoPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1StreamsStreamIdPut

> ApiV1StreamsStreamIdPut200Response apiV1StreamsStreamIdPut(streamId, apiV1StreamsStreamIdPutRequest)

Update a stream

Update an existing stream&#39;s configuration including name, retention settings, and custom fields

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.StreamsApi();
let streamId = "streamId_example"; // String | Feed document mongo id for the stream
let apiV1StreamsStreamIdPutRequest = new MatroidPublicApi.ApiV1StreamsStreamIdPutRequest(); // ApiV1StreamsStreamIdPutRequest | 
apiInstance.apiV1StreamsStreamIdPut(streamId, apiV1StreamsStreamIdPutRequest, (error, data, response) => {
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
 **streamId** | **String**| Feed document mongo id for the stream | 
 **apiV1StreamsStreamIdPutRequest** | [**ApiV1StreamsStreamIdPutRequest**](ApiV1StreamsStreamIdPutRequest.md)|  | 

### Return type

[**ApiV1StreamsStreamIdPut200Response**](ApiV1StreamsStreamIdPut200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

