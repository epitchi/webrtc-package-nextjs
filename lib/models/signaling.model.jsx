"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequest = exports.UserResponse = void 0;
class UserResponse {
    constructor(id, error, data) {
        this.Id = id;
        this.Error = error;
        var Data = new Map();
        Object.keys(data).forEach(function (key) {
            Data.set(key, data[key]);
        });
        this.Data = Data;
    }
    toString() {
        var ret = {
            id: this.Id,
            error: this.Error,
            data: Array.from(this.Data.entries()),
        };
        return JSON.stringify(ret);
    }
}
exports.UserResponse = UserResponse;
class UserRequest {
    constructor(id, target, headers, data) {
        this.Id = id;
        this.Target = target;
        this.Headers = headers;
        this.Data = data;
    }
    toString() {
        var ret = {
            id: this.Id,
            target: this.Target,
            headers: Array.from(this.Headers.entries()),
            data: Array.from(this.Data.entries()),
        };
        return JSON.stringify(ret);
    }
}
exports.UserRequest = UserRequest;
