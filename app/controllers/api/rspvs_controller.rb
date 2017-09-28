class Api::RspvsController < ApplicationController

  def create

    @rsvp = Rsvp.new(rsvp_params)
    @rsvp.attendee_id = current_user.id

    if @rsvp.save
      render :show
    end

  end

  #how to destroy if I cant find by id how to get id?
  def destroy
    @rsvp = Rsvp.all.select do |rsvp|
      rsvp.attendee_id == current_user.id && rsvp.event_id == params.event_id
    end

    @rsvp.destroy!
    render :show
    
  end

  def rsvp_params
    params.require(:rsvp).permit(:event_id, :attendee_id)
  end
end
