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