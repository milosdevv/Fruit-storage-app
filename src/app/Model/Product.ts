export class Product {
    constructor(
        public productName:string,
        public productType:string,
        public productClass:string,
        public productDateOfEntry:string,
        public productExpiryDate:string,
        public productStatus:string,
        public productPriority:string,
        public id?:string
    ){}
}