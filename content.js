// console.log("Chrome extension ready to do");
// alert('Hello')
const offers = document.querySelectorAll('.offer');
// console.log(offers[0].children[1].children[0].children[1].children[0].children[0].href);
let offersSearched;
console.log(window.location.href)
if(window.location.href==="https://www.pracuj.pl/praca/react;kw/krakow;wp?rd=30"){
    const offers = document.querySelectorAll('.offer');
    const offersArray = [];
    for(let i=0; i<offers.length; i++){
        offersArray.push({
            offerName: offers[i].children[1].children[0].children[1].children[0].children[0].innerHTML,
            offerUrl: offers[i].children[1].children[0].children[1].children[0].children[0].href
        })
    }
    chrome.runtime.sendMessage(
        {
            offersCount: offers.length,
            offers: offersArray
        }
        , function(response) {
        // console.log(response.farewell);
    });
    window.close();
}

// localStorage.setItem('searchData', JSON.stringify({
//     isSearching: false,
//     isWindowOpened: false,
//     searchWebsiteUrl: 'https://www.pracuj.pl/praca/react;kw/krakow;wp?rd=30'
// }));

// let searchData = JSON.parse(localStorage.getItem('searchData'));

// console.log(searchData);
// console.log(window.location.href===searchData.searchWebsiteUrl);
// if(!searchData.isWindowOpened){
//     window.open(searchData.searchWebsiteUrl);
//     searchData.isWindowOpened = true;
//     localStorage.setItem('searchData', searchData);
// }

// if(window.location.href===searchData.searchWebsiteUrl){

//     window.close(searchData.searchWebsiteUrl)
// }


