export default class ABTestPage {
    h1 = "h3:contains('A/B Test Variation 1')"
    h2 = 'h2'

    open() {
        cy.visit('/abtest')
    }
}
