# MatroidPublicApi.ApiV1StreamsStreamIdMonitorDetectorIdPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskName** | **String** | Name of the monitoring (defaults to \&quot;{stream name} - {monitoring index}\&quot;) | [optional] 
**thresholds** | **{String: Number}** | Mapping of label names or label indices to desired thresholds (minimum confidence level) | [optional] 
**endpoint** | **String** | HTTP/HTTPS endpoint to send every detection to as a POST request + JSON | [optional] 
**startTime** | **Date** | Date string specifying the start time of the monitoring (defaults to current time) | [optional] 
**endTime** | **String** | Date string specifying the end time of the monitoring or duration (e.g. \&quot;5 minutes\&quot;, \&quot;1 hour\&quot;) | [optional] 
**monitoringHours** | [**[ApiV1StreamsStreamIdMonitorDetectorIdPostRequestMonitoringHoursInner]**](ApiV1StreamsStreamIdMonitorDetectorIdPostRequestMonitoringHoursInner.md) | Hours in which to receive detections | [optional] 
**colors** | [**ApiV1StreamsStreamIdMonitorDetectorIdPostRequestColors**](ApiV1StreamsStreamIdMonitorDetectorIdPostRequestColors.md) |  | [optional] 
**enableDetectionCollection** | **Boolean** | Whether to index detections | [optional] [default to false]
**notificationTimezone** | **String** | Timezone for notifications (e.g. \&quot;US/Pacific\&quot;, \&quot;Europe/London\&quot;) | [optional] 
**minEmailInterval** | **Number** | How often to send notification emails (seconds) | [optional] [default to 300]
**minDetectionInterval** | **Number** | How long to wait between reporting new detections (seconds) | [optional] 
**sendEmailNotifications** | **Boolean** | Whether to send detection notifications through email | [optional] [default to true]
**notificationRecipients** | **String** | Specifies who should receive notifications. Valid values are &#x60;creator&#x60;, &#x60;all&#x60;. Defaults to &#x60;creator&#x60;. | [optional] 
**desktopNotifications** | **Boolean** | Whether to send detection notifications through browser notifications | [optional] [default to false]
**filterStaticDetections** | **Boolean** | Whether to filter out static detections | [optional] [default to false]
**staticDetectionThreshold** | **Number** | IOU threshold for static detection filter | [optional] [default to 0.5]
**regionEnabled** | **Boolean** | Whether to monitor a specific region of the stream | [optional] [default to false]
**regionCoords** | **[String]** | Rectangular region of stream to monitor (coordinates between 0 and 1) | [optional] 
**regionNegativeCoords** | **[String]** | Rectangular region of stream to exclude from monitoring (coordinates between 0 and 1) | [optional] 


