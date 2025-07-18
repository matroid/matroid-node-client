# MatroidPublicApi.DatasetApi

All URIs are relative to *https://app.matroid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DatasetDatasetIdMediaImMediaIdGet**](DatasetApi.md#apiV1DatasetDatasetIdMediaImMediaIdGet) | **GET** /api/v1/dataset/{datasetId}/media/im/{mediaId} | Get media from dataset
[**apiV1DetectorsDetectorIdAddDataPost**](DatasetApi.md#apiV1DetectorsDetectorIdAddDataPost) | **POST** /api/v1/detectors/{detectorId}/add-data | Add images to a detector&#39;s dataset (New Studio)



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


## apiV1DetectorsDetectorIdAddDataPost

> ApiV1DetectorsDetectorIdAddDataPost200Response apiV1DetectorsDetectorIdAddDataPost(detectorId, opts)

Add images to a detector&#39;s dataset (New Studio)

Adds images to the dataset associated with a given detector (new studio format). The detector must use a dataset and have a valid dataset ID. Images can be uploaded as files (multipart/form-data) or by specifying image IDs for a simple add.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DatasetApi();
let detectorId = "detectorId_example"; // String | The ID of the detector whose dataset will be updated.
let opts = {
  'file': ["null"] // [File] | One or more image files or zip files containing images.
};
apiInstance.apiV1DetectorsDetectorIdAddDataPost(detectorId, opts, (error, data, response) => {
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
 **detectorId** | **String**| The ID of the detector whose dataset will be updated. | 
 **file** | **[File]**| One or more image files or zip files containing images. | [optional] 

### Return type

[**ApiV1DetectorsDetectorIdAddDataPost200Response**](ApiV1DetectorsDetectorIdAddDataPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

