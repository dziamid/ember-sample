var App = Em.Application.create();

App.MyView = Em.View.extend({
    mouseDown: function () {
        window.alert("hello world!");
    }
});

App.ButtonView = Em.View.extend({
    tagName: 'button',
    didInsertElement: function () {
        this.$().button();
    }
});

App.Tags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
];

App.InputView = Em.View.extend({
    tagName: 'input',
    didInsertElement: function () {
        this.$().autocomplete({
            source: App.Tags
        });
    }
});

App.CustomView = Em.View.extend({
    templateName: 'custom-1',
    value: 'Bla'
});

var twigTemplate1 = twig({
    data: 'The {{ value }} is a lie.'
});

Ember.TEMPLATES["custom-1"] = function (context) {
    return twigTemplate1.render(context);
};