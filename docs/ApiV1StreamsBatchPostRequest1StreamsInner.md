# MatroidPublicApi.ApiV1StreamsBatchPostRequest1StreamsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the stream | [optional] 
**url** | **String** | URL of the stream | [optional] 
**daysOfVideoHistory** | **Number** | Days of video history to record/monitor | [optional] 
**framesPerSecond** | **Number** | Frames per second to process | [optional] 
**detectors** | **[Number]** | Indices of detectors to use for monitoring ([]: no detectors, [-1]: all detectors) | [optional] 
**customFields** | [**[ApiV1StreamsBatchPostRequest1StreamsInnerCustomFieldsInner]**](ApiV1StreamsBatchPostRequest1StreamsInnerCustomFieldsInner.md) | Custom detection API endpoint push notification fields | [optional] 


