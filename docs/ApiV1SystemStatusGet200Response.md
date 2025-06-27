# MatroidPublicApi.ApiV1SystemStatusGet200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**licenseIsActive** | **Boolean** | Whether the on-prem deployment has an active license | [optional] 
**licenseExpirationDate** | **Date** | Timestamp when the license expires. Empty string if no active license | [optional] 
**mostRecentDetectionTimestamp** | **Date** | Timestamp of the latest detection. Empty string if there have been no detections | [optional] 
**runningMonitorings** | **Number** | Number of currently running monitorings | [optional] 
**totalMonitorings** | **Number** | Number of monitorings that should be currently running | [optional] 
**adequateCompute** | **Boolean** | Whether there is enough compute to support the current task load | [optional] 
**downMonitorings** | [**[ApiV1SystemStatusGet200ResponseDownMonitoringsInner]**](ApiV1SystemStatusGet200ResponseDownMonitoringsInner.md) | Information about the monitorings that are currently not running | [optional] 


