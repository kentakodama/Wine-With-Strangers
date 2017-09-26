
  json.location_details do
    json.set! @location.id do
      json.extract! @location, :id, :name, :img_url
      json.event_ids @location.events.pluck(:id)
    end
  end
  json.event_details do
    @location.events.each do |event|
      json.set! event.id do
        json.extract! event, :id, :name, :host_id, :address, :time, :information, :occured, :location_id
      end
    end
  end
