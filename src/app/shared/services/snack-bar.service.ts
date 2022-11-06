import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) {
  }

  /**
   * Shows a snack bar.
   *
   * @param message Main text displayed on snack bar.
   * @param actionTitle Text on the button which calls an action.
   * @param config Configuration of a snack bar.
   *
   * @return Either Observable which is triggered after action button being triggered
   * or `null` when the {@link actionTitle} is not passed.
   */
  openSnackBar(message: string, actionTitle?: string, config?: MatSnackBarConfig<any> | undefined): Observable<void> | null {
    const snackBarRef = this._snackBar.open(message, actionTitle, config);

    return actionTitle !== undefined ? snackBarRef.onAction() : null;
  }
}
