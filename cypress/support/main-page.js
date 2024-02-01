export default class MainPage {
    open() {
        cy.visit('/')
    }
    openLinkWithName(linkName) {
        cy.contains('a', `${linkName}`).click()
    }
}
