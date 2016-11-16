/* globals $, c3 */
var palette = [
  '#e87079',
  '#c46483',
  '#995d84',
  '#6b567b',
  '#404c6a',
  '#1b4052'
]

$(document).ready(function () {
  c3.generate({
    bindto: '#averages',
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
        }
      },
      x: {
        type: 'category',
        tick: {
          show: false,
          outer: false,
          multiline: false,
          centered: true
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
    bindto: '#frequency',
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
        x: 65,
        y: 75
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
          text: 'Line Length',
          position: 'outer-center'
        },
        tick: {
          outer: false,
          culling: false
        }
      }
    },
    data: {
      columns: [
        ['Frequency',
        1,
        15,
        37,
        21,
        18,
        6,
        1,
        1],
        ['Measure',
        66,
        73,
        80,
        87,
        94,
        101,
        108,
        115
        ]
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
      bottom: 6
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
