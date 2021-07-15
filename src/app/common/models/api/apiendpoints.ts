export const APIEndpoints = {
  User: {
    Register: 'User',
    Login: 'User/Login',
    Verify: 'User/Verify',
    ForgotPassword: 'User/ForgotPassword',
    ForgotPasswordConfirm: 'User/ForgotPassword/Confirm',
  },
  Products: {
    Get: 'Product',
  },
  Order: {
    Get: 'Order',
    Create: 'Order',
    GetByOrderId: 'Order/ByOrderId'
  },
  Orders: {
    Get: 'Order',
  },
};
