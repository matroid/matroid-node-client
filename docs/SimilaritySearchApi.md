# MatroidPublicApi.SimilaritySearchApi

All URIs are relative to *https://app.matroid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1CollectionTasksTaskIdDelete**](SimilaritySearchApi.md#apiV1CollectionTasksTaskIdDelete) | **DELETE** /api/v1/collection-tasks/{taskId} | Delete collection index
[**apiV1CollectionTasksTaskIdGet**](SimilaritySearchApi.md#apiV1CollectionTasksTaskIdGet) | **GET** /api/v1/collection-tasks/{taskId} | Get collection index
[**apiV1CollectionTasksTaskIdImageQueryPost**](SimilaritySearchApi.md#apiV1CollectionTasksTaskIdImageQueryPost) | **POST** /api/v1/collection-tasks/{taskId}/image-query | Query collection index by image
[**apiV1CollectionTasksTaskIdKillPost**](SimilaritySearchApi.md#apiV1CollectionTasksTaskIdKillPost) | **POST** /api/v1/collection-tasks/{taskId}/kill | Kill collection index
[**apiV1CollectionTasksTaskIdPut**](SimilaritySearchApi.md#apiV1CollectionTasksTaskIdPut) | **PUT** /api/v1/collection-tasks/{taskId} | Update collection index
[**apiV1CollectionTasksTaskIdScoresQueryPost**](SimilaritySearchApi.md#apiV1CollectionTasksTaskIdScoresQueryPost) | **POST** /api/v1/collection-tasks/{taskId}/scores-query | Query collection index by detector scores
[**apiV1CollectionTasksTaskIdTextQueryPost**](SimilaritySearchApi.md#apiV1CollectionTasksTaskIdTextQueryPost) | **POST** /api/v1/collection-tasks/{taskId}/text-query | Query collection index by text
[**apiV1CollectionsCollectionIdCollectionTasksPost**](SimilaritySearchApi.md#apiV1CollectionsCollectionIdCollectionTasksPost) | **POST** /api/v1/collections/{collectionId}/collection-tasks | Create collection index
[**apiV1CollectionsCollectionIdDelete**](SimilaritySearchApi.md#apiV1CollectionsCollectionIdDelete) | **DELETE** /api/v1/collections/{collectionId} | Delete collection
[**apiV1CollectionsCollectionIdGet**](SimilaritySearchApi.md#apiV1CollectionsCollectionIdGet) | **GET** /api/v1/collections/{collectionId} | Get collection
[**apiV1CollectionsPost**](SimilaritySearchApi.md#apiV1CollectionsPost) | **POST** /api/v1/collections | Create collection



## apiV1CollectionTasksTaskIdDelete

> ApiV1CollectionTasksTaskIdDelete200Response apiV1CollectionTasksTaskIdDelete(taskId)

Delete collection index

Deletes a completed collection task

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.SimilaritySearchApi();
let taskId = "taskId_example"; // String | Unique ID of the collection task to delete
apiInstance.apiV1CollectionTasksTaskIdDelete(taskId, (error, data, response) => {
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
 **taskId** | **String**| Unique ID of the collection task to delete | 

### Return type

[**ApiV1CollectionTasksTaskIdDelete200Response**](ApiV1CollectionTasksTaskIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1CollectionTasksTaskIdGet

> ApiV1CollectionTasksTaskIdGet200Response apiV1CollectionTasksTaskIdGet(taskId)

Get collection index

Retrieves information about a specific collection task

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.SimilaritySearchApi();
let taskId = "taskId_example"; // String | Unique ID of the collection task to retrieve
apiInstance.apiV1CollectionTasksTaskIdGet(taskId, (error, data, response) => {
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
 **taskId** | **String**| Unique ID of the collection task to retrieve | 

### Return type

[**ApiV1CollectionTasksTaskIdGet200Response**](ApiV1CollectionTasksTaskIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1CollectionTasksTaskIdImageQueryPost

> ApiV1CollectionTasksTaskIdImageQueryPost200Response apiV1CollectionTasksTaskIdImageQueryPost(taskId, opts)

Query collection index by image

Queries against a collection index using an image

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.SimilaritySearchApi();
let taskId = "taskId_example"; // String | Unique ID of the collection task to query
let opts = {
  'url': "url_example", // String | URL of the query image
  'file': "/path/to/file", // File | Image file to use for query
  'boundingBox': new MatroidPublicApi.ApiV1CollectionTasksTaskIdImageQueryPostRequestBoundingBox(), // ApiV1CollectionTasksTaskIdImageQueryPostRequestBoundingBox | 
  'numResults': 56, // Number | Number of results to return
  'shouldIndicateDuplicates': true // Boolean | Whether to indicate duplicate results
};
apiInstance.apiV1CollectionTasksTaskIdImageQueryPost(taskId, opts, (error, data, response) => {
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
 **taskId** | **String**| Unique ID of the collection task to query | 
 **url** | **String**| URL of the query image | [optional] 
 **file** | **File**| Image file to use for query | [optional] 
 **boundingBox** | [**ApiV1CollectionTasksTaskIdImageQueryPostRequestBoundingBox**](ApiV1CollectionTasksTaskIdImageQueryPostRequestBoundingBox.md)|  | [optional] 
 **numResults** | **Number**| Number of results to return | [optional] 
 **shouldIndicateDuplicates** | **Boolean**| Whether to indicate duplicate results | [optional] 

### Return type

[**ApiV1CollectionTasksTaskIdImageQueryPost200Response**](ApiV1CollectionTasksTaskIdImageQueryPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1CollectionTasksTaskIdKillPost

> ApiV1CollectionTasksTaskIdKillPost200Response apiV1CollectionTasksTaskIdKillPost(taskId, opts)

Kill collection index

Kills an active collection indexing task

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.SimilaritySearchApi();
let taskId = "taskId_example"; // String | Unique ID of the collection task to kill
let opts = {
  'includeCollectionInfo': true // Boolean | Whether to include information about the task's collection in the response
};
apiInstance.apiV1CollectionTasksTaskIdKillPost(taskId, opts, (error, data, response) => {
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
 **taskId** | **String**| Unique ID of the collection task to kill | 
 **includeCollectionInfo** | **Boolean**| Whether to include information about the task&#39;s collection in the response | [optional] 

### Return type

[**ApiV1CollectionTasksTaskIdKillPost200Response**](ApiV1CollectionTasksTaskIdKillPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1CollectionTasksTaskIdPut

> ApiV1CollectionTasksTaskIdPut200Response apiV1CollectionTasksTaskIdPut(taskId, apiV1CollectionTasksTaskIdPutRequest)

Update collection index

Updates a collection index

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.SimilaritySearchApi();
let taskId = "taskId_example"; // String | Unique ID of the collection task to update
let apiV1CollectionTasksTaskIdPutRequest = new MatroidPublicApi.ApiV1CollectionTasksTaskIdPutRequest(); // ApiV1CollectionTasksTaskIdPutRequest | 
apiInstance.apiV1CollectionTasksTaskIdPut(taskId, apiV1CollectionTasksTaskIdPutRequest, (error, data, response) => {
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
 **taskId** | **String**| Unique ID of the collection task to update | 
 **apiV1CollectionTasksTaskIdPutRequest** | [**ApiV1CollectionTasksTaskIdPutRequest**](ApiV1CollectionTasksTaskIdPutRequest.md)|  | 

### Return type

[**ApiV1CollectionTasksTaskIdPut200Response**](ApiV1CollectionTasksTaskIdPut200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV1CollectionTasksTaskIdScoresQueryPost

> ApiV1CollectionTasksTaskIdScoresQueryPost200Response apiV1CollectionTasksTaskIdScoresQueryPost(taskId, apiV1CollectionTasksTaskIdScoresQueryPostRequest)

Query collection index by detector scores

Queries against a collection index using a set of labels and scores

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.SimilaritySearchApi();
let taskId = "taskId_example"; // String | Unique ID of the collection task to query
let apiV1CollectionTasksTaskIdScoresQueryPostRequest = new MatroidPublicApi.ApiV1CollectionTasksTaskIdScoresQueryPostRequest(); // ApiV1CollectionTasksTaskIdScoresQueryPostRequest | 
apiInstance.apiV1CollectionTasksTaskIdScoresQueryPost(taskId, apiV1CollectionTasksTaskIdScoresQueryPostRequest, (error, data, response) => {
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
 **taskId** | **String**| Unique ID of the collection task to query | 
 **apiV1CollectionTasksTaskIdScoresQueryPostRequest** | [**ApiV1CollectionTasksTaskIdScoresQueryPostRequest**](ApiV1CollectionTasksTaskIdScoresQueryPostRequest.md)|  | 

### Return type

[**ApiV1CollectionTasksTaskIdScoresQueryPost200Response**](ApiV1CollectionTasksTaskIdScoresQueryPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV1CollectionTasksTaskIdTextQueryPost

> ApiV1CollectionTasksTaskIdTextQueryPost200Response apiV1CollectionTasksTaskIdTextQueryPost(taskId, queryText, opts)

Query collection index by text

Queries against a collection index using text, only available for indices created with a text-aligned model

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.SimilaritySearchApi();
let taskId = "taskId_example"; // String | Unique ID of the collection task to query against
let queryText = "queryText_example"; // String | Query text to search for
let opts = {
  'numResults': 56, // Number | Maximum number of query results (default: 20)
  'taskIds': ["null"] // [String] | Optional list of task IDs to query against
};
apiInstance.apiV1CollectionTasksTaskIdTextQueryPost(taskId, queryText, opts, (error, data, response) => {
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
 **taskId** | **String**| Unique ID of the collection task to query against | 
 **queryText** | **String**| Query text to search for | 
 **numResults** | **Number**| Maximum number of query results (default: 20) | [optional] 
 **taskIds** | [**[String]**](String.md)| Optional list of task IDs to query against | [optional] 

### Return type

[**ApiV1CollectionTasksTaskIdTextQueryPost200Response**](ApiV1CollectionTasksTaskIdTextQueryPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1CollectionsCollectionIdCollectionTasksPost

> ApiV1CollectionsCollectionIdCollectionTasksPost200Response apiV1CollectionsCollectionIdCollectionTasksPost(collectionId, detectorId, opts)

Create collection index

Creates an index on a collection with a detector

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.SimilaritySearchApi();
let collectionId = "collectionId_example"; // String | Unique ID of the collection to search
let detectorId = "detectorId_example"; // String | ID of the detector to use for indexing
let opts = {
  'fileTypes': "fileTypes_example" // String | Types of files to index (e.g., 'images')
};
apiInstance.apiV1CollectionsCollectionIdCollectionTasksPost(collectionId, detectorId, opts, (error, data, response) => {
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
 **collectionId** | **String**| Unique ID of the collection to search | 
 **detectorId** | **String**| ID of the detector to use for indexing | 
 **fileTypes** | **String**| Types of files to index (e.g., &#39;images&#39;) | [optional] 

### Return type

[**ApiV1CollectionsCollectionIdCollectionTasksPost200Response**](ApiV1CollectionsCollectionIdCollectionTasksPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## apiV1CollectionsCollectionIdDelete

> ApiV1CollectionsCollectionIdDelete200Response apiV1CollectionsCollectionIdDelete(collectionId)

Delete collection

Deletes a collection with no active indexing tasks

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.SimilaritySearchApi();
let collectionId = "collectionId_example"; // String | Unique ID of the collection to delete
apiInstance.apiV1CollectionsCollectionIdDelete(collectionId, (error, data, response) => {
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
 **collectionId** | **String**| Unique ID of the collection to delete | 

### Return type

[**ApiV1CollectionsCollectionIdDelete200Response**](ApiV1CollectionsCollectionIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1CollectionsCollectionIdGet

> ApiV1CollectionsCollectionIdGet200Response apiV1CollectionsCollectionIdGet(collectionId)

Get collection

Retrieves information about a specific collection

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.SimilaritySearchApi();
let collectionId = "collectionId_example"; // String | Unique ID of the collection to retrieve
apiInstance.apiV1CollectionsCollectionIdGet(collectionId, (error, data, response) => {
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
 **collectionId** | **String**| Unique ID of the collection to retrieve | 

### Return type

[**ApiV1CollectionsCollectionIdGet200Response**](ApiV1CollectionsCollectionIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1CollectionsPost

> ApiV1CollectionsPost200Response apiV1CollectionsPost(name, url, sourceType, opts)

Create collection

Creates a new collection from a web or S3 url

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.SimilaritySearchApi();
let name = "name_example"; // String | Name of the collection
let url = "url_example"; // String | URL of the source (web or S3)
let sourceType = "sourceType_example"; // String | Type of source (s3 or web)
let opts = {
  'indexWithDefault': true // Boolean | Whether to index with default settings
};
apiInstance.apiV1CollectionsPost(name, url, sourceType, opts, (error, data, response) => {
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
 **name** | **String**| Name of the collection | 
 **url** | **String**| URL of the source (web or S3) | 
 **sourceType** | **String**| Type of source (s3 or web) | 
 **indexWithDefault** | **Boolean**| Whether to index with default settings | [optional] 

### Return type

[**ApiV1CollectionsPost200Response**](ApiV1CollectionsPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

