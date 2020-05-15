class Api::BookingsController < ApplicationController

    def index
        @bookings = User.find(params[:user_id]).bookings
    end

    def show
        @booking = Booking.find(params[:id])
    end

    def create
        @booking = Booking.new(booking_params)

        if @booking.save
            render :show
        else
            render json: ["Could not be reserved"], status: 422
        end
    end

    def update
        @booking = Booking.find(params[:id])

        if @booking.update(booking_params)
            render :show
        else
            render json: ["Booking could not be updated"], status: 422
        end
    end

    def destroy
        @booking = Booking.find(params[:id])

        if @booking
            @booking.delete
            render :show
        else
            render json: ["Booking could not be deleted at this time"], status: 422
        end
    end



    private

    def booking_params
        params.require(:booking).permit(:hooper_id, :arena_id, :start_date, :end_date, :hoopers)
    end
end
