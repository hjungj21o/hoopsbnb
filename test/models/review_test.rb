# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  arena_id   :integer          not null
#  rating     :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
