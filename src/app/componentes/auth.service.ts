import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthToket():Observable<boolean>{
    return of(false);

  }
}
