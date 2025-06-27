# MatroidPublicApi.AccountsApi

All URIs are relative to *https://app.matroid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1AccountGet**](AccountsApi.md#apiV1AccountGet) | **GET** /api/v1/account | Get account information
[**apiV1OauthTokenPost**](AccountsApi.md#apiV1OauthTokenPost) | **POST** /api/v1/oauth/token | Refresh OAuth token



## apiV1AccountGet

> ApiV1AccountGet200Response apiV1AccountGet()

Get account information

Retrieves account information including user details, credits, and usage statistics

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.AccountsApi();
apiInstance.apiV1AccountGet((error, data, response) => {
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

[**ApiV1AccountGet200Response**](ApiV1AccountGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1OauthTokenPost

> ApiV1OauthTokenPost200Response apiV1OauthTokenPost(clientId, clientSecret, grantType)

Refresh OAuth token

Refreshes OAuth access token using client credentials

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.AccountsApi();
let clientId = "clientId_example"; // String | Your public Matroid key
let clientSecret = "clientSecret_example"; // String | Your private Matroid key
let grantType = "grantType_example"; // String | Type of grant (client_credentials)
apiInstance.apiV1OauthTokenPost(clientId, clientSecret, grantType, (error, data, response) => {
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
 **clientId** | **String**| Your public Matroid key | 
 **clientSecret** | **String**| Your private Matroid key | 
 **grantType** | **String**| Type of grant (client_credentials) | 

### Return type

[**ApiV1OauthTokenPost200Response**](ApiV1OauthTokenPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

