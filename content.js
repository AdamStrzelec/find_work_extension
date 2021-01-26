
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
        }, function(response) {
            if(response.info==='data fetched'){window.close()};
        }
    );
}

function searchForNofluffjobs(){
    window.onload
    const offers = document.querySelectorAll('.posting-list-item');
    const offersArray = [];
    for(let i=0; i<offers.length; i++){
        let name = offers[i].children[1].children[0].children[0].innerHTML;
        name = name.substring(0, name.length-42);
        offersArray.push({
            offerName: name,
            offerUrl: offers[i].href,
            imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAM1BMVEUTExP///9BQUG4uLh5eXkcHBwzMzNcXFyXl5coKCjt7e3Kysrb29tNTU1qamqoqKiIiIiPYqD1AAAEj0lEQVR4nO2baXuCMBCEA4IH4PH/f20fKcdubgVkbGe+1MCY3ZcEclBN8UdkCvMnRBA0EQRNBEETQdBEEDQRBE0EQRNB0EQQNBEETQRBE0HQRBA0EQRNBEETQdBEEDQRBE0EQRNB0EQQNBEETQRBE0HQRBA0EQRNBEETQdBEEDQRBE0EQdO/Aul/Z1LLQvDHKK5hOHDQtRXlb6Ecf8SS+pXL7XYpimoNkEIVPg5SlqZp1gEp9gapzEogxZ4g6SRfADn/FRBfniEQ++tZIKUdM53/eyCFiDAcqaTDnwIiSGODaMv9a0CmkKbu/5xHy2kOXCj7SyD2l+SBtUHqoeqTFeHrQMaqq+8FqVXVt4Ugp9/CdQeQ8T4Yqu7/dKPlnA9y6MutLBw+C2IaB8SaSt6kW399Biml4ffz9aNPLSMv0/T5KBx544gy6No+BjLfJsZcxo9dq7tAEqSbGvMyfe/DIMOzym4exREA8TTmpPPnQcxR5Nxa+YRScGx3faA1O4B47oZRx2wQ4xzYAUQVOrc9skCMXd4DxKjC0EvaoNsPMvXLtpaerUG+QgRBE0HQ9D9Byg0Uj7YRSLGNTk4gufSR801wEHvg8xguXwIic6j8jnMwKyiQOc1j0BO/YUBAiscQool4ov0LBWTI4pa2oINckxHqeG4oIP3O0inmSOSGApJ8Z+GONnuDVKP0jZ0IkBoWdwAJVGimDVRpqz3fWhfEB9aPBs6D53nwkAUit1fmUaPZHMQag2df65zIA5FFeUscMlbvS0BUtnL/Yd6GzAfp7AqPssLYi+l1QTrtVCSnHBC7/mIe7fNyex9E9iznmdJprxfkUlhHpcvXLhuB2GnEvJ4Utfq+4x0PU9PerUFu6mwKpHIDCKVXI2uB+EbdV0DungBK6VXi+yClynQRyMUbQesbQK7+CJYStz0CiLyhI6aNpvFGvq5eCiKudx32bAQiS/e4OQNE9JxzyOKLsjKIp47HiyCiirpLWlYFaaIhtNc/RVE7Jmrg8++lbAHSWMFiHE1wrhVtVbeLbQFyt7KwalGLvzoM8rCP62eT1TCxna1XQOQDt7JBGulUS73INF5lWv5eq6s8r2Ms/S9TX6XPC2fN8WZj45wIgchrcxhDnEJBF4HMtbr3RGGpe15Up2ubCEhjGceP/knLkq71zKB/npTunkd8G2pUEwHR63trqfbsY04ffRsklF78rOPMGEeeXSunqnVBhod+eOvcCp4DUiVdG4CMp+1/rHH0yAdJNkh0rZgAefirnB/2iTYZ91ayQJY0SAokXWWUZNojygCpy4Rh0YuejEsT612TKWfSuKhB3gKxVjgXr0n70iBPV+D1Ya9l7xB9A0Xn2rydQkVOgYyrkZyL8g6Ip0n8NgfF2sGJg+iph6evJt6N5IDoRmnDOwD2Jmk+yNWtS7Nk7Tb+z/9FQRZB0EQQNBEETQRBE0HQRBA0EQRNBEETQdBEEDQRBE0EQRNB0EQQNBEETQRBE0HQRBA0EQRNBEETQdBEEDQRBE0EQRNB0EQQNBEETQRBE0HQRBA0EQRNRdavO79BP14gIhIVtPavAAAAAElFTkSuQmCC"
        })
    }
    chrome.runtime.sendMessage(
        {
            pageName: 'nofluffjobs',
            offers: offersArray
        }, function(response) {
            if(response.info==='data fetched'){window.close()};
        }
    );
}


function searchOffers(){
    if(window.location.href.includes("www.pracuj.pl")){
        searchForPracujpl();
    }
    if(window.location.href.includes("nofluffjobs.com")){
        searchForNofluffjobs();
    }
    
}

searchOffers();



