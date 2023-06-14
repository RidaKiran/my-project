"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudNameModule = void 0;
const common_1 = require("@nestjs/common");
const crud_name_service_1 = require("./crud-name.service");
const crud_name_controller_1 = require("./crud-name.controller");
let CrudNameModule = exports.CrudNameModule = class CrudNameModule {
};
exports.CrudNameModule = CrudNameModule = __decorate([
    (0, common_1.Module)({
        controllers: [crud_name_controller_1.CrudNameController],
        providers: [crud_name_service_1.CrudNameService]
    })
], CrudNameModule);
//# sourceMappingURL=crud-name.module.js.map