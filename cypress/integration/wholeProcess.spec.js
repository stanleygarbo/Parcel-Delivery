describe('Whole Process of the app',function(){
    it('visits the website and does the wole process',function(){

        //visits the website
        cy.visit('http://localhost:3000/')

        //selects employer mode
        cy.get('select').select('Employer')

        //clicks the post job link
        cy.contains('Post Job').click()

        //title
        cy.get('input').eq(0).type('deliver my couch')
        //pickup address
        cy.get('input').eq(1).type('123 street')
        //delivcery address
        cy.get('input').eq(2).type('321 street')
        //contact
        cy.get('input').eq(3).type('3213 321 1312')
        //price
        cy.get('input').eq(4).type(12)
        //isFragile checkbox
        cy.get('input').eq(5).check()
        //submit 
        cy.get('.post__job').click()

        //select 
        cy.get('select').select('Driver')
        //click available jobs link
        cy.contains('Available Jobs').click()
        //accept job
        cy.get('.accept__job').eq(0).click()
        //go back to driver dashboard
        cy.contains('Dashboard').click()
    })
})
