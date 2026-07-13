import Image from "next/image";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const testimonialsData = [
  {
    name: "Hitesh Kale",
    title: "Head of Engineering @ 169Pi",
    testimonial:
      "Sumit consistently delivers scalable, production-ready frontend solutions with strong ownership and attention to quality. His ability to collaborate across teams and execute complex product requirements makes him a valuable engineer.",
    image: "/hitesh.png",
  },
  {
    name: "Ali Hussain",
    title: "Frontend Head @ 169Pi",
    testimonial:
      "Working with Sumit has been a great experience. He writes clean, maintainable React and Next.js code, takes ownership of challenging features, and consistently delivers pixel-perfect, high-performance user interfaces.",
    image: "/ali.png",
  },
  {
    name: "Muskan Jaiswal",
    title: "Product Designer @ 169Pi",
    testimonial:
      "Sumit transforms complex Figma designs into polished, responsive interfaces with exceptional attention to detail. His focus on user experience and collaboration makes the design-to-development process seamless.",
    image: "/muskan.png",
  },
  {
    name: "Deepanshu Verma",
    title: "AI Engineer @ 169Pi",
    testimonial:
      "Working with Sumit has always been seamless. He quickly understands complex AI workflows and transforms them into intuitive, user-friendly interfaces. His frontend expertise and collaborative approach make product development faster and more efficient.",
    image: "/deepanshu.png",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full px-[4%] py-16 scroll-mt-20 lg:px-[12%]"
    >
      <SectionHeading
        eyebrow="What people say"
        title="Testimonials"
        intro="Feedback from engineering leaders and teammates I've collaborated with on AI products."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonialsData.map(({ name, title, testimonial, image }, index) => (
          <Reveal
            as="figure"
            key={name}
            delay={index * 0.05}
            className="rounded-lg border border-gray-400 px-8 py-12 transition duration-300 hover:-translate-y-1 hover:bg-lightHover hover:shadow-black dark:border-white/40 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={image}
                alt={`Photo of ${name}`}
                className="h-16 w-16 rounded-full border-2 border-gray-300 object-cover"
                width={64}
                height={64}
                sizes="64px"
              />
            </div>

            <blockquote className="mb-4 text-sm text-gray-600 dark:text-white/80">
              &ldquo;{testimonial}&rdquo;
            </blockquote>

            <figcaption>
              <p className="text-lg text-gray-700 dark:text-white">{name}</p>
              <p className="text-sm text-gray-500 dark:text-white/80">
                {title}
              </p>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
