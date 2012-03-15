
var App = Em.Application.create({
    ready: function () {
        App.get('People').set('content', App.store.findAll(App.Person));
        App.store.createRecord(App.Person, {age: 50, name: 'Paul'});
        App.store.createRecord(App.Person, {age: 25, name: 'Paul'});
    }
});

App.store = DS.Store.create({
    adapter: DS.fixtureAdapter
});

App.Person = DS.Model.extend({
    age: DS.attr('string'),
    name: DS.attr('string'),
    desc: function () {
        return this.get('name') + ' is ' + this.get('age') + ' years old';
    }.property('name', 'age')

});

App.Person.FIXTURES = [
    {age: 26, name: 'Dziamid'},
    {age: 30, name: 'Julia'},
    {age: 18, name: 'Polina'}
];


App.set('People', Ember.ArrayProxy.create({
    content: []
}));

App.set('OldPeople', App.store.filter(App.Person, function (data) {
    return data.age > 29;
}));

