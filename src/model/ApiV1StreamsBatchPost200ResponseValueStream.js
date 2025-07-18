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

/**
 * The ApiV1StreamsBatchPost200ResponseValueStream model module.
 * @module model/ApiV1StreamsBatchPost200ResponseValueStream
 * @version 1.0.0
 */
class ApiV1StreamsBatchPost200ResponseValueStream {
    /**
     * Constructs a new <code>ApiV1StreamsBatchPost200ResponseValueStream</code>.
     * @alias module:model/ApiV1StreamsBatchPost200ResponseValueStream
     */
    constructor() { 
        
        ApiV1StreamsBatchPost200ResponseValueStream.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiV1StreamsBatchPost200ResponseValueStream</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiV1StreamsBatchPost200ResponseValueStream} obj Optional instance to populate.
     * @return {module:model/ApiV1StreamsBatchPost200ResponseValueStream} The populated <code>ApiV1StreamsBatchPost200ResponseValueStream</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiV1StreamsBatchPost200ResponseValueStream();

            if (data.hasOwnProperty('streamId')) {
                obj['streamId'] = ApiClient.convertToType(data['streamId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiV1StreamsBatchPost200ResponseValueStream</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiV1StreamsBatchPost200ResponseValueStream</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['streamId'] && !(typeof data['streamId'] === 'string' || data['streamId'] instanceof String)) {
            throw new Error("Expected the field `streamId` to be a primitive type in the JSON string but got " + data['streamId']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }

        return true;
    }


}



/**
 * ID of the created stream
 * @member {String} streamId
 */
ApiV1StreamsBatchPost200ResponseValueStream.prototype['streamId'] = undefined;

/**
 * Status of stream creation
 * @member {module:model/ApiV1StreamsBatchPost200ResponseValueStream.StatusEnum} status
 */
ApiV1StreamsBatchPost200ResponseValueStream.prototype['status'] = undefined;

/**
 * Region where the stream was created
 * @member {String} region
 */
ApiV1StreamsBatchPost200ResponseValueStream.prototype['region'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ApiV1StreamsBatchPost200ResponseValueStream['StatusEnum'] = {

    /**
     * value: "CREATED"
     * @const
     */
    "CREATED": "CREATED",

    /**
     * value: "EXISTING"
     * @const
     */
    "EXISTING": "EXISTING",

    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR"
};



export default ApiV1StreamsBatchPost200ResponseValueStream;

