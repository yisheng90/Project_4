class DashboardSidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current_tab: this.props.current_tab,
      style: {
        display: 'none',
        zIndex: 99999
      }
    }
  }
  handleChangeUserTab (e, prompt) {
    this.setState({
      current_tab: prompt
    })
  }
  handleDashBoard () {
    let style = this.state.style
    if (style.display === 'none') {
      style.display = 'block'
    } else {
      style.display = 'none'
    }
    this.setState({
      style: style
    })
  }
  handleCloseDashBoard () {
    let style = this.state.style
    style.display = 'none'
    this.setState({
      style: style
    })
  }
  render () {
    return (
      <div>
        <div className='ui menu_toggle button black' onClick={this.handleDashBoard.bind(this)} >
          <h1><i className='user icon' /></h1>
        </div>
        <div className='ui vertical menu dashboard' style={this.state.style} >
          <div className='item'>
            <div className='header'>Profile</div>
            <div className='menu'>
              {this.state.current_tab === 'profile' && <a href='/teacher/dashboard' className='item active'>My Profile</a>}
              {this.state.current_tab !== 'profile' && <a href='/teacher/dashboard' className='item '>My Profile</a>}
            </div>
          </div>
          <div className='item'>
            <div className='header'>Courses</div>
            <div className='menu'>
              {this.state.current_tab === 'courses' && <a href='/teacher/courses' className='item active'>Courses</a>}
              {this.state.current_tab !== 'courses' && <a href='/teacher/courses' className='item'>Courses</a>}
              {this.state.current_tab === 'newCourses' && <a href='/teacher/courses/new' className='item active'>New Course</a>}
              {this.state.current_tab !== 'newCourses' && <a href='/teacher/courses/new' className='item '>New Course</a>}
            </div>
          </div>
          <div className='item'>
            <div className='header'>Support</div>
            <div className='menu'>
              <a className='item'>New Question</a>
              <a className='item'>FAQs</a>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
