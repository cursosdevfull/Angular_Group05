import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Directive({
  selector: '[rolesAllowed]',
})
export class RolesAllowedDirective {
  @Input() rolesAllowed: string[] = [];
  hasView = false;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.execute();
  }

  execute() {
    const userIsLogged = this.authService.userIsLogged;
    const userIsAllowed = this.authService.isUserInRoles(...this.rolesAllowed);

    if (userIsLogged && userIsAllowed && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
}
