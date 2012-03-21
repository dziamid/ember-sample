
var App = Em.Application.create({
    ready: function () {
        App.get('People').set('content', App.store.findAll(App.Person));
        App.get('OldPeople').set('content', App.store.filter(App.Person, App.get('OldPeople').filterFunction));
        App.store.createRecord(App.Person, {age: 50, name: 'Paul'});
        App.store.createRecord(App.Person, {age: 25, name: 'Paul'});

        App.get('SelectedPerson').set('content', App.store.find(App.Person, 103));

        App.get('SelectedPerson').addTask(App.store.createRecord(App.Task, { title: 'Play some pool!' }));

    }
});

App.store = DS.Store.create({
    adapter: DS.fixtureAdapter,
    revision: 3
});

App.Person = DS.Model.extend({
    age: DS.attr('string'),
    name: DS.attr('string'),
    desc: function () {
        return this.get('name') + ' is ' + this.get('age') + ' years old';
    }.property('name', 'age'),
    tasks: DS.hasMany('App.Task')
});

App.Task = DS.Model.extend({
    title: DS.attr('string'),
    assignedTo: DS.hasMany('App.Person')
});

App.Person.FIXTURES = [
    {id: 101, age: 26, name: 'Dziamid', tasks: []},
    {id: 102, age: 30, name: 'Julia', tasks: [201]},
    {id: 103, age: 18, name: 'Polina', tasks: [202,203]}
];

App.Task.FIXTURES = [
    {id: 201, title: 'Make a website'},
    {id: 202, title: 'Repair a car'},
    {id: 203, title: 'Make breakfast'}
];


App.set('People', Ember.ArrayProxy.create({
    content: []
}));

App.set('OldPeople', Ember.ArrayProxy.create({
    content: [],
    filterFunction: function (data) {
        return data.get('age') > 49;
    }
}));

//TODO: move this to ObjectProxy when it is merged
App.set('SelectedPerson', Em.Object.create({
    content: [],
    desc: function () {
        return this.getPath('content.name') + ' is ' + this.getPath('content.age') + ' years old';
    }.property('content.name', 'content.age'),
    addTask: function (task) {
        console.log('Adding a task for selected person');
        return this.getPath('content.tasks').pushObject(task);
    }
}));



