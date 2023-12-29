import React, {Component} from "react";
import {Button, Container, Form} from "react-bootstrap";

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    formSubmit(event) {
        event.preventDefault();
        console.log(this.state.selectedOption)
    }

    render() {
        return (
            <Container className={"mb-3"}>
                <Form onSubmit={this.formSubmit} style={{"backgroundColor": "green"}}>
                    <Form.Check
                        type="radio"
                        value="Male"
                        label={"Male"}
                        checked={this.state.selectedOption === "Male"}
                        onChange={this.onValueChange}
                    />
                    <Form.Check
                        type="radio"
                        value="Female"
                        label={"Female"}
                        checked={this.state.selectedOption === "Female"}
                        onChange={this.onValueChange}
                    />
                    <Form.Check
                        type="radio"
                        value="Other"
                        label="Other"
                        checked={this.state.selectedOption === "Other"}
                        onChange={this.onValueChange}/>
                    <div>
                        Selected option is: {this.state.selectedOption}
                    </div>
                    <Button variant="primary" type={"submit"}>Submit</Button>{' '}
                </Form></Container>
        );
    }
}

export default MyForm;