@arenas.each do |arena|
    json.set! arena.id do
        json.partial! "/api/arenas/arena", arena: arena
    end
end