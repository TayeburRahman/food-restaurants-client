import React, { useState } from "react";
import useCart from "../AddCart/useCartHook";
import useAuth from "../LoginSignupPage/useAuthHook";
import Confirm from "./Confirm";
import FormPaymentDetails from "./FormPaymentDetails";
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";

const UserForm = () => {
  const { isLoggedIn } = useAuth();
  const { cartItems } = useCart();
  const Bill = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  // console.log(Bill)
  const [userFrom, setUserForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    cardName: "",
    cardNumber: "",
    cvc: "",
    expireDate: "",
  });
  const [step, setStep] = useState(1);

  //* Process to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  //* Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  //* Handle fields changes
  const handleChange = (values) => {
    const {
      fullName,
      email,
      phone,
      address,
      city,
      cardName,
      cardNumber,
      cvc,
      expireDate,
    } = values;
    setUserForm({
      ...userFrom,
      fullName,
      email,
      phone,
      address,
      city,
      cardName,
      cardNumber,
      cvc,
      expireDate,
      Bill: Bill,
      cartItems,
      logInEmail: isLoggedIn.email,
      isLoggedInEmailName: isLoggedIn.displayName,
    });
  };

  // console.log(userFrom);

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={userFrom}
        />
      );

    case 2:
      return (
        <FormPaymentDetails
          nextStep={nextStep}
          handleChange={handleChange}
          prevStep={prevStep}
          values={userFrom}
        />
      );

    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={userFrom} />
      );

    case 4:
      return <Success />;

    default:
      return "";
  }
};

export default UserForm;
