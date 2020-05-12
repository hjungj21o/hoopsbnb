# == Schema Information
#
# Table name: arenas
#
#  id          :bigint           not null, primary key
#  address     :string           not null
#  city        :string           not null
#  gm_id       :integer          not null
#  description :text             not null
#  price       :integer          not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  name        :string           not null
#
require 'test_helper'

class ArenaTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
