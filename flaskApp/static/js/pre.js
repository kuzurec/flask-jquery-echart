(function (func) {
    $.ajax({
        url: "/get_data",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data)
        }
    });
})(function (data) {
   var container = document.getElementById("container");
   container.innerHTML=JSON.stringify(data["series_data"];
});