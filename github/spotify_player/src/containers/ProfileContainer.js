import React, { Component } from 'react'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import Contact from '../components/Contact'

class ProfileContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      bio: '',
      contacts: []
    }
  }

  handleFullNameUpdate(e) {
    this.setState({
      fullName: e.target.value
    })
  }

  handleBioUpdate(e) {
    this.setState({
      bio:e.target.value
    })
  }

  // handleNameUpdate(e) {
  //   this.setState({
  //     contacts[id]: e.target.value
  //   })
  // }


  componentWillUpdate() {
    console.log(this.state)
  }

  componentDidMount() {
    console.log('yo')
  }

  render() {

    return (
      <div className='Profile'>
        <h1>Profile</h1>

        <Input label='Full Name' value={this.state.fullName} onUpdate={this.handleFullNameUpdate.bind(this)} />
        <TextArea label='Bio' value={this.state.bio} onUpdate={this.handleBioUpdate.bind(this)} />

        <h2>Contacts</h2>
        <Contact name='email' value='john@gmail.com' handleNameUpdate={this.handleNameUpdate} handleValueUpdate={this.handleValueUpdate} />
      </div>
    )
  }
}

export default ProfileContainer
