# MatroidPublicApi.LicensesApi

All URIs are relative to *https://192.168.86.46*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1LicensePost**](LicensesApi.md#apiV1LicensePost) | **POST** /api/v1/license | Create onprem license



## apiV1LicensePost

> ApiV1LicensePost200Response apiV1LicensePost(machineId, opts)

Create onprem license

Create a new Matroid on prem license

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.LicensesApi();
let machineId = "machineId_example"; // String | Unique identifier for the device running matroid
let opts = {
  'expirationDate': "expirationDate_example", // String | Expiration date formatted as yyyy-mm-dd. Maximum one month from the current date
  'name': "name_example" // String | Name for your license
};
apiInstance.apiV1LicensePost(machineId, opts, (error, data, response) => {
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
 **machineId** | **String**| Unique identifier for the device running matroid | 
 **expirationDate** | **String**| Expiration date formatted as yyyy-mm-dd. Maximum one month from the current date | [optional] 
 **name** | **String**| Name for your license | [optional] 

### Return type

[**ApiV1LicensePost200Response**](ApiV1LicensePost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

