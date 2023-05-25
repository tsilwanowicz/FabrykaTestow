const url = 'https://jsonplaceholder.typicode.com/posts'
const url2 = 'https://jsonplaceholder.typicode.com/posts/1'

describe('1st scenario', () => {
    it('should test placeholder API with POST', function () {

    cy.request(url).then((response) => {
        const body = JSON.stringify(response.body)
        expect(response.status).to.eq(200)
        cy.log(body)
    })

    cy.request(
        {
            method: 'POST',
            url: url,
            body: JSON.stringify({
                title: 'test',
                body: 'test2',
                userId: 1
            }),
            headers: {'Content-type': 'application/json'}
        }
        ).then((response) => {
            const body = JSON.stringify(response.body)
            cy.log(body)
        })
    })

    it('should test placeholder API with PUT', function () {

    cy.request(
        {
            method: 'PUT',
            url: url2,
            body: JSON.stringify({
                title: 'testdata1',
                body: 'testdata2',
                userId: 666
            }),
            headers: {'Content-type': 'application/json'}
        }
        ).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('testdata1')
            expect(response.body.body).to.eq('testdata2')
            expect(response.body.userId).to.eq(666)
        })
    })

    it('should test placeholder API with DELETE', function () {

    cy.request('DELETE', url2)
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.empty
        })
    })
    
})
