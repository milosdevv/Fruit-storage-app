export class Supplier {
    constructor(
                public supplierName: string,
                public supplierSurname:string,
                public supplierPhoneNumber:number | string,
                public supplierDateOfArrival:string,
                public supplierBeginDestination:string,
                public supplierFinalDestination:string,
                public supplierPriority:string,
                public supplierStatus:string,
                public id?:string
            )
            {
             }
}