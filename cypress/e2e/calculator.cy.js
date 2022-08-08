describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have all working buttons', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '1234567890')
  })

  it('should have all working buttons', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
    
  })

  it('should be able to do multiple calcs', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
    
  })

  it('should be able to deal with outputs of negative', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2');
  })

  it('should be able to deal with outputs of decimals', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5');
  })

  it('should be able to deal with outputs of big numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8.888888888711111e+21');
  })

  it('should be able deal with dividing by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error pal');
  })


})