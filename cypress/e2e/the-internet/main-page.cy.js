import MainPage from "../../support/main-page"

context('Main Page', () => {
    const mainPage = new MainPage()

    beforeEach(() => {
        mainPage.open()
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
