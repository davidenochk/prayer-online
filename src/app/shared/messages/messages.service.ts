import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private snack: MatSnackBar) { }

  showMessage(message: string){
    this.snack.open(message, undefined, {duration: 5000});
  }
}
