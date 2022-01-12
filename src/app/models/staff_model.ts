export interface StaffMemberInterface {
    id : string,
    firstName: string,
    lastName: string,
    avatar: string,
}
export class StaffMember {
    id : string;
    firstName: string;
    lastName: string;
    avatar: string;

    constructor(
        public data: StaffMemberInterface
    ){ 
        this.id = data.id;
        this.firstName= data.firstName;
        this.lastName= data.lastName;
        this.avatar= data.avatar;

        return this;

    }
}