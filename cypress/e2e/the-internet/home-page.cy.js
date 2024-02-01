import MainPage from "../../support/home-page"

context('Main Page', () => {
    const mainPage = new MainPage()

    beforeEach(() => {
        mainPage.open()
    })

    it.only('has needed elements', () => {
        cy.get(mainPage.h1).should('have.text', 'Welcome to the-internet')
        cy.get(mainPage.h2).should('have.text', 'Available Examples')
    })

    it('open all links', () => {
        cy.fixture('home-page-links.json').then((links) => {
            for (let link of links) {
                mainPage.openLinkWithName(link.linkName)
                cy.url().should('include', `${link.url}`)

                mainPage.open()
            }
        })
    })
})
