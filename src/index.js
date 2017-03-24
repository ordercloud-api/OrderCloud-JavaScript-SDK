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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccessToken', 'model/Address', 'model/AddressAssignment', 'model/AdminCompany', 'model/ApprovalRule', 'model/BaseSpec', 'model/Buyer', 'model/BuyerAddress', 'model/BuyerCreditCard', 'model/BuyerProduct', 'model/BuyerSpec', 'model/Catalog', 'model/CatalogAssignment', 'model/Category', 'model/CategoryAssignment', 'model/CategoryProductAssignment', 'model/CostCenter', 'model/CostCenterAssignment', 'model/CreditCard', 'model/CreditCardAssignment', 'model/ImpersonateTokenRequest', 'model/Inventory', 'model/LineItem', 'model/LineItemProduct', 'model/LineItemSpec', 'model/ListAddress', 'model/ListAddressAssignment', 'model/ListAdminCompany', 'model/ListApprovalRule', 'model/ListBuyer', 'model/ListBuyerAddress', 'model/ListBuyerCreditCard', 'model/ListBuyerProduct', 'model/ListBuyerSpec', 'model/ListCatalog', 'model/ListCatalogAssignment', 'model/ListCategory', 'model/ListCategoryAssignment', 'model/ListCategoryProductAssignment', 'model/ListCostCenter', 'model/ListCostCenterAssignment', 'model/ListCreditCard', 'model/ListCreditCardAssignment', 'model/ListInventory', 'model/ListLineItem', 'model/ListMessageCCListenerAssignment', 'model/ListMessageSender', 'model/ListMessageSenderAssignment', 'model/ListOrder', 'model/ListOrderApproval', 'model/ListOrderPromotion', 'model/ListPayment', 'model/ListPriceSchedule', 'model/ListProduct', 'model/ListProductAssignment', 'model/ListPromotion', 'model/ListPromotionAssignment', 'model/ListSecurityProfile', 'model/ListSecurityProfileAssignment', 'model/ListShipment', 'model/ListSpec', 'model/ListSpecOption', 'model/ListSpecProductAssignment', 'model/ListSpendingAccount', 'model/ListSpendingAccountAssignment', 'model/ListUser', 'model/ListUserGroup', 'model/ListUserGroupAssignment', 'model/ListVariant', 'model/ListXpIndex', 'model/MessageCCListenerAssignment', 'model/MessageSender', 'model/MessageSenderAssignment', 'model/Meta', 'model/Order', 'model/OrderApproval', 'model/OrderPromotion', 'model/PasswordReset', 'model/PasswordResetRequest', 'model/Payment', 'model/PaymentTransaction', 'model/PingResponse', 'model/PriceBreak', 'model/PriceSchedule', 'model/Product', 'model/ProductAssignment', 'model/Promotion', 'model/PromotionAssignment', 'model/SecurityProfile', 'model/SecurityProfileAssignment', 'model/Shipment', 'model/ShipmentItem', 'model/Spec', 'model/SpecOption', 'model/SpecProductAssignment', 'model/SpendingAccount', 'model/SpendingAccountAssignment', 'model/StripeCreditCard', 'model/User', 'model/UserGroup', 'model/UserGroupAssignment', 'model/Variant', 'model/XpIndex', 'api/Addresses', 'api/AdminAddresses', 'api/AdminUsers', 'api/AdminUserGroups', 'api/ApprovalRules', 'api/Buyers', 'api/Catalogs', 'api/Categorys', 'api/CostCenters', 'api/CreditCards', 'api/LineItems', 'api/Me', 'api/MessageSenders', 'api/Orders', 'api/PasswordResets', 'api/Payments', 'api/PriceSchedules', 'api/Products', 'api/Promotions', 'api/SecurityProfiles', 'api/Shipments', 'api/Specs', 'api/SpendingAccounts', 'api/Users', 'api/UserGroups', 'api/Auth'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccessToken'), require('./model/Address'), require('./model/AddressAssignment'), require('./model/AdminCompany'), require('./model/ApprovalRule'), require('./model/BaseSpec'), require('./model/Buyer'), require('./model/BuyerAddress'), require('./model/BuyerCreditCard'), require('./model/BuyerProduct'), require('./model/BuyerSpec'), require('./model/Catalog'), require('./model/CatalogAssignment'), require('./model/Category'), require('./model/CategoryAssignment'), require('./model/CategoryProductAssignment'), require('./model/CostCenter'), require('./model/CostCenterAssignment'), require('./model/CreditCard'), require('./model/CreditCardAssignment'), require('./model/ImpersonateTokenRequest'), require('./model/Inventory'), require('./model/LineItem'), require('./model/LineItemProduct'), require('./model/LineItemSpec'), require('./model/ListAddress'), require('./model/ListAddressAssignment'), require('./model/ListAdminCompany'), require('./model/ListApprovalRule'), require('./model/ListBuyer'), require('./model/ListBuyerAddress'), require('./model/ListBuyerCreditCard'), require('./model/ListBuyerProduct'), require('./model/ListBuyerSpec'), require('./model/ListCatalog'), require('./model/ListCatalogAssignment'), require('./model/ListCategory'), require('./model/ListCategoryAssignment'), require('./model/ListCategoryProductAssignment'), require('./model/ListCostCenter'), require('./model/ListCostCenterAssignment'), require('./model/ListCreditCard'), require('./model/ListCreditCardAssignment'), require('./model/ListInventory'), require('./model/ListLineItem'), require('./model/ListMessageCCListenerAssignment'), require('./model/ListMessageSender'), require('./model/ListMessageSenderAssignment'), require('./model/ListOrder'), require('./model/ListOrderApproval'), require('./model/ListOrderPromotion'), require('./model/ListPayment'), require('./model/ListPriceSchedule'), require('./model/ListProduct'), require('./model/ListProductAssignment'), require('./model/ListPromotion'), require('./model/ListPromotionAssignment'), require('./model/ListSecurityProfile'), require('./model/ListSecurityProfileAssignment'), require('./model/ListShipment'), require('./model/ListSpec'), require('./model/ListSpecOption'), require('./model/ListSpecProductAssignment'), require('./model/ListSpendingAccount'), require('./model/ListSpendingAccountAssignment'), require('./model/ListUser'), require('./model/ListUserGroup'), require('./model/ListUserGroupAssignment'), require('./model/ListVariant'), require('./model/ListXpIndex'), require('./model/MessageCCListenerAssignment'), require('./model/MessageSender'), require('./model/MessageSenderAssignment'), require('./model/Meta'), require('./model/Order'), require('./model/OrderApproval'), require('./model/OrderPromotion'), require('./model/PasswordReset'), require('./model/PasswordResetRequest'), require('./model/Payment'), require('./model/PaymentTransaction'), require('./model/PingResponse'), require('./model/PriceBreak'), require('./model/PriceSchedule'), require('./model/Product'), require('./model/ProductAssignment'), require('./model/Promotion'), require('./model/PromotionAssignment'), require('./model/SecurityProfile'), require('./model/SecurityProfileAssignment'), require('./model/Shipment'), require('./model/ShipmentItem'), require('./model/Spec'), require('./model/SpecOption'), require('./model/SpecProductAssignment'), require('./model/SpendingAccount'), require('./model/SpendingAccountAssignment'), require('./model/StripeCreditCard'), require('./model/User'), require('./model/UserGroup'), require('./model/UserGroupAssignment'), require('./model/Variant'), require('./model/XpIndex'), require('./api/Addresses'), require('./api/AdminAddresses'), require('./api/AdminUsers'), require('./api/AdminUserGroups'), require('./api/ApprovalRules'), require('./api/Buyers'), require('./api/Catalogs'), require('./api/Categorys'), require('./api/CostCenters'), require('./api/CreditCards'), require('./api/LineItems'), require('./api/Me'), require('./api/MessageSenders'), require('./api/Orders'), require('./api/PasswordResets'), require('./api/Payments'), require('./api/PriceSchedules'), require('./api/Products'), require('./api/Promotions'), require('./api/SecurityProfiles'), require('./api/Shipments'), require('./api/Specs'), require('./api/SpendingAccounts'), require('./api/Users'), require('./api/UserGroups'), require('./api/Auth'));
  }
}(function(ApiClient, AccessToken, Address, AddressAssignment, AdminCompany, ApprovalRule, BaseSpec, Buyer, BuyerAddress, BuyerCreditCard, BuyerProduct, BuyerSpec, Catalog, CatalogAssignment, Category, CategoryAssignment, CategoryProductAssignment, CostCenter, CostCenterAssignment, CreditCard, CreditCardAssignment, ImpersonateTokenRequest, Inventory, LineItem, LineItemProduct, LineItemSpec, ListAddress, ListAddressAssignment, ListAdminCompany, ListApprovalRule, ListBuyer, ListBuyerAddress, ListBuyerCreditCard, ListBuyerProduct, ListBuyerSpec, ListCatalog, ListCatalogAssignment, ListCategory, ListCategoryAssignment, ListCategoryProductAssignment, ListCostCenter, ListCostCenterAssignment, ListCreditCard, ListCreditCardAssignment, ListInventory, ListLineItem, ListMessageCCListenerAssignment, ListMessageSender, ListMessageSenderAssignment, ListOrder, ListOrderApproval, ListOrderPromotion, ListPayment, ListPriceSchedule, ListProduct, ListProductAssignment, ListPromotion, ListPromotionAssignment, ListSecurityProfile, ListSecurityProfileAssignment, ListShipment, ListSpec, ListSpecOption, ListSpecProductAssignment, ListSpendingAccount, ListSpendingAccountAssignment, ListUser, ListUserGroup, ListUserGroupAssignment, ListVariant, ListXpIndex, MessageCCListenerAssignment, MessageSender, MessageSenderAssignment, Meta, Order, OrderApproval, OrderPromotion, PasswordReset, PasswordResetRequest, Payment, PaymentTransaction, PingResponse, PriceBreak, PriceSchedule, Product, ProductAssignment, Promotion, PromotionAssignment, SecurityProfile, SecurityProfileAssignment, Shipment, ShipmentItem, Spec, SpecOption, SpecProductAssignment, SpendingAccount, SpendingAccountAssignment, StripeCreditCard, User, UserGroup, UserGroupAssignment, Variant, XpIndex, Addresses, AdminAddresses, AdminUsers, AdminUserGroups, ApprovalRules, Buyers, Catalogs, Categorys, CostCenters, CreditCards, LineItems, Me, MessageSenders, Orders, PasswordResets, Payments, PriceSchedules, Products, Promotions, SecurityProfiles, Shipments, Specs, SpendingAccounts, Users, UserGroups, Auth) {
  'use strict';

  /**
   * JavaScript SDK autogenerated from swagger spec using the Swagger-CodeGen project.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var OrderCloud = require('index'); // See note below*.
   * var xxxSvc = new OrderCloud.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new OrderCloud.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new OrderCloud.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new OrderCloud.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The As impersonation service.
     * @property {null}
     */
    As: function() {
      this.ApiClient.instance.impersonation = true;
      return this;
    },
    /**
     * The Auth service.
     * @property {null}
     */
    Auth: new Auth(),
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccessToken model constructor.
     * @property {module:model/AccessToken}
     */
    AccessToken: AccessToken,
    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address: Address,
    /**
     * The AddressAssignment model constructor.
     * @property {module:model/AddressAssignment}
     */
    AddressAssignment: AddressAssignment,
    /**
     * The AdminCompany model constructor.
     * @property {module:model/AdminCompany}
     */
    AdminCompany: AdminCompany,
    /**
     * The ApprovalRule model constructor.
     * @property {module:model/ApprovalRule}
     */
    ApprovalRule: ApprovalRule,
    /**
     * The BaseSpec model constructor.
     * @property {module:model/BaseSpec}
     */
    BaseSpec: BaseSpec,
    /**
     * The Buyer model constructor.
     * @property {module:model/Buyer}
     */
    Buyer: Buyer,
    /**
     * The BuyerAddress model constructor.
     * @property {module:model/BuyerAddress}
     */
    BuyerAddress: BuyerAddress,
    /**
     * The BuyerCreditCard model constructor.
     * @property {module:model/BuyerCreditCard}
     */
    BuyerCreditCard: BuyerCreditCard,
    /**
     * The BuyerProduct model constructor.
     * @property {module:model/BuyerProduct}
     */
    BuyerProduct: BuyerProduct,
    /**
     * The BuyerSpec model constructor.
     * @property {module:model/BuyerSpec}
     */
    BuyerSpec: BuyerSpec,
    /**
     * The Catalog model constructor.
     * @property {module:model/Catalog}
     */
    Catalog: Catalog,
    /**
     * The CatalogAssignment model constructor.
     * @property {module:model/CatalogAssignment}
     */
    CatalogAssignment: CatalogAssignment,
    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category: Category,
    /**
     * The CategoryAssignment model constructor.
     * @property {module:model/CategoryAssignment}
     */
    CategoryAssignment: CategoryAssignment,
    /**
     * The CategoryProductAssignment model constructor.
     * @property {module:model/CategoryProductAssignment}
     */
    CategoryProductAssignment: CategoryProductAssignment,
    /**
     * The CostCenter model constructor.
     * @property {module:model/CostCenter}
     */
    CostCenter: CostCenter,
    /**
     * The CostCenterAssignment model constructor.
     * @property {module:model/CostCenterAssignment}
     */
    CostCenterAssignment: CostCenterAssignment,
    /**
     * The CreditCard model constructor.
     * @property {module:model/CreditCard}
     */
    CreditCard: CreditCard,
    /**
     * The CreditCardAssignment model constructor.
     * @property {module:model/CreditCardAssignment}
     */
    CreditCardAssignment: CreditCardAssignment,
    /**
     * The ImpersonateTokenRequest model constructor.
     * @property {module:model/ImpersonateTokenRequest}
     */
    ImpersonateTokenRequest: ImpersonateTokenRequest,
    /**
     * The Inventory model constructor.
     * @property {module:model/Inventory}
     */
    Inventory: Inventory,
    /**
     * The LineItem model constructor.
     * @property {module:model/LineItem}
     */
    LineItem: LineItem,
    /**
     * The LineItemProduct model constructor.
     * @property {module:model/LineItemProduct}
     */
    LineItemProduct: LineItemProduct,
    /**
     * The LineItemSpec model constructor.
     * @property {module:model/LineItemSpec}
     */
    LineItemSpec: LineItemSpec,
    /**
     * The ListAddress model constructor.
     * @property {module:model/ListAddress}
     */
    ListAddress: ListAddress,
    /**
     * The ListAddressAssignment model constructor.
     * @property {module:model/ListAddressAssignment}
     */
    ListAddressAssignment: ListAddressAssignment,
    /**
     * The ListAdminCompany model constructor.
     * @property {module:model/ListAdminCompany}
     */
    ListAdminCompany: ListAdminCompany,
    /**
     * The ListApprovalRule model constructor.
     * @property {module:model/ListApprovalRule}
     */
    ListApprovalRule: ListApprovalRule,
    /**
     * The ListBuyer model constructor.
     * @property {module:model/ListBuyer}
     */
    ListBuyer: ListBuyer,
    /**
     * The ListBuyerAddress model constructor.
     * @property {module:model/ListBuyerAddress}
     */
    ListBuyerAddress: ListBuyerAddress,
    /**
     * The ListBuyerCreditCard model constructor.
     * @property {module:model/ListBuyerCreditCard}
     */
    ListBuyerCreditCard: ListBuyerCreditCard,
    /**
     * The ListBuyerProduct model constructor.
     * @property {module:model/ListBuyerProduct}
     */
    ListBuyerProduct: ListBuyerProduct,
    /**
     * The ListBuyerSpec model constructor.
     * @property {module:model/ListBuyerSpec}
     */
    ListBuyerSpec: ListBuyerSpec,
    /**
     * The ListCatalog model constructor.
     * @property {module:model/ListCatalog}
     */
    ListCatalog: ListCatalog,
    /**
     * The ListCatalogAssignment model constructor.
     * @property {module:model/ListCatalogAssignment}
     */
    ListCatalogAssignment: ListCatalogAssignment,
    /**
     * The ListCategory model constructor.
     * @property {module:model/ListCategory}
     */
    ListCategory: ListCategory,
    /**
     * The ListCategoryAssignment model constructor.
     * @property {module:model/ListCategoryAssignment}
     */
    ListCategoryAssignment: ListCategoryAssignment,
    /**
     * The ListCategoryProductAssignment model constructor.
     * @property {module:model/ListCategoryProductAssignment}
     */
    ListCategoryProductAssignment: ListCategoryProductAssignment,
    /**
     * The ListCostCenter model constructor.
     * @property {module:model/ListCostCenter}
     */
    ListCostCenter: ListCostCenter,
    /**
     * The ListCostCenterAssignment model constructor.
     * @property {module:model/ListCostCenterAssignment}
     */
    ListCostCenterAssignment: ListCostCenterAssignment,
    /**
     * The ListCreditCard model constructor.
     * @property {module:model/ListCreditCard}
     */
    ListCreditCard: ListCreditCard,
    /**
     * The ListCreditCardAssignment model constructor.
     * @property {module:model/ListCreditCardAssignment}
     */
    ListCreditCardAssignment: ListCreditCardAssignment,
    /**
     * The ListInventory model constructor.
     * @property {module:model/ListInventory}
     */
    ListInventory: ListInventory,
    /**
     * The ListLineItem model constructor.
     * @property {module:model/ListLineItem}
     */
    ListLineItem: ListLineItem,
    /**
     * The ListMessageCCListenerAssignment model constructor.
     * @property {module:model/ListMessageCCListenerAssignment}
     */
    ListMessageCCListenerAssignment: ListMessageCCListenerAssignment,
    /**
     * The ListMessageSender model constructor.
     * @property {module:model/ListMessageSender}
     */
    ListMessageSender: ListMessageSender,
    /**
     * The ListMessageSenderAssignment model constructor.
     * @property {module:model/ListMessageSenderAssignment}
     */
    ListMessageSenderAssignment: ListMessageSenderAssignment,
    /**
     * The ListOrder model constructor.
     * @property {module:model/ListOrder}
     */
    ListOrder: ListOrder,
    /**
     * The ListOrderApproval model constructor.
     * @property {module:model/ListOrderApproval}
     */
    ListOrderApproval: ListOrderApproval,
    /**
     * The ListOrderPromotion model constructor.
     * @property {module:model/ListOrderPromotion}
     */
    ListOrderPromotion: ListOrderPromotion,
    /**
     * The ListPayment model constructor.
     * @property {module:model/ListPayment}
     */
    ListPayment: ListPayment,
    /**
     * The ListPriceSchedule model constructor.
     * @property {module:model/ListPriceSchedule}
     */
    ListPriceSchedule: ListPriceSchedule,
    /**
     * The ListProduct model constructor.
     * @property {module:model/ListProduct}
     */
    ListProduct: ListProduct,
    /**
     * The ListProductAssignment model constructor.
     * @property {module:model/ListProductAssignment}
     */
    ListProductAssignment: ListProductAssignment,
    /**
     * The ListPromotion model constructor.
     * @property {module:model/ListPromotion}
     */
    ListPromotion: ListPromotion,
    /**
     * The ListPromotionAssignment model constructor.
     * @property {module:model/ListPromotionAssignment}
     */
    ListPromotionAssignment: ListPromotionAssignment,
    /**
     * The ListSecurityProfile model constructor.
     * @property {module:model/ListSecurityProfile}
     */
    ListSecurityProfile: ListSecurityProfile,
    /**
     * The ListSecurityProfileAssignment model constructor.
     * @property {module:model/ListSecurityProfileAssignment}
     */
    ListSecurityProfileAssignment: ListSecurityProfileAssignment,
    /**
     * The ListShipment model constructor.
     * @property {module:model/ListShipment}
     */
    ListShipment: ListShipment,
    /**
     * The ListSpec model constructor.
     * @property {module:model/ListSpec}
     */
    ListSpec: ListSpec,
    /**
     * The ListSpecOption model constructor.
     * @property {module:model/ListSpecOption}
     */
    ListSpecOption: ListSpecOption,
    /**
     * The ListSpecProductAssignment model constructor.
     * @property {module:model/ListSpecProductAssignment}
     */
    ListSpecProductAssignment: ListSpecProductAssignment,
    /**
     * The ListSpendingAccount model constructor.
     * @property {module:model/ListSpendingAccount}
     */
    ListSpendingAccount: ListSpendingAccount,
    /**
     * The ListSpendingAccountAssignment model constructor.
     * @property {module:model/ListSpendingAccountAssignment}
     */
    ListSpendingAccountAssignment: ListSpendingAccountAssignment,
    /**
     * The ListUser model constructor.
     * @property {module:model/ListUser}
     */
    ListUser: ListUser,
    /**
     * The ListUserGroup model constructor.
     * @property {module:model/ListUserGroup}
     */
    ListUserGroup: ListUserGroup,
    /**
     * The ListUserGroupAssignment model constructor.
     * @property {module:model/ListUserGroupAssignment}
     */
    ListUserGroupAssignment: ListUserGroupAssignment,
    /**
     * The ListVariant model constructor.
     * @property {module:model/ListVariant}
     */
    ListVariant: ListVariant,
    /**
     * The ListXpIndex model constructor.
     * @property {module:model/ListXpIndex}
     */
    ListXpIndex: ListXpIndex,
    /**
     * The MessageCCListenerAssignment model constructor.
     * @property {module:model/MessageCCListenerAssignment}
     */
    MessageCCListenerAssignment: MessageCCListenerAssignment,
    /**
     * The MessageSender model constructor.
     * @property {module:model/MessageSender}
     */
    MessageSender: MessageSender,
    /**
     * The MessageSenderAssignment model constructor.
     * @property {module:model/MessageSenderAssignment}
     */
    MessageSenderAssignment: MessageSenderAssignment,
    /**
     * The Meta model constructor.
     * @property {module:model/Meta}
     */
    Meta: Meta,
    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order: Order,
    /**
     * The OrderApproval model constructor.
     * @property {module:model/OrderApproval}
     */
    OrderApproval: OrderApproval,
    /**
     * The OrderPromotion model constructor.
     * @property {module:model/OrderPromotion}
     */
    OrderPromotion: OrderPromotion,
    /**
     * The PasswordReset model constructor.
     * @property {module:model/PasswordReset}
     */
    PasswordReset: PasswordReset,
    /**
     * The PasswordResetRequest model constructor.
     * @property {module:model/PasswordResetRequest}
     */
    PasswordResetRequest: PasswordResetRequest,
    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment: Payment,
    /**
     * The PaymentTransaction model constructor.
     * @property {module:model/PaymentTransaction}
     */
    PaymentTransaction: PaymentTransaction,
    /**
     * The PingResponse model constructor.
     * @property {module:model/PingResponse}
     */
    PingResponse: PingResponse,
    /**
     * The PriceBreak model constructor.
     * @property {module:model/PriceBreak}
     */
    PriceBreak: PriceBreak,
    /**
     * The PriceSchedule model constructor.
     * @property {module:model/PriceSchedule}
     */
    PriceSchedule: PriceSchedule,
    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product: Product,
    /**
     * The ProductAssignment model constructor.
     * @property {module:model/ProductAssignment}
     */
    ProductAssignment: ProductAssignment,
    /**
     * The Promotion model constructor.
     * @property {module:model/Promotion}
     */
    Promotion: Promotion,
    /**
     * The PromotionAssignment model constructor.
     * @property {module:model/PromotionAssignment}
     */
    PromotionAssignment: PromotionAssignment,
    /**
     * The SecurityProfile model constructor.
     * @property {module:model/SecurityProfile}
     */
    SecurityProfile: SecurityProfile,
    /**
     * The SecurityProfileAssignment model constructor.
     * @property {module:model/SecurityProfileAssignment}
     */
    SecurityProfileAssignment: SecurityProfileAssignment,
    /**
     * The Shipment model constructor.
     * @property {module:model/Shipment}
     */
    Shipment: Shipment,
    /**
     * The ShipmentItem model constructor.
     * @property {module:model/ShipmentItem}
     */
    ShipmentItem: ShipmentItem,
    /**
     * The Spec model constructor.
     * @property {module:model/Spec}
     */
    Spec: Spec,
    /**
     * The SpecOption model constructor.
     * @property {module:model/SpecOption}
     */
    SpecOption: SpecOption,
    /**
     * The SpecProductAssignment model constructor.
     * @property {module:model/SpecProductAssignment}
     */
    SpecProductAssignment: SpecProductAssignment,
    /**
     * The SpendingAccount model constructor.
     * @property {module:model/SpendingAccount}
     */
    SpendingAccount: SpendingAccount,
    /**
     * The SpendingAccountAssignment model constructor.
     * @property {module:model/SpendingAccountAssignment}
     */
    SpendingAccountAssignment: SpendingAccountAssignment,
    /**
     * The StripeCreditCard model constructor.
     * @property {module:model/StripeCreditCard}
     */
    StripeCreditCard: StripeCreditCard,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserGroup model constructor.
     * @property {module:model/UserGroup}
     */
    UserGroup: UserGroup,
    /**
     * The UserGroupAssignment model constructor.
     * @property {module:model/UserGroupAssignment}
     */
    UserGroupAssignment: UserGroupAssignment,
    /**
     * The Variant model constructor.
     * @property {module:model/Variant}
     */
    Variant: Variant,
    /**
     * The XpIndex model constructor.
     * @property {module:model/XpIndex}
     */
    XpIndex: XpIndex,
    /**
     * The Addresses service.
     * @property {module:api/Addresses}
     */
    Addresses: new Addresses(),
    /**
     * The AdminAddresses service.
     * @property {module:api/AdminAddresses}
     */
    AdminAddresses: new AdminAddresses(),
    /**
     * The AdminUsers service.
     * @property {module:api/AdminUsers}
     */
    AdminUsers: new AdminUsers(),
    /**
     * The AdminUserGroups service.
     * @property {module:api/AdminUserGroups}
     */
    AdminUserGroups: new AdminUserGroups(),
    /**
     * The ApprovalRules service.
     * @property {module:api/ApprovalRules}
     */
    ApprovalRules: new ApprovalRules(),
    /**
     * The Buyers service.
     * @property {module:api/Buyers}
     */
    Buyers: new Buyers(),
    /**
     * The Catalogs service.
     * @property {module:api/Catalogs}
     */
    Catalogs: new Catalogs(),
    /**
     * The Categorys service.
     * @property {module:api/Categorys}
     */
    Categorys: new Categorys(),
    /**
     * The CostCenters service.
     * @property {module:api/CostCenters}
     */
    CostCenters: new CostCenters(),
    /**
     * The CreditCards service.
     * @property {module:api/CreditCards}
     */
    CreditCards: new CreditCards(),
    /**
     * The LineItems service.
     * @property {module:api/LineItems}
     */
    LineItems: new LineItems(),
    /**
     * The Me service.
     * @property {module:api/Me}
     */
    Me: new Me(),
    /**
     * The MessageSenders service.
     * @property {module:api/MessageSenders}
     */
    MessageSenders: new MessageSenders(),
    /**
     * The Orders service.
     * @property {module:api/Orders}
     */
    Orders: new Orders(),
    /**
     * The PasswordResets service.
     * @property {module:api/PasswordResets}
     */
    PasswordResets: new PasswordResets(),
    /**
     * The Payments service.
     * @property {module:api/Payments}
     */
    Payments: new Payments(),
    /**
     * The PriceSchedules service.
     * @property {module:api/PriceSchedules}
     */
    PriceSchedules: new PriceSchedules(),
    /**
     * The Products service.
     * @property {module:api/Products}
     */
    Products: new Products(),
    /**
     * The Promotions service.
     * @property {module:api/Promotions}
     */
    Promotions: new Promotions(),
    /**
     * The SecurityProfiles service.
     * @property {module:api/SecurityProfiles}
     */
    SecurityProfiles: new SecurityProfiles(),
    /**
     * The Shipments service.
     * @property {module:api/Shipments}
     */
    Shipments: new Shipments(),
    /**
     * The Specs service.
     * @property {module:api/Specs}
     */
    Specs: new Specs(),
    /**
     * The SpendingAccounts service.
     * @property {module:api/SpendingAccounts}
     */
    SpendingAccounts: new SpendingAccounts(),
    /**
     * The Users service.
     * @property {module:api/Users}
     */
    Users: new Users(),
    /**
     * The UserGroups service.
     * @property {module:api/UserGroups}
     */
    UserGroups: new UserGroups()
  };

  return exports;
}));
