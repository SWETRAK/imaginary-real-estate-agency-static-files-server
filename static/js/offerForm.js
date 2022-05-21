document.getElementById("front_photo").onchange = () => {
    const frontImageInput = document.getElementById("front_photo");
    const frontImageLabel = document.getElementById("front_photo_label");
    if(frontImageInput.files.length > 0) {
        frontImageLabel.textContent = frontImageInput.files[0].name;
    } else {
        frontImageLabel.textContent = "Doesn't selected"
    }
}

document.getElementById("add_photo1").onchange = () => {
    const addImage1 = document.getElementById("add_photo1");
    const addImage1Label = document.getElementById("add_photo1_label");
    if(addImage1.files.length > 0) {
        addImage1Label.textContent = addImage1.files[0].name;
    } else {
        addImage1Label.textContent = "Doesn't selected";
    }
}

document.getElementById("add_photo2").onchange = () => {
    const addImage2 = document.getElementById("add_photo2");
    const addImage2Label = document.getElementById("add_photo2_label");
    if(addImage2.files.length > 0) {
        addImage2Label.textContent = addImage2.files[0].name;
    } else {
        addImage2Label.textContent = "Doesn't selected";
    }

}

document.getElementById("add_photo3").onchange = () => {
    const addImage3 = document.getElementById("add_photo3");
    const addImage3Label = document.getElementById("add_photo3_label");
    if(addImage3.files.length > 0) {
        addImage3Label.textContent = addImage3.files[0].name;
    } else {
        addImage3Label.textContent = "Doesn't selected";
    }

}

document.getElementById("add_photo4").onchange = () => {
    const addImage4 = document.getElementById("add_photo4");
    const addImage4Label = document.getElementById("add_photo4_label");
    if(addImage4.files.length > 0) {
        addImage4Label.textContent = addImage4.files[0].name;
    } else {
        addImage4Label.textContent = "Doesn't selected";
    }

}

document.getElementById("add_photo5").onchange = () => {
    const addImage5 = document.getElementById("add_photo5");
    const addImage5Label = document.getElementById("add_photo5_label");
    if(addImage5.files.length > 0) {
        addImage5Label.textContent = addImage5.files[0].name;
    } else {
        addImage5Label.textContent = "Doesn't selected";
    }
}

document.getElementById("submit_button").addEventListener("click", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const address = document.getElementById("address").value;
    const price = parseInt(document.getElementById("price").value);
    const area = parseInt(document.getElementById("area").value);
    const bedrooms = parseInt(document.getElementById("bedrooms").value);
    const bathrooms = parseFloat(document.getElementById("bathrooms").value);
    const description = document.getElementById("description").value;
    const email = document.getElementById("email").value;

    const terms = document.getElementById("terms").checked;


    const frontImageInput = document.getElementById("front_photo");
    const addImage1 = document.getElementById("add_photo1");
    const addImage2 = document.getElementById("add_photo2");
    const addImage3 = document.getElementById("add_photo3");
    const addImage4 = document.getElementById("add_photo4");
    const addImage5 = document.getElementById("add_photo5");

    if(isNaN(price) || isNaN(area) || isNaN(bedrooms) || isNaN(bathrooms) || title.length === 0 || address.length === 0 || description.length === 0 || email.length === 0 ) {
        notificationWarning("Inserted values are incorrect. Correct them and try again.");
        return;
    }

    if(terms === false) {
        notificationWarning("You must agree with privacy policy and with user terms");
        return;
    }

    // TODO: Add validation
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("email", email);
    formdata.append("address", address);
    formdata.append("price", price);
    formdata.append("area", area);
    formdata.append("bedrooms", bedrooms);
    formdata.append("bathrooms", bathrooms);
    formdata.append("description", description);
    formdata.append("terms", terms);

    if(frontImageInput.files.length === 0) {
        notificationWarning("Please select front offer file");
        return;
    }
    formdata.append("front_photo", frontImageInput.files[0], frontImageInput.files[0].name);

    if(addImage1.files.length === 1) {
        formdata.append("add_photo1", addImage1.files[0], addImage1.files[0].name);
    }

    if(addImage2.files.length === 1) {
        formdata.append("add_photo2", addImage2.files[0], addImage2.files[0].name);
    }

    if(addImage3.files.length === 1) {
        formdata.append("add_photo3", addImage3.files[0], addImage3.files[0].name);
    }

    if(addImage4.files.length === 1) {
        formdata.append("add_photo4", addImage4.files[0], addImage4.files[0].name);
    }

    if(addImage5.files.length === 1) {
        formdata.append("add_photo5", addImage5.files[0], addImage5.files[0].name);
    }

    let requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/api/v1/create", requestOptions)
        .then(response => response.text())
        .then(result => {
            // TODO: Sprawdzanie ciała result aby zobaczyć czy jest odpowiedni wynik requesta
            notificationSuccess("Success. Your offer is ready");
        })
        .catch(error => {
            notificationDanger("Ups. Something went wrong. Try later or consult with your network administrator");

        });

})


