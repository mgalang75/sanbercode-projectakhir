class DirectoryPage {
  klikMenuDirectory() {
    cy.get('.oxd-main-menu-item--name').contains('Directory').click();
  }

  verifikasiHalamanDirectory() {
    cy.contains('Directory').should('be.visible');
  }

  isiNamaYangDicari(nama) {
    cy.get('input[placeholder="Type for hints..."]').type(nama);
  }

  klikTombolSearch() {
    cy.get('button[type="submit"]').click();
  }

  verifikasiHasilMengandung(nama) {
    cy.get('.orangehrm-directory-card').should('contain', nama);
  }

}

export default DirectoryPage;