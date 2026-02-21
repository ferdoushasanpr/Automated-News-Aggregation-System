import Navbar from "./Navbar";

export default function MainComponent({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
