import PageHeader from "../components/PageHeader";

function AboutUsPage() {
  return (
    <div className="w-full flex_center flex-col mt-20">
      <div className="content_wrapper">
        <PageHeader title="About Us" />
        <p className="text-pretty mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="mt-20 bg-white px-5 py-10 w-full">
        <h1 className="text-center font-bold text-2xl">Our Vision & Mission</h1>
      </div>
    </div>
  );
}

export default AboutUsPage;
