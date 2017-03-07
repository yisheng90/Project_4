require 'test_helper'

class Teacher::VideosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get teacher_videos_index_url
    assert_response :success
  end

  test "should get show" do
    get teacher_videos_show_url
    assert_response :success
  end

  test "should get new" do
    get teacher_videos_new_url
    assert_response :success
  end

  test "should get edit" do
    get teacher_videos_edit_url
    assert_response :success
  end

end
