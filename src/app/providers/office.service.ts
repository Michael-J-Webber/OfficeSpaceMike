import { Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Office, } from '../models/office_model';
import { StaffMember, } from '../models/staff_model';

@Injectable({
    providedIn: 'root'
})
export class OfficeService {

    private _offices: Office[] =[];
    private officesCollection! : AngularFirestoreCollection<Office>;
    offices!: Observable<Office[]>;
   
    constructor(private store : AngularFirestore) {
        //initialize firebase value change subscription 

        this.officesCollection = store!.collection<Office>('Offices');

        this.offices = this.officesCollection.valueChanges({ idField: 'id' });

        this.offices.subscribe((value) => {
            this._offices = value;
        });

    }

    public async getOfficeById(officeId: string) : Promise<Office | undefined> {
        let mydoc : Office | undefined;
        await this.officesCollection.doc(officeId).ref.get().then((doc)=>{
          mydoc = doc.data();
          if (mydoc !== undefined) {
            mydoc.id == doc.id;
            mydoc.data.id == doc.id;
          }
        });
        return mydoc;
    }

    public addOffice(office: Office) {
        if (!office.members) {
            office.members = [];
      }
      this.officesCollection.add(Object.assign({}, office)).then((doc) => {
        this.officesCollection.doc(doc.id).update({ id: doc.id });
      })
        
    }

    public updateOffice(office: Office) {
        if (!office.members) {
            office.members = [];
        }
        this.officesCollection.doc(office.id).update(Object.assign({}, office));
    }

    public deleteOffice(officeId:string,) {
        this.officesCollection.doc(officeId).delete();
    }

    public getMemberById(officeId:string, memberId: string): StaffMember | undefined{
        let tempOffice = this._offices.find((_office)=>{return _office.id == officeId;});
        return tempOffice?.members?.find((_member)=>{return _member.id == memberId;});
    }

    public async updateMember(officeId:string, updatedMember: StaffMember){

        let tempMember = this.getMemberById(officeId, updatedMember.id);
        let tempOffice = await this.getOfficeById(officeId);
        if (tempMember) {

            let memberIndex = tempOffice?.members?.findIndex((_member)=>{return _member.id == tempMember!.id;}) ?? -1;
            if (memberIndex !=-1 ){
                tempOffice!.members![memberIndex] = Object.assign({}, updatedMember);
                this.updateOffice(tempOffice!);
            }
        } else {
            updatedMember.id = (tempOffice!.members!.length+1).toString();
            tempOffice?.members?.push(Object.assign({}, updatedMember));
            this.updateOffice(tempOffice!);

        }
    }

    public async deleteMember(officeId:string, memberId: string) {

        let tempMember = this.getMemberById(officeId, memberId);

        if (tempMember) {
            let tempOffice = await this.getOfficeById(officeId);
            let memberIndex = tempOffice?.members?.findIndex((_member)=>{return _member.id == tempMember!.id;}) ?? -1;

            if (memberIndex !=-1 ){
                tempOffice!.members!.splice(memberIndex, 1);
            }
            this.updateOffice(tempOffice!);
        } 

    }

}
