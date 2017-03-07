require 'test_helper'

class Teacher::CoursesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get teacher_courses_index_url
    assert_response :success
  end

  test "should get show" do
    get teacher_courses_show_url
    assert_response :success
  end

  test "should get new" do
    get teacher_courses_new_url
    assert_response :success
  end

end
