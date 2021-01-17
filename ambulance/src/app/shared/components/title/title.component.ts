import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu } from '../../services/menu.interface';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'amb-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  path: Partial<IMenu>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly menuService: MenuService
  ) {
    const currentPath =
      '/' + this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;

    this.path = this.menuService.getDataPath(currentPath);
  }

  ngOnInit(): void {}
}
