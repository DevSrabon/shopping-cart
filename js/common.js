
function getTextElementById(ElementId) {
    const phoneTotalElement = document.getElementById(ElementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(ElementId, value) {
    const subTotalElement = document.getElementById(ElementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    // calculate total
    const currentPhoneTotal = getTextElementById('phone-total');
    const currsentCaseTotal = getTextElementById('case-total');
    const currnetSubTotal = currentPhoneTotal + currsentCaseTotal;
    setTextElementValueById('sub-total', currnetSubTotal);

    // calculate tax
    const taxAmountString = (currnetSubTotal  * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currnetSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);

}