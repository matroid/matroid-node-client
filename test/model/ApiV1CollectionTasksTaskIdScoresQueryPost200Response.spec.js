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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MatroidPublicApi);
  }
}(this, function(expect, MatroidPublicApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MatroidPublicApi.ApiV1CollectionTasksTaskIdScoresQueryPost200Response();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ApiV1CollectionTasksTaskIdScoresQueryPost200Response', function() {
    it('should create an instance of ApiV1CollectionTasksTaskIdScoresQueryPost200Response', function() {
      // uncomment below and update the code to test ApiV1CollectionTasksTaskIdScoresQueryPost200Response
      //var instance = new MatroidPublicApi.ApiV1CollectionTasksTaskIdScoresQueryPost200Response();
      //expect(instance).to.be.a(MatroidPublicApi.ApiV1CollectionTasksTaskIdScoresQueryPost200Response);
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instance = new MatroidPublicApi.ApiV1CollectionTasksTaskIdScoresQueryPost200Response();
      //expect(instance).to.be();
    });

  });

}));
