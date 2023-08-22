const url = 'http://httpstat.us/'

class StatusCodesPage {

    checkStatusCode200() {
        cy.request(url + '200').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.eq('200 OK')
        })
    }

    checkStatusCode305() {
        cy.request({
            url: url + '305',
            followRedirect: false
        }).then((response) => {
            expect(response.status).to.eq(305)
            expect(response.body).to.eq('305 Use Proxy')
        })

    }

    checkStatusCode404() {
        cy.request({
            url: url + '404',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.eq('404 Not Found')
        })

    }

    checkStatusCode500() {
        cy.request({
            url: url + '500',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500)
            expect(response.body).to.eq('500 Internal Server Error')
        })

    }

}

export default StatusCodesPage;