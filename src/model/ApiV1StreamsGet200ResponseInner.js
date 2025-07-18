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
import ApiV1StreamsGet200ResponseInnerRecordingOptions from './ApiV1StreamsGet200ResponseInnerRecordingOptions';

/**
 * The ApiV1StreamsGet200ResponseInner model module.
 * @module model/ApiV1StreamsGet200ResponseInner
 * @version 1.0.0
 */
class ApiV1StreamsGet200ResponseInner {
    /**
     * Constructs a new <code>ApiV1StreamsGet200ResponseInner</code>.
     * @alias module:model/ApiV1StreamsGet200ResponseInner
     */
    constructor() { 
        
        ApiV1StreamsGet200ResponseInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiV1StreamsGet200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiV1StreamsGet200ResponseInner} obj Optional instance to populate.
     * @return {module:model/ApiV1StreamsGet200ResponseInner} The populated <code>ApiV1StreamsGet200ResponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiV1StreamsGet200ResponseInner();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('streamId')) {
                obj['streamId'] = ApiClient.convertToType(data['streamId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('detectionFps')) {
                obj['detectionFps'] = ApiClient.convertToType(data['detectionFps'], 'Number');
            }
            if (data.hasOwnProperty('monitorings')) {
                obj['monitorings'] = ApiClient.convertToType(data['monitorings'], ['String']);
            }
            if (data.hasOwnProperty('recordingOptions')) {
                obj['recordingOptions'] = ApiV1StreamsGet200ResponseInnerRecordingOptions.constructFromObject(data['recordingOptions']);
            }
            if (data.hasOwnProperty('recordingStartTime')) {
                obj['recordingStartTime'] = ApiClient.convertToType(data['recordingStartTime'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiV1StreamsGet200ResponseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiV1StreamsGet200ResponseInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['_id'] && !(typeof data['_id'] === 'string' || data['_id'] instanceof String)) {
            throw new Error("Expected the field `_id` to be a primitive type in the JSON string but got " + data['_id']);
        }
        // ensure the json data is a string
        if (data['streamId'] && !(typeof data['streamId'] === 'string' || data['streamId'] instanceof String)) {
            throw new Error("Expected the field `streamId` to be a primitive type in the JSON string but got " + data['streamId']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['monitorings'])) {
            throw new Error("Expected the field `monitorings` to be an array in the JSON data but got " + data['monitorings']);
        }
        // validate the optional field `recordingOptions`
        if (data['recordingOptions']) { // data not null
          ApiV1StreamsGet200ResponseInnerRecordingOptions.validateJSON(data['recordingOptions']);
        }

        return true;
    }


}



/**
 * Unique ID of the stream
 * @member {String} _id
 */
ApiV1StreamsGet200ResponseInner.prototype['_id'] = undefined;

/**
 * Unique ID of the stream
 * @member {String} streamId
 */
ApiV1StreamsGet200ResponseInner.prototype['streamId'] = undefined;

/**
 * Name of the stream
 * @member {String} name
 */
ApiV1StreamsGet200ResponseInner.prototype['name'] = undefined;

/**
 * Whether the stream is public
 * @member {Boolean} public
 */
ApiV1StreamsGet200ResponseInner.prototype['public'] = undefined;

/**
 * Whether the current user is the owner of the stream
 * @member {Boolean} owner
 */
ApiV1StreamsGet200ResponseInner.prototype['owner'] = undefined;

/**
 * URL of the stream
 * @member {String} url
 */
ApiV1StreamsGet200ResponseInner.prototype['url'] = undefined;

/**
 * Detection FPS of the stream
 * @member {Number} detectionFps
 */
ApiV1StreamsGet200ResponseInner.prototype['detectionFps'] = undefined;

/**
 * List of monitoring IDs associated with this stream
 * @member {Array.<String>} monitorings
 */
ApiV1StreamsGet200ResponseInner.prototype['monitorings'] = undefined;

/**
 * @member {module:model/ApiV1StreamsGet200ResponseInnerRecordingOptions} recordingOptions
 */
ApiV1StreamsGet200ResponseInner.prototype['recordingOptions'] = undefined;

/**
 * When the recording started
 * @member {Date} recordingStartTime
 */
ApiV1StreamsGet200ResponseInner.prototype['recordingStartTime'] = undefined;






export default ApiV1StreamsGet200ResponseInner;

