class Video extends React.Component {
  render () {
    let showItem = this.props.videos.map((video) => {
      console.log('video', video.course_id)
      let path = '/courses/' + video.course_id + '/videos/' + video.id
      return (
        <div className='ui message'>
          <div className='header'>
            <div className='header'><a href={path} >{video.title}</a></div>
            <div className='description'>
              {video.description}
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        {showItem}
      </div>
    )
  }
}
