class Api::LocationsController < ApplicationController

  def index
    @locations = Location.all
    render json: @locations
  end

  def show
    @location = Location.find_by(params[:id])
    if @location
      render json: @location
    end

  end

  def create
    @location = Location.new(locations_params)
    if @location.save
      render json: @location.errors.full_messages, status: 422
    end
  end

  def locations_params
    params.require(:location).permit(:name)
  end


end
