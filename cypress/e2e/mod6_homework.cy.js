const url = 'https://jsonplaceholder.typicode.com/posts/'

describe('Mod6 homework: HTTP method test', () => {

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
                    title: 'test1',
                    body: 'test2',
                    userId: 1
                }),
                headers: {'Content-type': 'application/json'}
            }
            ).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.title).to.eq('test1')
                expect(response.body.body).to.eq('test2')
                expect(response.body.userId).to.eq(1)
            })
    })

    it('should test placeholder API with PUT', function () {

        cy.request(
            {
                method: 'PUT',
                url: url + '1',
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

        cy.request('DELETE', url + '1')
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.be.empty
            })
        })
        
})
