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

 $("#randomButton").click(function (e) {
    
   
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
            
          
        
        
        var enteiID = value  ;
        $('#pokemonList').append('' +
        '<tr>' +
        '<td width="50%" style="border-right: 1px solid black; padding-left: 6px; vertical-align: top;">' +
        '<h2 style ="text-transform: capitalize;">'+ name +'</h2>' +
        'ID: ' + enteiID +
        '</td>' +
        '<td>' +
        '<img height="96px" width="96px" src="'+ items.front_default  + '"alt=""/>' +
        '</td>' +
        '<td>' +
        '<img id=\"pokemon'+ enteiID +'\" height="96px" width="96px" src="X.png" alt="" style="cursor: pointer;"/>' +
        '</td>' +
        '</tr>' +
        '');
        
          $('#pokemon'+enteiID).attr('onclick', "deleteRow('pokemon244')");
        
          }
        });
        function deleteRow(passTheId) {
        $('#' + passTheId).parent().parent().remove();
    }
    });