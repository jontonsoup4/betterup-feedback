import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

const titles = [
  'Feedback',
  'Encouraging Ownership',
  'Problem Solving',
  'Influence',
  'Recognizing',
  'Participation',
  'Coaching',
];

const attributes = [
  'Strength',
  'Medium Ability',
  'Potential Development Area',
];


export default Factory.extend({
  title() {
    return faker.random.arrayElement(titles);
  },
  attribute() {
    return faker.random.arrayElement(attributes);
  },
  rank(i) {
    return i + 1;
  },
  difference() {
    return faker.random.number({ min: -30, max: 30 });
  },
  'coworker-rating'() {
    return faker.random.number({ min: 30, max: 60 });
  },
  description: 'You encourage others to take ownership, allowing them to decide how best to complete their work. Your ability to support others in this way is highly motivating for driven individuals, who appreciate the latitude you give them to \'run with it\'.',
  'score-self'() {
    return faker.random.number({ min: 20, max: 60 });
  },
  'score-manager'() {
    return faker.random.number({ min: 20, max: 60 });
  },
  'score-direct-reports'() {
    return faker.random.number({ min: 20, max: 60 });
  },
  'score-others'() {
    return faker.random.number({ min: 20, max: 60 });
  },
});
