import LoginPage from '../support/pages/LoginPage';

describe('Pengujian Fitur Login', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.bukaHalamanLogin();
  });

  it('Berhasil login dengan username dan password yang benar', () => {
    loginPage.isiUsername('Admin');
    loginPage.isiPassword('admin123');
    loginPage.klikLogin();
    loginPage.verifikasiBerhasilMasuk();
  });

  it('Gagal login karena username salah', () => {
    loginPage.isiUsername('UserSalah');
    loginPage.isiPassword('admin123');
    loginPage.klikLogin();
    cy.contains('Invalid credentials').should('be.visible');
  });

  it('Gagal login karena password salah', () => {
    loginPage.isiUsername('Admin');
    loginPage.isiPassword('salahpass');
    loginPage.klikLogin();
    cy.contains('Invalid credentials').should('be.visible');
  });

  it('Gagal login karena username dan password kosong', () => {
    loginPage.klikLogin();
    cy.get('.oxd-input-field-error-message').should('contain', 'Required');
  });

  it('Gagal login karena hanya isi username saja', () => {
    loginPage.isiUsername('Admin');
    loginPage.klikLogin();
    cy.get('.oxd-input-field-error-message').should('contain', 'Required');
  });
});
