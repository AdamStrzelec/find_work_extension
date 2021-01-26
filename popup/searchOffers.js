const searchBtn = document.getElementById('search');
const allOffers = {
  pracujpl: [],
  nofluffjobs: []
}

searchBtn.addEventListener('click', () => {
    window.open("https://www.pracuj.pl/praca/"+programmingLanquage+";kw/"+locationName+";wp?rd=30","_blank", 'width=1, height=1');
    window.open("https://nofluffjobs.com/pl/jobs/"+locationName+"/"+programmingLanquage,"_blank", 'width=100, height=100');
});


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      allOffers[request.pageName] = request.offers;
      console.log(allOffers)
      sendResponse({info: 'data fetched'});
    }
);
