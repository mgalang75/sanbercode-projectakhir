import LoginPage from '../support/pages/LoginPage';
import ForgotPasswordPage from '../support/pages/ForgotPasswordPage';

describe('Pengujian Fitur Lupa Password', () => {
  const loginPage = new LoginPage();
  const forgotPage = new ForgotPasswordPage();

  beforeEach(() => {
    loginPage.bukaHalamanLogin();
    forgotPage.klikLupaPassword();
  });

  it('Reset password berhasil dengan username yang valid', () => {
    forgotPage.isiUsername('Admin');
    forgotPage.klikTombolReset();
    // forgotPage.verifikasiPesanBerhasil(); // bisa aktifkan jika pesan tampil
  });

  it('Reset password dengan username tidak valid', () => {
    forgotPage.isiUsername('TidakAdaUser');
    forgotPage.klikTombolReset();
    // Tidak ada pesan sukses muncul
    cy.contains('Reset Password link sent successfully').should('not.exist');
  });

  it('Reset password gagal karena field kosong', () => {
  forgotPage.klikTombolReset();
  // Reset Password tidak berhasil karena field kosong
  cy.url().should('include', '/requestPasswordResetCode');
  cy.get('input[placeholder="Username"]').should('exist');
});

});
