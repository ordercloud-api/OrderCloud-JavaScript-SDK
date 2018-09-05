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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PartialInventory = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PartialInventory model module.
   * @module model/PartialInventory
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>PartialInventory</code>.
   * @alias module:model/PartialInventory
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>PartialInventory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartialInventory} obj Optional instance to populate.
   * @return {module:model/PartialInventory} The populated <code>PartialInventory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Enabled')) {
        obj['Enabled'] = ApiClient.convertToType(data['Enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('NotificationPoint')) {
        obj['NotificationPoint'] = ApiClient.convertToType(data['NotificationPoint'], 'Number');
      }
      if (data.hasOwnProperty('VariantLevelTracking')) {
        obj['VariantLevelTracking'] = ApiClient.convertToType(data['VariantLevelTracking'], 'Boolean');
      }
      if (data.hasOwnProperty('OrderCanExceed')) {
        obj['OrderCanExceed'] = ApiClient.convertToType(data['OrderCanExceed'], 'Boolean');
      }
      if (data.hasOwnProperty('QuantityAvailable')) {
        obj['QuantityAvailable'] = ApiClient.convertToType(data['QuantityAvailable'], 'Number');
      }
      if (data.hasOwnProperty('LastUpdated')) {
        obj['LastUpdated'] = ApiClient.convertToType(data['LastUpdated'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} Enabled
   */
  exports.prototype['Enabled'] = undefined;
  /**
   * @member {Number} NotificationPoint
   */
  exports.prototype['NotificationPoint'] = undefined;
  /**
   * @member {Boolean} VariantLevelTracking
   */
  exports.prototype['VariantLevelTracking'] = undefined;
  /**
   * @member {Boolean} OrderCanExceed
   */
  exports.prototype['OrderCanExceed'] = undefined;
  /**
   * @member {Number} QuantityAvailable
   */
  exports.prototype['QuantityAvailable'] = undefined;
  /**
   * @member {String} LastUpdated
   */
  exports.prototype['LastUpdated'] = undefined;



  return exports;
}));


