AccountsTemplates.configure({
    //defaultLayout: 'emptyLayout',
    showForgotPasswordLink: true,
    //showLabels: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
    //enforceEmailVerification: true,
    //confirmPassword: true,
    //continuousValidation: false,
    //displayFormLabels: true,
    //forbidClientAccountCreation: false,
    //formValidationFeedback: true,
    homeRoutePath: '/section/about',
    //showAddRemoveServices: false,
    //showPlaceholders: true,
    //showResendVerificationEmailLink: false,
    negativeValidation: true,
    positiveValidation:true,
    negativeFeedback: false,
    positiveFeedback:true,
    //showValidating: true,
    //onSubmitHook: loginRedirect,
    //preSubmitHook: myPreSubmitFunc,
    onLogoutHook: logoutRedirect,
    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',
    //lowercaseUsername: false,
    sendVerificationEmail: true,
    homeRoutePath: '/',
    redirectTimeout: 4000,
    defaultLayout: "master",
    defaultLayoutRegions: {
        nav: "side",
        //content: "sections" 
        footer: "footer"
    },
    defaultContentRegion: "content"

    //// Texts
    //texts: {
    //  button: {
    //      signUp: "Register Now!"
    //  },
    //  socialSignUp: "Register",
    //  socialIcons: {
    //      "meteor-developer": "fa fa-rocket"
    //  },
    //  title: {
    //      forgotPwd: "Recover Your Password"
    //  },
    //},
});


function logoutRedirect() {
  FlowRouter.go("/sign-in");
}
