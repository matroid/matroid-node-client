# MatroidPublicApi.ApiV1MonitoringsMonitoringIdPutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thresholds** | **{String: Number}** | Object of label names with corresponding threshold value in range (0, 1] | [optional] 
**restart** | **Boolean** | Whether to restart the monitoring | [optional] 
**keepEndTime** | **Boolean** | Whether to maintain the previously scheduled end time for this monitoring | [optional] 
**name** | **String** | Updated name for this monitoring | [optional] 
**notificationTimezone** | **String** | Time zone for the scheduling of this monitoring | [optional] 
**registeredEndpoint** | [**ApiV1MonitoringsMonitoringIdPutRequestRegisteredEndpoint**](ApiV1MonitoringsMonitoringIdPutRequestRegisteredEndpoint.md) |  | [optional] 
**rawEndpointMessage** | **Boolean** | Whether to send raw detection data to registered endpoint by default | [optional] 
**schedule** | [**ApiV1MonitoringsMonitoringIdPutRequestSchedule**](ApiV1MonitoringsMonitoringIdPutRequestSchedule.md) |  | [optional] 
**region** | [**ApiV1MonitoringsMonitoringIdPutRequestRegion**](ApiV1MonitoringsMonitoringIdPutRequestRegion.md) |  | [optional] 
**groupsWithViewAccess** | **[String]** | User group IDs with view access for this monitoring | [optional] 
**colors** | [**ApiV1MonitoringsMonitoringIdPutRequestColors**](ApiV1MonitoringsMonitoringIdPutRequestColors.md) |  | [optional] 


