import { ListaService } from './lista.service';
import { CreateListaDto } from './create-lista.dto';
export declare class ListaController {
    private readonly listaService;
    constructor(listaService: ListaService);
    getListaById(param: any): any;
    registerLista(createListaDto: CreateListaDto): any;
}
