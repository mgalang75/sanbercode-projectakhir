import LoginPage from '../support/pages/LoginPage';
import DirectoryPage from '../support/pages/DirectoryPage';

describe('Pengujian Fitur Menu Directory', () => {
  const loginPage = new LoginPage();
  const directoryPage = new DirectoryPage();

  beforeEach(() => {
    loginPage.bukaHalamanLogin();
    loginPage.isiUsername('Admin');
    loginPage.isiPassword('admin123');
    loginPage.klikLogin();
  });

  it('Berhasil membuka halaman Directory', () => {
    cy.intercept('GET', '**/directory/employees*').as('getDirectory');
    directoryPage.klikMenuDirectory();
    cy.wait('@getDirectory');
    directoryPage.verifikasiHalamanDirectory();
  });

  it('Form pencarian Directory tampil', () => {
    directoryPage.klikMenuDirectory();
    cy.get('input[placeholder="Type for hints..."]').should('be.visible');
  });

  it('Cari dengan field kosong tetap menampilkan hasil', () => {
    directoryPage.klikMenuDirectory();
    directoryPage.klikTombolSearch();
    cy.get('.orangehrm-directory-card').should('exist');
  });

  it('Cari nama "Peter Mac Anderson" dan hasil ditemukan', () => {
  directoryPage.klikMenuDirectory();
  // Intercept request pencarian
  cy.intercept('GET', '**/api/v2/directory/employees**').as('getDirectory');
  directoryPage.isiNamaYangDicari('Peter Mac Anderson');
  directoryPage.klikTombolSearch();
  cy.wait('@getDirectory');
  // Verifikasi nama muncul di hasil pencarian
  cy.get('.orangehrm-directory-card').should('contain.text', 'Peter Mac Anderson');
  });

});
