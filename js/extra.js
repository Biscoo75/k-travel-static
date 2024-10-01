    document.addEventListener("DOMContentLoaded", function() {
        // Initialize the intlTelInput instance for the phone input
        var input1 = document.querySelector("#mobile");
        var iti1 = window.intlTelInput(input1, {
            initialCountry: "auto",
            geoIpLookup: function(callback) {
                fetch("https://ipapi.co/json")
                    .then(function(res) { return res.json(); })
                    .then(function(data) { callback(data.country_code); })
                    .catch(function() { callback("us"); });
            },
        });

        // Handle form submission
        
    });
