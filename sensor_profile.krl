ruleset sensor_profile {
    meta {
        shares get_profile
        provides get_profile
    }
    
    global {
        get_profile = function() {
            {
                "name": ent:name,
                "location": ent:location,
                "high": ent:high,
                "number": ent:number
            }
        }
    }

    rule update_sensor_profile {
        select when sensor profile_updated

        pre {
            sensor_name = event:attr("name").defaultsTo(ent:name)
            sensor_location = event:attr("location").defaultsTo(ent:location)
            sensor_high = event:attr("high").defaultsTo(ent:high)
            sensor_phone_number = event:attr("number").defaultsTo(ent:number)
        }
        
        always {
            sensor_name.klog("NAME");
            ent:name := sensor_name;
            ent:location := sensor_location;
            ent:high := sensor_high;
            ent:number := sensor_phone_number;
        }
    }
}
