// __tests__/displayUser-test.js
'use strict';

require('litespeed.js');
require('ls-service-date');

test('date to string format 1', () => {
    expect(function () {
        let date = window.ls.container.get('date');
        return date.timetostr('Y-m-d H:i:s', 1564947784);
    }()).toEqual('2019-08-04 22:43:04');
});

test('string to date format 1', () => {
    expect(function () {
        let date = window.ls.container.get('date');
        return date.strtotime('2019-08-04 22:43:04');
    }()).toEqual(1564947784);
});