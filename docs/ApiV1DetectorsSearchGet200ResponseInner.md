# MatroidPublicApi.ApiV1DetectorsSearchGet200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the detector | [optional] 
**name** | **String** | Name of the detector | [optional] 
**labels** | **[String]** | List of label names associated with the detector | [optional] 
**labelIds** | **[String]** | List of label IDs associated with the detector | [optional] 
**type** | **String** | Type of the detector | [optional] 
**permissionLevel** | **String** | Permission level of the detector | [optional] 
**owner** | **Boolean** | Whether the detector is owned by the user who sent the request | [optional] 
**state** | **String** | State of the detector | [optional] [default to &#39;trained&#39;]
**processing** | **Boolean** | Whether the detector is being updated in the background | [optional] 
**training** | [**ApiV1DetectorsSearchGet200ResponseInnerTraining**](ApiV1DetectorsSearchGet200ResponseInnerTraining.md) |  | [optional] 


