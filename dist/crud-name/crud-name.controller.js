"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudNameController = void 0;
const common_1 = require("@nestjs/common");
const crud_name_service_1 = require("./crud-name.service");
const create_crud_name_dto_1 = require("./dto/create-crud-name.dto");
const update_crud_name_dto_1 = require("./dto/update-crud-name.dto");
let CrudNameController = exports.CrudNameController = class CrudNameController {
    constructor(crudNameService) {
        this.crudNameService = crudNameService;
    }
    create(createCrudNameDto) {
        return this.crudNameService.create(createCrudNameDto);
    }
    findAll() {
        return this.crudNameService.findAll();
    }
    findOne(id) {
        return this.crudNameService.findOne(+id);
    }
    update(id, updateCrudNameDto) {
        return this.crudNameService.update(+id, updateCrudNameDto);
    }
    remove(id) {
        return this.crudNameService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_crud_name_dto_1.CreateCrudNameDto]),
    __metadata("design:returntype", void 0)
], CrudNameController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CrudNameController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CrudNameController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_crud_name_dto_1.UpdateCrudNameDto]),
    __metadata("design:returntype", void 0)
], CrudNameController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CrudNameController.prototype, "remove", null);
exports.CrudNameController = CrudNameController = __decorate([
    (0, common_1.Controller)('crud-name'),
    __metadata("design:paramtypes", [crud_name_service_1.CrudNameService])
], CrudNameController);
//# sourceMappingURL=crud-name.controller.js.map