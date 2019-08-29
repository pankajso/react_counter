import React from 'react'

/* Import Components */

class CreateUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        phone: '',
        password: '',
        token: ''
      }
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }
  render() {
    return ()
  }
}
export default CreateUserForm;
