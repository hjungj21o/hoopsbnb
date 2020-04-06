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
