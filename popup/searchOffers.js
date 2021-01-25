const searchBtn = document.getElementById('search');
const allOffers = {
  pracujpl: [],
  justjoin: [],
  nofluffjobs: []
}

searchBtn.addEventListener('click', () => {
    window.open("https://www.pracuj.pl/praca/"+programmingLanquage+";kw/"+locationName+";wp?rd=30","_blank", 'width=1, height=1');
    window.open("https://justjoin.it/"+locationName+"/"+programmingLanquage,"_blank", 'width=1, height=1');
    
});
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      allOffers[request.pageName] = request.offers;
      console.log(allOffers);
    }
);
