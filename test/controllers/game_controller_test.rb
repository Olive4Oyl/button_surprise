require 'test_helper'

class GameControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get game_index_url
    assert_response :success
  end

  test "should get no--test-framework" do
    get game_no--test-framework_url
    assert_response :success
  end

end
