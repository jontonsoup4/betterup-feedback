import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr('string'),
  attribute: DS.attr('string'),
  rank: DS.attr('number'),
  difference: DS.attr('number'),
  coworkerRating: DS.attr('number'),
  description: DS.attr('string'),
  scoreSelf: DS.attr('number'),
  scoreManager: DS.attr('number'),
  scoreDirectReports: DS.attr('number'),
  scoreOthers: DS.attr('number'),
});
