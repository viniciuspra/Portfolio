import ContactPageImg from "@/assets/contact-page.svg";
import ContactPageIllustration from "@/assets/contact-illustration.svg";

export function Contact() {
  return (
    <div
      className="flex min-h-screen relative items-center justify-center"
      style={{
        backgroundImage: `url(${ContactPageImg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
}
