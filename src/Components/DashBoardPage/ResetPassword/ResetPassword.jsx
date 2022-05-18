import React from "react";
import useAuth from "../../LoginSignupPage/useAuthHook";
import styles from "./ResetPassword.module.css";
const ResetPassword = () => {
  const { resetPassword } = useAuth();
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h4>Password Reset</h4>
            <button onClick={resetPassword} className={styles.resetBtn}>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
