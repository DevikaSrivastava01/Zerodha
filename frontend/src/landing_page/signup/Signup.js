import React from "react";

function Signup() {
  const handleSignup = async () => {
    try {
      // Dashboard Redirect
      window.location.href = "http://localhost:3001";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "70px auto",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <img
            src="/media/images/signup.png"
            alt="Signup"
            style={{
              width: "100%",
              maxWidth: "520px",
            }}
          />
        </div>

        {/* Right Side */}
        <div style={{ flex: "1", minWidth: "320px" }}>
          <h1
            style={{
              fontSize: "38px",
              color: "#424242",
              marginBottom: "15px",
              fontWeight: "500",
            }}
          >
            Open your account
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              lineHeight: "30px",
              marginBottom: "35px",
            }}
          >
            Start investing in stocks, mutual funds, ETFs and more with our
            modern trading platform.
          </p>

          <input
            type="text"
            placeholder="Full Name"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email Address"
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
          />

          <button
            onClick={handleSignup}
            style={{
              width: "100%",
              height: "50px",
              background: "#387ed1",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "17px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Sign up and Continue
          </button>

          <p
            style={{
              marginTop: "18px",
              color: "#888",
              fontSize: "14px",
              lineHeight: "24px",
            }}
          >
            By proceeding, you agree to our Terms & Conditions and Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  height: "48px",
  marginBottom: "18px",
  padding: "0 15px",
  fontSize: "16px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  outline: "none",
  boxSizing: "border-box",
};

export default Signup;