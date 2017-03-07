

class CourseDetails extends React.Component {
  render () {
    return (
      <div className='ui grid'>
        <div className='row'>
          <div className='ui three item menu'>
            <Link to='/questions'>Questions</Link>
            <a className='item active'>Reviews</a>
            <a className='item'>Upcoming Events</a>
          </div>
        </div>
      </div>
    )
  }
}
