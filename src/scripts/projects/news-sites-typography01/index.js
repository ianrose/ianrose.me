require('d3')
var c3 = require('c3')

var palette = [
  '#e96d80',
  '#fd7c6b',
  '#c7688f',
  '#9d6796',
  '#6f6592',
  '#10596c',
  '#767676',
]

$(document).ready(function () {
  c3.generate({
    bindto: '#histogram',
    size: {
      height: 640
    },
    interaction: {
      enabled: false
    },
    color: {
      pattern: palette
    },

    point: {
      show: false
    },
    axis: {
      rotated: true,
      y: {
        show: false,
        tick: {
          outer: false
        },
      },
      x: {
        type: 'category',
        tick: {
          show: false,
          outer: false,
          multiline: false
        }
      }
    },
    data: {
      x: 'Site',
      url: '/assets/data/news-sites-avg-measure-11-13-2016.csv',
      type: 'bar',
      labels: true
    },
    bar: {
      width: 2
    }
  })

  c3.generate({
    bindto: '#standard',
    size: {
      height: 480
    },
    interaction: {
      enabled: false
    },
    color: {
      pattern: palette
    },
    legend: {
      position: 'inset',
      inset: {
        anchor: 'top-right',
        x: 100,
        y: 100
      }
    },
    point: {
      show: false
    },
    axis: {
      y: {
        tick: {
          outer: false
        }
      },
      x: {
        label: {
          text: 'Measure',
          position: 'outer-center',
        },
        tick: {
          outer: false,
          multiline: false
        }
      }
    },
    data: {
      columns: [
        ['Frequency', 7, 46, 30, 15, 1, 1],
        ['Measure', 70, 80 ,90 ,100 ,110, 120]
      ],
      labels: false,
      type: 'bar',
      x: 'Measure'
      },
      bar: {
       width: {
        ratio: 1.1
      }
    },
    padding: {
      bottom: 1
    },
grid: {
        x: {
            show: false
        },
        y: {
            show: true
        }
    }
  })
})
