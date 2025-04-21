// heatmap.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent {
  // Logic for rendering heatmap
  data: number[][];
  colorRange: string[];

  constructor() {
    this.data = [[0, 1, 2], [1, 2, 3], [2, 3, 4]]; // Example data
    this.colorRange = ['#ffffff', '#ff0000']; // Example color range
  }

  getColor(value: number): string {
    // Logic to determine color based on value
    return this.colorRange[value];
  }
}