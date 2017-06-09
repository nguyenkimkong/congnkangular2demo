import { Injectable } from '@angular/core';
import { AbstractDBServiceFactory } from "../abstract-dbservice-factory";
import { ICustomerDBService } from "../api/icustomer-dbservice";
import { IProductDBService } from "../api/iproduct-dbservice";
import { CustomerDBServiceRestService } from "./customer-dbservice-rest.service";
import { ProductDBServiceRest } from "./product-dbservice-rest";

@Injectable()
export class RestDBServiceFactory extends AbstractDBServiceFactory {

    private constructor() { super() };

    /**
     * 
     */
    getCustomerDBService(): ICustomerDBService {
        return new CustomerDBServiceRestService();
    }

    /**
     * 
     */
    getIProductDBService(): IProductDBService {
        return new ProductDBServiceRest();
    }

}
