# MatroidPublicApi.ApiV1AccountGet200ResponseAccountCredits

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan** | **String** | Name of the user&#39;s payment plan | [optional] 
**used** | **Number** | Number of credits used in the current billing period | [optional] 
**available** | **Number** | Number of credits available to the user, including overages | [optional] 
**overageLimit** | **Number** | Number of credits at which overage begins to charge | [optional] 
**held** | **Number** | Number of credits that will be spent when an operation completes successfully | [optional] 
**concurrentTrainLimit** | **Number** | Number of detectors a user can train at a time | [optional] 
**concurrentVideoLimit** | **Number** | Number of videos a user can classify at a time | [optional] 


