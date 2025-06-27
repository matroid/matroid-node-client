# MatroidPublicApi.ApiV1StreamsPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | URL of the stream | 
**name** | **String** | Name of the stream | 
**detectionFps** | **Number** | FPS for detections | [optional] [default to 1]
**recordingEnabled** | **Boolean** | Whether to enable recording for the stream | [optional] [default to true]
**retentionDays** | **Number** | Number of days to retain stream recording | [optional] [default to 7]
**customFields** | [**[ApiV1StreamsPostRequestCustomFieldsInner]**](ApiV1StreamsPostRequestCustomFieldsInner.md) | Custom detection API endpoint push notification fields | [optional] 
**latitude** | **Number** | Latitude of stream location | [optional] 
**longitude** | **Number** | Longitude of stream location | [optional] 


