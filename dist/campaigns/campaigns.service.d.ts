import { CreateCampaignDto } from './create-campaigns.dto';
import { Model } from 'mongoose';
import { Campaign, CampaignDocument } from './campaigns.schema';
export declare class CampaignService {
    private campaignModel;
    constructor(campaignModel: Model<CampaignDocument>);
    getAll(): Promise<(Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getCampaignById(_id: string): Promise<Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getCampaignByUserId(listUserId: string): Promise<(Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getCampaignByUser(listUserId: string): Promise<Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createCampaign(createListaDto: CreateCampaignDto): Promise<Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
