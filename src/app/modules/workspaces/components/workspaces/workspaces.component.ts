import {Component, ElementRef} from '@angular/core';
import {WorkspaceInterface} from "../../interfaces/workspace.interface";
import MockWorkspaces from "../../mocks/mock-workspaces";
import {CssUtilsService} from "../../../../shared/services/css-utils.service";

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss']
})
export class WorkspacesComponent {

  lastFocusElement: { id: string, elementRef: ElementRef<HTMLDivElement> } | undefined;

  workspaces: WorkspaceInterface[] = [];

  constructor(private cssUtilsService: CssUtilsService) {
    // TODO: Get rid of Mocking data.
    this.workspaces = [...MockWorkspaces];
  }


  generateRandomGradient(workspace: WorkspaceInterface) {
    if (workspace.image) {
      return workspace.image;
    }

    workspace.image = this.cssUtilsService.generateRandomGradient();
    return workspace.image;
  }

  openWorkspace(workspace: WorkspaceInterface): void {
    alert(`open workspace#${workspace.id} -- ${workspace.title}`)
  }

  removeFocus(): void {
    if (!this.lastFocusElement) {
      return;
    }

    this.lastFocusElement.elementRef.nativeElement.blur();
  }

  saveFocusedWorkspace(id: string, $event: FocusEvent) {
    this.lastFocusElement = {
      id,
      elementRef: new ElementRef<HTMLDivElement>($event.target as HTMLDivElement)
    };
  }
}
