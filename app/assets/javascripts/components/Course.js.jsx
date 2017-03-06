class Course extends React.Component {
  render () {
    let courses = this.props.courses.map((course) => {
      return (
        <div className='card'>
          <div className='content'>
            <div className='header'>{course.title }</div>
            <div className='meta'>Category</div>
            <div className='description'>
              { course.description }
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className='twelve wide column'>
        <h1>My Courses</h1>
        <div className='ui cards'>
          {courses}
        </div>
      </div>
    )
  }
}
