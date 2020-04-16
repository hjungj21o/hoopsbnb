json.bookings do 
    @bookings.each do |booking|
        json.set! booking.id do
            json.partial! '/api/bookings/booking', booking: booking
        end
    end
end

json.arenas do 
    @bookings.each do |booking|
        json.set! booking.arena_id do
            json.partial! 'api/arenas/arena', arena: booking.arena
            json.photoUrls booking.arena.photos.map { |file| url_for(file)}
        end
    end
end