const auth = /* html */ `
<div class="row auth">
<form class="col s12 auth__form" id="auth__form">
  <div class="row">
    <div class="input-field col s12">
      <input
        id="email"
        type="email"
        class="validate"
        required
        autocomplete="on"
      >
      <label for="email">Email</label>
      <span class="helper-text" data-error="this must be a valid email" data-success=""></span>
    </div>
  </div>
  <div class="row">
    <div class="input-field col s12">
      <input
        id="password"
        type="password"
        class="validate"
        minlength="7"
        required
        autocomplete="on"
      >
      <label for="password">Password</label>
      <span class="helper-text" data-error="this is a required field" data-success=""></span>
    </div>
  </div>

  <button class="btn waves-effect waves-light auth__btn" type="submit" id="btnSsubmit">Log in
  <i class="material-icons right">send</i>
</button>
<div class="auth__alert">
  You try to login in system very often. Try again later.
</div>
</form>
</div>`;

export default auth;
