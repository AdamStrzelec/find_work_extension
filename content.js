
function searchForPracujpl(){
    const offers = document.querySelectorAll('.offer');
    const offersArray = [];
    for(let i=0; i<offers.length; i++){
        if(offers[i].children[1].children[0].children[1].children[0].className==="offer-details__wrapper"){
            offersArray.push({
                offerName: offers[i].children[1].children[0].children[1].children[0].children[0].children[0].innerHTML,
                offerUrl: offers[i].children[1].children[0].children[1].children[0].children[0].children[0].href,
                imageUrl: offers[i].children[1].children[0].children[0].children[0].children[0].src
            })
        }else{
            offersArray.push({
                offerName: offers[i].children[1].children[0].children[1].children[0].children[0].innerHTML,
                offerUrl: offers[i].children[1].children[0].children[1].children[0].children[0].href,
                imageUrl: offers[i].children[1].children[0].children[0].children[0].children[0].src
            })
        }
    }
    chrome.runtime.sendMessage(
        {
            pageName: 'pracujpl',
            offers: offersArray
        }
    );
}


function searchOffers(){
    if(window.location.href.includes("www.pracuj.pl")){
        searchForPracujpl();
    }
    window.close();
}

searchOffers();


