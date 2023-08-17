describe("Check UI Elements", () => {
    it("Checking Radio Buttons", () => {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm") // auto testing learning page
        cy.get(':nth-child(33) > form').scrollIntoView();
        cy.get('[checked=""]').should('be.visible') // visibility of radio button
        cy.get(':nth-child(33) > form > :nth-child(5)').should('be.visible') // visibility of radio button
        cy.get(':nth-child(33) > form > :nth-child(7)').should('be.visible') // visibility of radio button

        // // Selecting radio buttons
        cy.wait(2000);
        cy.get(':nth-child(33) > form > :nth-child(5)').check().should('be.checked');
        cy.get(':nth-child(33) > form > :nth-child(3)').should('not.be.checked');
        cy.get(':nth-child(33) > form > :nth-child(7)').should('not.be.checked');

        cy.wait(2000);
        cy.get(':nth-child(33) > form > :nth-child(7)').check().should('be.checked');
        cy.get(':nth-child(33) > form > :nth-child(3)').should('not.be.checked');
        cy.get(':nth-child(33) > form > :nth-child(5)').should('not.be.checked');

    })

    it('Checking check boxes', () => {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm"); // auto testing learning page
        cy.get(':nth-child(17) > form').should('be.visible'); // visibility of the element
        cy.get('[value="red"]').check().should('be.checked'); // selecting single check-box - red

        cy.wait(2000);
        cy.get('[value="red"]').uncheck().should('not.be.checked'); // unselecting check-box
        
        // Check and uncheck all check-boxes
        cy.wait(2000);
        cy.get('input[type="checkbox"]').check().should('be.checked');
        cy.wait(2000);
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');
        
        // Check first and last check-boxes
        cy.wait(2000);
        cy.get('input[type="checkbox"]').first().check().should('be.checked');
        cy.wait(2000);
        cy.get('input[type="checkbox"]').last().check().should('be.checked');
    })

    // it('Checking dropdown with select', () => {
    //     cy.visit("https://www.zoho.com/commerce/free-demo.html");
        // cy.get("#zcf_address_country")
        // .select('Italy')
        // .should('have.value','Italy')

   
        it('Checking dropdown', () => {
            cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
            cy.get("#select2-billing_country-container").click();
            cy.get(".select2-search__field").type('Poland').type('{enter}');
            cy.get("#select2-billing_country-container")
            .should('have.text','Poland');
    
        })

        it('Checking dropdown with auto suggested dropdown', () => {
            cy.visit("https://www.wikipedia.org/")
            cy.get("#searchInput").type('Delhi');
            cy.wait(3000);
            cy.get(".suggestion-title").contains('Delhi University').click()
    
        })

        it('Checking dynamic dropdown', () => {
            cy.visit("https://www.google.com/")
            cy.get("#APjFqb").type('cypress automation') // Google searching
            cy.wait(3000);
            cy.get("div.wM6W7d>span").should('have.length',12) // check if 12 results are available
            cy.wait(3000);
            cy.get("div.wM6W7d>span").each(($el, index, $list) => { // choose what we need and select
                if($el.text() == 'cypress automation testing tool') {
                    cy.wrap($el).click()
                }
            })
            cy.get("#APjFqb").should('have.value','cypress automation testing tool') // checking the value
        })

        it(' Checking alert', () => {
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
            cy.get("button[onclick='jsAlert()']").click(); // click button
            
            cy.on('window:alert', (t) => {
                expect(t).to.contains('I am a JS Alert');
            });
    
            cy.get('#result').should('have.text','You successfully clicked an alert'); // result checking
        })

        it('Checking confirm alert - OK', () => {
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get(':nth-child(2) > button').click();
    
            cy.on('window:confirm', (t) => {
                expect(t).to.contains('I am a JS Confirm');
            })
    
            // Cypress automatically closed alert window by using 'OK' button - default
    
            cy.get('#result').should('have.text','You clicked: Ok')
        })
    it('Checking confirm alert - Cancel', () => {
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get(':nth-child(2) > button').click();
    
            cy.on('window:confirm', (t) => {
                expect(t).to.contains('I am a JS Confirm');
            })
    
            cy.on('window:confirm', ()=> false)
    
            // Cypress closed alert window by using 'Cancel' button 
    
            cy.get('#result').should('have.text','You clicked: Cancel')
        })

        it('Checking prompt alert', () => {
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.window().then((win) => {
                cy.stub(win,'prompt').returns('welcome');
            })
            cy.get("button[onclick='jsPrompt()']").click();
    
            // Cypress automatically closes prompt alert - it will use OK button - by default
    
            cy.get('#result').should('have.text','You entered: welcome')
        })
    
        it('Checking Authentificated Alert', () => {

            cy.visit("https://the-internet.herokuapp.com/basic_auth", 
            {auth: {username: 'admin', 
                    password: "admin"}})
            cy.get("p")
            .should('have.contain','Congratulations')
    
        })

        it('Checking handling child tabs', () => {
            cy.visit("https://the-internet.herokuapp.com/windows")
            cy.get('.example > a').invoke('removeAttr','target').click() // removing attr target=_blank
            cy.url().should('include','https://the-internet.herokuapp.com/windows/new') // if child page opened
            cy.wait(5000)
            cy.go('back') // back to parent page
        })

        it("Checking handling iframes", () => {
            cy.visit("https://the-internet.herokuapp.com/iframe");
            const iframe = cy.get("#mce_0_ifr")
            .its("0.contentDocument.body")
            .should("be.visible")
            .then(cy.wrap);
        
            iframe.clear().type("Welcome! {ctrl+a}"); // Clear window and type 'Welcome!'
            cy.get('[aria-label="Bold"]').click(); // Mark the text bold
          });

          it('Checking mouse hover', () => {
            cy.visit("https://demo.opencart.com/");
            cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('not.be.visible')
            cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
            cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('be.visible')
        })
    
        it('Checking mouse right click', () => {
            cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
            
            cy.get('.context-menu-one').rightclick();
            cy.get('.context-menu-icon-copy > span').should('be.visible');
    
        })
    
        
    
    
})
