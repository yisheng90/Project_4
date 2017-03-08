class Video extends React.Component {
  render () {
    let showItem = this.props.videos.map((video) => {
      console.log('video', video.course_id)
      let path = '/courses/' + video.course_id
      return (
        <div class='card'>
          <div class='content'>
            <div class='header'><a href={path} >{video.title}</a></div>
            <div class='meta'>{this.props.teacher.name}</div>
            <div class='description'>
              {video.description}
            </div>
          </div>
        </div>
      )
    })
    return (
      <div class='ui cards'>
        {showItem}
      </div>
    )
  }
}
