class Api::EventsController < ApplicationController


  def show
    @event = Event.find(params[:id])
    if @event
      render :show
    else
      render json: @event.errors.full_messages
    end
  end

  def create
    @event = Event.new(event_params)
    @events = Event.all
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def index
    @events = Event.all
  end

  def event_params
      params.require(:event).permit(:host_id, :address, :time, :information, :occurred, :location_id)
  end
end
