document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("standard-form");

    form.addEventListener("submit", function(event) {
        if (!validateMandatoryFields()) {
            event.preventDefault();
        }
        
        validateMandatoryFields();

        function validateMandatoryFields() {
            let mandatoryFields = document.querySelectorAll(".mandatory");
            console.log(mandatoryFields);
            let validFields = true;

            for (let i=0;i<mandatoryFields.length; i++) {
                let field = mandatoryFields[i];

                if (field.value = "" || field.value === null) {
                    console.log("This field is mandatory");
                    validFields = false;
                }
            }

            return validFields;
        }
    })
})

