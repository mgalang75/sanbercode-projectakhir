class LoginPage {
  bukaHalamanLogin() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  isiUsername(username) {
    cy.get('[name="username"]').type(username);
  }

  isiPassword(password) {
    cy.get('[name="password"]').type(password);
  }

  klikLogin() {
    cy.get('button[type="submit"]').click();
  }

  verifikasiBerhasilMasuk() {
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  }
}

export default LoginPage;