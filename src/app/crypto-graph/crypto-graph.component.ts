import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CRYPTO_CURRENCIES } from '../cryptos';
import { ICrypto } from '../models';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-crypto-graph',
  templateUrl: './crypto-graph.component.html',
  styleUrls: ['./crypto-graph.component.scss'],
})
export class CryptoGraphComponent implements OnInit {
  crypto!: ICrypto;
  backButton = faArrowLeft;
  forwardButton = faArrowRight;
  durations: Array<string> = ['15min', '1h', '1d', '1w', '1m', '1y'];
  selectedDuration: string = '1h';
  private durationItems: { [key: string]: number } = {
    '15min': 15,
    '1h': 6,
    '1d': 24,
    '1w': 7,
    '1m': 30,
    '1y': 12,
  };
  chart?: Chart;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: (param: any) => {
        const label = param.params.crypto || '';
        const crypto = CRYPTO_CURRENCIES.find((v) => v.label === label);
        if (crypto) {
          this.crypto = crypto;
          this.renderChart();
        } else {
          // Go to landing page
          this.router.navigateByUrl('');
        }
      },
    });
  }

  renderChart() {
    const canvas = document.getElementById('chart') as any;
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: this.getLabels(),
        datasets: [
          {
            label: 'Gain/Loss',
            data: this.getData(),
            borderWidth: 1,
          },
        ],
      },
      options: {
        borderColor: '#5957bb',
        color: '#bae399',
        backgroundColor: '#bae399',
        interaction: {
          intersect: false
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false
          },
          y: {
            display: false
          }
        }
      }
    });
  }

  getLabels(): Array<string> {
    const count = this.durationItems[this.selectedDuration];
    const labels = [];
    for (let i = 0; i < count; i++) {
      labels.push(i.toString());
    }
    return labels;
  }

  getData(): Array<number> {
    const count = this.durationItems[this.selectedDuration];
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push(Math.random() * 6);
    }
    return data;
  }

  onDurationSelected(duration: string) {
    this.selectedDuration = duration;
    this.renderChart();
  }
}
