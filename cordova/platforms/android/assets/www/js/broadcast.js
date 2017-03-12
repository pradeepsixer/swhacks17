/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 var offinterval = null;
 var la = 0;
 var lo = 100;
var bc = {
    // Application Constructor
	
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
	

	
		initBroadcast: function()
                 {
					 
	 
					 
					


 offinterval = window.setInterval(function(){
  (navigator.geolocation.getCurrentPosition(onSuccess, onError))
}, 1000);	

  		 function onSuccess(position) {
			 
			 
        //alert('Latitude: '          + position.coords.latitude          + '\n' +
        //      'Longitude: '         + position.coords.longitude         + '\n' +
        //      'Altitude: '          + position.coords.altitude          + '\n' +
        //      'Accuracy: '          + position.coords.accuracy          + '\n' +
        //      'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
        //      'Heading: '           + position.coords.heading           + '\n' +
        //      'Speed: '             + position.coords.speed             + '\n' +
        //      'Timestamp: '         + position.timestamp                + '\n');
		
	var newMessage = {
    "Latitude":  position.coords.latitude,
	"Longitude": position.coords.longitude,
	"Altitude": position.coords.altitude,
	"altitudeAccuracy": position.coords.altitudeAccuracy
	}
	
	            
    			
        try {
             {
               
                var urlTS = "http://ec2-35-165-186-128.us-west-2.compute.amazonaws.com:8080/send?lt="+position.coords.latitude+"+lg="+position.coords.longitude+"+at="+position.coords.altitude;
			
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", urlTS, true);                  
                          
				xmlhttp.timeout = 200;
				xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
				console.log("received " + xmlhttp.responseText);
				}
				}

                xmlhttp.send();
                var nextts = xmlhttp.responseText;
             }
                
             }
         catch (err) {
           console.log(err);
				};


		
		
		
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

					
    },
	
	
	
	
	clearint:function()
	{
	 window.clearInterval(offinterval);	
	}
		 
				 				 				 
};

bc.initialize();