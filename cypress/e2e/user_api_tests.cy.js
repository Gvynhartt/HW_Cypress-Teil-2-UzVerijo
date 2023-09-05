import defUser from "../fixtures/user_template.json";

describe("testing user management functionality", () => {
  it("should create new user", () => {
    // создаём нового пользователя с данными из фикстур

    cy.createUserFromFixt(defUser.user1);
    // используем кастомную команду
    cy.request("GET", "/" + defUser.user1.username).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });

  it("should edit existing user", () => {

    cy.createUserFromFixt(defUser.user2);

    const user2edit = {
      "id": 1453,
      "username": "pistoshka228",
      "firstName": "Kirill",
      "lastName": "Pistodiev",
      "email": "petrograd@spb.su",
      "password": "5_10_5_4_5_10_5_yTpa",
      "phone": "123456789", // редактируем номер телефона
      "userStatus": 2077
    };

    cy.request("PUT", "/" + defUser.user2.username, user2edit).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });

  it("should delete specified user", () => {

    cy.createUserFromFixt(defUser.user3);

    cy.request("DELETE", "/" + defUser.user3.username).then((resp) => {
      expect(resp.status).to.eq(200);
    });

    cy.request({
      method: 'GET',
      url: "/" + defUser.user3.username,
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.eq(404); // пользователь не должен обнаруживаться
    })
  })
});
