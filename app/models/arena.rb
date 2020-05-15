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
class Arena < ApplicationRecord
    validates :name, :address, :city, :description, :price, :lat, :lng, presence: true

    #have a super function maybe? 

    def self.in_bounds(bounds) 
        Arena.where([
            "lat < ? AND lat > ? AND lng > ? AND lng < ?", 
            bounds[:northEast][:lat], 
            bounds[:southWest][:lat], 
            bounds[:southWest][:lng], 
            bounds[:northEast][:lng] 
        ])
    end

    def self.search_by_keyword(keyword)
        match = "%#{keyword}%"
        Arena.where("city ILIKE ?", match)
            .or(Arena.where("address ILIKE ?", match))
            .or(Arena.where("description ILIKE ?", match))
            .or(Arena.where("name ILIKE ?", match))
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
