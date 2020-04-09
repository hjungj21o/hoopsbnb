class Arena < ApplicationRecord
    validates :name, :address, :gm_id, :city, :description, :price, :lat, :lng, presence: true
    

    belongs_to :gm,
        primary_key: :id,
        foreign_key: :gm_id,
        class_name: :User

    has_many :bookings,
        primary_key: :id,
        foreign_key: :arena_id,
        class_name: :Booking
    
    has_many :reviews,
        primary_key: :id,
        foreign_key: :arena_id,
        class_name: :Review

end
