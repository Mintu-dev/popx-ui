function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="container">
      <div className="profile-header">
        <h3>Account Settings</h3>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="avatar"
          />

          <div>
            <h4>{user.fullName || "Marry Doe"}</h4>
            <p>{user.email || "marrydoe@gmail.com"}</p>
          </div>
        </div>

        <p className="profile-text">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam.
        </p>
      </div>
    </div>
  );
}

export default Profile;
