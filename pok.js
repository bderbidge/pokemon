
    $("#searchButton").click(function (e) {
        var value = Math.floor((Math.random() * 721) + 1);
        // var value = $("#searchStack").val();
        console.log(value);
        e.preventDefault();
        var myurl = "http://pokeapi.co/api/v2/pokemon/";
        myurl += value;
        myurl += "/";
        console.log(myurl);
        $.ajax({
            url: myurl,
            dataType: "json",
            success: function (parsed_json) {
                var items = parsed_json['sprites'];
                var everything;
                var everyname;
                var name = parsed_json['name'];
                var id = parsed_json['id'];
                everything += "<img src=" + items.front_default + ">";
                everyname += "<h1 style ='text-transform: capitalize;'>" + name + " ID: " + id + "</h1>";
                $("#searchResults").html(everything);
                $("#nameResult").html(everyname);
            }
        });
    });
