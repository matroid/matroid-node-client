# MatroidPublicApi.BucketTasksApi

All URIs are relative to *https://app.matroid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1BucketTasksPost**](BucketTasksApi.md#apiV1BucketTasksPost) | **POST** /api/v1/bucket-tasks | Create S3 bucket CSV task
[**apiV1BucketTasksTaskIdDownloadResultsGet**](BucketTasksApi.md#apiV1BucketTasksTaskIdDownloadResultsGet) | **GET** /api/v1/bucket-tasks/{taskId}/download_results | Download bucket search CSV



## apiV1BucketTasksPost

> ApiV1BucketTasksPost200Response apiV1BucketTasksPost(apiV1BucketTasksPostRequest)

Create S3 bucket CSV task

Creates a new task for running a detector over an S3 bucket. Only available for Matroid on-prem users.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.BucketTasksApi();
let apiV1BucketTasksPostRequest = new MatroidPublicApi.ApiV1BucketTasksPostRequest(); // ApiV1BucketTasksPostRequest | 
apiInstance.apiV1BucketTasksPost(apiV1BucketTasksPostRequest, (error, data, response) => {
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
 **apiV1BucketTasksPostRequest** | [**ApiV1BucketTasksPostRequest**](ApiV1BucketTasksPostRequest.md)|  | 

### Return type

[**ApiV1BucketTasksPost200Response**](ApiV1BucketTasksPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV1BucketTasksTaskIdDownloadResultsGet

> File apiV1BucketTasksTaskIdDownloadResultsGet(taskId)

Download bucket search CSV

Returns the results of processing a bucket with a detector in CSV format. Only available to Matroid on-prem users.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.BucketTasksApi();
let taskId = "taskId_example"; // String | Unique ID of the bucket task
apiInstance.apiV1BucketTasksTaskIdDownloadResultsGet(taskId, (error, data, response) => {
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
 **taskId** | **String**| Unique ID of the bucket task | 

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

