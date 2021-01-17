import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/shared/services/menu.interface';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  listMenu: IMenu[] = [];

  constructor(private readonly menuService: MenuService) {
    this.listMenu = menuService.getListMenu();
  }

  ngOnInit(): void {}
}
