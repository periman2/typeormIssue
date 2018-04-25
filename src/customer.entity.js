"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
// import { Channel } from "../Channel/channel.entity";
var Customer = /** @class */ (function () {
    function Customer() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid")
    ], Customer.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 600 })
    ], Customer.prototype, "firstname");
    __decorate([
        typeorm_1.Column({ length: 600 })
    ], Customer.prototype, "lastname");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], Customer.prototype, "createdAt");
    __decorate([
        typeorm_1.UpdateDateColumn()
    ], Customer.prototype, "updatedAt");
    Customer = __decorate([
        typeorm_1.Entity()
    ], Customer);
    return Customer;
}());
exports.Customer = Customer;
