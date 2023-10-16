document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("surveyForm");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const popupResults = document.getElementById("popupResults");

    submitBtn.addEventListener("click", function () {
        
        const formData = new FormData(surveyForm);
        let resultsHTML = "<ul>";

        for (const [key, value] of formData.entries()) {
            resultsHTML += `<li><strong>${key}:</strong> ${value}</li>`;
        }

        resultsHTML += "</ul>";
        popupResults.innerHTML = resultsHTML;
        popup.style.display = "block";
    });

    resetBtn.addEventListener("click", function () {
        surveyForm.reset();
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
