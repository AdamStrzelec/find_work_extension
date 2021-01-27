function searchForPracujpl(){
    const offers = document.querySelectorAll('.offer');
    const offersArray = [];
        for(let i=0; i<offers.length; i++){
            if(offers[i].children[1].children[0].children[0].children[0].className==="offer-logo__empty"){
                offersArray.push({
                    offerName: offers[i].children[1].children[0].children[1].children[0].children[0].innerHTML,
                    offerUrl: offers[i].children[1].children[0].children[1].children[0].children[0].href,
                    imageUrl: 'data:image/jpeg;base64,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'  
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
            offers: offersArray.filter(offer => offer.offerUrl!==undefined)
        }, function(response) {
            if(response.info==='data fetched'){window.close()};
        }
    );
}

function searchForNofluffjobs(){
    const offers = document.querySelectorAll('.posting-list-item');
    const offersArray = [];
    for(let i=0; i<offers.length; i++){
        let name = offers[i].children[1].children[0].children[0].innerHTML;
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
