import { GeneralService } from "./general-service";
import { ICustomerDBService } from "../api/icustomer-dbservice";

export class CustomerDBServiceRestService extends GeneralService implements ICustomerDBService {

  constructor() {super(); }

}
