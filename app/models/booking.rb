# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  hooper_id  :integer          not null
#  arena_id   :integer          not null
#  date       :string           not null
#  start_time :string           not null
#  end_time   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Booking < ApplicationRecord
    validates :date, :start_time, :end_time, presence: true

    belongs_to :hooper,
        primary_key: :id,
        foreign_key: :hooper_id,
        class_name: :User
    
    belongs_to :arena,
        primary_key: :id,
        foreign_key: :arena_id,
        class_name: :Arena

end
