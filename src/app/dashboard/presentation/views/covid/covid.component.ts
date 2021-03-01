import { Component, OnInit } from '@angular/core';
import { CovidUseCase } from 'src/app/dashboard/application/covid.usecase';
import { Covid } from 'src/app/dashboard/domain/covid.entity';

@Component({
  selector: 'amb-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
})
export class CovidComponent implements OnInit {
  view: any = [700, 450];
  dataCovid: { name: string; value: number }[] = [];

  scheme = {
    domain: ['#0d47a1', '#42a5f5', '#90caf9', '#adbdca'],
  };

  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Países';
  yAxisLabel = 'Cantidad de contagiados';

  yScaleMin = 0;
  yScaleMax = 2500;

  showGridLines = true;

  legend = true;
  legendPosition = 'right';
  legendTitle = 'Meses';

  constructor(private readonly covidUseCase: CovidUseCase) {}

  ngOnInit(): void {
    this.covidUseCase.getAll().subscribe((data: Covid[]) => {
      this.dataCovid = data.map((el: Covid) => ({
        name: el.countryRegion,
        value: el.confirmed,
      }));
    });
  }
}
