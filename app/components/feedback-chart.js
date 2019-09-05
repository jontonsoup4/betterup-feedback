import Component from '@ember/component';
import { computed } from '@ember/object';

const generateSegments = (score, maxScore=60) => {
  const segments = new Array(3).fill(maxScore / 3);
  let scoreLeft = score;
  return segments.map((fullSegment) => {
    const currentSegment = Math.min(scoreLeft, fullSegment);
    scoreLeft -= currentSegment;
    return currentSegment / fullSegment * 100;
  })
};

export default Component.extend({
  classNames: ['feedback-chart'],

  bars: computed('data', function () {
    const {
      scoreDirectReports,
      scoreManager,
      scoreOthers,
      scoreSelf,
    } = this.data;
    return [
      {
        label: 'Self',
        className: 'score-self',
        score: scoreSelf,
        segments: generateSegments(scoreSelf),
      },
      {
        label: 'Manager',
        className: 'score-manager',
        score: scoreManager,
        segments: generateSegments(scoreManager),
      },
      {
        label: 'Direct Reports',
        className: 'score-direct-reports',
        score: scoreDirectReports,
        segments: generateSegments(scoreDirectReports),
      },
      {
        label: 'Others',
        className: 'score-other',
        score: scoreOthers,
        segments: generateSegments(scoreOthers),
      },
    ]
  }),

  didInsertElement() {
    this._super(...arguments);
    const bars = this.element.querySelectorAll('.bar');
    bars.forEach((bar) => {
      const segments = bar.querySelectorAll('.segment-color');
      segments.forEach((segment, index) => {
        setTimeout(() => {
          segment.style.width = `${segment.dataset.width}%`;
        }, 500 + (index * 500))
      })
    })
  }
});
