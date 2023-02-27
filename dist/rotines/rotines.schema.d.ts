/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export type RotineDocument = Rotine & Document;
export declare class Rotine {
    nomeRotina: string;
    rotinaUserId: string;
    tipoRotina: string;
    listaID: string;
    qtdDias: string;
    momentoAgendamento: string;
    horaAgendamento: string;
    minutoAgendamento: string;
    campoAssunto: string;
    campoNomeFrom: string;
    campoEmailFrom: string;
    diasData: string;
    momentoData: string;
    tipoInteracao: string;
    diaMes: string;
    diaSemana: string;
    frequencia: string;
    diasDataMomento: string;
    definaTempo: string;
    tempoEnviarEmail: string;
    tipoTempo: string;
    statusRotina: string;
    totalEnviados: number;
    totalEntregues: number;
    totalBloqueados: number;
    totalAbertos: number;
    totalClicados: number;
    createDate: string;
    lastUpdate: string;
}
export declare const RotineSchema: import("mongoose").Schema<Rotine, import("mongoose").Model<Rotine, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Rotine>;
