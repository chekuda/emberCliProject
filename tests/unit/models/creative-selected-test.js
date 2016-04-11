import { moduleForModel, test } from 'ember-qunit';

moduleForModel('creative-selected', 'Unit | Model | creative selected', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
