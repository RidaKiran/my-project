import { CrudNameService } from './crud-name.service';
import { CreateCrudNameDto } from './dto/create-crud-name.dto';
import { UpdateCrudNameDto } from './dto/update-crud-name.dto';
export declare class CrudNameController {
    private readonly crudNameService;
    constructor(crudNameService: CrudNameService);
    create(createCrudNameDto: CreateCrudNameDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCrudNameDto: UpdateCrudNameDto): string;
    remove(id: string): string;
}
