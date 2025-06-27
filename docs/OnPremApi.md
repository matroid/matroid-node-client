# MatroidPublicApi.OnPremApi

All URIs are relative to *https://app.matroid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1SystemStatusGet**](OnPremApi.md#apiV1SystemStatusGet) | **GET** /api/v1/system_status | Get system status



## apiV1SystemStatusGet

> ApiV1SystemStatusGet200Response apiV1SystemStatusGet()

Get system status

Get&#39;s information about the current Matroid status

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.OnPremApi();
apiInstance.apiV1SystemStatusGet((error, data, response) => {
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

[**ApiV1SystemStatusGet200Response**](ApiV1SystemStatusGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

