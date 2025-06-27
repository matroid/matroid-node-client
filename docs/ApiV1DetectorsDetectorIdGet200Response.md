# MatroidPublicApi.ApiV1DetectorsDetectorIdGet200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the detector | [optional] 
**name** | **String** | Name of the detector | [optional] 
**datasetId** | **String** | Id of dataset associated with detector. Available for new studio detectors only. See \&quot;Migrate detector to new studio\&quot; for more information | [optional] 
**labels** | **[String]** | List of label names associated with the detector | [optional] 
**labelIds** | **[String]** | List of label IDs associated with the detector | [optional] 
**type** | **String** | Type of the detector | [optional] 
**permissionLevel** | **String** | Permission level of the detector | [optional] 
**owner** | **Boolean** | Whether the detector is owned by the user who sent the request | [optional] 
**state** | **String** | Current state of the detector | [optional] 
**processing** | **Boolean** | Whether the detector is being updated in the background | [optional] 
**training** | [**ApiV1DetectorsDetectorIdGet200ResponseTraining**](ApiV1DetectorsDetectorIdGet200ResponseTraining.md) |  | [optional] 
**uploadStatus** | **Object** | Model upload status (only present if user uploaded the model) | [optional] 



## Enum: TypeEnum


* `general` (value: `"general"`)

* `facial_recognition` (value: `"facial_recognition"`)

* `facial_characteristics` (value: `"facial_characteristics"`)

* `single_shot_detector` (value: `"single_shot_detector"`)





## Enum: PermissionLevelEnum


* `private` (value: `"private"`)

* `published (closed-source data)` (value: `"published (closed-source data)"`)

* `published (open-source data)` (value: `"published (open-source data)"`)





## Enum: StateEnum


* `pending` (value: `"pending"`)

* `training` (value: `"training"`)

* `trained` (value: `"trained"`)

* `archived` (value: `"archived"`)

* `failed` (value: `"failed"`)




