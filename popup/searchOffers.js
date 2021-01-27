const searchBtn = document.getElementById('search');
const allOffers = {
  pracujpl: {
    offersFetched: false,
    offers: []
  },
  nofluffjobs: {
    offersFetched: false,
    offers: []
  }
}

const selectedLocation = document.getElementById('location-select');
const selectedLanquage = document.getElementById('lanquage-select');

const pracujplBtn = document.getElementById('pracujpl-btn');
const nofluffjobsBtn = document.getElementById('nofluffjobs-btn');

const offersContainer = document.getElementById('offers-container');

function displayOffers(pageName){
  const offersList = document.createElement('ul');
  offersList.classList.add(pageName+'-list');

  offersContainer.appendChild(offersList);
  for(let i=0; i<allOffers[pageName].offers.length; i++){
    const offerItem = document.createElement('li');
    offerItem.innerHTML = "<a href="+allOffers[pageName].offers[i].offerUrl+" target='/_blank/' />"+
                              "<div class='offer-item-wrapper'>"+
                                "<div class='offer-image-wrapper'><img src="+allOffers[pageName].offers[i].imageUrl+" /></div>"+
                                "<p>"+
                                  allOffers[pageName].offers[i].offerName
                                +"</p>"
                              +"<div>"
    offersList.appendChild(offerItem);
  }
}



if(localStorage.getItem('lanquage')){
  selectedLanquage.value=localStorage.getItem('lanquage');
}else{
  selectedLanquage.value='javascript';
}
if(localStorage.getItem('location')){
  selectedLocation.value=localStorage.getItem('location');
}else{
  selectedLocation.value='krakow';
}


searchBtn.addEventListener('click', () => {
  localStorage.setItem('location', selectedLocation.value);
  localStorage.setItem('lanquage', selectedLanquage.value);
  allOffers.pracujpl.offersFetched = false;
  allOffers.nofluffjobs.offersFetched = false;
  window.open("https://www.pracuj.pl/praca/"+selectedLanquage.value+";kw/"+selectedLocation.value+";wp?rd=30","_blank", 'width=1, height=1');
  window.open("https://nofluffjobs.com/pl/jobs/"+selectedLocation.value+"/"+selectedLanquage.value,"_blank", 'width=100, height=100');
});
pracujplBtn.addEventListener('click', () => {
  if(document.querySelector('.pracujpl-list') && document.querySelector('.nofluffjobs-list')){
    document.querySelector('.pracujpl-list').style.display = 'block';
    document.querySelector('.nofluffjobs-list').style.display = 'none';
    pracujplBtn.classList.add('active');
    nofluffjobsBtn.classList.remove('active');
  }
})
nofluffjobsBtn.addEventListener('click', () => {
  if(document.querySelector('.pracujpl-list') && document.querySelector('.nofluffjobs-list')){
    document.querySelector('.pracujpl-list').style.display = 'none';
    document.querySelector('.nofluffjobs-list').style.display = 'block';
    pracujplBtn.classList.remove('active');
    nofluffjobsBtn.classList.add('active');
  }
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      allOffers[request.pageName].offersFetched = true;
      allOffers[request.pageName].offers = request.offers;
      console.log(allOffers)
      sendResponse({info: 'data fetched'});
      displayOffers([request.pageName]);
      if(allOffers.pracujpl.offersFetched && allOffers.nofluffjobs.offersFetched){
        document.querySelector('.nofluffjobs-list').style.display = 'none';
        pracujplBtn.children[1].innerHTML = allOffers.pracujpl.offers.length;
        nofluffjobsBtn.children[1].innerHTML = allOffers.nofluffjobs.offers.length;
        pracujplBtn.classList.add('active');
      }
    }
);
