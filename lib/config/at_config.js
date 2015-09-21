AccountsTemplates.configure({
    //defaultLayout: 'emptyLayout',
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
    //enforceEmailVerification: true,
    //confirmPassword: true,
    //continuousValidation: false,
    //displayFormLabels: true,
    //forbidClientAccountCreation: false,
    //formValidationFeedback: true,
    //homeRoutePath: '/',
    //showAddRemoveServices: false,
    //showPlaceholders: true,
    negativeValidation: true,
    positiveValidation:true,
    negativeFeedback: false,
    positiveFeedback:true,
    onSubmitHook: loginRedirect,
    onLogoutHook: logoutRedirect,
    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',
    sendVerificationEmail: true,
    homeRoutePath: '/',
    redirectTimeout: 4000,
    defaultLayout: "master",
    defaultLayoutRegions: {
        nav: "side",
        //content: "sections" 
//        footer: "footer"
    },
    defaultContentRegion: "content"
});

function loginRedirect() {
  FlowRouter.redirect("/section/education");
}

function logoutRedirect() {
  FlowRouter.go("/sign-in");
}

//AccountsTemplates.configure({
//    // Behaviour
//    confirmPassword: true,
//    enablePasswordChange: true,
//    forbidClientAccountCreation: false,
//    overrideLoginErrors: true,
//    sendVerificationEmail: false,
//    lowercaseUsername: false,
//
//    // Appearance
//    showAddRemoveServices: false,
//    showForgotPasswordLink: false,
//    showLabels: true,
//    showPlaceholders: true,
//    showResendVerificationEmailLink: false,
//
//    // Client-side Validation
//    continuousValidation: false,
//    negativeFeedback: false,
//    negativeValidation: true,
//    positiveValidation: true,
//    positiveFeedback: true,
//    showValidating: true,
//
//    // Privacy Policy and Terms of Use
//    privacyUrl: 'privacy',
//    termsUrl: 'terms-of-use',
//
//    // Redirects
//    homeRoutePath: '/home',
//    redirectTimeout: 4000,
//
//    // Hooks
//    onLogoutHook: myLogoutFunc,
//    onSubmitHook: mySubmitFunc,
//    preSubmitHook: myPreSubmitFunc,
//
//    // Texts
//    texts: {
//      button: {
//          signUp: "Register Now!"
//      },
//      socialSignUp: "Register",
//      socialIcons: {
//          "meteor-developer": "fa fa-rocket"
//      },
//      title: {
//          forgotPwd: "Recover Your Password"
//      },
//    },
//});
