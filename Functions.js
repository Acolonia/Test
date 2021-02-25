function storeAgenumber(Agenumber){
    sessionStorage.setItem('Agenumber', Agenumber);
}

function getAgenumber(){
   return sessionStorage.getItem('Agenumber');
}

const myAgenumber = 14;

storeAgenumber(myAgenumber);

getAgenumber();

const School = {
    schoolName: 'Jose Marti Stem Academy',
    city: 'Union City',
    state: 'NJ',
    country: 'United States',
    age: 2,
    getAddress: function() {
        return this.city + ', ' + this.state + ', ' + this.country 
    }
};

School.getAddress(); 