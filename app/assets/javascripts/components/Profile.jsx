class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      dob: this.props.user.dob
    }
  }
  handleNameChange (e) {
    this.setState({
      name: e.target.value
    })
  }
  handleEmailChange (e) {
    this.setState({
      email: e.target.value
    })
  }
  handleDOBChange (e) {
    this.setState({
      dob: e.target.value
    })
  }
  render () {
    let profilePrompt = this.state
    return (
      <div className='ten wide column'>
        <h1>My Profile</h1>
        <form className='ui form'>
          <div className='field'>
            <label>Name</label>
            <input name='name' value={this.state.name} onChange={this.handleNameChange.bind(this)} />
          </div>

          <div className='field'>
            <label>Email</label>
            <input type='email' name='email' value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
          </div>

          <div className='field'>
            <label>Date of Birth</label>
            <input type='date' name='email' value={this.state.dob} onChange={this.handleDOBChange.bind(this)} />
          </div>

          <button className='ui button' type='submit' onClick={(e, prompt) => this.props.handleProfileUpdate(e, profilePrompt)}>Submit</button>
        </form>

      </div>
    )
  }

}
