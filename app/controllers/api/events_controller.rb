class Api::EventsController < ApplicationController


  def show
    @event = Event.find(params[:id])
    if @event
      render :show
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

  def update
    @event = Event.find(params[:id])

    guests = params["event"]["guests"]
    if !guests || guests.length == 1 && guests.first == ""
      guests = []
    else
      guests.map!(&:to_i)
    end
    @event.guest_ids = guests
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 403
    end
  end

  def index
    @events = Event.all
  end

  def user_events
    @events = Event.all.select do |event|
      current_user.events.include?(event) || current_user.hosted_events.include?(event)
    end
    if @events
      render :index
    end
  end

  def event_params
      params.require(:event).permit(:name, :host_id, :address, :date, :hour, :information, :occurred, :location_id, :guests)
  end
end
