import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }
    handlePick = () => {
        const optionIdx = Math.floor(Math.random() * this.state.options.length);
        const newOption = this.state.options[optionIdx];
        this.setState(() => ({selectedOption: newOption}));
    }
    handleClearOption = () => this.setState(() => ({selectedOption: undefined}));
    handleAddOption = (newOption) => {
        if (!newOption) {
            return 'Please type something first.'
        } else if (this.state.options.indexOf(newOption) > -1) {
            return 'Item already exists.'
        }
        this.setState(prevState => ({options: [...prevState.options, newOption]}));
    }
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            };
        } catch (err) {
            //Do nothing at all
        }
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        };
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Options 
                        options={this.state.options} 
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption = {this.handleDeleteOption}
                    />
                    <AddOption 
                        options={this.state.options} 
                        handleAddOption={this.handleAddOption}
                    />
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearOption={this.handleClearOption}    
                />
            </div>
        )       
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// };