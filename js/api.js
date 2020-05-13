 
var urlToGetAllOpenBugs = "https://api.github.com/repos/The-GeoStack-Project/The-GeoStack-Project.github.io/issues";

$(document).ready(function () {
    $.getJSON(urlToGetAllOpenBugs, function (allIssues) {
        $("#text").append("found " + allIssues.length + " issues</br>");
        $.each(allIssues, function (i, issue) {
            $("#text")
                .append("<b>" + issue.number + " - " + issue.title + "</b></br>")
                .append("created at: " + issue.created_at + "</br>")
                .append(issue.body + "</br></br></br>");
        });
    });
});
