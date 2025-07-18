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

import ApiClient from '../ApiClient';
import ApiV1MonitoringsMonitoringIdWatchGet200ResponseDetectionsInner from './ApiV1MonitoringsMonitoringIdWatchGet200ResponseDetectionsInner';

/**
 * The ApiV1MonitoringsMonitoringIdWatchGet200Response model module.
 * @module model/ApiV1MonitoringsMonitoringIdWatchGet200Response
 * @version 1.0.0
 */
class ApiV1MonitoringsMonitoringIdWatchGet200Response {
    /**
     * Constructs a new <code>ApiV1MonitoringsMonitoringIdWatchGet200Response</code>.
     * @alias module:model/ApiV1MonitoringsMonitoringIdWatchGet200Response
     */
    constructor() { 
        
        ApiV1MonitoringsMonitoringIdWatchGet200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiV1MonitoringsMonitoringIdWatchGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiV1MonitoringsMonitoringIdWatchGet200Response} obj Optional instance to populate.
     * @return {module:model/ApiV1MonitoringsMonitoringIdWatchGet200Response} The populated <code>ApiV1MonitoringsMonitoringIdWatchGet200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiV1MonitoringsMonitoringIdWatchGet200Response();

            if (data.hasOwnProperty('detectedAt')) {
                obj['detectedAt'] = ApiClient.convertToType(data['detectedAt'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('monitoringId')) {
                obj['monitoringId'] = ApiClient.convertToType(data['monitoringId'], 'String');
            }
            if (data.hasOwnProperty('streamId')) {
                obj['streamId'] = ApiClient.convertToType(data['streamId'], 'String');
            }
            if (data.hasOwnProperty('streamName')) {
                obj['streamName'] = ApiClient.convertToType(data['streamName'], 'String');
            }
            if (data.hasOwnProperty('detector')) {
                obj['detector'] = ApiClient.convertToType(data['detector'], 'String');
            }
            if (data.hasOwnProperty('screenshotUrl')) {
                obj['screenshotUrl'] = ApiClient.convertToType(data['screenshotUrl'], 'String');
            }
            if (data.hasOwnProperty('labelColors')) {
                obj['labelColors'] = ApiClient.convertToType(data['labelColors'], Object);
            }
            if (data.hasOwnProperty('detections')) {
                obj['detections'] = ApiClient.convertToType(data['detections'], [ApiV1MonitoringsMonitoringIdWatchGet200ResponseDetectionsInner]);
            }
            if (data.hasOwnProperty('recordingUrl')) {
                obj['recordingUrl'] = ApiClient.convertToType(data['recordingUrl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiV1MonitoringsMonitoringIdWatchGet200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiV1MonitoringsMonitoringIdWatchGet200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['monitoringId'] && !(typeof data['monitoringId'] === 'string' || data['monitoringId'] instanceof String)) {
            throw new Error("Expected the field `monitoringId` to be a primitive type in the JSON string but got " + data['monitoringId']);
        }
        // ensure the json data is a string
        if (data['streamId'] && !(typeof data['streamId'] === 'string' || data['streamId'] instanceof String)) {
            throw new Error("Expected the field `streamId` to be a primitive type in the JSON string but got " + data['streamId']);
        }
        // ensure the json data is a string
        if (data['streamName'] && !(typeof data['streamName'] === 'string' || data['streamName'] instanceof String)) {
            throw new Error("Expected the field `streamName` to be a primitive type in the JSON string but got " + data['streamName']);
        }
        // ensure the json data is a string
        if (data['detector'] && !(typeof data['detector'] === 'string' || data['detector'] instanceof String)) {
            throw new Error("Expected the field `detector` to be a primitive type in the JSON string but got " + data['detector']);
        }
        // ensure the json data is a string
        if (data['screenshotUrl'] && !(typeof data['screenshotUrl'] === 'string' || data['screenshotUrl'] instanceof String)) {
            throw new Error("Expected the field `screenshotUrl` to be a primitive type in the JSON string but got " + data['screenshotUrl']);
        }
        if (data['detections']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['detections'])) {
                throw new Error("Expected the field `detections` to be an array in the JSON data but got " + data['detections']);
            }
            // validate the optional field `detections` (array)
            for (const item of data['detections']) {
                ApiV1MonitoringsMonitoringIdWatchGet200ResponseDetectionsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['recordingUrl'] && !(typeof data['recordingUrl'] === 'string' || data['recordingUrl'] instanceof String)) {
            throw new Error("Expected the field `recordingUrl` to be a primitive type in the JSON string but got " + data['recordingUrl']);
        }

        return true;
    }


}



/**
 * Timestamp of the detection
 * @member {Date} detectedAt
 */
ApiV1MonitoringsMonitoringIdWatchGet200Response.prototype['detectedAt'] = undefined;

/**
 * Name of the monitoring
 * @member {String} name
 */
ApiV1MonitoringsMonitoringIdWatchGet200Response.prototype['name'] = undefined;

/**
 * Unique ID of the monitoring
 * @member {String} monitoringId
 */
ApiV1MonitoringsMonitoringIdWatchGet200Response.prototype['monitoringId'] = undefined;

/**
 * Unique ID of the stream
 * @member {String} streamId
 */
ApiV1MonitoringsMonitoringIdWatchGet200Response.prototype['streamId'] = undefined;

/**
 * Name of the stream
 * @member {String} streamName
 */
ApiV1MonitoringsMonitoringIdWatchGet200Response.prototype['streamName'] = undefined;

/**
 * ID of the detector
 * @member {String} detector
 */
ApiV1MonitoringsMonitoringIdWatchGet200Response.prototype['detector'] = undefined;

/**
 * URL of the detection screenshot
 * @member {String} screenshotUrl
 */
ApiV1MonitoringsMonitoringIdWatchGet200Response.prototype['screenshotUrl'] = undefined;

/**
 * Map of label names to colors
 * @member {Object} labelColors
 */
ApiV1MonitoringsMonitoringIdWatchGet200Response.prototype['labelColors'] = undefined;

/**
 * @member {Array.<module:model/ApiV1MonitoringsMonitoringIdWatchGet200ResponseDetectionsInner>} detections
 */
ApiV1MonitoringsMonitoringIdWatchGet200Response.prototype['detections'] = undefined;

/**
 * URL to access the recording
 * @member {String} recordingUrl
 */
ApiV1MonitoringsMonitoringIdWatchGet200Response.prototype['recordingUrl'] = undefined;






export default ApiV1MonitoringsMonitoringIdWatchGet200Response;

