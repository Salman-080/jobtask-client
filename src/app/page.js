"use client";
// import Image from "next/image";
// import styles from "./page.module.css";

import Banner from "@/Components/Banner/Banner";
import Courses from "@/Components/Courses/Courses";
import Feedback from "@/Components/Feedback/Feedback";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Service from "@/Components/Service/Service";

export default function Home() {
  return (
    <div 
    // className={styles.page}
    >
    <Navbar></Navbar>
    <Banner></Banner>
    <Courses></Courses>
    <Service></Service>
    <Feedback></Feedback>

    <Footer></Footer>


    </div>
  );
}
