import { CreateCrudNameDto } from './dto/create-crud-name.dto';
import { UpdateCrudNameDto } from './dto/update-crud-name.dto';
export declare class CrudNameService {
    create(createCrudNameDto: CreateCrudNameDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCrudNameDto: UpdateCrudNameDto): string;
    remove(id: number): string;
}
