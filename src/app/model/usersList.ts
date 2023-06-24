export class UsersList{
    private username: string;
    private role: string;

    constructor(username: string, role: string){
        this.username=username;
        this.role=role;
    }

    getUsername(){
        return this.username;
    }

    getRole(){
        return this.role;
    }
}