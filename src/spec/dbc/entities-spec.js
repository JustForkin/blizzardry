const {expect} = require('../spec-helper');

const inflect = require('inflected');

const entities = require('../../lib/dbc/entities');

describe('DBC.Entities', function() {
  for (const name in entities) {
    it(`exposes ${name} entity`, function() {
      const entity = entities[name];
      const filename = inflect.dasherize(inflect.underscore(name));
      expect(entity).to.eq(require(`../../lib/dbc/entities/${filename}`));
    });
  }
});
