import PageHeader from "../components/PageHeader";
import { Eye, Goal } from "lucide-react";
import img1 from "../assets/img/p1.jpg";

function AboutUsPage() {
  return (
    <div className="w-full flex_center flex-col mt-20">
      <div className="content_wrapper flex flex-col-reverse md:flex-row gap-10 justify-center items-center px-8">
        <div>
          <PageHeader title="Our Story" />
          <p className="text-justify mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div>
          <img src={img1} alt="aboutus-photo" loading="lazy" />
        </div>
      </div>

      <div className="mt-20 bg-white px-8 py-16 w-full flex justify-center">
        <div className="max-w-[75rem]">
          <h1 className="text-center font-bold text-2xl">
            Our Vision & Mission
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-[3rem] md:gap-[5rem]">
            <div className="flex justify-start items-center gap-8 mt-10">
              <div className="bg-slate-100 p-3 flex items-center justify-center rounded-lg shadow-md">
                <Eye size={35} />
              </div>
              <div>
                <h2 className="font-bold text-lg text-orange-500">
                  Our Vision
                </h2>
                <p className="mt-3 text-justify">
                  To be the most customer-centric company, offering products and
                  services that bring convenience and joy to everyday life.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-8 mt-8">
              <div className="bg-slate-100 p-3 flex items-center justify-center rounded-lg shadow-md">
                <Goal size={35} />
              </div>
              <div>
                <h2 className="font-bold text-lg text-orange-500">
                  Our Mission
                </h2>
                <p className="mt-3 text-justify">
                  To offer a diverse range of high-quality products at
                  competitive prices, ensuring an exceptional shopping
                  experience for every customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
