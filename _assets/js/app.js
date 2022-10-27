// Add your custom javascript here
console.log("Hi from Federalist");

// Add a new class for all of the external anchor tags
$("a").each(function(index, element) {
    if(!$(element).attr("href").startsWith('https://www.evaluation.gov' && 'javascript:void(0)') 
        && !$(element).hasClass('usa-link--external')
        && this.host !== location.host){
        if ($(element).hasClass('usa-link--external-white'))
            $(element).addClass("usa-link--external-white");
        else
            $(element).addClass("usa-link--external");
        }
});