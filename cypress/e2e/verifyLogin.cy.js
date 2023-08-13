import loginPage from '../pages/loginPage.js'


describe('POM Test', () => {
    const username = 'pmeeraa@gmail.com'; //set your username or use environment variable 
    const password = 'Apple@2020'; //set your password or use environment variable 
    const nusername = "test@gmail.com";
    const npassword = "abc123";
    const uname = "Test@";
    const uname1 = "Testgmail.com"
    const uppername= "PMEERAA@GMAIL.COM";
    const iusername = "pmeera@gmail.com";
    const blank = "    ";
    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://www.triphobo.com/user/signin')
      cy.wait(10000)
   })
   
   it('Verify Login Elements exists on page', () => {

    const loginObj = new loginPage();
    loginObj.emailtxt()
    loginObj.passwordtxt()
    loginObj.loginbtn()
    
  })
    it('Verify user to login with Valid User Login - Regular User & successfully logs out', () => {
      const loginObj = new loginPage();
      loginObj.enterEmail(username)
      loginObj.enterPassword(password)
      loginObj.clickSubmit();
      loginObj.logout();
    })

    it('Verify Invalid User Login - Nonexistent User',() => {
      const loginObj = new loginPage();
      loginObj.enterEmail(nusername)
      loginObj.enterPassword(npassword)
      loginObj.clickSubmit();
      loginObj.error();
    }
    )

    it('Verify that email validation is present if user enters incorect email format',() => {
      const loginObj = new loginPage();
      loginObj.enterEmail(uname)
      loginObj.enterPassword(password)
      loginObj.clickSubmit();
      loginObj.error_fg();
    }
    )

    it('Verify that email validation is present if user enters incorect email format',() => {
      const loginObj = new loginPage();
      loginObj.enterEmail(uname1)
      loginObj.enterPassword(password)
      loginObj.clickSubmit();
      loginObj.error_fg();
    }
    )

    it('Verify that validation message gets displayed in case user leaves username field as blank',() => {
      const loginObj = new loginPage();
     // loginObj.enterEmail(uname1)
      loginObj.enterPassword(password)
      loginObj.clickSubmit();
      loginObj.erroremail();
    }
    )

    it('Verify that validation message gets displayed in case user leaves password field as blank',() => {
      const loginObj = new loginPage();
      loginObj.passwordtxt()
      loginObj.enterEmail(username)
     // loginObj.enterPassword(password)
      loginObj.clickSubmit();
      loginObj.errorpassword();
    }
    )



it('Verify Case sensitivity for email when enterted Email is in UpperCase',() => {
  const loginObj = new loginPage();
      loginObj.enterEmail(uppername)
      loginObj.enterPassword(password)
      loginObj.clickSubmit();
      loginObj.logout();
}
)

it('Verify case when user enters valid email id and invalid password.',() => {
  const loginObj = new loginPage();
  loginObj.enterEmail(uppername)
  loginObj.enterPassword(npassword)
  loginObj.clickSubmit();
  loginObj.errorincorrectpassword();
  
}
)

it('Verify case when user enters valid password but invalid email id.',() => {
  const loginObj = new loginPage();
  loginObj.enterEmail(iusername)
  loginObj.enterPassword(password)
  loginObj.clickSubmit();
  loginObj.invalidemail();
}
)


})