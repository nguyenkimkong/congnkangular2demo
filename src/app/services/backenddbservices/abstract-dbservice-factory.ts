import { ICustomerDBService } from "./api/icustomer-dbservice";
import { IProductDBService } from "./api/iproduct-dbservice";

/**
 * 
 */
export abstract class AbstractDBServiceFactory {
    constructor() {}
    
    /**
     * 
     */
    abstract getCustomerDBService(): ICustomerDBService;

    /**
     * 
     */
    abstract getIProductDBService(): IProductDBService;
}
