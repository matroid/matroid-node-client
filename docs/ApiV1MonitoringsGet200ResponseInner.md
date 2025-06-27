# MatroidPublicApi.ApiV1MonitoringsGet200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the monitoring | [optional] 
**monitoringId** | **String** | Unique ID of the monitoring | [optional] 
**streamId** | **String** | Unique ID of the stream associated with the monitoring | [optional] 
**detectorId** | **String** | Unique ID of the detector associated with the monitoring | [optional] 
**state** | **String** | Current state of the monitoring | [optional] 
**labels** | **[String]** | List of labels to detect | [optional] 
**thresholds** | **[Number]** | List of confidence thresholds for each label | [optional] 
**endpoint** | **String** | Endpoint where detections are sent | [optional] 
**region** | [**ApiV1MonitoringsGet200ResponseInnerRegion**](ApiV1MonitoringsGet200ResponseInnerRegion.md) |  | [optional] 
**schedule** | [**ApiV1MonitoringsGet200ResponseInnerSchedule**](ApiV1MonitoringsGet200ResponseInnerSchedule.md) |  | [optional] 
**permissionLevel** | **String** | Permission level of the monitoring | [optional] 
**lastDetectAt** | **Date** | Timestamp for the last time there was a detection on the stream | [optional] 



## Enum: StateEnum


* `scheduled` (value: `"scheduled"`)

* `requested` (value: `"requested"`)

* `toprepare` (value: `"toprepare"`)

* `preparing` (value: `"preparing"`)

* `ready` (value: `"ready"`)

* `success` (value: `"success"`)

* `failed` (value: `"failed"`)





## Enum: PermissionLevelEnum


* `private` (value: `"private"`)

* `open` (value: `"open"`)




