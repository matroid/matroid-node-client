# MatroidPublicApi.ImagesApi

All URIs are relative to *https://app.matroid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DetectorsDetectorIdClassifyImagePost**](ImagesApi.md#apiV1DetectorsDetectorIdClassifyImagePost) | **POST** /api/v1/detectors/{detectorId}/classify_image | Classify image
[**apiV1DetectorsDetectorIdGetSaliencyMapPost**](ImagesApi.md#apiV1DetectorsDetectorIdGetSaliencyMapPost) | **POST** /api/v1/detectors/{detectorId}/get_saliency_map | Get saliency map
[**apiV1LocalizePost**](ImagesApi.md#apiV1LocalizePost) | **POST** /api/v1/localize | Localize objects in images



## apiV1DetectorsDetectorIdClassifyImagePost

> ApiV1DetectorsDetectorIdClassifyImagePost200Response apiV1DetectorsDetectorIdClassifyImagePost(detectorId, opts)

Classify image

Classifies one or more images using a detector. Note, the &#x60;classify_image&#x60; API call works for localizers as well and should be preferred over &#x60;localize_image&#x60;.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.ImagesApi();
let detectorId = "detectorId_example"; // String | ID of the detector to use for classification
let opts = {
  'url': ["null"], // [String] | URL(s) of image(s) to classify
  'file': ["null"], // [File] | Image file(s) to classify
  'localizationConfidence': 0.5, // Number | Minimum confidence threshold for localizations
  'numResults': 20, // Number | Maximum number of results to return
  'textLabels': ["null"] // [String] | Optional list of labels for open set detection
};
apiInstance.apiV1DetectorsDetectorIdClassifyImagePost(detectorId, opts, (error, data, response) => {
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
 **detectorId** | **String**| ID of the detector to use for classification | 
 **url** | [**[String]**](String.md)| URL(s) of image(s) to classify | [optional] 
 **file** | **[File]**| Image file(s) to classify | [optional] 
 **localizationConfidence** | **Number**| Minimum confidence threshold for localizations | [optional] [default to 0.5]
 **numResults** | **Number**| Maximum number of results to return | [optional] [default to 20]
 **textLabels** | [**[String]**](String.md)| Optional list of labels for open set detection | [optional] 

### Return type

[**ApiV1DetectorsDetectorIdClassifyImagePost200Response**](ApiV1DetectorsDetectorIdClassifyImagePost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1DetectorsDetectorIdGetSaliencyMapPost

> ApiV1DetectorsDetectorIdGetSaliencyMapPost200Response apiV1DetectorsDetectorIdGetSaliencyMapPost(detectorId, version, classIdx, opts)

Get saliency map

Generate a saliency map for an image using a specified detector. One of file, imageId, or url must be provided.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.ImagesApi();
let detectorId = "detectorId_example"; // String | ID of the detector to use
let version = "version_example"; // String | API version identifier (e.g. \"v1\")
let classIdx = 3.4; // Number | Class index for saliency map generation
let opts = {
  'file': "/path/to/file", // File | Image file to process
  'imageId': "imageId_example", // String | ID of an existing image
  'url': "url_example" // String | URL of the image to process
};
apiInstance.apiV1DetectorsDetectorIdGetSaliencyMapPost(detectorId, version, classIdx, opts, (error, data, response) => {
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
 **detectorId** | **String**| ID of the detector to use | 
 **version** | **String**| API version identifier (e.g. \&quot;v1\&quot;) | 
 **classIdx** | **Number**| Class index for saliency map generation | 
 **file** | **File**| Image file to process | [optional] 
 **imageId** | **String**| ID of an existing image | [optional] 
 **url** | **String**| URL of the image to process | [optional] 

### Return type

[**ApiV1DetectorsDetectorIdGetSaliencyMapPost200Response**](ApiV1DetectorsDetectorIdGetSaliencyMapPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1LocalizePost

> ApiV1LocalizePost200Response apiV1LocalizePost(localizer, localizerLabel, opts)

Localize objects in images

This API is very similar to the classify endpoint. However, it can be used to update bounding boxes of existing training images by supplying &#x60;update&#x3D;true&#x60;, &#x60;labelId&#x60;, and one of &#x60;imageId&#x60; or &#x60;imageIds&#x60;. It also has access to the internal face localizer (&#x60;localizer&#x3D;\&quot;DEFAULT_FACE\&quot;&#x60; and &#x60;localizerLabel&#x3D;\&quot;face\&quot;&#x60;). After receiving the results, perform the actual update using the Update Annotations endpoint. Note, the &#x60;classify_image&#x60; API call works for localizers as well and should be preferred over &#x60;localize_image&#x60; for inference.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.ImagesApi();
let localizer = "localizer_example"; // String | Unique ID of the detector (must support localization) or \\\"face\\\"
let localizerLabel = "localizerLabel_example"; // String | Name of the label to detect
let opts = {
  'confidence': 3.4, // Number | Minimum confidence level for predictions
  'file': "/path/to/file", // File | One or more image files
  'url': ["null"], // [String] | One or more image URLs
  'update': false, // Boolean | Whether to update the bounding boxes of existing training images.
  'maxFaces': 56, // Number | Maximum number of face localizations per image. Only relevant when using the default face localizer (i.e. localizer=\\\"DEFAULT_FACE\\\" and localizerLabel=\\\"face\\\")
  'labelId': "labelId_example", // String | Unique ID of the label for which to update images. Only relevant when updating (i.e. update=true)
  'imageId': "imageId_example", // String | Image ID. Only relevant when updating (i.e. update=true)
  'imageIds': ["null"] // [String] | One or more image IDs. Only relevant when updating (i.e. update=true)
};
apiInstance.apiV1LocalizePost(localizer, localizerLabel, opts, (error, data, response) => {
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
 **localizer** | **String**| Unique ID of the detector (must support localization) or \\\&quot;face\\\&quot; | 
 **localizerLabel** | **String**| Name of the label to detect | 
 **confidence** | **Number**| Minimum confidence level for predictions | [optional] 
 **file** | **File**| One or more image files | [optional] 
 **url** | [**[String]**](String.md)| One or more image URLs | [optional] 
 **update** | **Boolean**| Whether to update the bounding boxes of existing training images. | [optional] [default to false]
 **maxFaces** | **Number**| Maximum number of face localizations per image. Only relevant when using the default face localizer (i.e. localizer&#x3D;\\\&quot;DEFAULT_FACE\\\&quot; and localizerLabel&#x3D;\\\&quot;face\\\&quot;) | [optional] 
 **labelId** | **String**| Unique ID of the label for which to update images. Only relevant when updating (i.e. update&#x3D;true) | [optional] 
 **imageId** | **String**| Image ID. Only relevant when updating (i.e. update&#x3D;true) | [optional] 
 **imageIds** | [**[String]**](String.md)| One or more image IDs. Only relevant when updating (i.e. update&#x3D;true) | [optional] 

### Return type

[**ApiV1LocalizePost200Response**](ApiV1LocalizePost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

