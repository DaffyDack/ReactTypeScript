import React, { Component } from 'react';

class Form extends Component<{}, {}> {

    handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.currentTarget)
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Submit!!')
    }
    handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
        console.log('Copy!')
    }
    render() {
        return (
            <form 
                onSubmit={this.handleSubmit}
            >
                <label>
                    Simple text:
                    <input
                        onFocus={this.handleFocus}
                        onCopy={this.handleCopy}
                        type="text"
                        name='text'
                    />
                    <button type='submit'>
                        Submit
                    </button>
                </label>
            </form>
        )
    }
}

export default Form