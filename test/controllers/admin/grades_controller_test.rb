require 'test_helper'

class Admin::GradesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get admin_grades_new_url
    assert_response :success
  end

end
