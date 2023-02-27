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
    getCampaignById(param: any): Promise<import("./campaigns.schema").Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getCampanhaByUserId(param: any): Promise<(import("./campaigns.schema").Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    removeList(param: any, campanhas: any): Promise<{
        return: import("mongodb").DeleteResult;
    } | {
        error: any;
    }>;
    updateList(param: any, list: any): Promise<import("mongodb").UpdateResult>;
}
