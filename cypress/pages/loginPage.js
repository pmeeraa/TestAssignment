
class loginPage{


    elements ={

        emailtextbox : ()=> cy.get('input[name="email"]'),
        passwordtextbox : () => cy.get('input[name="password"]'),
        loginbutton : () => cy.get('input[type="submit"]'),
        signoutnavbar : () => cy.get('div[id="js-top-nav-signin-out"]'),
        ulid : () => cy.get('ul'),
        liid : () => cy.get('li').eq(1),
        profilecaret : () => cy.get ('span[class="profile-caret"]'),
        profiledropdown : () => cy.get('div[class="profile-dropdown act"]'),
        li_id : () => cy.get('li').eq(2),
        form_group : () => cy.get('div[class="form-group"]'),
        errormsg: () =>  cy.get('span[class="error"]'),
        form_group_has_error : () => cy.get('div[class="form-group has-error"]')


    }

    emailtxt(){
        this.elements.emailtextbox().clear();
        this.elements.emailtextbox().should('be.visible');
    }
    passwordtxt(){
        this.elements.emailtextbox().clear();
        this.elements.passwordtextbox().should('be.visible');
    }
    loginbtn(){
        this.elements.loginbutton().should('be.visible');
    }
    
    enterEmail(email)
   {
    this.elements.emailtextbox().clear();
    this.elements.emailtextbox().type(email);
   }

   enterPassword(password)
   {
    this.elements.passwordtextbox().clear();
    this.elements.passwordtextbox().type(password);
   }
  
   clickSubmit() {
    this.elements.loginbutton().click();
   }

   logout(){
    this.elements.signoutnavbar().should('be.visible')
    this.elements.signoutnavbar().within(() => {
        this.elements.ulid().should('exist').within(()=>{
          this.elements.liid().should('exist').click()
          this.elements.liid().within(()=>{
            this.elements.profilecaret().should('exist')
           
              this.elements.profiledropdown().should('exist')
              this.elements.profiledropdown().within(()=>{
                this.elements.ulid().should('exist').within(()=>{
                  this.elements.li_id().should('exist').click()
              })
            
            })
          })
        })
        
      })
   }

   error(){
    this.elements.form_group().should('exist')
    this.elements.form_group().should('exist').within(()=>{
        this.elements.errormsg().contains('Password is incorrect.')
      })
   }

   error_fg(){
    this.elements.form_group_has_error().should('exist').within(()=>{
        this.elements.errormsg().contains('Invalid email.')
      })
   }

   erroremail(){
      this.elements.form_group_has_error().should('exist')
      this.elements.form_group_has_error().within(()=>{
        this.elements.errormsg().contains('Email is required.')
      })
   }

   errorpassword(){
    this.elements.form_group_has_error().should('exist')
      this.elements.form_group_has_error().within(()=>{
        this.elements.errormsg().contains('Password is required.')
      })
   }

   errorincorrectpassword(){
    this.elements.form_group().should('exist')
       this.elements.form_group().within(()=>{
           this.elements.errormsg().contains('Password is incorrect.')
      })
   }

   invalidemail(){
    this.elements.form_group().should('exist')
      this.elements.form_group().within(()=>{
          this.elements.errormsg().contains('The Email / Password you entered is incorrect.')
      })
   }
}

export default loginPage;

