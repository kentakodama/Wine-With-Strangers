class Api::LocationsController < ApplicationController

  def index
    @locations = Location.all
    render :index #must indirectly by passing it through the view here
  end

  def show
    @location = Location.find(params[:id])
    @events = @location.events
    if @location
      render :show
    end

  end

  def create
    @location = Location.new(locations_params)
    if @location.save
      render :show
    else
      render json: @location.errors.full_messages, status: 422
    end
  end

  def locations_params
    params.require(:location).permit(:name)
  end


end
