
  #
  # json.set! @rsvp.event.id do
  #   json.extract! @rsvp.event, :id, :name, :host_id, :address, :date, :hour, :information, :occured, :location_id
  #   json.set! :host do
  #     json.extract! @rsvp.event.host, :id, :name, :img_url
  #   end
  #   json.set! :guest_list do
  #     @rsvp.event.guests.pluck(:id)
  #   end
  # end
