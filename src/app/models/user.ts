import { timestamp } from 'rxjs/operators';

export interface User {
    id : string,
    name: string,
    lastName: string,
    username : string,  
    email : string,    
    password : string,      
    phone: string,
    identification: string,
    role: string 
}


export interface UserCredentials {
    id : string,   
    username : string,      
    token : string,  
    timestamp: any      
}
