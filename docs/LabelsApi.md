# MatroidPublicApi.LabelsApi

All URIs are relative to *https://192.168.86.46*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DetectorsDetectorIdLabelsLabelIdDelete**](LabelsApi.md#apiV1DetectorsDetectorIdLabelsLabelIdDelete) | **DELETE** /api/v1/detectors/{detectorId}/labels/{labelId} | Delete label
[**apiV1DetectorsDetectorIdLabelsLabelIdGet**](LabelsApi.md#apiV1DetectorsDetectorIdLabelsLabelIdGet) | **GET** /api/v1/detectors/{detectorId}/labels/{labelId} | Get label images
[**apiV1DetectorsDetectorIdLabelsLabelIdPatch**](LabelsApi.md#apiV1DetectorsDetectorIdLabelsLabelIdPatch) | **PATCH** /api/v1/detectors/{detectorId}/labels/{labelId} | Update annotations
[**apiV1DetectorsDetectorIdLabelsPost**](LabelsApi.md#apiV1DetectorsDetectorIdLabelsPost) | **POST** /api/v1/detectors/{detectorId}/labels | Create label with images
[**apiV1ImagesAnnotationsGet**](LabelsApi.md#apiV1ImagesAnnotationsGet) | **GET** /api/v1/images/annotations | Get annotations



## apiV1DetectorsDetectorIdLabelsLabelIdDelete

> ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response apiV1DetectorsDetectorIdLabelsLabelIdDelete(detectorId, labelId)

Delete label

Requires the detector&#39;s &#x60;processing&#x60; field to be set to &#x60;false&#x60;.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.LabelsApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector associated with the relevant label
let labelId = "labelId_example"; // String | Unique ID of the label to delete
apiInstance.apiV1DetectorsDetectorIdLabelsLabelIdDelete(detectorId, labelId, (error, data, response) => {
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
 **detectorId** | **String**| Unique ID of the detector associated with the relevant label | 
 **labelId** | **String**| Unique ID of the label to delete | 

### Return type

[**ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response**](ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1DetectorsDetectorIdLabelsLabelIdGet

> ApiV1DetectorsDetectorIdLabelsLabelIdGet200Response apiV1DetectorsDetectorIdLabelsLabelIdGet(detectorId, labelId)

Get label images

Retrieves images for a given label

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.LabelsApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector associated with the relevant label
let labelId = "labelId_example"; // String | Unique ID of the label for which to retrieve images
apiInstance.apiV1DetectorsDetectorIdLabelsLabelIdGet(detectorId, labelId, (error, data, response) => {
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
 **detectorId** | **String**| Unique ID of the detector associated with the relevant label | 
 **labelId** | **String**| Unique ID of the label for which to retrieve images | 

### Return type

[**ApiV1DetectorsDetectorIdLabelsLabelIdGet200Response**](ApiV1DetectorsDetectorIdLabelsLabelIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1DetectorsDetectorIdLabelsLabelIdPatch

> ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response apiV1DetectorsDetectorIdLabelsLabelIdPatch(detectorId, labelId, apiV1DetectorsDetectorIdLabelsLabelIdPatchRequest)

Update annotations

Updates annotations for the specified images

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.LabelsApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector
let labelId = "labelId_example"; // String | Unique ID of the label
let apiV1DetectorsDetectorIdLabelsLabelIdPatchRequest = new MatroidPublicApi.ApiV1DetectorsDetectorIdLabelsLabelIdPatchRequest(); // ApiV1DetectorsDetectorIdLabelsLabelIdPatchRequest | 
apiInstance.apiV1DetectorsDetectorIdLabelsLabelIdPatch(detectorId, labelId, apiV1DetectorsDetectorIdLabelsLabelIdPatchRequest, (error, data, response) => {
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
 **detectorId** | **String**| Unique ID of the detector | 
 **labelId** | **String**| Unique ID of the label | 
 **apiV1DetectorsDetectorIdLabelsLabelIdPatchRequest** | [**ApiV1DetectorsDetectorIdLabelsLabelIdPatchRequest**](ApiV1DetectorsDetectorIdLabelsLabelIdPatchRequest.md)|  | 

### Return type

[**ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response**](ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV1DetectorsDetectorIdLabelsPost

> ApiV1DetectorsDetectorIdLabelsPost200Response apiV1DetectorsDetectorIdLabelsPost(detectorId, name, imageFiles, bboxes, opts)

Create label with images

Asynchronously creates a label for a detector (sets &#x60;processing&#x60; to &#x60;true&#x60;). Requires the detector&#39;s &#x60;processing&#x60; field to be set to &#x60;false&#x60;.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.LabelsApi();
let detectorId = "detectorId_example"; // String | ID of the detector
let name = "name_example"; // String | Name of the label
let imageFiles = ["null"]; // [File] | Array of image files to upload
let bboxes = [new MatroidPublicApi.ApiV1DetectorsDetectorIdLabelsLabelIdGet200ResponseImagesInnerTagsInnerBbox()]; // [ApiV1DetectorsDetectorIdLabelsLabelIdGet200ResponseImagesInnerTagsInnerBbox] | 
let opts = {
  'destination': "'images'" // String | Possible values: 'images', 'deselectedImages', 'negativeImages', or 'deselectedNegativeImages'
};
apiInstance.apiV1DetectorsDetectorIdLabelsPost(detectorId, name, imageFiles, bboxes, opts, (error, data, response) => {
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
 **detectorId** | **String**| ID of the detector | 
 **name** | **String**| Name of the label | 
 **imageFiles** | **[File]**| Array of image files to upload | 
 **bboxes** | [**[ApiV1DetectorsDetectorIdLabelsLabelIdGet200ResponseImagesInnerTagsInnerBbox]**](ApiV1DetectorsDetectorIdLabelsLabelIdGet200ResponseImagesInnerTagsInnerBbox.md)|  | 
 **destination** | **String**| Possible values: &#39;images&#39;, &#39;deselectedImages&#39;, &#39;negativeImages&#39;, or &#39;deselectedNegativeImages&#39; | [optional] [default to &#39;images&#39;]

### Return type

[**ApiV1DetectorsDetectorIdLabelsPost200Response**](ApiV1DetectorsDetectorIdLabelsPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1ImagesAnnotationsGet

> ApiV1ImagesAnnotationsGet200Response apiV1ImagesAnnotationsGet(opts)

Get annotations

Requires the detector&#39;s &#x60;processing&#x60; field to be set to &#x60;false&#x60;. One of the three IDs listed below must be provided.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.LabelsApi();
let opts = {
  'detectorId': "detectorId_example", // String | ID of the detector to get annotations for
  'labelIds': ["null"], // [String] | Array of label IDs to get annotations for
  'imageId': "imageId_example" // String | ID of the image to get annotations for
};
apiInstance.apiV1ImagesAnnotationsGet(opts, (error, data, response) => {
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
 **detectorId** | **String**| ID of the detector to get annotations for | [optional] 
 **labelIds** | [**[String]**](String.md)| Array of label IDs to get annotations for | [optional] 
 **imageId** | **String**| ID of the image to get annotations for | [optional] 

### Return type

[**ApiV1ImagesAnnotationsGet200Response**](ApiV1ImagesAnnotationsGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

