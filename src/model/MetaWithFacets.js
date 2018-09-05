/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ListFacet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ListFacet'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.MetaWithFacets = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListFacet);
  }
}(this, function(ApiClient, ListFacet) {
  'use strict';




  /**
   * The MetaWithFacets model module.
   * @module model/MetaWithFacets
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>MetaWithFacets</code>.
   * @alias module:model/MetaWithFacets
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>MetaWithFacets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetaWithFacets} obj Optional instance to populate.
   * @return {module:model/MetaWithFacets} The populated <code>MetaWithFacets</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Facets')) {
        obj['Facets'] = ApiClient.convertToType(data['Facets'], [ListFacet]);
      }
      if (data.hasOwnProperty('Page')) {
        obj['Page'] = ApiClient.convertToType(data['Page'], 'Number');
      }
      if (data.hasOwnProperty('PageSize')) {
        obj['PageSize'] = ApiClient.convertToType(data['PageSize'], 'Number');
      }
      if (data.hasOwnProperty('TotalCount')) {
        obj['TotalCount'] = ApiClient.convertToType(data['TotalCount'], 'Number');
      }
      if (data.hasOwnProperty('TotalPages')) {
        obj['TotalPages'] = ApiClient.convertToType(data['TotalPages'], 'Number');
      }
      if (data.hasOwnProperty('ItemRange')) {
        obj['ItemRange'] = ApiClient.convertToType(data['ItemRange'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ListFacet>} Facets
   */
  exports.prototype['Facets'] = undefined;
  /**
   * @member {Number} Page
   */
  exports.prototype['Page'] = undefined;
  /**
   * @member {Number} PageSize
   */
  exports.prototype['PageSize'] = undefined;
  /**
   * @member {Number} TotalCount
   */
  exports.prototype['TotalCount'] = undefined;
  /**
   * @member {Number} TotalPages
   */
  exports.prototype['TotalPages'] = undefined;
  /**
   * @member {Array.<Number>} ItemRange
   */
  exports.prototype['ItemRange'] = undefined;



  return exports;
}));

