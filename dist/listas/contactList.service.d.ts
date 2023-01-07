import { CreateListaDto } from './create-lista.dto';
import { Model } from 'mongoose';
import { HashService } from './hash.service';
import { ListaDocument } from './lista.schema';
export declare class ListaService {
    private listaModel;
    private hashService;
    constructor(listaModel: Model<ListaDocument>, hashService: HashService);
    getUserByUsername(username: string): Promise<any>;
    registerUser(createListaDto: CreateListaDto): Promise<any>;
}
