class NavbarCtrl {
  constructor (AuthService) {
    this.auth = AuthService
  }  
}

NavbarCtrl.$inject = ['AuthService']

export default NavbarCtrl
