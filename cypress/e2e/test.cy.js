// Customize retry attempts for an individual test
describe('User sign-up and login', () => {
  // `it` test block with no custom configuration
  const username = 'pmeeraa@gmail.com'; //set your username or use environment variable 
  const password = 'Apple@2020'; //set your password or use environment variable 
  const nusername = "test@gmail.com";
  const npassword = "abc123";
  const uname = "Test@";
  const uname1 = "Testgmail.com"
  const uppername= "PMEERAA@GMAIL.COM";
  const iusername = "pmeera@gmail.com";
  it('Verify user should redirect to login page', () => {
    // ...
    cy.visit('https://www.triphobo.com/user/signin')
    cy.wait(10000)
  
  })
  it('Verify Login Elements exists on page', () => {
      cy.get('input[name="email"]').should('be.visible')
      cy.get('input[name="password"]').should('be.visible')
      cy.get('input[type="submit"]').contains('Login').should('be.visible')
      
    })

  // `it` test block with custom configuration
  it('Verify user to login with Valid User Login - Regular User & successfully logs out',() => {
      cy.get('input[name="email"]').type(username)
      cy.get('input[name="password"]').type(password)
      cy.get('input[type="submit"]').click()
      cy.get('div[id="js-top-nav-signin-out"]').should('be.visible')
      cy.get('div[id="js-top-nav-signin-out"]').within(() => {
        cy.get('ul').should('exist').within(()=>{
          cy.get('li').eq(1).should('exist').click()
          cy.get('li').eq(1).within(()=>{
            cy.get ('span[class="profile-caret"]').should('exist')
           
              cy.get('div[class="profile-dropdown act"]').should('exist')
              cy.get('div[class="profile-dropdown act"]').within(()=>{
                cy.get('ul').should('exist').within(()=>{
                  cy.get('li').eq(2).should('exist').click()
              })
            
            })
          })
        })
        
      })
    }
  )
 
 it('Verify Invalid User Login - Nonexistent User',() => {
  cy.visit('https://www.triphobo.com/user/signin')
  cy.wait(10000)
  cy.get('input[name="email"]').clear()
  cy.get('input[name="email"]').type(nusername)
  cy.get('input[name="password"]').type(npassword)
  cy.get('input[type="submit"]').contains('Login').should('be.visible')
  cy.get('input[type="submit"]').click()
  cy.get('div[class="form-group"]').should('exist').within(()=>{
    cy.get('span[class="error"]').contains('Password is incorrect.')
  })

}
)
//////////
/*it('Verifiy  Forgot Password - Valid Email',() => {
  cy.get('input[name="email"]').type(username)
  cy.get('input[name="password"]').type(password)
  cy.get('input[type="submit"]').contains('Login').should('be.visible')
}
)

it('Verifiy  Forgot Password - Invalid Email',() => {
  cy.get('input[name="email"]').type(username)
  cy.get('input[name="password"]').type(password)
  cy.get('input[type="submit"]').contains('Login').should('be.visible')
}
)*//////////

it('Verify that email validation is present if user enters incorect email format',() => {
  cy.get('input[name="email"]').clear()
  cy.get('input[name="email"]').type(uname)
  cy.get('input[name="password"]').type(password)
  cy.get('input[type="submit"]').contains('Login').click()
  cy.get('div[class="form-group has-error"]').should('exist').within(()=>{
    cy.get('span[class="error"]').contains('Invalid email.')
  })
}
)

it('Verify that email validation is present if user enters incorect email format',() => {
  cy.get('input[name="email"]').clear()
  cy.get('input[name="email"]').type(uname1)
  cy.get('input[name="password"]').type(password)
  cy.get('input[type="submit"]').contains('Login').click()
  cy.get('div[class="form-group has-error"]').should('exist').within(()=>{
    cy.get('span[class="error"]').contains('Invalid email.')
  })
}
)

///////
/*it('On use of tab key from keyboard proper navigation must occur for user to enter data and select buttons.',() => {
  cy.get('input[name="email"]').type(username)
  cy.get('input[name="password"]').type(password)
  cy.get('input[type="submit"]').contains('Login').should('be.visible')
}
)*////////////

it('Verify that validation message gets displayed in case user leaves username field as blank',() => {
  cy.get('input[name="email"]').clear()
  cy.get('input[name="password"]').type(password)
  cy.get('input[type="submit"]').contains('Login').should('be.visible')
  cy.get('input[type="submit"]').contains('Login').click()
  cy.get('div[class="form-group has-error"]').should('exist').within(()=>{
    cy.get('span[class="error"]').contains('Email is required.')
  })
}
)

it('Verify that validation message gets displayed in case user leaves password field as blank',() => {
  cy.get('input[name="email"]').clear()
  cy.get('input[name="email"]').type(username)
  //cy.get('input[name="password"]').type(password)
  cy.get('input[type="submit"]').contains('Login').should('be.visible')
  cy.get('input[type="submit"]').contains('Login').click()
  cy.get('div[class="form-group has-error"]').should('exist').within(()=>{
    cy.get('span[class="error"]').contains('Password is required.')
  })
}
)

it('Verify Case sensitivity for email when enterted Email is in UpperCase',() => {
  cy.get('input[name="email"]').clear()
  cy.get('input[name="email"]').type(uppername)
  cy.get('input[name="password"]').type(password)
  cy.get('input[type="submit"]').contains('Login').should('be.visible')
  cy.get('input[type="submit"]').contains('Login').click()
   cy.get('div[id="js-top-nav-signin-out"]').should('be.visible')
      cy.get('div[id="js-top-nav-signin-out"]').within(() => {
        cy.get('ul').should('exist').within(()=>{
          cy.get('li').eq(1).should('exist').click()
          cy.get('li').eq(1).within(()=>{
            cy.get ('span[class="profile-caret"]').should('exist')
           
              cy.get('div[class="profile-dropdown act"]').should('exist')
              cy.get('div[class="profile-dropdown act"]').within(()=>{
                cy.get('ul').should('exist').within(()=>{
                  cy.get('li').eq(2).should('exist').click()
              })
            
            })
          })
        })
        
      })
}
)


it('Verify case when user enters valid email id and invalid password.',() => {
  cy.visit('https://www.triphobo.com/user/signin')
    cy.wait(10000)
  cy.get('input[name="email"]').clear()
  cy.get('input[name="email"]').type(username)
  cy.get('input[name="password"]').type(npassword)
  cy.get('input[type="submit"]').contains('Login').should('be.visible')
  cy.get('input[type="submit"]').contains('Login').click()
  cy.get('div[class="form-group"]').should('exist').within(()=>{
    cy.get('span[class="error"]').contains('Password is incorrect.')
  })
}
)

it('Verify case when user enters valid password but invalid email id.',() => {
  cy.get('input[name="email"]').clear()
  cy.get('input[name="email"]').type(iusername)
  cy.get('input[name="password"]').type(password)
  cy.get('input[type="submit"]').contains('Login').should('be.visible')
  cy.get('input[type="submit"]').contains('Login').click()
  cy.get('div[class="form-group"]').should('exist').within(()=>{
    cy.get('span[class="error"]').contains('The Email / Password you entered is incorrect.')
  })
}
)


})