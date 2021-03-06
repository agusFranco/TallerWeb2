import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  public showError(text: string): void {
    this.snackBar.open(text, undefined, {
      duration: 1500,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: 'notification-error',
    });
  }

  public showSuccess(text: string, position: MatSnackBarHorizontalPosition = 'center'): void {
    this.snackBar.open(text, undefined, {
      duration: 1500,
      verticalPosition: 'top',
      horizontalPosition: position,
      panelClass: 'notification-success',
    });
  }
}
