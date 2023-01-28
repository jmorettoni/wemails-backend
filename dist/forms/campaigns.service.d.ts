import { CreateCampaignDto } from './create-campaigns.dto';
import { Model } from 'mongoose';
import { Campaign, CampaignDocument } from './campaigns.schema';
import { TaskService } from '../tasks/shared/task.service/task.service';
export declare class CampaignService {
    private campaignModel;
    private taskService;
    constructor(campaignModel: Model<CampaignDocument>, taskService: TaskService);
    getAll(): Promise<(Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getCampaignById(_id: string): Promise<Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getCampaignByUserId(campanhaUserId: string): Promise<(Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getCampaignByUser(campanhaUserId: string): Promise<Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createCampaign(createListaDto: CreateCampaignDto): Promise<Campaign & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateCampaignByUserId(userid: String, campanha: any): Promise<import("mongodb").UpdateResult>;
    removeCampaignByUserId(userId: any, campanhaArray: any): Promise<{
        return: import("mongodb").DeleteResult;
    } | {
        error: any;
    }>;
}
