"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCrudNameDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_crud_name_dto_1 = require("./create-crud-name.dto");
class UpdateCrudNameDto extends (0, mapped_types_1.PartialType)(create_crud_name_dto_1.CreateCrudNameDto) {
}
exports.UpdateCrudNameDto = UpdateCrudNameDto;
//# sourceMappingURL=update-crud-name.dto.js.map