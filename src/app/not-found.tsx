import ErrorPage from "../components/sections/ErrorPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error",
}

export default function NotFound() {
  return (
    <ErrorPage />
  )
}
