describe('todoist REST API tests', () => {
    const myAPIToken = '500ba5532656e59a43d05146afbe344afc7c9e00';
    it('Get users projects', () => {  
        const request = {
            url: "https://api.todoist.com/rest/v2/projects",
            headers: {Authorization: 'Bearer ' + myAPIToken},
            failOnStatusCode: false
        }
        cy.request(request).then((response) => {
            const status = response.status;
            assert.equal(200, status);
            assert.equal('My first project', response.body[1].name);
            cy.log(response);
          });
    })
    it('Adding a new project', () => {
        const bodyData = {
            name: 'My second new project'
        }
        const request = {
            method: 'POST',
            url: "https://api.todoist.com/rest/v2/projects",
            body: bodyData,
            headers: {Authorization: 'Bearer ' + myAPIToken},
            failOnStatusCode: false
        }
        cy.request(request).then((response) => {
            const status = response.status;
            assert.equal(200, status);
            assert.equal('My second new project', response.body.name);
            cy.log(response);
          });
    })
    it('Update a project', () => {
        const bodyData = {
            name: 'Things to buy'
        }
        const request = {
            method: 'POST',
            url: "https://api.todoist.com/rest/v2/projects",
            qs: {
                id: "2316880523"
            },
            body: bodyData,
            headers: {Authorization: 'Bearer ' + myAPIToken},
            failOnStatusCode: false
        }
        cy.request(request).then((response) => {
            const status = response.status;
            assert.equal(200, status);
            assert.equal('Things to buy', response.body.name);
            cy.log(response);
          });
    })
    it('Check headers', () => {
        const bodyData = {
            name: 'My third project'
        }
        const request = {
            method: 'POST',
            url: "https://api.todoist.com/rest/v2/projects/",
            body: bodyData,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + myAPIToken
            },
            failOnStatusCode: false
        }
        cy.request(request).then((response) => {
            assert.equal(200, response.status);
            assert.equal('application/json', response.requestHeaders['Content-Type']);
          });
    })
    it('Cookie', () => {
        const bodyData = {
            name: 'My fourth project'
        }
        const request = {
            method: 'POST',
            url: "https://api.todoist.com/rest/v2/projects/",
            body: bodyData,
            headers: {
                'Cookie': 'cookieName=cookieValue',
                Authorization: 'Bearer ' + myAPIToken
            },
            failOnStatusCode: false
        }
        cy.request(request).then((response) => {
            assert.equal(200, response.status);
            assert.equal('cookieName=cookieValue', response.requestHeaders['Cookie']);
          }); 
    })
    it('Create new task and check response time', () => {
        const bodyData = {
            content: 'Buy milk'
        }
        const request = {
            method: 'POST',
            url: "https://api.todoist.com/rest/v2/tasks",
            qs: {
                id: "2316880453"
            },
            body: bodyData,
            headers: {Authorization: 'Bearer ' + myAPIToken},
            failOnStatusCode: false
        }
        cy.request(request).then((response) => {
            const status = response.status;
            assert.equal(200, status);
            assert.equal('Buy milk', response.body.content);
            assert.isTrue(response.duration <= 2000);
          });
    })
})