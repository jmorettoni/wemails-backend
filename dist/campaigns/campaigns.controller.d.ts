import { CampaignService } from './campaigns.service';
import { CreateCampaignDto } from './create-campaigns.dto';
export declare class CampaignController {
    private readonly campaignService;
    constructor(campaignService: CampaignService);
    getAll(param: any): Promise<(import("./campaigns.schema").Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createList(createCampaignDto: CreateCampaignDto): Promise<import("./campaigns.schema").Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getListById(param: any): Promise<import("./campaigns.schema").Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getListByUserId(param: any): Promise<(import("./campaigns.schema").Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
