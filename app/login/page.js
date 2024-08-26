// app/login/page.js
"use client";

import { signIn } from "next-auth/react";
import styles from './login.module.css';
import { CookiesProvider, useCookies } from 'react-cookie'
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(['token'])


  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { id: 1, name: "User", email: "user@example.com" };
    if ( e.target.username.value === "user" && e.target.password.value === "password") {
      setCookie('token', user, { path: '/' })
      router.push('/');
    }
    // try{
    //   await signIn("credentials", {
    //     redirect: true,
    //     callbackUrl: "/",
    //     username: e.target.username.value,
    //     password: e.target.password.value,
    //   });
    // }
    // catch(error){
    //   console.log(error)
    // }
    
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Login</h1>
      <form onSubmit={handleLogin}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
}
