'use strict';

var expect = require('expect.js');

describe('models/task', function () {
  beforeEach(function () {
    this.Task = require('../../models').Task;
  });

  describe('create', function () {
    it('creates a task', function () {
      return this.Task.create({ title: 'a title' }).then(function (task) {
        expect(task.title).to.equal('a title');
      });
    });
  });
});
