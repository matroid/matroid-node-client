# MatroidPublicApi.DatasetApi

All URIs are relative to *https://app.matroid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DatasetDatasetIdMediaImMediaIdGet**](DatasetApi.md#apiV1DatasetDatasetIdMediaImMediaIdGet) | **GET** /api/v1/dataset/{datasetId}/media/im/{mediaId} | Get media from dataset



## apiV1DatasetDatasetIdMediaImMediaIdGet

> File apiV1DatasetDatasetIdMediaImMediaIdGet(datasetId, mediaId)

Get media from dataset

Retrieves media (image) data from a dataset by its ID

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DatasetApi();
let datasetId = "datasetId_example"; // String | ID of the dataset
let mediaId = "mediaId_example"; // String | ID of the media to retrieve
apiInstance.apiV1DatasetDatasetIdMediaImMediaIdGet(datasetId, mediaId, (error, data, response) => {
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
 **datasetId** | **String**| ID of the dataset | 
 **mediaId** | **String**| ID of the media to retrieve | 

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/*, application/json

