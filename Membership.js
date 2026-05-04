const FirstName = document.getElementById("I1")

const LastName = document.getElementById("I2")

const Age = document.getElementById("I3")

const Country = document.getElementById("I4")

const Email = document.getElementById("I5")

const MemberName = document.getElementById("I6")

const btn1 = document.getElementById("btn1")

const btn2 = document.getElementById("btn2")


const BACKEND_URL = 'http://localhost:5000/Membership'




btn2.addEventListener('click' , function(){


if((FirstName.value != "") && (LastName.value != "" ) && (Age.value)&&(Country.value != "") && (Email.value != "") &&(MemberName.value != "")){

    try{

        const response = fetch(BACKEND_URL, {

            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_FirstName: FirstName.value , _LastName: LastName.value, _Age: Age.value, _Country: Country.value,  _Email: Email.value , _MemberName: MemberName.value})
        

            })

       if(response.ok){

    alert("yes");
    }

    else{

       alert("no"); 
    }
}
    catch (error) {
     console.error('Error adding task:', error);

}

}

});
























