'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: []
        };
        _this.handleClearOptions = _this.handleClearOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                };
            } catch (err) {
                //Do nothing at all
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            };
        }
    }, {
        key: 'handleClearOptions',
        value: function handleClearOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var optionIdx = Math.floor(Math.random() * this.state.options.length);
            alert('You should do ' + this.state.options[optionIdx]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(newOption) {
            if (!newOption) {
                return 'Please type something first.';
            } else if (this.state.options.indexOf(newOption) > -1) {
                return 'Item already exists.';
            }
            this.setState(function (prevState) {
                return { options: [].concat(_toConsumableArray(prevState.options), [newOption]) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of a computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleClearOptions: this.handleClearOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    options: this.state.options,
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// IndecisionApp.defaultProps = {
//     options: []
// };

var Header = function Header(props) {
    return React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        { id: 'options' },
        React.createElement(
            'button',
            { onClick: props.handleClearOptions },
            'Remove All'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        React.createElement(
            'p',
            null,
            'You have ',
            props.options.length,
            ' option(s).'
        ),
        props.options && props.options.map(function (option) {
            return React.createElement(Option, { key: option, info: option, handleDeleteOption: props.handleDeleteOption });
        })
    );
};

var Option = function Option(props) {
    var handleDelete = function handleDelete() {
        return props.handleDeleteOption(props.info);
    };
    return React.createElement(
        'label',
        { htmlFor: props.info },
        ' ',
        props.info,
        React.createElement('input', { name: 'options', id: props.info, type: 'radio' }),
        React.createElement(
            'button',
            {
                name: props.info,
                onClick: handleDelete
            },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleFormInput = _this2.handleFormInput.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleFormInput',
        value: function handleFormInput(e) {
            e.preventDefault();
            var newOption = e.target.elements.newOption.value.trim();
            var error = this.props.handleAddOption(newOption);
            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.newOption.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { name: 'newOption', onSubmit: this.handleFormInput },
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'label',
                    { htmlFor: 'newOption' },
                    'Enter A New Option Here'
                ),
                React.createElement('br', null),
                React.createElement('input', { type: 'text', id: 'newOption', placeholder: 'your new option' }),
                React.createElement(
                    'button',
                    null,
                    'Add an option.'
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Name: ',
            props.name
        ),
        React.createElement(
            'p',
            null,
            'Age: ',
            props.age
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, { options: ['Land One', 'Chicken World'] }), document.getElementById('app'));
