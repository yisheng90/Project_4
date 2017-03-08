class Lessons extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      isLoading: true,
      teacher: ''
    }
  }
  componentDidMount () {
    console.log('component', this.props.course.id)

    $.ajax({
      method: 'GET',
      url: '/courses/' + this.props.course.id + '/videos',
      success: (res) => {
        alert(res)
        this.setState({
          videos: res.videos,
          isLoading: false,
          teacher: res.teacher
        })
      }
    })
  }
  render () {
    let showItem = <Video videos={this.state.videos} teacher={this.state.teacher}/>
    if (this.state.isLoading === true) {
      showItem = () => {
        return (
          <div className='ui segment'>
            <div className='ui active dimmer'>
              <div className='ui text loader'>Loading</div>
            </div>
            <p />
          </div>
        )
      }
    }

    return (
      <div>
        {showItem}
      </div>
    )
  }
}
