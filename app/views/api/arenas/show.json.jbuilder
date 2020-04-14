json.extract! @arena, :id, :name, :address, :city, :gm_id, :description, :price, :lat, :lng
json.photoUrls @arena.photos.map { |file| url_for(file) }