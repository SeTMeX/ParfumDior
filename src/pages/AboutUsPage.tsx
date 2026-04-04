import Registration from "@/components/core/auth/Registration";
import LogIn from "@/components/core/auth/LogIn";

const AboutUsPage = () => {
  return (
    <div>
      <Registration show={false} onClose={() => {}} />
      <LogIn show={false} onClose={() => {}} />
    </div>
  );
};
export default AboutUsPage;
