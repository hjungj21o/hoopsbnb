class Api::ArenasController < ApplicationController

    def index
        @arenas = Arena.all
    end

    def show
        @arena = Arena.find(params[:id])
    end

    def create
        @arena = Arena.new(arena_params)

        if @arena.save
            render :show
        else
            render json: @arena.errors.full_messages, status: 400 
        end
    end

    private

    def arena_params
        params.require(:arenas).permit(:name, :address, :city, :gm_id, :description, :price, :lat, :lng)
    end
end
