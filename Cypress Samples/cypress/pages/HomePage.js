export class HomePage {
    checkLogo() {
      cy.wait(5000);
      cy.get(".next-1uj3ovm > span > img").should("be.visible");
    }
    logOut() {
      cy.get("#open-navigation-menu-mobile").click();
      cy.get(":last-child > .next-bve2vl").click();
    }
  }
  