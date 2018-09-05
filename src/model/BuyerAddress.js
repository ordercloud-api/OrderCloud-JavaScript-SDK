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
    root.OrderCloud.BuyerAddress = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BuyerAddress model module.
   * @module model/BuyerAddress
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>BuyerAddress</code>.
   * @alias module:model/BuyerAddress
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>BuyerAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BuyerAddress} obj Optional instance to populate.
   * @return {module:model/BuyerAddress} The populated <code>BuyerAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Shipping')) {
        obj['Shipping'] = ApiClient.convertToType(data['Shipping'], 'Boolean');
      }
      if (data.hasOwnProperty('Billing')) {
        obj['Billing'] = ApiClient.convertToType(data['Billing'], 'Boolean');
      }
      if (data.hasOwnProperty('Editable')) {
        obj['Editable'] = ApiClient.convertToType(data['Editable'], 'Boolean');
      }
      if (data.hasOwnProperty('DateCreated')) {
        obj['DateCreated'] = ApiClient.convertToType(data['DateCreated'], 'String');
      }
      if (data.hasOwnProperty('CompanyName')) {
        obj['CompanyName'] = ApiClient.convertToType(data['CompanyName'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('Street1')) {
        obj['Street1'] = ApiClient.convertToType(data['Street1'], 'String');
      }
      if (data.hasOwnProperty('Street2')) {
        obj['Street2'] = ApiClient.convertToType(data['Street2'], 'String');
      }
      if (data.hasOwnProperty('City')) {
        obj['City'] = ApiClient.convertToType(data['City'], 'String');
      }
      if (data.hasOwnProperty('State')) {
        obj['State'] = ApiClient.convertToType(data['State'], 'String');
      }
      if (data.hasOwnProperty('Zip')) {
        obj['Zip'] = ApiClient.convertToType(data['Zip'], 'String');
      }
      if (data.hasOwnProperty('Country')) {
        obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
      }
      if (data.hasOwnProperty('Phone')) {
        obj['Phone'] = ApiClient.convertToType(data['Phone'], 'String');
      }
      if (data.hasOwnProperty('AddressName')) {
        obj['AddressName'] = ApiClient.convertToType(data['AddressName'], 'String');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Boolean} Shipping
   */
  exports.prototype['Shipping'] = undefined;
  /**
   * @member {Boolean} Billing
   */
  exports.prototype['Billing'] = undefined;
  /**
   * @member {Boolean} Editable
   */
  exports.prototype['Editable'] = undefined;
  /**
   * @member {String} DateCreated
   */
  exports.prototype['DateCreated'] = undefined;
  /**
   * @member {String} CompanyName
   */
  exports.prototype['CompanyName'] = undefined;
  /**
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * @member {String} Street1
   */
  exports.prototype['Street1'] = undefined;
  /**
   * @member {String} Street2
   */
  exports.prototype['Street2'] = undefined;
  /**
   * @member {String} City
   */
  exports.prototype['City'] = undefined;
  /**
   * @member {String} State
   */
  exports.prototype['State'] = undefined;
  /**
   * @member {String} Zip
   */
  exports.prototype['Zip'] = undefined;
  /**
   * @member {String} Country
   */
  exports.prototype['Country'] = undefined;
  /**
   * @member {String} Phone
   */
  exports.prototype['Phone'] = undefined;
  /**
   * @member {String} AddressName
   */
  exports.prototype['AddressName'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


