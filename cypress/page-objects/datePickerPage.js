const datePicker = 'input[type="date"]'
const datePickerContent = '#datepicker-content'

class DatePickerPage {
    clickDate() {
        cy.get(datePicker).click()
        cy.get(datePickerContent).invoke()
    }

}
export default DatePickerPage;