import Route from '@ember/routing/route';
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

export default Route.extend({
  model () {
    // Uncomment to use mirage
    // return this.store.findAll('feedback')
    return Array.from(new Array(10).keys()).map((i) => {
      return ({
        title: faker.random.arrayElement(titles),
        attribute: faker.random.arrayElement(attributes),
        rank: i + 1,
        difference: faker.random.number({ min: -30, max: 30 }),
        coworkerRating: faker.random.number({ min: 30, max: 60 }),
        description: 'You encourage others to take ownership, allowing them to decide how best to complete their work. Your ability to support others in this way is highly motivating for driven individuals, who appreciate the latitude you give them to \'run with it\'.',
        scoreSelf:  faker.random.number({ min: 20, max: 60 }),
        scoreManager: faker.random.number({ min: 20, max: 60 }),
        scoreDirectReports: faker.random.number({ min: 20, max: 60 }),
        scoreOthers: faker.random.number({ min: 20, max: 60 }),
      })
    });
  }
});
