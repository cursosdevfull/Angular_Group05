import { Component, OnInit } from '@angular/core';
import { SocketRepository } from 'src/app/dashboard/application/socket.repository';

@Component({
  selector: 'amb-vaccum',
  templateUrl: './vaccum.component.html',
  styleUrls: ['./vaccum.component.css'],
})
export class VaccumComponent implements OnInit {
  view: any = [400, 300];
  results = [
    { name: 'Rusa', value: 300 },
    { name: 'Americana', value: 350 },
    { name: 'Alemana', value: 500 },
    { name: 'China', value: 1200 },
  ];

  scheme = {
    domain: ['#0d47a1', '#42a5f5', '#90caf9', '#adbdca'],
  };

  legend = true;
  legendPosition = 'above';
  legendTitle = 'Vacunas';

  gradient = true;
  doughnut = true;

  constructor(private readonly socketService: SocketRepository) {}

  ngOnInit(): void {
    this.socketService.listen('dataupdate').subscribe((results) => {
      this.results = results;
    });
  }
}
