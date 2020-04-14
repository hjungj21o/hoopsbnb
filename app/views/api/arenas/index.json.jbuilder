@arenas.each do |arena|
    json.set! arena.id do
        json.partial! "/api/arenas/arena", arena: arena
        json.photoUrls arena.photos.map { |file| url_for(file) }
    end
end