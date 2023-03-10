export class UserResponse {
    Id : number;
    Error: string;
    Data: Map<string,string>
    constructor(id : number,
                error: string,
                data: any)
    {
        this.Id = id
        this.Error = error
        var Data = new Map<string,string>();
        Object.keys(data).forEach(function(key) {
            Data.set(key,data[key]);
        });
        this.Data = Data;
    }

    public toString(): string {
        var ret = {
            id: this.Id,
            error: this.Error,
            data: Array.from(this.Data.entries()),
        }
        
        return JSON.stringify(ret);
    }
}

export class UserRequest {
    Id : number;
    Target : string;
    Headers: Map<string,string>
    Data: Map<string,string>

    constructor(id : number,
                target : string,
                headers: Map<string,string>,
                data: Map<string,string>)
    {
        this.Id = id
        this.Target = target


        this.Headers = headers;
        this.Data = data;

    }

    public toString(): string {
        var ret = {
            id: this.Id,
            target: this.Target,
            headers: Array.from(this.Headers.entries()),
            data: Array.from(this.Data.entries()),
        }
        
        return JSON.stringify(ret);
    }
}
