import { IVisitor } from './visitor.model';


export interface IVisits{
 
        id:number
        visitor_id:number
        arrival:Date
        departure:Date
        visit_reason:string
        receptionist_id:number
        host_mail:string
        visitorCard_id:number
        receptionist_name:String
        visitor:IVisitor
    
}