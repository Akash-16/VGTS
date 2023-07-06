export interface Checkout {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  lane: string;
  lane2: string;
  doorNum: string;
  city: string;
  pincode: string;
}

export interface CheckoutState {
  checkoutDetails: Checkout;
  error: string;
  isError: boolean;
  isLoading: boolean;
}
