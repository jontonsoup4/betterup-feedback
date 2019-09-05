import { helper } from '@ember/component/helper';

export default helper(function formatDifference([difference]) {
  return `${difference > 0 ? '+' : ''}${difference}`;
});
