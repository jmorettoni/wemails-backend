import { ListaService } from './lista.service';
import { CreateListaDto } from './create-lista.dto';
export declare class ListaController {
    private readonly listaService;
    constructor(listaService: ListaService);
    getListaById(param: any): Promise<import("./lista.schema").Lista & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    registerLista(createListaDto: CreateListaDto): Promise<import("./lista.schema").Lista & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
