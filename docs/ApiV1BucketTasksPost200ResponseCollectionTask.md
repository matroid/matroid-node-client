# MatroidPublicApi.ApiV1BucketTasksPost200ResponseCollectionTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the task | [optional] 
**state** | **String** | Current state of the task | [optional] 
**network** | **String** | Detector ID | [optional] 
**collectionToProcess** | **Object** | Collection information | [optional] 
**createdAt** | **Date** | Creation timestamp | [optional] 
**updatedAt** | **Date** | Last update timestamp | [optional] 
**createdBy** | **String** | User ID who created the task | [optional] 
**fileTypes** | **String** | Types of files to process | [optional] 
**permissionLevel** | **String** | Permission level of the task | [optional] 
**queryByScoreEnabled** | **Boolean** | Whether query by score is enabled | [optional] 
**canQueryLive** | **Boolean** | Whether live querying is enabled | [optional] 
**listerChunksize** | **Number** | Size of chunks for listing | [optional] 
**imagesetSize** | **Number** | Size of the image set | [optional] 
**throttlerFps** | **Number** | FPS for throttling | [optional] 
**maxRetries** | **Number** | Maximum number of retries | [optional] 
**maxSubtasks** | **Number** | Maximum number of subtasks | [optional] 
**csvUrl** | **String** | URL for CSV output | [optional] 
**makeCsv** | **Boolean** | Whether to generate CSV | [optional] 
**indexerInfo** | **Object** | Information about the indexer | [optional] 
**runLastLayer** | **Boolean** | Whether to run last layer | [optional] 
**runBottleneck** | **Boolean** | Whether to run bottleneck | [optional] 
**videoFrameFps** | **Number** | FPS for video frames | [optional] 
**status** | **Object** | Current status information | [optional] 
**outOfCredits** | **Boolean** | Whether task is out of credits | [optional] 
**killedByUser** | **Boolean** | Whether task was killed by user | [optional] 
**kill** | **Boolean** | Whether task is marked for killing | [optional] 
**isUpdate** | **Boolean** | Whether this is an update task | [optional] 
**name** | **String** | Task name | [optional] 


