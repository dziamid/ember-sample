
var App = Em.Application.create();
App.store = DS.Store.create({});

App.Actor = DS.Model.extend({
    age: DS.attr('string'),
    name: DS.attr('string'),
    description: function () {
        return this.get('name') + ' is ' + this.get('age') + ' years old';
    }.property('name', 'age')

});

App.set('actor', App.store.createRecord(App.Actor, {age: 50, name: 'Actor'}));
App.set('singer', App.store.createRecord(App.Actor, {age: 45, name: 'Singer'}));

App.set('people', Ember.ArrayProxy.create({
    content: [ App.get('actor'), App.get('singer')]
}));

App.set('people2', DS.ModelArray.create({
    type: App.Actor,
    store: App.store,
    content: [ App.get('actor'), App.get('singer')]
}));


