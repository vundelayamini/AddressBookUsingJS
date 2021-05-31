class Address{
    constructor(f_name, l_name, address, city , state, zip, phoneNumber, email ){
        this.f_name=f_name;
        this.l_name=l_name;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }
        getDetails(){
            return (`First name:: ${this.f_name},\nlast name::${this.l_name}, \naddress::${this.Address}, \nCity name::${this.city}, \nState name::${this.state},\nzip ::${this.zip}, \nPhone NUmber::${this.phoneNumber}, \nemail::${this.email} `)
        }
    }
    
    let first=new Address("Yamini","Mahi", "Mahadevpura", "Banglore", "KA", 247615, 9014066209, "yaminivundela12@gmail.com");
    console.log("Welcome to my Address book by [YAMINI ] \n---------------------\n"+first.getDetails());
    
