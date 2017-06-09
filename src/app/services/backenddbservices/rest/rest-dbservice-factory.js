"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var abstract_dbservice_factory_1 = require("../abstract-dbservice-factory");
var customer_dbservice_rest_service_1 = require("./customer-dbservice-rest.service");
var product_dbservice_rest_1 = require("./product-dbservice-rest");
var RestDBServiceFactory = (function (_super) {
    __extends(RestDBServiceFactory, _super);
    function RestDBServiceFactory() {
        return _super.call(this) || this;
    }
    ;
    /**
     *
     */
    RestDBServiceFactory.prototype.getCustomerDBService = function () {
        return new customer_dbservice_rest_service_1.CustomerDBServiceRestService();
    };
    /**
     *
     */
    RestDBServiceFactory.prototype.getIProductDBService = function () {
        return new product_dbservice_rest_1.ProductDBServiceRest();
    };
    return RestDBServiceFactory;
}(abstract_dbservice_factory_1.AbstractDBServiceFactory));
RestDBServiceFactory = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], RestDBServiceFactory);
exports.RestDBServiceFactory = RestDBServiceFactory;
//# sourceMappingURL=rest-dbservice-factory.js.map