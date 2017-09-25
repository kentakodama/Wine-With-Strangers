  @locations.each do |location|
    json.location_details do
      json.set! location.id do
        json.extract! location, :id, :name, :img_url
        json.event_ids location.events.pluck(:id)
      end
    end
    json.event_details do
      location.events.each do |event|
        json.set! event.id do
          json.extract! event, :id, :name, :host_id, :address, :time, :information, :occured
        end
      end
    end
  end


#above creates the below json format
#in one ajax request get all infor from different tables
#then, send it to reducers. Reducers will split it up and update the appropriate slice of state
#slices will then combine

  #
  # {
  # 	"location_details": {
  # 		"1": {
  # 			"id": 1,
  # 			"name": "San Francisco",
  # 			"event_ids": [1]
  # 		},
  # 		"2": {
  # 			"id": 2,
  # 			"name": "Tokyo",
  # 			"event_ids": [2]
  # 		},
  # 		"3": {
  # 			"id": 3,
  # 			"name": "Boston",
  # 			"event_ids": [3]
  # 		},
  # 		"4": {
  # 			"id": 4,
  # 			"name": "Kampot",
  # 			"event_ids": []
  # 		}
  # 	},
  # 	"event_details": {
  # 		"1": {
  # 			"id": 1,
  # 			"name": "Halloween",
  # 			"host_id": 1,
  # 			"address": "160 spear st.",
  # 			"time": "2007-11-19T08:37:48.000Z",
  # 			"information": "this is a party",
  # 			"occured": true
  # 		},
  # 		"2": {
  # 			"id": 2,
  # 			"name": "christmas",
  # 			"host_id": 2,
  # 			"address": "fuchu",
  # 			"time": "2007-11-19T08:37:48.000Z",
  # 			"information": "this is a party",
  # 			"occured": false
  # 		},
  # 		"3": {
  # 			"id": 3,
  # 			"name": "boston marathon",
  # 			"host_id": 3,
  # 			"address": "boston commons",
  # 			"time": "2007-11-19T08:37:48.000Z",
  # 			"information": "this is a party",
  # 			"occured": false
  # 		}
  # 	}
  # }
  #
  #
  #
  #
