export default class MainPage {
    h1 = 'h1'
    h2 = 'h2'

    open() {
        cy.visit('/')
    }

    openLinkWithName(linkName) {
        cy.contains('a', `${linkName}`).click()
    }
}
