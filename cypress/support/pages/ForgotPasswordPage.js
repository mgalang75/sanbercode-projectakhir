class ForgotPasswordPage {
  klikLupaPassword() {
    cy.contains('Forgot your password?').click();
  }

  isiUsername(username) {
    cy.get('input[placeholder="Username"]').type(username);
  }

  klikTombolReset() {
    cy.contains('Reset Password').click();
  }

  verifikasiPesanBerhasil() {
    cy.contains('Reset Password link sent successfully').should('be.visible');
  }
}

export default ForgotPasswordPage;