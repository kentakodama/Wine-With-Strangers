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
    @event = current_user.hosted_events.new(event_params)

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
      params.require(:event).permit(:name, :host_id, :address, :date, :hour, :information, :occurred, :location_id)
  end
end
