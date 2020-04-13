class Arena < ApplicationRecord
    validates :name, :address, :gm_id, :city, :description, :price, :lat, :lng, presence: true

    def self.in_bounds(bounds)
        # google map bounds will be in the following format:
        # {
        #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
        #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
        # }
        Arena.where([
            "lat < ? AND lat > ? AND lng > ? AND lng < ?", 
            bounds[:northEast][:lat], 
            bounds[:southWest][:lat], 
            bounds[:southWest][:lng], 
            bounds[:northEast][:lng] 
        ])
    end

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

    has_many_attached :photos

end
