/**
 * Matroid Public API
 * The Matroid API allows you to easily manipulate and use detectors. You can browse through our fine-tuned detectors, customize detectors with your own images and videos, and even import your own tensorflow models as detectors. Public detectors are available for all of our users, and you can quickly train custom detectors when needed. You can further polish your detectors through our simple web GUI, where you can create composite detectors or topic detectors, give your detectors feedback, and automatically annotate training data.   Once you are happy with your detector, you can use it to classify images, locate objects in videos, and perform real-time detections in live video streams. Create a stream of your camera feed, and you can use our API to get real-time detections from your detector by creating Monitorings. You can also use our API to get the latest detections from your detector, and you can even get the latest detections from a specific time in the past. Feel free to use this documentation page to learn and test out your API requests. But be careful! **Any changes performed may be permanent.**   ## Getting Started  To get started with the Matroid API, you will need to create an account and obtain an API key. You can do this by signing up on our website. Once you have your API key, you can start using the API to create and manage detectors.  ## Authentication  The Matroid API uses bearer token authentication. You will need to include your API key in the Authorization header of your requests. For example:  ``` Authorization: Bearer YOUR_API_KEY ``` 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiV1BucketTasksPost400Response from '../model/ApiV1BucketTasksPost400Response';
import ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response from '../model/ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response';
import ApiV1DetectorsDetectorIdLabelsLabelIdGet200Response from '../model/ApiV1DetectorsDetectorIdLabelsLabelIdGet200Response';
import ApiV1DetectorsDetectorIdLabelsLabelIdGet200ResponseImagesInnerTagsInnerBbox from '../model/ApiV1DetectorsDetectorIdLabelsLabelIdGet200ResponseImagesInnerTagsInnerBbox';
import ApiV1DetectorsDetectorIdLabelsLabelIdPatchRequest from '../model/ApiV1DetectorsDetectorIdLabelsLabelIdPatchRequest';
import ApiV1DetectorsDetectorIdLabelsPost200Response from '../model/ApiV1DetectorsDetectorIdLabelsPost200Response';
import ApiV1ImagesAnnotationsGet200Response from '../model/ApiV1ImagesAnnotationsGet200Response';

/**
* Labels service.
* @module api/LabelsApi
* @version 1.0.0
*/
export default class LabelsApi {

    /**
    * Constructs a new LabelsApi. 
    * @alias module:api/LabelsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiV1DetectorsDetectorIdLabelsLabelIdDelete operation.
     * @callback module:api/LabelsApi~apiV1DetectorsDetectorIdLabelsLabelIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete label
     * Requires the detector's `processing` field to be set to `false`.
     * @param {String} detectorId Unique ID of the detector associated with the relevant label
     * @param {String} labelId Unique ID of the label to delete
     * @param {module:api/LabelsApi~apiV1DetectorsDetectorIdLabelsLabelIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response}
     */
    apiV1DetectorsDetectorIdLabelsLabelIdDelete(detectorId, labelId, callback) {
      let postBody = null;
      // verify the required parameter 'detectorId' is set
      if (detectorId === undefined || detectorId === null) {
        throw new Error("Missing the required parameter 'detectorId' when calling apiV1DetectorsDetectorIdLabelsLabelIdDelete");
      }
      // verify the required parameter 'labelId' is set
      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling apiV1DetectorsDetectorIdLabelsLabelIdDelete");
      }

      let pathParams = {
        'detectorId': detectorId,
        'labelId': labelId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response;
      return this.apiClient.callApi(
        '/api/v1/detectors/{detectorId}/labels/{labelId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV1DetectorsDetectorIdLabelsLabelIdGet operation.
     * @callback module:api/LabelsApi~apiV1DetectorsDetectorIdLabelsLabelIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV1DetectorsDetectorIdLabelsLabelIdGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get label images
     * Retrieves images for a given label
     * @param {String} detectorId Unique ID of the detector associated with the relevant label
     * @param {String} labelId Unique ID of the label for which to retrieve images
     * @param {module:api/LabelsApi~apiV1DetectorsDetectorIdLabelsLabelIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV1DetectorsDetectorIdLabelsLabelIdGet200Response}
     */
    apiV1DetectorsDetectorIdLabelsLabelIdGet(detectorId, labelId, callback) {
      let postBody = null;
      // verify the required parameter 'detectorId' is set
      if (detectorId === undefined || detectorId === null) {
        throw new Error("Missing the required parameter 'detectorId' when calling apiV1DetectorsDetectorIdLabelsLabelIdGet");
      }
      // verify the required parameter 'labelId' is set
      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling apiV1DetectorsDetectorIdLabelsLabelIdGet");
      }

      let pathParams = {
        'detectorId': detectorId,
        'labelId': labelId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiV1DetectorsDetectorIdLabelsLabelIdGet200Response;
      return this.apiClient.callApi(
        '/api/v1/detectors/{detectorId}/labels/{labelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV1DetectorsDetectorIdLabelsLabelIdPatch operation.
     * @callback module:api/LabelsApi~apiV1DetectorsDetectorIdLabelsLabelIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update annotations
     * Updates annotations for the specified images
     * @param {String} detectorId Unique ID of the detector
     * @param {String} labelId Unique ID of the label
     * @param {module:model/ApiV1DetectorsDetectorIdLabelsLabelIdPatchRequest} apiV1DetectorsDetectorIdLabelsLabelIdPatchRequest 
     * @param {module:api/LabelsApi~apiV1DetectorsDetectorIdLabelsLabelIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response}
     */
    apiV1DetectorsDetectorIdLabelsLabelIdPatch(detectorId, labelId, apiV1DetectorsDetectorIdLabelsLabelIdPatchRequest, callback) {
      let postBody = apiV1DetectorsDetectorIdLabelsLabelIdPatchRequest;
      // verify the required parameter 'detectorId' is set
      if (detectorId === undefined || detectorId === null) {
        throw new Error("Missing the required parameter 'detectorId' when calling apiV1DetectorsDetectorIdLabelsLabelIdPatch");
      }
      // verify the required parameter 'labelId' is set
      if (labelId === undefined || labelId === null) {
        throw new Error("Missing the required parameter 'labelId' when calling apiV1DetectorsDetectorIdLabelsLabelIdPatch");
      }
      // verify the required parameter 'apiV1DetectorsDetectorIdLabelsLabelIdPatchRequest' is set
      if (apiV1DetectorsDetectorIdLabelsLabelIdPatchRequest === undefined || apiV1DetectorsDetectorIdLabelsLabelIdPatchRequest === null) {
        throw new Error("Missing the required parameter 'apiV1DetectorsDetectorIdLabelsLabelIdPatchRequest' when calling apiV1DetectorsDetectorIdLabelsLabelIdPatch");
      }

      let pathParams = {
        'detectorId': detectorId,
        'labelId': labelId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ApiV1DetectorsDetectorIdLabelsLabelIdDelete200Response;
      return this.apiClient.callApi(
        '/api/v1/detectors/{detectorId}/labels/{labelId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV1DetectorsDetectorIdLabelsPost operation.
     * @callback module:api/LabelsApi~apiV1DetectorsDetectorIdLabelsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV1DetectorsDetectorIdLabelsPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create label with images
     * Asynchronously creates a label for a detector (sets `processing` to `true`). Requires the detector's `processing` field to be set to `false`.
     * @param {String} detectorId ID of the detector
     * @param {String} name Name of the label
     * @param {Array.<File>} imageFiles Array of image files to upload
     * @param {Array.<module:model/ApiV1DetectorsDetectorIdLabelsLabelIdGet200ResponseImagesInnerTagsInnerBbox>} bboxes 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [destination = 'images')] Possible values: 'images', 'deselectedImages', 'negativeImages', or 'deselectedNegativeImages'
     * @param {module:api/LabelsApi~apiV1DetectorsDetectorIdLabelsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV1DetectorsDetectorIdLabelsPost200Response}
     */
    apiV1DetectorsDetectorIdLabelsPost(detectorId, name, imageFiles, bboxes, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'detectorId' is set
      if (detectorId === undefined || detectorId === null) {
        throw new Error("Missing the required parameter 'detectorId' when calling apiV1DetectorsDetectorIdLabelsPost");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling apiV1DetectorsDetectorIdLabelsPost");
      }
      // verify the required parameter 'imageFiles' is set
      if (imageFiles === undefined || imageFiles === null) {
        throw new Error("Missing the required parameter 'imageFiles' when calling apiV1DetectorsDetectorIdLabelsPost");
      }
      // verify the required parameter 'bboxes' is set
      if (bboxes === undefined || bboxes === null) {
        throw new Error("Missing the required parameter 'bboxes' when calling apiV1DetectorsDetectorIdLabelsPost");
      }

      let pathParams = {
        'detectorId': detectorId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': name,
        'imageFiles': this.apiClient.buildCollectionParam(imageFiles, 'passthrough'),
        'bboxes': this.apiClient.buildCollectionParam(bboxes, 'csv'),
        'destination': opts['destination']
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ApiV1DetectorsDetectorIdLabelsPost200Response;
      return this.apiClient.callApi(
        '/api/v1/detectors/{detectorId}/labels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV1ImagesAnnotationsGet operation.
     * @callback module:api/LabelsApi~apiV1ImagesAnnotationsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiV1ImagesAnnotationsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get annotations
     * Requires the detector's `processing` field to be set to `false`. One of the three IDs listed below must be provided.
     * @param {Object} opts Optional parameters
     * @param {String} [detectorId] ID of the detector to get annotations for
     * @param {Array.<String>} [labelIds] Array of label IDs to get annotations for
     * @param {String} [imageId] ID of the image to get annotations for
     * @param {module:api/LabelsApi~apiV1ImagesAnnotationsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiV1ImagesAnnotationsGet200Response}
     */
    apiV1ImagesAnnotationsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'detectorId': opts['detectorId'],
        'labelIds': this.apiClient.buildCollectionParam(opts['labelIds'], 'multi'),
        'imageId': opts['imageId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiV1ImagesAnnotationsGet200Response;
      return this.apiClient.callApi(
        '/api/v1/images/annotations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
