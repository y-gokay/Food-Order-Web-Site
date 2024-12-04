const orderNotes = "Notlar buraya yazılacak";
const selectedMats = [];

describe("template spec", () => {
  //Sayfa ziyaret ediliyor
  it("should visit the home page", () => {
    cy.visit("http://localhost:5173");
  });
  //Sayfa ziyaret ediliyor ve home butonuna tıklanıyor
  it("should have a click event", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-cy="home-button"]').click();
    cy.url().should("include", "/order");
  });
  //Sayfa ziyaret ediliyor hamur ve boyut seçilmeden order butonuna tıklanıyor hata mesajı gösteriliyor
  it("should have a show error message if no size or crust is selected", () => {
    cy.visit("http://localhost:5173/order");
    cy.get('[data-cy="order-button"]').click();
    cy.get('[data-cy="err"]').should("have.length", 2);
  });

  //Sayfa ziyaret ediliyor hamur ve boyut seçilip order butonuna tıklanıyor success sayfasına yönlendiriliyor
  it("should have a send success order event without extra mats", () => {
    cy.visit("http://localhost:5173/order");
    cy.get('input[type="radio"][value="Orta (+5₺)"]').check();
    cy.get('select[name="hamur"]').select("Kalın (+5₺)");
    cy.get('[data-cy="order-button"]').click();
    cy.url().should("include", "/success");
  });
  //Sayfa ziyaret adet arttırılıp hamur ve boyut seçilip order butonuna tıklanıyor success sayfasına yönlendiriliyor
  it("should have a send success order event extra pizza", () => {
    cy.visit("http://localhost:5173/order");
    cy.get('input[type="radio"][value="Büyük (+10₺)"]').check();
    cy.get('select[name="hamur"]').select("İnce (+5₺)");
    cy.get('button[data-cy="up-count-button"]').click();
    cy.get('[data-cy="order-button"]').click();
    cy.url().should("include", "/success");
  });
  //Sayfa ziyaret ediliyor 10dan fazla materyal seçiliyor hata mesajı gösteriliyor
  it("should have a show error message if selected 10 mats", () => {
    cy.visit("http://localhost:5173/order");
    cy.get('input[type="radio"][value="Büyük (+10₺)"]').check();
    cy.get('select[name="hamur"]').select("İnce (+5₺)");
    for (let i = 0; i < 4; i++) {
      cy.get('button[data-cy="up-count-button"]').click();
    }
    for (let i = 0; i < 10; i++) {
      cy.get(`[data-cy="check-${i}"]`).check({ force: true });
    }
    cy.get('[data-cy="count"]').should("contain", "5");
    cy.get('[data-cy="err"]').should("have.length", 1);
  });
  //Sayfa ziyaret ediliyor 9 materyal seçiliyor sipariş adeti arttılıp not yazılıyor order butonuna tıklanıyor success sayfasına yönlendiriliyor
  it("should have a write a text after show success screen", () => {
    cy.visit("http://localhost:5173/order");
    cy.get('input[type="radio"][value="Büyük (+10₺)"]').check();
    cy.get('select[name="hamur"]').select("İnce (+5₺)");
    for (let i = 0; i < 4; i++) {
      cy.get('button[data-cy="up-count-button"]').click();
    }
    for (let i = 0; i < 9; i++) {
      cy.get(`[data-cy="check-${i}"]`).check({ force: true });
      selectedMats.push(`Malzeme ${i + 1}`);
    }
    cy.get('[data-cy="count"]').should("contain", "5");
    cy.get('[data-cy="nots-container"]').type(orderNotes);
    cy.get('[data-cy="nots-container"]').should("have.value", orderNotes);
    cy.get('[data-cy="order-button"]').click();
    cy.url().should("include", "/success");
  });
});
