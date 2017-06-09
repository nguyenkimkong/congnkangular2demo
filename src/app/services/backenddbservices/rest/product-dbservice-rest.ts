import { IProductDBService } from "../api/iproduct-dbservice";
import { GeneralService } from "./general-service";

export class ProductDBServiceRest extends GeneralService implements IProductDBService {
    constructor() {super(); }
}
