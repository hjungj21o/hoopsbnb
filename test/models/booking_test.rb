# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  hooper_id  :integer          not null
#  arena_id   :integer          not null
#  start_time :string           not null
#  end_time   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  start_date :date
#  end_date   :date
#  hoopers    :integer
#
require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
