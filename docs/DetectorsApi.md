# MatroidPublicApi.DetectorsApi

All URIs are relative to *https://192.168.86.46*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1DetectorsDetectorIdDelete**](DetectorsApi.md#apiV1DetectorsDetectorIdDelete) | **DELETE** /api/v1/detectors/{detectorId} | Delete a detector
[**apiV1DetectorsDetectorIdFeedbackFeedbackIdDelete**](DetectorsApi.md#apiV1DetectorsDetectorIdFeedbackFeedbackIdDelete) | **DELETE** /api/v1/detectors/{detectorId}/feedback/{feedbackId} | Delete detector feedback
[**apiV1DetectorsDetectorIdFeedbackGet**](DetectorsApi.md#apiV1DetectorsDetectorIdFeedbackGet) | **GET** /api/v1/detectors/{detectorId}/feedback | Get detector feedback
[**apiV1DetectorsDetectorIdFeedbackImagePost**](DetectorsApi.md#apiV1DetectorsDetectorIdFeedbackImagePost) | **POST** /api/v1/detectors/{detectorId}/feedback_image | Add image feedback to a detector
[**apiV1DetectorsDetectorIdFeedbackPost**](DetectorsApi.md#apiV1DetectorsDetectorIdFeedbackPost) | **POST** /api/v1/detectors/{detectorId}/feedback | Add feedback to a detector
[**apiV1DetectorsDetectorIdFinalizePost**](DetectorsApi.md#apiV1DetectorsDetectorIdFinalizePost) | **POST** /api/v1/detectors/{detectorId}/finalize | Train detector
[**apiV1DetectorsDetectorIdGet**](DetectorsApi.md#apiV1DetectorsDetectorIdGet) | **GET** /api/v1/detectors/{detectorId} | Get detector info
[**apiV1DetectorsDetectorIdMigrateDownPut**](DetectorsApi.md#apiV1DetectorsDetectorIdMigrateDownPut) | **PUT** /api/v1/detectors/{detectorId}/migrate-down | Migrate a detector back to the legacy studio
[**apiV1DetectorsDetectorIdMigratePut**](DetectorsApi.md#apiV1DetectorsDetectorIdMigratePut) | **PUT** /api/v1/detectors/{detectorId}/migrate | Migrate detector to new studio
[**apiV1DetectorsDetectorIdRedoPost**](DetectorsApi.md#apiV1DetectorsDetectorIdRedoPost) | **POST** /api/v1/detectors/{detectorId}/redo | Redo detector
[**apiV1DetectorsGet**](DetectorsApi.md#apiV1DetectorsGet) | **GET** /api/v1/detectors | List detectors (Deprecated)
[**apiV1DetectorsSearchGet**](DetectorsApi.md#apiV1DetectorsSearchGet) | **GET** /api/v1/detectors/search | Search detectors
[**apiV1DetectorsUploadPost**](DetectorsApi.md#apiV1DetectorsUploadPost) | **POST** /api/v1/detectors/upload | Import a detector
[**createDetector**](DetectorsApi.md#createDetector) | **POST** /api/v1/detectors | Create detector



## apiV1DetectorsDetectorIdDelete

> ApiV1DetectorsDetectorIdDelete200Response apiV1DetectorsDetectorIdDelete(detectorId)

Delete a detector

Deletes a detector. Requires the &#x60;processing&#x60; field on the detector to equal &#x60;false&#x60;.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector to be deleted
apiInstance.apiV1DetectorsDetectorIdDelete(detectorId, (error, data, response) => {
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
 **detectorId** | **String**| Unique ID of the detector to be deleted | 

### Return type

[**ApiV1DetectorsDetectorIdDelete200Response**](ApiV1DetectorsDetectorIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1DetectorsDetectorIdFeedbackFeedbackIdDelete

> ApiV1DetectorsDetectorIdFeedbackFeedbackIdDelete200Response apiV1DetectorsDetectorIdFeedbackFeedbackIdDelete(detectorId, feedbackId)

Delete detector feedback

Delete feedback you&#39;ve previously given a detector.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector feedback was added to
let feedbackId = "feedbackId_example"; // String | Unique ID of the feedback you're deleting
apiInstance.apiV1DetectorsDetectorIdFeedbackFeedbackIdDelete(detectorId, feedbackId, (error, data, response) => {
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
 **detectorId** | **String**| Unique ID of the detector feedback was added to | 
 **feedbackId** | **String**| Unique ID of the feedback you&#39;re deleting | 

### Return type

[**ApiV1DetectorsDetectorIdFeedbackFeedbackIdDelete200Response**](ApiV1DetectorsDetectorIdFeedbackFeedbackIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1DetectorsDetectorIdFeedbackGet

> [ApiV1DetectorsDetectorIdFeedbackGet200ResponseInner] apiV1DetectorsDetectorIdFeedbackGet(detectorId, opts)

Get detector feedback

Retrieve feedback for a detector, either as raw feedback or counts by label.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector to get feedback for
let opts = {
  'counts': false // Boolean | Whether to return raw feedback or just counts by label. Defaults to raw feedback.
};
apiInstance.apiV1DetectorsDetectorIdFeedbackGet(detectorId, opts, (error, data, response) => {
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
 **detectorId** | **String**| Unique ID of the detector to get feedback for | 
 **counts** | **Boolean**| Whether to return raw feedback or just counts by label. Defaults to raw feedback. | [optional] [default to false]

### Return type

[**[ApiV1DetectorsDetectorIdFeedbackGet200ResponseInner]**](ApiV1DetectorsDetectorIdFeedbackGet200ResponseInner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1DetectorsDetectorIdFeedbackImagePost

> ApiV1DetectorsDetectorIdFeedbackImagePost200Response apiV1DetectorsDetectorIdFeedbackImagePost(detectorId, labelName, opts)

Add image feedback to a detector

Add image as feedback to your detector from a local file or URL. Feedback images will be added as unannotated training data when retraining your detector.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector to give feedback to
let labelName = "labelName_example"; // String | Which label to add image feedback to
let opts = {
  'file': "/path/to/file", // File | Local file to add as feedback
  'url': "url_example", // String | URL of the image to add as feedback
  'source': "source_example" // String | Additional metadata to track the source of submitted feedback
};
apiInstance.apiV1DetectorsDetectorIdFeedbackImagePost(detectorId, labelName, opts, (error, data, response) => {
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
 **detectorId** | **String**| Unique ID of the detector to give feedback to | 
 **labelName** | **String**| Which label to add image feedback to | 
 **file** | **File**| Local file to add as feedback | [optional] 
 **url** | **String**| URL of the image to add as feedback | [optional] 
 **source** | **String**| Additional metadata to track the source of submitted feedback | [optional] 

### Return type

[**ApiV1DetectorsDetectorIdFeedbackImagePost200Response**](ApiV1DetectorsDetectorIdFeedbackImagePost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1DetectorsDetectorIdFeedbackPost

> ApiV1DetectorsDetectorIdFeedbackPost200Response apiV1DetectorsDetectorIdFeedbackPost(detectorId, feedback, opts)

Add feedback to a detector

Add feedback to your detector from a local file or URL. You can add positive feedback to reinforce detector predictions, or negative feedback to correct detector mistakes. Feedback is not taken into account until you retrain your detector. If a localizer detector predicted multiple object bounding box, you should give feedback for each bounding box in a single request.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector to give feedback to
let feedback = [new MatroidPublicApi.ApiV1DetectorsDetectorIdFeedbackPostRequestFeedbackInner()]; // [ApiV1DetectorsDetectorIdFeedbackPostRequestFeedbackInner] | Array of feedback information
let opts = {
  'url': "url_example", // String | URL of the image to add feedback for
  'file': "/path/to/file" // File | Local file to add feedback for
};
apiInstance.apiV1DetectorsDetectorIdFeedbackPost(detectorId, feedback, opts, (error, data, response) => {
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
 **detectorId** | **String**| Unique ID of the detector to give feedback to | 
 **feedback** | [**[ApiV1DetectorsDetectorIdFeedbackPostRequestFeedbackInner]**](ApiV1DetectorsDetectorIdFeedbackPostRequestFeedbackInner.md)| Array of feedback information | 
 **url** | **String**| URL of the image to add feedback for | [optional] 
 **file** | **File**| Local file to add feedback for | [optional] 

### Return type

[**ApiV1DetectorsDetectorIdFeedbackPost200Response**](ApiV1DetectorsDetectorIdFeedbackPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV1DetectorsDetectorIdFinalizePost

> ApiV1DetectorsDetectorIdFinalizePost200Response apiV1DetectorsDetectorIdFinalizePost(detectorId)

Train detector

Requires the &#x60;processing&#x60; field on the detector to equal &#x60;false&#x60;. Starts training asynchronously and sets the &#x60;processing&#x60; field to &#x60;true&#x60;.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector to train
apiInstance.apiV1DetectorsDetectorIdFinalizePost(detectorId, (error, data, response) => {
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
 **detectorId** | **String**| Unique ID of the detector to train | 

### Return type

[**ApiV1DetectorsDetectorIdFinalizePost200Response**](ApiV1DetectorsDetectorIdFinalizePost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1DetectorsDetectorIdGet

> ApiV1DetectorsDetectorIdGet200Response apiV1DetectorsDetectorIdGet(detectorId)

Get detector info

Retrieves information about the specified detector

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector
apiInstance.apiV1DetectorsDetectorIdGet(detectorId, (error, data, response) => {
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

### Return type

[**ApiV1DetectorsDetectorIdGet200Response**](ApiV1DetectorsDetectorIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1DetectorsDetectorIdMigrateDownPut

> ApiV1DetectorsDetectorIdMigrateDownPut200Response apiV1DetectorsDetectorIdMigrateDownPut(detectorId)

Migrate a detector back to the legacy studio

Reverts the &#39;migrated&#39; and &#39;useDataset&#39; flags for a detector that was previously migrated up. Only detectors in the &#39;pending&#39; state and marked as &#39;migrated&#39; can be reverted.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let detectorId = "detectorId_example"; // String | The ID of the detector to migrate back to the legacy studio
apiInstance.apiV1DetectorsDetectorIdMigrateDownPut(detectorId, (error, data, response) => {
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
 **detectorId** | **String**| The ID of the detector to migrate back to the legacy studio | 

### Return type

[**ApiV1DetectorsDetectorIdMigrateDownPut200Response**](ApiV1DetectorsDetectorIdMigrateDownPut200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1DetectorsDetectorIdMigratePut

> ApiV1DetectorsDetectorIdMigratePut200Response apiV1DetectorsDetectorIdMigratePut(detectorId)

Migrate detector to new studio

Converts a pending detector into the new studio format and returns the new dataset ID. Data for new studio detectors is stored in a dataset consisting of annotated images and labels.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector to migrate
apiInstance.apiV1DetectorsDetectorIdMigratePut(detectorId, (error, data, response) => {
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
 **detectorId** | **String**| Unique ID of the detector to migrate | 

### Return type

[**ApiV1DetectorsDetectorIdMigratePut200Response**](ApiV1DetectorsDetectorIdMigratePut200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1DetectorsDetectorIdRedoPost

> ApiV1DetectorsDetectorIdRedoPost200Response apiV1DetectorsDetectorIdRedoPost(detectorId, opts)

Redo detector

Note: a deep copy of the trained detector with a different &#x60;detectorId&#x60; will be made.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let detectorId = "detectorId_example"; // String | Unique ID of the detector to redo
let opts = {
  'feedbackOnly': true // Boolean | Whether to retrain the detector only on images from feedback
};
apiInstance.apiV1DetectorsDetectorIdRedoPost(detectorId, opts, (error, data, response) => {
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
 **detectorId** | **String**| Unique ID of the detector to redo | 
 **feedbackOnly** | **Boolean**| Whether to retrain the detector only on images from feedback | [optional] 

### Return type

[**ApiV1DetectorsDetectorIdRedoPost200Response**](ApiV1DetectorsDetectorIdRedoPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## apiV1DetectorsGet

> [ApiV1DetectorsGet200ResponseInner] apiV1DetectorsGet()

List detectors (Deprecated)

Retrieves a list of detectors. This endpoint is deprecated, use the search endpoint instead.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
apiInstance.apiV1DetectorsGet((error, data, response) => {
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

[**[ApiV1DetectorsGet200ResponseInner]**](ApiV1DetectorsGet200ResponseInner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1DetectorsSearchGet

> [ApiV1DetectorsSearchGet200ResponseInner] apiV1DetectorsSearchGet(opts)

Search detectors

Returns detectors that match the query.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let opts = {
  'id': "id_example", // String | Matches the detector with this ID. If this field is specified, only a single detector should be returned
  'name': "name_example", // String | Matches detectors with names that contain a word that begins with the specified value for this field
  'label': "label_example", // String | Matches detectors with at least one label that contains a word that begins with the specified value for this field
  'published': false, // Boolean | If set to `false`, only searches user-owned detectors. If set to `true`, only searches published detectors
  'detectorType': "detectorType_example", // String | Type of detector to search for
  'state': "'trained'", // String | State of the detector
  'categoryId': "categoryId_example", // String | Category ID to filter by (e.g., 'People', 'Technology', 'Industrial IoT')
  'limit': 100, // Number | Maximum number of query results returned
  'offset': 0, // Number | Number of query results skipped
  'includeImageClasses': false // Boolean | Whether to include image classes in the response
};
apiInstance.apiV1DetectorsSearchGet(opts, (error, data, response) => {
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
 **id** | **String**| Matches the detector with this ID. If this field is specified, only a single detector should be returned | [optional] 
 **name** | **String**| Matches detectors with names that contain a word that begins with the specified value for this field | [optional] 
 **label** | **String**| Matches detectors with at least one label that contains a word that begins with the specified value for this field | [optional] 
 **published** | **Boolean**| If set to &#x60;false&#x60;, only searches user-owned detectors. If set to &#x60;true&#x60;, only searches published detectors | [optional] [default to false]
 **detectorType** | **String**| Type of detector to search for | [optional] 
 **state** | **String**| State of the detector | [optional] [default to &#39;trained&#39;]
 **categoryId** | **String**| Category ID to filter by (e.g., &#39;People&#39;, &#39;Technology&#39;, &#39;Industrial IoT&#39;) | [optional] 
 **limit** | **Number**| Maximum number of query results returned | [optional] [default to 100]
 **offset** | **Number**| Number of query results skipped | [optional] [default to 0]
 **includeImageClasses** | **Boolean**| Whether to include image classes in the response | [optional] [default to false]

### Return type

[**[ApiV1DetectorsSearchGet200ResponseInner]**](ApiV1DetectorsSearchGet200ResponseInner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1DetectorsUploadPost

> ApiV1DetectorsUploadPost200Response apiV1DetectorsUploadPost(name, opts)

Import a detector

Imports a detector into Matroid. Certain combinations of parameters can be supplied: &#x60;fileDetector&#x60;, &#x60;fileProto&#x60; + &#x60;fileLabel&#x60; (+ &#x60;fileLabelInd&#x60;), or &#x60;fileProto&#x60; + &#x60;labels&#x60; (+ &#x60;labelInds&#x60;). The parameters in parentheses can be optionally supplied for object detection.

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let name = "name_example"; // String | Name of the detector
let opts = {
  'fileDetector': "/path/to/file", // File | `.matroid` file
  'fileProto': "/path/to/file", // File | Frozen inference graph `.pb` file
  'fileLabel': "/path/to/file", // File | Label `.txt` file, one line per class
  'fileLabelInd': "/path/to/file", // File | Label index `.txt` file, one line per index
  'labels': ["null"], // [String] | List of labels for the detector
  'labelInds': ["null"], // [String] | List of label indices for the detector
  'inputTensor': "inputTensor_example", // String | Input tensor name with size (e.g. `ToFloat[600,600,3]`)
  'outputTensor': "outputTensor_example", // String | Output tensor name(s) with size (e.g. `detection_boxes[100,4],detection_classes[100],detection_scores[100]`)
  'detectorType': "detectorType_example" // String | Type of the detector
};
apiInstance.apiV1DetectorsUploadPost(name, opts, (error, data, response) => {
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
 **name** | **String**| Name of the detector | 
 **fileDetector** | **File**| &#x60;.matroid&#x60; file | [optional] 
 **fileProto** | **File**| Frozen inference graph &#x60;.pb&#x60; file | [optional] 
 **fileLabel** | **File**| Label &#x60;.txt&#x60; file, one line per class | [optional] 
 **fileLabelInd** | **File**| Label index &#x60;.txt&#x60; file, one line per index | [optional] 
 **labels** | [**[String]**](String.md)| List of labels for the detector | [optional] 
 **labelInds** | [**[String]**](String.md)| List of label indices for the detector | [optional] 
 **inputTensor** | **String**| Input tensor name with size (e.g. &#x60;ToFloat[600,600,3]&#x60;) | [optional] 
 **outputTensor** | **String**| Output tensor name(s) with size (e.g. &#x60;detection_boxes[100,4],detection_classes[100],detection_scores[100]&#x60;) | [optional] 
 **detectorType** | **String**| Type of the detector | [optional] 

### Return type

[**ApiV1DetectorsUploadPost200Response**](ApiV1DetectorsUploadPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## createDetector

> CreateDetector200Response createDetector(name, detectorType, file, opts)

Create detector

Asynchronously creates a detector (sets the &#x60;processing&#x60; field on the detector to &#x60;true&#x60;).  Note: calling this API creates a pending detector, and you can update this detector with more images by calling this API with &#x60;detectorId&#x60;. However, creating more than one pending detector is not allowed, so you need to finalize or delete your existing pending detector before creating a new one.  You can only add new labels to your pending detector with this route. If you want to add images to existing labels, please use the route for updating labels with images. The zip file size limit is 2 GB, and the limit for each image inside the zip is 10 MB. 

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.DetectorsApi();
let name = "name_example"; // String | Name of the detector. Required when creating a new detector.
let detectorType = "detectorType_example"; // String | `general`, `facial_recognition`, `facial_characteristics`, `single_shot_detector`, `panoptic`. Required when creating a new detector.
let file = "/path/to/file"; // File | Zip file of images. Supported formats: - Matroid format: `zip/label_name/_*.(jpg|jpeg|png)`, with optional bounding box CSV (`zip/bbox.csv` containing columns `left`, `top`, `right`, `bottom`, `label`, `type`, `file`). - COCO format: `zip/_*.(jpg|jpeg|png)`. 
let opts = {
  'detectorId': "detectorId_example", // String | If provided, updates this pending detector with more images.
  'labelsJSON': "/path/to/file" // File | JSON file in COCO format.
};
apiInstance.createDetector(name, detectorType, file, opts, (error, data, response) => {
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
 **name** | **String**| Name of the detector. Required when creating a new detector. | 
 **detectorType** | **String**| &#x60;general&#x60;, &#x60;facial_recognition&#x60;, &#x60;facial_characteristics&#x60;, &#x60;single_shot_detector&#x60;, &#x60;panoptic&#x60;. Required when creating a new detector. | 
 **file** | **File**| Zip file of images. Supported formats: - Matroid format: &#x60;zip/label_name/_*.(jpg|jpeg|png)&#x60;, with optional bounding box CSV (&#x60;zip/bbox.csv&#x60; containing columns &#x60;left&#x60;, &#x60;top&#x60;, &#x60;right&#x60;, &#x60;bottom&#x60;, &#x60;label&#x60;, &#x60;type&#x60;, &#x60;file&#x60;). - COCO format: &#x60;zip/_*.(jpg|jpeg|png)&#x60;.  | 
 **detectorId** | **String**| If provided, updates this pending detector with more images. | [optional] 
 **labelsJSON** | **File**| JSON file in COCO format. | [optional] 

### Return type

[**CreateDetector200Response**](CreateDetector200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

