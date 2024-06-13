import React from "react";

const account1 = {
  userId: 1,
  password: 1111,
  edit: false,
};
const account2 = {
  userId: 2,
  password: 2222,
  edit: true,
};
const btnLogin = document.querySelector(".loginButton");
const inputLoginUsername = document.querySelector(".loginInput");
const inputLoginPass = document.querySelector(".loginPass");
const accounts = [account1, account2];
let currentAccount;
let user = false;

btnLogin.addEventListener("click", function(e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userId === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.password === Number(inputLoginPass.value)) {
    <div user={true}>
      <Home />
    </div>;
  }
});

export default function Users() {
  return <div>Users</div>;
}
