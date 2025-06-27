# MatroidPublicApi.ApiV1VideosVideoIdGet200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downloadProgress** | **Number** | Progress of the video download | [optional] 
**classificationProgress** | **Number** | Progress of the video classification | [optional] 
**detectionFps** | **Number** | FPS used for video classification | [optional] 
**state** | **String** | Current state of the video processing | [optional] 
**status** | **String** | Detailed status message (e.g. \&quot;Downloading video\&quot;, \&quot;Video Download Complete. Classifying Video\&quot;, \&quot;Classification complete\&quot;) | [optional] 
**labelDict** | **{String: String}** | Mapping of label indexes to label names | [optional] 
**detections** | **{String: [ApiV1VideosVideoIdGet200ResponseDetectionsValueInner]}** | Mapping of timestamps to an array of detection objects | [optional] 
**videoId** | **String** | Unique ID of the video | [optional] 



## Enum: StateEnum


* `preparing` (value: `"preparing"`)

* `running` (value: `"running"`)

* `success` (value: `"success"`)

* `failed` (value: `"failed"`)




