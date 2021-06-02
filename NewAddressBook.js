//UC2-Valdation for the Contacts
//class
   class Address{
    //constructor
    constructor(...params ){
    this.f_name=params[0];
    this.l_name=params[1];
    this.address=params[2];
    this.city=params[3];
    this.state=params[4];
    this.zip=params[5];
    this.phoneNumber=params[6];
    this.email=params[7];
    
}
    //first name validation 
    get f_name(){return this._f_name}
    set f_name(f_name){
    let f_nameregx=RegExp('^[A-Z]{1}[a-z]{3,}$')
    if (f_nameregx.test(f_name))
    this._f_name=f_name;
    else throw ' first name is incorrect';
} 
    //laste name validaion
    get l_name(){return this._l_name}
    set l_name(l_name){
    let l_nameregx=RegExp('^[A-Z]{1}[a-z]{3,}$')
    if (l_nameregx.test(l_name))
    this._l_name=l_name;
    else throw ' last name is incorrect';
} 
    //address validation
    get address(){return this._address}
    set address(address){
    let addressregx=RegExp('^[A-Za-z" "]{4,}$')
    if (addressregx.test(address))
    this._address=address;
    else throw ' address is incorrect';
}
    //city validation
    get city(){return this._city}
    set city(city){
    let cityregx=RegExp('^[A-Za-z" "]{4,}$')
    if (cityregx.test(city))
    this._city=city;
    else throw ' city is incorrect';
}
    //state validation
    get state(){return this._state}
    set state(state){
    let stateregx=RegExp('^[A-Za-z" "]{2,}$')
    if (stateregx.test(state))
    this._state=state;
    else throw ' state is incorrect';
}
    //zip validation
    get zip(){return this._zip}
    set zip(zip){
    let zipregx=RegExp('^[0-9]{6,8}$');
    if (zipregx.test(zip))
    this._zip=zip;
    else throw ' zip is incorrect';
}
    //phone number validation
    get phoneNumber(){return this._phoneNumber}
    set phoneNumber(phoneNumber){
    let phoneNumberregx=RegExp('^[0-9]{10,12}$');
    if (phoneNumberregx.test(phoneNumber))
    this._phoneNumber=phoneNumber;
    else throw ' phone number is incorrect';
}
    //eamil validation
    get email(){return this._email}
    set email(email){
    let emailregx=RegExp('^[0-9A-Za-z]+([._+-][0-9A-Za-z]+)*[@][0-9A-Za-z]+.[a-zA-Z]{2,3}(.[a-zA-Z]{2})?$');
    if (emailregx.test(email))
    this._email=email;
    else throw ' email is incorrect';
}

    getDetails(){
        return (`First name:: ${this.f_name},\nlast name::${this.l_name}, \naddress::${this.address}, \nCity name::${this.city}, \nState name::${this.state},\nzip ::${this.zip}, \nPhone NUmber::${this.phoneNumber}, \nemail::${this.email} `)
    }
}
    console.log("Welcome to my Address book by [Yamini] \n-------------------------\n");
    let arry=[]; 
  try
   {
        arry[0]=new Address("Yamini","Mahi", "Mahadevpura", "Banglore", "KA", 247615, 9014066209, "yaminivundela12@gmail.com");
        //arry[1]=new Address("Jhanu","Mahi", "Marthalli", "Banglore", "KA", 247615, 9493499430, "mahi@gmail.com");
        arry.forEach(function(data){
        console.log("---------------------\n"+data.getDetails());
});}
catch(e){
    console.log(e);
}

//UC3-Create new address book
let addressBook1= new AddressBook("Pavani", "Somi", "Himayath Nagar", "Hyderabad", "Telangana", 550001, 9440969971,"Pavani12@gmail.com",);
let addressBookArray= new Array();
addressBookArray.push(addressBook);
addressBookArray.push(addressBook2);
addressBookArray.push(addressBook2);
console.log("\nNew Contact Added to Array " +addressBookArray);
//UC4-To find existing contact person using their name and edit it.
const prompt = require('prompt-sync')({sigint: true});

function editPerson() {
let userInput = prompt("Enter name to update Contact : ");

addressBookArray.forEach(addressBook => {
    if(addressBook.firstName == userInput) {
    console.log("1.PhoneNumber" + "\n2.Address" + "\n3.quit");
    var choice = prompt("Select any option to edit :")

    switch(choice) {
        case "1" :
            phoneNumber = prompt("Enter new Phone Number :");
            addressBook.phoneNumber = phoneNumber;
            console.log(addressBook.toString());
            console.log("Phone number updated")
        
            break;
        case "2" :
            city = prompt("Enter new city : ");
            addressBook.city = city;
            console.log(addressBook.toString());

            state = prompt("Enter new state : ");
            addressBook.state = state;
            console.log(addressBook.toString());

            zip = prompt("Enter new zip : ");
            addressBook.zip = zip;
            console.log(addressBook.toString());
            break;
        default :
            console.log("Incorrect choice");
            break;
    }  
}
}); 
}

editPerson();
//UC5-Edit the contact details
function deleteContact() {
    let userInput = prompt("Enter name to Delete Entry : ");
    addressBookArray.forEach(addressBook => {
        if(addressBook.firstName == userInput) {
            addressBookArray.splice(addressBookArray.indexOf(addressBook), 1)
            console.log("Record Deleted");
            console.log(addressBookArray);
        }
    });
}

deleteContact();
//UC6-Ability to find number of contacts in addressbook
function numberOfContact() {
    let totalCount =  addressBookArray.reduce(((totalCount) => { totalCount +=1; return totalCount; }), 0);
    console.log("Total Number of Contacts in AddressBook : " +totalCount);
}
//UC7-Duplicate entry for the same person in address book.
numberOfContact();
function duplicateEntry() {
    let userInput = prompt("Enter name to check Entry in addressbook : ");
    addressBookArray.forEach(addressBook => {
        if(addressBook.firstName == userInput) {
            console.log("Contact already exists in the book");
        } else {
            console.log("Contact not exists in the book");
        }
});
}

duplicateEntry();
//UC8-Search person in city or state
function searchbyCityOrState() {
    let inputCity = prompt("Enter city to search person : ");
    let inputState = prompt("Enter state to search person : ");
    addressBookArray.forEach(addressBook => {
        if(addressBook.city == inputCity || addressBook.state == inputState) {
            console.log("Person in city " +inputCity+ " and state " +inputState);
        }
    });
    addressBookArray.filter(contact => contact.city == inputCity)
    addressBookArray.filter(contact => contact.city == inputCity)
    addressBookArray.forEach(contact => console.log(addressBookArray));
}
searchbyCityOrState();
//UC9-View person in city or state in addressbook
function viewByCityOrState() {
    let inputCity = prompt("Enter city to search person : ");
    let inputState = prompt("Enter state to search person : ");
    if(addressBookArray.some(contact => contact.city == inputCity && contact.state == inputState)) {
        console.log("Person in city " +inputCity+ " and state " +inputState);
        }
        addressBookArray.filter(contact => contact.city == inputCity && contact.state == inputState)
        addressBookArray.forEach(contact => console.log(addressBookArray));
}
viewByCityOrState();
//UC10-Get number of contacts persons i.e count by city or state
function countByCity(city) {
    return addressBookArray.filter(contact => contact.city == city).reduce((count, contact) => count += 1, 0);
}
function countByState(state) {
    return addressBookArray.filter(contact => contact.state == state).reduce((count, contact) => count += 1, 0)
}
console.log("number of Person in city " +countByCity("Virar"));
console.log("number of Person in state " +countByState("Maharashtra"));