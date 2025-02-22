import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public mediaFolder: string = 'media'

  
  constructor() { }
}
