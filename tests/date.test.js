// __tests__/displayUser-test.js
'use strict';

require('litespeed.js');
require('ls-service-date');

test('date to string format 1', () => {
    expect(function () {
        let date = window.ls.container.get('date');
        return date.timetostr('Y-m-d H:i:s', 1564949177 - parseInt(date.timetostr('Z')));
    }()).toEqual('2019-08-04 20:06:17');
});

test('string to date format 1', () => {
    expect(function () {
        let date = window.ls.container.get('date');
        return date.timezone(date.strtotime('2019-08-04 20:06:17'));
    }()).toEqual(1564949177);
});