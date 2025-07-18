# MatroidPublicApi.UsersApi

All URIs are relative to *https://192.168.86.46*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1TestUsersPost**](UsersApi.md#apiV1TestUsersPost) | **POST** /api/v1/test_users | Create test user
[**apiV1TestUsersUserIdDelete**](UsersApi.md#apiV1TestUsersUserIdDelete) | **DELETE** /api/v1/test_users/{userId} | Delete test user



## apiV1TestUsersPost

> ApiV1TestUsersPost200Response apiV1TestUsersPost(firstName, lastName, email, password, detectorColumns, planName, opts)

Create test user

Creates a new user. Only accessible by administrators (on-prem).

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.UsersApi();
let firstName = "firstName_example"; // String | User's first name
let lastName = "lastName_example"; // String | User's last name
let email = "email_example"; // String | User's email, must be unique
let password = "password_example"; // String | User's password
let detectorColumns = "detectorColumns_example"; // String | Comma separated list of detector columns to show on detector page
let planName = "planName_example"; // String | The user's initial plan
let opts = {
  'concurrentTrainLimit': 56, // Number | Maximum number of detectors that can be trained simultaneously
  'concurrentVideoLimit': 56, // Number | Maximum number of videos that can be processed simultaneously
  'creditLimit': "creditLimit_example", // String | User credits
  'canAccessStreamDetections': true, // Boolean | Whether the user can access the calendar page
  'groupList': "groupList_example", // String | Comma separated list of groups the user will belong to
  'enableEmail': true // Boolean | Whether email should be enabled for the user. Defaults to false
};
apiInstance.apiV1TestUsersPost(firstName, lastName, email, password, detectorColumns, planName, opts, (error, data, response) => {
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
 **firstName** | **String**| User&#39;s first name | 
 **lastName** | **String**| User&#39;s last name | 
 **email** | **String**| User&#39;s email, must be unique | 
 **password** | **String**| User&#39;s password | 
 **detectorColumns** | **String**| Comma separated list of detector columns to show on detector page | 
 **planName** | **String**| The user&#39;s initial plan | 
 **concurrentTrainLimit** | **Number**| Maximum number of detectors that can be trained simultaneously | [optional] 
 **concurrentVideoLimit** | **Number**| Maximum number of videos that can be processed simultaneously | [optional] 
 **creditLimit** | **String**| User credits | [optional] 
 **canAccessStreamDetections** | **Boolean**| Whether the user can access the calendar page | [optional] 
 **groupList** | **String**| Comma separated list of groups the user will belong to | [optional] 
 **enableEmail** | **Boolean**| Whether email should be enabled for the user. Defaults to false | [optional] 

### Return type

[**ApiV1TestUsersPost200Response**](ApiV1TestUsersPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## apiV1TestUsersUserIdDelete

> ApiV1TestUsersUserIdDelete200Response apiV1TestUsersUserIdDelete(userId)

Delete test user

Deletes a user and all associated data

### Example

```javascript
import MatroidPublicApi from 'matroid_public_api';
let defaultClient = MatroidPublicApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MatroidPublicApi.UsersApi();
let userId = "userId_example"; // String | ID of the user to delete
apiInstance.apiV1TestUsersUserIdDelete(userId, (error, data, response) => {
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
 **userId** | **String**| ID of the user to delete | 

### Return type

[**ApiV1TestUsersUserIdDelete200Response**](ApiV1TestUsersUserIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

